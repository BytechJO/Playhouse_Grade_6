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
function normalizeFillInAnswer(value, strictCase) {
  value = String(value == null ? "" : value);

  // case insensitive
  if (strictCase !== "yes") {
    value = value.toLowerCase();
  }

  // apostrophes المختلفة
  value = value.replace(/[’‘`´]/g, "'");

  // إزالة علامات الترقيم
  value = value.replace(/[.,!?;:"'()[\]{}<>\/\\\-–—_]/g, " ");

  // أكثر من space = space واحدة
  value = value.replace(/\s+/g, " ");

  // إزالة المسافات من البداية والنهاية
  value = value.trim();

  return value;
}

/*
  فحص الإجابات بدون ترتيب.

  كل user answer لازم يطابق answer مختلف.
  يعني ما بنسمح باستخدام نفس answer مرتين.
*/
function matchFillInAnswers(userAnswers, answerGroups) {
  var usedAnswers = new Array(answerGroups.length).fill(false);

  function matchUserAnswer(userIndex) {
    if (userIndex >= userAnswers.length) {
      return true;
    }

    for (var i = 0; i < answerGroups.length; i++) {
      if (usedAnswers[i]) {
        continue;
      }

      if (answerGroups[i].includes(userAnswers[userIndex])) {
        usedAnswers[i] = true;

        if (matchUserAnswer(userIndex + 1)) {
          return true;
        }

        usedAnswers[i] = false;
      }
    }

    return false;
  }

  return matchUserAnswer(0);
}
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

    // =====================================================
    // NORMALIZE
    // =====================================================

    function normalizeAnswer(value) {
      return (
        String(value || "")
          .toLowerCase()

          // apostrophes
          .replace(/[’‘`´]/g, "'")

          // punctuation
          .replace(/[.,!?;:"'()[\]{}<>\/\\\-–—_]/g, " ")

          // extra spaces
          .replace(/\s+/g, " ")

          // trim
          .trim()
      );
    }

    // =====================================================
    // BUILD ALL ACCEPTED ANSWERS
    // =====================================================

    var acceptedAnswers = [];

    for (var d = 0; d < ob.data_obj.questions.length; d++) {
      var questionData = ob.data_obj.questions[d];

      var mainAnswers = Array.isArray(questionData.answer)
        ? questionData.answer
        : [questionData.answer];

      var alternateAnswers = Array.isArray(questionData.alternateanswer)
        ? questionData.alternateanswer
        : [];

      for (var a = 0; a < mainAnswers.length; a++) {
        var answerGroup = [];

        var mainNormalized = normalizeAnswer(mainAnswers[a]);

        if (mainNormalized !== "") {
          answerGroup.push(mainNormalized);
        }

        // alternate answers
        if (alternateAnswers[a] && Array.isArray(alternateAnswers[a])) {
          for (var alt = 0; alt < alternateAnswers[a].length; alt++) {
            var altNormalized = normalizeAnswer(alternateAnswers[a][alt]);

            if (altNormalized !== "" && !answerGroup.includes(altNormalized)) {
              answerGroup.push(altNormalized);
            }
          }
        }

        acceptedAnswers.push(answerGroup);
      }
    }

    // =====================================================
    // TRACK USED ANSWERS
    // يمنع التكرار
    // =====================================================

    var usedAnswerIndexes = [];

    // =====================================================
    // CHECK EVERY INPUT
    // =====================================================

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var tick = elsQue[i].querySelector(".tick");

      var cross = elsQue[i].querySelector(".cross");

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      var input = elsQue[i].querySelector("input");

      if (!input) {
        continue;
      }

      var userAnswer = normalizeAnswer(input.value);

      var matchedIndex = -1;

      // =============================================
      // EMPTY
      // =============================================

      if (userAnswer === "") {
        resultArr[i] = 0;

        if (cross) {
          cross.style.display = "block";
        }

        continue;
      }

      // =============================================
      // FIND ANSWER IN ANY POSITION
      // =============================================

      for (var j = 0; j < acceptedAnswers.length; j++) {
        // already used?
        if (usedAnswerIndexes.includes(j)) {
          continue;
        }

        if (acceptedAnswers[j].includes(userAnswer)) {
          matchedIndex = j;

          break;
        }
      }

      // =============================================
      // CORRECT
      // =============================================

      if (matchedIndex !== -1) {
        usedAnswerIndexes.push(matchedIndex);

        resultArr[i] = 1;

        if (tick) {
          tick.style.display = "block";
        }

        if (cross) {
          cross.style.display = "none";
        }
      }

      // =============================================
      // WRONG / DUPLICATE
      // =============================================
      else {
        resultArr[i] = 0;

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "block";
        }
      }

      // =============================================
      // SHOW ICON
      // =============================================

      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      if (iconWrap) {
        iconWrap.style.display = "block";
      }
    }

    // =====================================================
    // ALL CORRECT?
    // =====================================================

    var allCorrect =
      resultArr.length === acceptedAnswers.length &&
      resultArr.every(function (value) {
        return value === 1;
      });

    showFeedback(true, allCorrect);

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
