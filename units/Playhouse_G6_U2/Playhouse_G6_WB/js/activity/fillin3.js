// ******************************************
// FillIn - Alternate Answers + Normalize
// ******************************************

window.FillIn = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  console.log("FillIn > ", $(".activity_area"));

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
  // =========================================================
  // INIT
  // =========================================================

  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },

  // =========================================================
  // LISTEN
  // =========================================================

  listen: function (ob) {
    var e = ob.activity_area;

    var inputs = e.querySelectorAll("input");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener(
        "input",

        function () {
          $(this).css("color", "black");

          var v = this.value;

          if ($(this).data("type") == "number") {
            if ($.isNumeric(v) === false) {
              this.value = this.value.replace(/\D/g, "");
            }
          }

          var checkBtn = document.getElementsByClassName("checkBtn")[0];

          var resetBtn = document.getElementsByClassName("resetBtn")[0];

          if (checkBtn) {
            checkBtn.classList.remove("disabled");
          }

          if (resetBtn) {
            resetBtn.classList.remove("disabled");
          }
        },
      );
    }
  },

  // =========================================================
  // NORMALIZE ANSWER
  // =========================================================

  normalizeAnswer: function (value, strictCase) {
    if (value == undefined || value == null) {
      return "";
    }

    value = String(value);

    // -----------------------------------------
    // Convert curly apostrophes / quotes
    // -----------------------------------------

    value = value.replace(/[‘’`´]/g, "'").replace(/[“”]/g, '"');

    // -----------------------------------------
    // Case insensitive
    // -----------------------------------------

    if (strictCase != "yes") {
      value = value.toLowerCase();
    }

    // -----------------------------------------
    // Normalize contractions
    // -----------------------------------------

    value = value
      .replace(/\bdoesn't\b/g, "does not")
      .replace(/\bdon't\b/g, "do not")
      .replace(/\bdidn't\b/g, "did not")
      .replace(/\bisn't\b/g, "is not")
      .replace(/\baren't\b/g, "are not")
      .replace(/\bwasn't\b/g, "was not")
      .replace(/\bweren't\b/g, "were not")
      .replace(/\bcan't\b/g, "cannot")
      .replace(/\bcouldn't\b/g, "could not")
      .replace(/\bwon't\b/g, "will not")
      .replace(/\bwouldn't\b/g, "would not");

    // -----------------------------------------
    // Remove punctuation
    //
    // accepts:
    // .
    // ,
    // ?
    // !
    // :
    // ;
    // quotes
    // brackets
    // dash
    // etc.
    // -----------------------------------------

    value = value.replace(/[.,!?;:"'()[\]{}\-–—_/\\]/g, " ");

    // -----------------------------------------
    // Collapse multiple spaces
    // -----------------------------------------

    value = value.replace(/\s+/g, " ");

    // -----------------------------------------
    // Trim beginning/end
    // -----------------------------------------

    value = value.trim();

    return value;
  },

  // =========================================================
  // GET ALL ACCEPTED ANSWERS
  // =========================================================

  getAcceptedAnswers: function (fDataObj, answerIndex) {
    var answers = [];

    // -----------------------------------------
    // Main answer
    // -----------------------------------------

    if (fDataObj.answer && fDataObj.answer[answerIndex] != undefined) {
      answers.push(fDataObj.answer[answerIndex]);
    }

    // -----------------------------------------
    // Alternate answers
    // -----------------------------------------

    if (
      fDataObj.alternateanswer &&
      fDataObj.alternateanswer[answerIndex] != undefined
    ) {
      var alternate = fDataObj.alternateanswer[answerIndex];

      if (Array.isArray(alternate)) {
        for (var a = 0; a < alternate.length; a++) {
          answers.push(alternate[a]);
        }
      } else {
        answers.push(alternate);
      }
    }

    return answers;
  },

  // =========================================================
  // CHECK ONE ANSWER
  // =========================================================

  isAcceptedAnswer: function (userAnswer, fDataObj, answerIndex) {
    var strictCase =
      fDataObj.strictcase != undefined && fDataObj.strictcase != null
        ? fDataObj.strictcase.toLowerCase()
        : "no";

    var normalizedUser = this.normalizeAnswer(userAnswer, strictCase);

    if (normalizedUser == "") {
      return false;
    }

    var acceptedAnswers = this.getAcceptedAnswers(fDataObj, answerIndex);

    for (var i = 0; i < acceptedAnswers.length; i++) {
      var normalizedCorrect = this.normalizeAnswer(
        acceptedAnswers[i],
        strictCase,
      );

      if (normalizedUser == normalizedCorrect) {
        return true;
      }
    }

    return false;
  },

  // =========================================================
  // VALIDATE
  // =========================================================

  validate: function () {
    var self = this;

    var ob = this.ob;

    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    var numOfFillIns = elsQue.length;

    var allCorrect = false;

    var resultArr = [];

    // =====================================================
    // QUESTIONS
    // =====================================================

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

      var inputBoxes = elsQue[i].querySelectorAll("input");

      var questionCorrect = true;

      // -----------------------------------------
      // Number of inputs must match answers
      // -----------------------------------------

      if (inputBoxes.length != fDataObj.answer.length) {
        questionCorrect = false;
      }

      // -----------------------------------------
      // Check each input
      // -----------------------------------------

      for (var a = 0; a < inputBoxes.length; a++) {
        var value = inputBoxes[a].value;

        if (!self.isAcceptedAnswer(value, fDataObj, a)) {
          questionCorrect = false;
        }
      }

      // =================================================
      // RESULT
      // =================================================

      if (questionCorrect) {
        resultArr[i] = 1;

        if (tick) {
          tick.style.display = "block";
        }

        if (fDataObj.audio != "" && fDataObj.audio != "no") {
          if (
            fDataObj.audioenable == "correct" &&
            elsQue[i].querySelectorAll(".audioIcon").length > 0
          ) {
            elsQue[i].querySelector(".audioIcon").classList.remove("disabled");
          }
        }
      } else {
        resultArr[i] = 0;

        if (cross) {
          cross.style.display = "block";
        }

        if (fDataObj.audio != "" && fDataObj.audio != "no") {
          if (
            fDataObj.audioenable == "correct" &&
            elsQue[i].querySelectorAll(".audioIcon").length > 0
          ) {
            elsQue[i].querySelector(".audioIcon").classList.add("disabled");
          }
        }
      }

      // =================================================
      // SHOW ICON
      // =================================================

      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      if (iconWrap) {
        iconWrap.style.display = "block";
      }
    }

    // =====================================================
    // ALL CORRECT
    // =====================================================

    allCorrect = resultArr.indexOf(0) === -1;

    console.log(resultArr, numOfFillIns);

    showFeedback(true, allCorrect);

    if (allCorrect) {
      var resetBtn = document.getElementsByClassName("resetBtn")[0];

      if (resetBtn) {
        resetBtn.classList.add("disabled");
      }
    }
  },

  // =========================================================
  // RESET
  // =========================================================

  reset: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

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

      // =================================================
      // AUDIO
      // =================================================

      if (fDataObj.audio != "" && fDataObj.audio != "no") {
        var audioIcon = elsQue[i].querySelector(".audioIcon");

        if (audioIcon) {
          if (fDataObj.audioenable == "correct") {
            audioIcon.classList.add("disabled");
          } else if (fDataObj.audioenable == "default") {
            audioIcon.classList.remove("disabled");
          }
        }
      }

      // =================================================
      // CLEAR INPUTS
      // =================================================

      var inputBoxes = elsQue[i].querySelectorAll("input");

      for (var a = 0; a < inputBoxes.length; a++) {
        if (
          inputBoxes[a].getAttribute("disabled") == null &&
          inputBoxes[a].getAttribute("readonly") == null
        ) {
          inputBoxes[a].value = "";

          inputBoxes[a].style.color = "black";
        }
      }
    }

    var checkBtn = document.getElementsByClassName("checkBtn")[0];

    if (checkBtn) {
      checkBtn.classList.add("disabled");
    }
  },

  // =========================================================
  // INITIAL SETTINGS
  // =========================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
