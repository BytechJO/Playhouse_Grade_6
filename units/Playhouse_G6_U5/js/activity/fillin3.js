// ******************************************
// FillIn - Puzzle Version
// ******************************************

window.FillIn = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    has_audio:
      obj[0].dataset.audio != undefined && obj[0].dataset.audio != null
        ? obj[0].dataset.audio
        : "no",

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

FillIn.prototype = {
  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },

  // ========================================
  // INPUT EVENTS
  // ========================================

  listen: function (ob) {
    var e = ob.activity_area;

    var inputs = e.querySelectorAll(".text_input_area");

    for (var i = 0; i < inputs.length; i++) {
      // --------------------------------
      // TYPE LETTER
      // --------------------------------

      inputs[i].addEventListener("input", function () {
        $(this).css("color", "black");

        // only one character
        if (this.value.length > 1) {
          this.value = this.value.charAt(0);
        }

        // number only
        if ($(this).data("type") == "number") {
          this.value = this.value.replace(/\D/g, "");
        }

        // convert to uppercase
        this.value = this.value.toUpperCase();

        // --------------------------------
        // NEXT INPUT IN SAME QUESTION
        // --------------------------------

        if (this.value.length === 1) {
          var currentQuestion = this.closest(".que");

          var questionInputs = Array.from(
            currentQuestion.querySelectorAll(".text_input_area"),
          );

          var currentIndex = questionInputs.indexOf(this);

          if (currentIndex !== -1 && currentIndex < questionInputs.length - 1) {
            questionInputs[currentIndex + 1].focus();
          }
        }

        // remove old tick/cross
        var question = this.closest(".que");

        if (question) {
          var tick = question.querySelector(".tick");

          var cross = question.querySelector(".cross");

          if (tick) {
            tick.style.display = "none";
          }

          if (cross) {
            cross.style.display = "none";
          }
        }

        document
          .getElementsByClassName("checkBtn")[0]
          .classList.remove("disabled");

        document
          .getElementsByClassName("resetBtn")[0]
          .classList.remove("disabled");
      });

      // --------------------------------
      // BACKSPACE
      // --------------------------------

      inputs[i].addEventListener("keydown", function (event) {
        if (event.key === "Backspace" && this.value === "") {
          var currentQuestion = this.closest(".que");

          var questionInputs = Array.from(
            currentQuestion.querySelectorAll(".text_input_area"),
          );

          var currentIndex = questionInputs.indexOf(this);

          if (currentIndex > 0) {
            questionInputs[currentIndex - 1].focus();
          }
        }
      });
    }
  },

  // ========================================
  // VALIDATE
  // ========================================

  validate: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    var resultArr = [];

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      var tick = elsQue[i].querySelector(".tick");

      var cross = elsQue[i].querySelector(".cross");

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      var inputBoxes = elsQue[i].querySelectorAll(".text_input_area");

      // --------------------------------
      // USER ANSWER
      // --------------------------------

      var userAnswer = "";

      var allFilled = true;

      for (var a = 0; a < inputBoxes.length; a++) {
        var value = inputBoxes[a].value.trim();

        if (value === "") {
          allFilled = false;
        }

        userAnswer += value;
      }

      // --------------------------------
      // CORRECT ANSWER
      // --------------------------------

      var correctAnswer = "";

      if (fDataObj.answer && fDataObj.answer.length > 0) {
        correctAnswer = fDataObj.answer[0];
      }

      // --------------------------------
      // CASE
      // --------------------------------

      var strictCase = (fDataObj.strictcase || "no").toLowerCase();

      if (strictCase === "no") {
        userAnswer = userAnswer.toLowerCase();

        correctAnswer = correctAnswer.toLowerCase();
      }

      // remove spaces
      userAnswer = userAnswer.replace(/\s/g, "");

      correctAnswer = correctAnswer.replace(/\s/g, "");

      // --------------------------------
      // RESULT
      // --------------------------------

      var isCorrect = allFilled && userAnswer === correctAnswer;

      if (isCorrect) {
        resultArr[i] = 1;

        if (tick) {
          tick.style.display = "block";
        }
      } else {
        resultArr[i] = 0;

        if (cross) {
          cross.style.display = "block";
        }
      }

      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      if (iconWrap) {
        iconWrap.style.display = "block";
      }
    }

    // ========================================
    // ALL CORRECT
    // ========================================

    var allCorrect = resultArr.every(function (item) {
      return item === 1;
    });

    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
    }
  },

  // ========================================
  // RESET
  // ========================================

  reset: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    for (var i = 0; i < elsQue.length; i++) {
      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      var tick = elsQue[i].querySelector(".tick");

      var cross = elsQue[i].querySelector(".cross");

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      var inputBoxes = elsQue[i].querySelectorAll(".text_input_area");

      for (var a = 0; a < inputBoxes.length; a++) {
        inputBoxes[a].value = "";

        inputBoxes[a].style.color = "black";
      }
    }

    document.getElementsByClassName("checkBtn")[0].classList.add("disabled");

    document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
  },

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
