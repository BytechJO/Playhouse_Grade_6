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

    var resultArr = [];
    var checkedQuestionsCount = 0;

    /* =====================================================
       NORMALIZE ANSWER
       - ignore case when strictcase = no
       - ignore spaces
       - ignore punctuation
    ===================================================== */
    function normalizeAnswer(value, strictCase) {
      if (value === undefined || value === null) {
        return "";
      }

      value = String(value).trim();

      if (strictCase !== "yes") {
        value = value.toLowerCase();
      }

      /* apostrophes */
      value = value.replace(/[’‘`]/g, "'");

      /* punctuation */
      value = value.replace(/[.,!?;:"'()]/g, "");

      /* all spaces */
      value = value.replace(/\s+/g, "");

      return value;
    }

    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      /* =====================================================
           IGNORE QUESTION COMPLETELY
        ===================================================== */

      if (fDataObj.ignorecheck === true) {
        var ignoredTick = elsQue[i].querySelector(".tick");
        var ignoredCross = elsQue[i].querySelector(".cross");
        var ignoredIconWrap = elsQue[i].querySelector(".icon_wrap");

        if (ignoredTick) {
          ignoredTick.style.display = "none";
        }

        if (ignoredCross) {
          ignoredCross.style.display = "none";
        }

        if (ignoredIconWrap) {
          ignoredIconWrap.style.display = "none";
        }

        /*
                مهم:
                ما بنضيف السؤال على resultArr
                وما بنزيد checkedQuestionsCount
            */

        continue;
      }

      checkedQuestionsCount++;

      var tick = elsQue[i].querySelector(".tick");
      var cross = elsQue[i].querySelector(".cross");

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      var _case =
        fDataObj.strictcase !== undefined && fDataObj.strictcase !== null
          ? String(fDataObj.strictcase).toLowerCase()
          : "no";

      /* =====================================================
           GET MAIN ANSWERS
        ===================================================== */

      var correctAnswers = [];

      if (Array.isArray(fDataObj.answer)) {
        correctAnswers = correctAnswers.concat(fDataObj.answer);
      } else if (
        fDataObj.answer !== undefined &&
        fDataObj.answer !== null &&
        fDataObj.answer !== ""
      ) {
        correctAnswers.push(fDataObj.answer);
      }

      /* =====================================================
           GET ALTERNATE ANSWERS
        ===================================================== */

      if (Array.isArray(fDataObj.alternateanswer)) {
        correctAnswers = correctAnswers.concat(fDataObj.alternateanswer);
      }

      /* remove empty answers */
      correctAnswers = correctAnswers.filter(function (ans) {
        return ans !== undefined && ans !== null && String(ans).trim() !== "";
      });

      /* =====================================================
           GET USER INPUT
        ===================================================== */

      var inputBoxes = elsQue[i].querySelectorAll("input");

      var userAnswer = "";

      if (inputBoxes.length > 0) {
        /*
                بما إن الأسئلة هون input واحد لكل سؤال
            */

        userAnswer = inputBoxes[0].value || "";
      }

      var normalizedUserAnswer = normalizeAnswer(userAnswer, _case);

      /* =====================================================
           CHECK AGAINST ALL POSSIBLE ANSWERS
        ===================================================== */

      var isCorrect = false;

      if (normalizedUserAnswer !== "") {
        for (var a = 0; a < correctAnswers.length; a++) {
          var normalizedCorrectAnswer = normalizeAnswer(
            correctAnswers[a],
            _case,
          );

          if (normalizedUserAnswer === normalizedCorrectAnswer) {
            isCorrect = true;

            break;
          }
        }
      }

      /* =====================================================
           RESULT
        ===================================================== */

      if (isCorrect) {
        resultArr.push(1);

        if (tick) {
          tick.style.display = "block";
        }

        if (fDataObj.audio !== "" && fDataObj.audio !== "no") {
          if (
            fDataObj.audioenable === "correct" &&
            elsQue[i].querySelectorAll(".audioIcon").length > 0
          ) {
            elsQue[i].querySelector(".audioIcon").classList.remove("disabled");
          }
        }
      } else {
        resultArr.push(0);

        if (cross) {
          cross.style.display = "block";
        }

        if (fDataObj.audio !== "" && fDataObj.audio !== "no") {
          if (
            fDataObj.audioenable === "correct" &&
            elsQue[i].querySelectorAll(".audioIcon").length > 0
          ) {
            elsQue[i].querySelector(".audioIcon").classList.add("disabled");
          }
        }
      }

      /* =====================================================
           ICON WRAP
        ===================================================== */

      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      if (iconWrap) {
        iconWrap.style.display = "block";
      }
    }

    /* =========================================================
       ALL CORRECT

       السؤال الثالث غير موجود أصلًا في resultArr
    ========================================================= */

    var allCorrect =
      checkedQuestionsCount > 0 &&
      resultArr.length === checkedQuestionsCount &&
      resultArr.every(function (result) {
        return result === 1;
      });

    console.log(
      "Checked Results:",
      resultArr,
      "Checked Questions:",
      checkedQuestionsCount,
      "All Correct:",
      allCorrect,
    );

    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
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
      if (fDataObj.ignorecheck === true) {
        var ignoredIconWrap = elsQue[i].querySelector(".icon_wrap");
        var ignoredTick = elsQue[i].querySelector(".tick");
        var ignoredCross = elsQue[i].querySelector(".cross");

        if (ignoredIconWrap) {
          ignoredIconWrap.style.display = "none";
        }

        if (ignoredTick) {
          ignoredTick.style.display = "none";
        }

        if (ignoredCross) {
          ignoredCross.style.display = "none";
        }

        var ignoredInputs = elsQue[i].querySelectorAll("input");

        for (var ig = 0; ig < ignoredInputs.length; ig++) {
          if (
            ignoredInputs[ig].getAttribute("disabled") == null &&
            ignoredInputs[ig].getAttribute("readonly") == null
          ) {
            ignoredInputs[ig].value = "";
            ignoredInputs[ig].style.color = "black";
          }
        }

        continue;
      }
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
