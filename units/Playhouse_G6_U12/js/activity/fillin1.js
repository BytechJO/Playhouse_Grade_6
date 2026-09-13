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

    // =====================================================
    // Normalize
    // =====================================================
    function normalizeAnswer(value, strictCase) {
      if (value == undefined || value == null) {
        return "";
      }

      value = String(value);

      // remove beginning/end spaces
      value = value.trim();

      // case insensitive
      if (strictCase !== "yes") {
        value = value.toLowerCase();
      }

      // normalize apostrophes
      value = value.replace(/[‘’´`]/g, "'");

      // remove ALL punctuation
      // comma . question mark ! colon ; quotes brackets hyphens etc.
      value = value.replace(/[.,!?;:'"“”‘’()[\]{}\-–—_/\\]/g, "");

      // remove ALL spaces
      value = value.replace(/\s+/g, "");

      return value;
    }

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

      // =================================================
      // SETTINGS
      // =================================================
      var strictCase =
        fDataObj.strictcase != undefined && fDataObj.strictcase != null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      var correctAnswers = getStrArray(fDataObj.answer, "activity");

      var alternateAnswers = fDataObj.alternateanswer || [];

      var inputBoxes = elsQue[i].querySelectorAll("input");

      var questionCorrect = true;

      // =================================================
      // CHECK EACH INPUT
      // =================================================
      for (var a = 0; a < inputBoxes.length; a++) {
        var userValue = inputBoxes[a].value;

        // empty input = wrong
        if (userValue == undefined || userValue.trim() === "") {
          questionCorrect = false;
          continue;
        }

        var normalizedUser = normalizeAnswer(userValue, strictCase);

        var normalizedCorrect = normalizeAnswer(correctAnswers[a], strictCase);

        var inputCorrect = normalizedUser === normalizedCorrect;

        // =============================================
        // ALTERNATE ANSWERS
        // =============================================
        if (!inputCorrect) {
          var alternatives = [];

          /*
                    Supports BOTH:

                    alternateanswer: [
                        "answer one",
                        "answer two"
                    ]

                    AND:

                    alternateanswer: [
                        [
                            "answer one",
                            "answer two"
                        ]
                    ]
                */

          if (Array.isArray(alternateAnswers[a])) {
            alternatives = alternateAnswers[a];
          } else if (
            inputBoxes.length === 1 &&
            Array.isArray(alternateAnswers)
          ) {
            alternatives = alternateAnswers;
          }

          for (var alt = 0; alt < alternatives.length; alt++) {
            var normalizedAlt = normalizeAnswer(alternatives[alt], strictCase);

            if (normalizedUser === normalizedAlt) {
              inputCorrect = true;
              break;
            }
          }
        }

        if (!inputCorrect) {
          questionCorrect = false;
        }
      }

      // =================================================
      // QUESTION RESULT
      // =================================================
      if (inputBoxes.length > 0 && questionCorrect) {
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
      // ICON WRAPPER
      // =================================================
      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      if (iconWrap) {
        iconWrap.style.display = "block";
      }
    }

    // =====================================================
    // ALL CORRECT
    // =====================================================
    var allCorrect = resultArr.every(function (value) {
      return value === 1;
    });

    console.log("results:", resultArr, "allCorrect:", allCorrect);

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
