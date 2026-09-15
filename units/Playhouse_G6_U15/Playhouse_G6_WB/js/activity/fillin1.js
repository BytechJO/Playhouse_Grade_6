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

    function normalize(value) {
      return String(value || "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "")
        .replace(/[.,!?;:'"]/g, "");
    }

    function updateUsedOptions() {
      // شيل كل الخطوط أول
      $(".word_option_item").removeClass("option_used");

      var usedAnswers = [];

      // كل الكلمات المكتوبة حاليًا
      $(e)
        .find(".que input")
        .each(function () {
          var value = normalize($(this).val());

          if (value !== "" && usedAnswers.indexOf(value) === -1) {
            usedAnswers.push(value);
          }
        });

      // مر على جميع الإجابات الصحيحة
      ob.data_obj.questions.forEach(function (question) {
        var correctAnswer = normalize(question.answer[0]);

        // إذا الطالب استخدم الكلمة
        if (
          usedAnswers.indexOf(correctAnswer) !== -1 &&
          question.parts != undefined
        ) {
          question.parts.forEach(function (part) {
            $(".word_option_item")
              .filter(function () {
                return (
                  $(this).attr("data-option-value").toLowerCase() ===
                  part.toLowerCase()
                );
              })
              .addClass("option_used");
          });
        }
      });
    }

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        $(this).css("color", "black");

        var v = this.value;

        if ($(this).data("type") == "number") {
          if ($.isNumeric(v) === false) {
            this.value = this.value.replace(/\D/g, "");
          }
        }

        // تحديث الكلمات المستخدمة
        updateUsedOptions();

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

    function normalize(value) {
      return (
        String(value || "")
          .toLowerCase()
          .trim()

          // تجاهل المسافات
          .replace(/\s+/g, "")

          // تجاهل punctuation
          .replace(/[.,!?;:'"]/g, "")
      );
    }

    // =====================================================
    // ALL CORRECT ANSWERS
    // =====================================================

    var correctAnswers = [];

    ob.data_obj.questions.forEach(function (question) {
      if (question.answer && question.answer.length > 0) {
        correctAnswers.push(normalize(question.answer[0]));
      }

      // Alternate answers
      if (question.alternateanswer && question.alternateanswer[0]) {
        question.alternateanswer[0].forEach(function (alt) {
          var cleanAlt = normalize(alt);

          if (cleanAlt !== "" && correctAnswers.indexOf(cleanAlt) === -1) {
            correctAnswers.push(cleanAlt);
          }
        });
      }
    });

    // =====================================================
    // USER ANSWERS
    // =====================================================

    var alreadyUsed = [];

    for (var i = 0; i < elsQue.length; i++) {
      var tick = elsQue[i].querySelector(".tick");

      var cross = elsQue[i].querySelector(".cross");

      var iconWrap = elsQue[i].querySelector(".icon_wrap");

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

      var userAnswer = normalize(input.value);

      var isCorrect = false;

      // =================================================
      // must:
      // 1. not empty
      // 2. exist in answers
      // 3. NOT already used
      // =================================================

      if (
        userAnswer !== "" &&
        correctAnswers.indexOf(userAnswer) !== -1 &&
        alreadyUsed.indexOf(userAnswer) === -1
      ) {
        isCorrect = true;

        alreadyUsed.push(userAnswer);
      }

      // =================================================
      // RESULT
      // =================================================

      if (isCorrect) {
        resultArr.push(1);

        if (tick) {
          tick.style.display = "block";
        }
      } else {
        resultArr.push(0);

        if (cross) {
          cross.style.display = "block";
        }
      }

      if (iconWrap) {
        iconWrap.style.display = "block";
      }
    }

    // =====================================================
    // ALL CORRECT
    // =====================================================

    var allCorrect =
      resultArr.length === ob.data_obj.questions.length &&
      resultArr.every(function (result) {
        return result === 1;
      }) &&
      alreadyUsed.length === ob.data_obj.questions.length;

    console.log("Results:", resultArr);

    console.log("Used answers:", alreadyUsed);

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
