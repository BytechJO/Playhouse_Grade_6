//  ****************************************** //
//  FillIn - Version no: 1
//  Date updated - June 3, 2020
//  ****************************************** //
window.FillIn = function (obj, dataObj) {
  ob = obj[0].getElementsByClassName("options");
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
  init: function (ob) {
    this.ob = ob;
    // this.reset();
    this.listen(ob);
  },
  listen: function (ob) {
    var e = ob.activity_area;
    var inputs = e.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        $(this).css("color", "black");
        console.log($(this).data("type"));
        var v = this.value;
        if ($(this).data("type") == "number") {
          if ($.isNumeric(v) === false) {
            this.value = this.value.replace(/\D/g, "");
          }
        }
        document
          .getElementsByClassName("checkBtn")[0]
          .classList.remove("disabled");
        document
          .getElementsByClassName("resetBtn")[0]
          .classList.remove("disabled");
      });
    }
  },

  validate: function () {
    var ob = this.ob;
    var e = ob.activity_area;
    var elsQue = e.querySelectorAll(".que");
    var numOfFillIns = elsQue.length;

    var resultArr = [];

    // =========================================================
    // NORMALIZE ANSWER
    // =========================================================
    function normalizeAnswer(value, strictCase) {
      if (value == undefined || value == null) {
        return "";
      }

      value = String(value);

      // -----------------------------------------------------
      // Normalize special apostrophes / quotes / dashes
      // -----------------------------------------------------
      value = value
        .replace(/[’‘`´]/g, "'")
        .replace(/[“”]/g, '"')
        .replace(/[–—]/g, "-");

      // -----------------------------------------------------
      // Remove ALL punctuation and symbols
      //
      // Examples removed:
      // . , ? ! ' " : ; - ( ) [ ] { } / \ @ # $ % & *
      //
      // Letters + numbers + spaces remain
      // -----------------------------------------------------
      value = value.replace(/[^\p{L}\p{N}\s]/gu, "");

      // -----------------------------------------------------
      // Remove extra spaces
      // -----------------------------------------------------
      value = value.replace(/\s+/g, " ").trim();

      // -----------------------------------------------------
      // Ignore uppercase / lowercase
      // -----------------------------------------------------
      if (strictCase !== "yes") {
        value = value.toLowerCase();
      }

      return value;
    }

    // =========================================================
    // ADD ANSWERS RECURSIVELY
    // Supports normal arrays and nested alternateanswer arrays
    // =========================================================
    function addAnswers(targetArray, source) {
      if (source == undefined || source == null) {
        return;
      }

      if (Array.isArray(source)) {
        for (var i = 0; i < source.length; i++) {
          addAnswers(targetArray, source[i]);
        }
      } else {
        var value = String(source).trim();

        if (value !== "") {
          targetArray.push(value);
        }
      }
    }

    // =========================================================
    // QUESTIONS LOOP
    // =========================================================
    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var currentQuestion = elsQue[i];

      var fIndx = parseInt(currentQuestion.dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      // =====================================================
      // ICONS
      // =====================================================
      var tick = currentQuestion.querySelector(".tick");
      var cross = currentQuestion.querySelector(".cross");

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      // =====================================================
      // STRICT CASE
      // =====================================================
      var _case = "no";

      if (fDataObj.strictcase != undefined && fDataObj.strictcase != null) {
        _case = String(fDataObj.strictcase).toLowerCase();
      }

      // =====================================================
      // GET ALL CORRECT ANSWERS
      //
      // answer + alternateanswer
      // =====================================================
      var correctAnswers = [];

      addAnswers(correctAnswers, fDataObj.answer);

      addAnswers(correctAnswers, fDataObj.alternateanswer);

      // =====================================================
      // NORMALIZE ALL CORRECT ANSWERS ONCE
      // =====================================================
      var normalizedCorrectAnswers = [];

      for (var c = 0; c < correctAnswers.length; c++) {
        var normalizedCorrect = normalizeAnswer(correctAnswers[c], _case);

        if (
          normalizedCorrect !== "" &&
          normalizedCorrectAnswers.indexOf(normalizedCorrect) === -1
        ) {
          normalizedCorrectAnswers.push(normalizedCorrect);
        }
      }

      // =====================================================
      // INPUT BOXES
      // =====================================================
      var inputBoxes = currentQuestion.querySelectorAll("input");

      var editableInputs = [];

      for (var a = 0; a < inputBoxes.length; a++) {
        var isDisabled = inputBoxes[a].getAttribute("disabled") != null;

        var isReadonly = inputBoxes[a].getAttribute("readonly") != null;

        if (!isDisabled && !isReadonly) {
          editableInputs.push(inputBoxes[a]);
        }
      }

      // =====================================================
      // QUESTION VALIDATION
      // =====================================================
      var questionCorrect = true;

      // no editable input
      if (editableInputs.length === 0) {
        questionCorrect = false;
      }

      // =====================================================
      // CHECK EACH INPUT
      // =====================================================
      for (var u = 0; u < editableInputs.length; u++) {
        var studentRawAnswer = editableInputs[u].value;

        var studentAnswer = normalizeAnswer(studentRawAnswer, _case);

        // Empty answer
        if (studentAnswer === "") {
          questionCorrect = false;

          continue;
        }

        // =================================================
        // CHECK AGAINST MAIN + ALTERNATE ANSWERS
        // =================================================
        var answerMatched = false;

        for (
          var ansIndex = 0;
          ansIndex < normalizedCorrectAnswers.length;
          ansIndex++
        ) {
          if (studentAnswer === normalizedCorrectAnswers[ansIndex]) {
            answerMatched = true;

            break;
          }
        }

        if (!answerMatched) {
          questionCorrect = false;
        }
      }

      // =====================================================
      // SHOW ICON
      // =====================================================
      currentQuestion.dataset.showIcon = "true";

      // =====================================================
      // CORRECT
      // =====================================================
      if (questionCorrect) {
        resultArr[i] = 1;

        if (tick) {
          tick.style.display = "block";
        }

        if (fDataObj.audio != "" && fDataObj.audio != "no") {
          var audioIcon = currentQuestion.querySelector(".audioIcon");

          if (fDataObj.audioenable == "correct" && audioIcon) {
            audioIcon.classList.remove("disabled");
          }
        }

        // =====================================================
        // WRONG
        // =====================================================
      } else {
        resultArr[i] = 0;

        if (cross) {
          cross.style.display = "block";
        }

        if (fDataObj.audio != "" && fDataObj.audio != "no") {
          var audioIcon = currentQuestion.querySelector(".audioIcon");

          if (fDataObj.audioenable == "correct" && audioIcon) {
            audioIcon.classList.add("disabled");
          }
        }
      }

      // =====================================================
      // ICON WRAP
      // =====================================================
      var iconWrap = currentQuestion.querySelector(".icon_wrap");

      if (iconWrap) {
        if (currentQuestion.dataset.showIcon == "true") {
          iconWrap.style.display = "block";
        }
      }
    }

    // =========================================================
    // CHECK IF ALL QUESTIONS ARE CORRECT
    // =========================================================
    var allCorrect = resultArr.every(function (result) {
      return result === 1;
    });

    console.log(
      "FillIn validation result:",
      resultArr,
      "All correct:",
      allCorrect,
    );

    // =========================================================
    // FEEDBACK
    // =========================================================
    showFeedback(true, allCorrect);

    // =========================================================
    // DISABLE RESET IF ALL CORRECT
    // =========================================================
    if (allCorrect) {
      var resetBtn = document.getElementsByClassName("resetBtn")[0];

      if (resetBtn) {
        resetBtn.classList.add("disabled");
      }
    }
  },
  reset: function () {
    var ob = this.ob;
    var e = ob.activity_area;
    var elsQue = e.querySelectorAll(".que");
    // console.log('reset function >> ', elsQue.length, (ob.data_obj));
    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno);
      var fDataObj = ob.data_obj.questions[fIndx - 1];
      elsQue[i].querySelector(".icon_wrap").style.display = "none";
      elsQue[i].querySelector(".tick").style.display = "none";
      elsQue[i].querySelector(".cross").style.display = "none";
      // console.log('reset function >> ', fIndx, ((ob.data_obj).questions[fIndx-1]));
      if (fDataObj.audio != "" && fDataObj.audio != "no") {
        if (elsQue[i].querySelectorAll(".audioIcon").length > 0) {
          if (fDataObj.audioenable == "correct") {
            elsQue[i].querySelector(".audioIcon").style.display = "block";
            elsQue[i].querySelector(".audioIcon").classList.add("disabled");
          } else if (fDataObj.audioenable == "default") {
            elsQue[i].querySelector(".audioIcon").style.display = "block";
            elsQue[i].querySelector(".audioIcon").classList.remove("disabled");
          }
        }
      } else {
        if (elsQue[i].querySelectorAll(".audioIcon").length > 0) {
          // (elsQue[i].querySelector('.audioIcon')).style.display = 'none';
        }
      }
      var inputBoxes = elsQue[i].querySelectorAll("input");
      if (inputBoxes.length > 0) {
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
    }
    document.getElementsByClassName("checkBtn")[0].classList.add("disabled");
  },
  initialSettings: function () {
    this.reset();
    initialSettingsDone(1);
  },
};
