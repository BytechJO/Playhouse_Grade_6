//  ****************************************** //
//  MCQ - Version no: 2
//  Date updated - July 03, 2020
//  ****************************************** //

window.MCQ = function (obj, dataObj) {
  ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.init(this.settings);
};

// =========================================================
// NORMALIZE FILL-IN ANSWER
// =========================================================
function normalizeAnswer(str) {
  if (str == undefined || str == null) {
    return "";
  }

  return (
    String(str)
      .toLowerCase()

      // remove punctuation
      .replace(/[.,!?;:'"()[\]{}\-_/\\]/g, "")

      // remove extra spaces
      .replace(/\s+/g, " ")

      // remove spaces from beginning/end
      .trim()
  );
}

MCQ.prototype = {
  // =========================================================
  // INIT
  // =========================================================
  init: function (ob) {
    this.ob = ob;

    // this.reset();

    this.listen(ob);
  },

  // =========================================================
  // LISTEN
  // =========================================================
  listen: function (ob) {
    var self = this;

    var e = ob.activity_area;

    var selectTyp = ob.data_obj.select;

    var selectBgColor = ob.data_obj.bgcolor;

    var selShape = ob.data_obj.shape;

    var ques = e.querySelectorAll(".que");

    // =====================================================
    // MCQ PICKS
    // =====================================================
    if (ques.length > 0) {
      var picks = e.querySelectorAll(".pick");

      for (var i = 0; i < picks.length; i++) {
        picks[i].addEventListener("click", function (e) {
          var target = $(e.target);

          console.log("target .. ", target[0], target.hasClass("audioIcon"));

          if (!target.hasClass("audioIcon")) {
            var _thisId = $(this).attr("id");

            var _parentNum = $(this).attr("id").split("_")[1];

            thisQue = $("#" + _thisId).closest("#que_" + _parentNum);

            var thisQuePicks = thisQue.find(".pick");

            self.showIcons(false);

            var isSel = !$(this).hasClass("selected");

            // =================================================
            // SINGLE / MULTIPLE
            // =================================================

            if (selectTyp == "single") {
              self.resetAllPicks(thisQue, thisQuePicks);
            } else {
              self.resetAllPicks(thisQue, [$(this)]);
            }

            // =================================================
            // SELECT
            // =================================================

            if (isSel) {
              $(this).addClass("selected");

              if (selShape == "cross") {
                $(this).find(".selX").show();
              } else if (selShape == "svg") {
                $(this).find("svg").removeClass("fillWhite");

                $(this).find("svg").addClass("fillBlue");
              } else if (selShape == "tickbox") {
                $(this).find(".selectTick").css("display", "block");
              } else if (selShape == "underline") {
                $(this)
                  .find(".txt_box")
                  .css("text-decoration", "underline rgb(13, 137, 202)");
              } else {
                if (selectBgColor != "none") {
                  $(this).css("background-color", selectBgColor);
                } else {
                  $(this).addClass("selectedDefault");
                }
              }
            }

            // =================================================
            // ENABLE CHECK / RESET
            // =================================================

            document
              .getElementsByClassName("checkBtn")[0]
              .classList.remove("disabled");

            document
              .getElementsByClassName("resetBtn")[0]
              .classList.remove("disabled");
          }
        });
      }
    }

    // =====================================================
    // FILL-IN / FREE WRITING INPUTS
    // =====================================================

    var inputs = e.querySelectorAll("input");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        $(this).css("color", "black");

        var v = this.value;

        if (
          typeof $(this).data("type") != undefined &&
          $(this).data("type") != null
        ) {
          var typ = $(this).data("type");

          // =============================================
          // TEXT
          // =============================================

          if (typ == "text") {
            $(this).val(
              $(this)
                .val()
                .replace(/[^a-z .]/gi, ""),
            );
          }

          // =============================================
          // NUMBER
          // =============================================
          else if (typ == "number") {
            if ($.isNumeric(v) === false) {
              this.value = this.value.replace(/\D/g, "");
            }
          }

          // =============================================
          // OTHER
          // =============================================
          else {
            this.value = $(this).val();
          }
        }

        self.showIcons(false);

        document
          .getElementsByClassName("checkBtn")[0]
          .classList.remove("disabled");

        document
          .getElementsByClassName("resetBtn")[0]
          .classList.remove("disabled");
      });
    }
  },

  // =========================================================
  // RESET PICKS
  // =========================================================
  resetAllPicks: function (qOb, aArr) {
    var ob = this.ob;

    var picks = aArr;

    var selShape = ob.data_obj.shape;

    for (var i = 0; i < picks.length; i++) {
      var tPick = picks[i].classList == undefined ? picks[i][0] : picks[i];

      tPick.classList.remove("selected");

      tPick.classList.remove("selectedDefault");

      tPick.classList.remove("isCorrect");

      tPick.classList.remove("isNotCorrect");

      tPick.style.backgroundColor = "transparent";

      if (tPick.querySelectorAll(".txt_box").length > 0) {
        tPick.querySelector(".txt_box").style.textDecoration = "none";
      }

      if (tPick.querySelectorAll(".selX").length > 0) {
        tPick.querySelector(".selX").style.display = "none";
      }

      if (tPick.querySelectorAll(".selectTick").length > 0) {
        tPick.querySelector(".selectTick").style.display = "none";
      }

      // =====================================================
      // SVG
      // =====================================================

      if (selShape == "svg") {
        var svgsIn = tPick.querySelectorAll("svg");

        if (svgsIn.length > 0) {
          for (var svg = 0; svg < svgsIn.length; svg++) {
            svgsIn[svg].classList.remove("fillBlue");

            svgsIn[svg].classList.remove("fillGreen");

            svgsIn[svg].classList.remove("fillRed");

            svgsIn[svg].classList.add("fillWhite");
          }
        }
      }
    }
  },

  // =========================================================
  // VALIDATE
  // =========================================================
  validate: function () {
    var self = this;

    var ob = this.ob;

    var selectBgColor = ob.data_obj.bgcolor;

    var selShape = ob.data_obj.shape;

    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    var resultArr = [];

    // =====================================================
    // QUESTIONS LOOP
    // =====================================================

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      // =====================================================
      // FREE WRITING
      //
      // QUESTION IS NOT VALIDATED.
      // IT DOES NOT AFFECT ALL CORRECT.
      // =====================================================

      if (fDataObj != undefined && fDataObj.freeWriting === true) {
        resultArr[i] = 1;

        continue;
      }

      // =====================================================
      // HIDE OLD ICONS
      // =====================================================

      var tick = elsQue[i].querySelector(".tick");

      var cross = elsQue[i].querySelector(".cross");

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      // =====================================================
      // QUESTION TYPES
      // =====================================================

      var picks = elsQue[i].querySelectorAll(".pick");

      // Inputs with skip-validation are ignored.
      var inputBoxes = elsQue[i].querySelectorAll(
        'input:not([data-skip-validation="true"])',
      );

      var hasMCQ = picks.length > 0;

      var hasFillin = inputBoxes.length > 0;

      var mcqCorrect = true;

      var fillCorrect = true;

      // =====================================================
      // MCQ VALIDATION
      // =====================================================

      if (hasMCQ) {
        var _cAns = [];

        if (
          fDataObj.answer != undefined &&
          fDataObj.answer != null &&
          fDataObj.answer.length > 0
        ) {
          _cAns = getIntArray(fDataObj.answer);
        }

        var _uAns = [];

        // =================================================
        // PICKS LOOP
        // =================================================

        for (var a = 0; a < picks.length; a++) {
          picks[a].classList.remove("isCorrect");

          picks[a].classList.remove("isNotCorrect");

          picks[a].classList.remove("selectedDefault");

          if (picks[a].classList.contains("selected")) {
            _uAns.push(a + 1);

            var isAns = $.inArray(a + 1, _cAns) >= 0;

            // =============================================
            // CORRECT
            // =============================================

            if (isAns) {
              if (
                selectBgColor == "none" &&
                selShape != "svg" &&
                selShape != "tickbox" &&
                selShape != "underline"
              ) {
                picks[a].classList.add("isCorrect");
              }

              if (selShape == "cross") {
                picks[a].classList.add("isCorrect");
              } else if (selShape == "svg") {
                var svg = picks[a].querySelector("svg");

                if (svg) {
                  svg.classList.remove("fillBlue");

                  svg.classList.add("fillGreen");
                }
              }
            }

            // =============================================
            // WRONG
            // =============================================
            else {
              if (
                selectBgColor == "none" &&
                selShape != "svg" &&
                selShape != "tickbox" &&
                selShape != "underline"
              ) {
                picks[a].classList.add("isNotCorrect");
              }

              if (selShape == "cross") {
                picks[a].classList.add("isNotCorrect");
              } else if (selShape == "svg") {
                var svg = picks[a].querySelector("svg");

                if (svg) {
                  svg.classList.remove("fillBlue");

                  svg.classList.add("fillRed");
                }
              }
            }
          }
        }

        // =================================================
        // EXACT MCQ ANSWER
        // =================================================

        mcqCorrect =
          _cAns.length == _uAns.length && compareArrays(_uAns, _cAns);
      }

      // =====================================================
      // FILL-IN VALIDATION
      // =====================================================

      if (hasFillin) {
        fillCorrect = true;

        for (var inp = 0; inp < inputBoxes.length; inp++) {
          var input = inputBoxes[inp];

          var userAnswer = normalizeAnswer(input.value);

          // =============================================
          // CORRECT ANSWERS
          // =============================================

          var correctAnswers = [];

          if (Array.isArray(fDataObj.fillinanswer)) {
            correctAnswers = fDataObj.fillinanswer;
          } else {
            correctAnswers = [fDataObj.fillinanswer];
          }

          var thisInputCorrect = false;

          for (var c = 0; c < correctAnswers.length; c++) {
            if (userAnswer == normalizeAnswer(correctAnswers[c])) {
              thisInputCorrect = true;

              break;
            }
          }

          if (!thisInputCorrect) {
            fillCorrect = false;
          }
        }
      }

      // =====================================================
      // FINAL QUESTION RESULT
      // =====================================================

      if (hasMCQ && hasFillin) {
        resultArr[i] = mcqCorrect && fillCorrect ? 1 : 0;
      } else if (hasMCQ) {
        resultArr[i] = mcqCorrect ? 1 : 0;
      } else if (hasFillin) {
        resultArr[i] = fillCorrect ? 1 : 0;
      }
    }

    // =========================================================
    // ALL CORRECT
    // =========================================================

    var allCorrect = true;

    for (var r = 0; r < resultArr.length; r++) {
      if (resultArr[r] != 1) {
        allCorrect = false;

        break;
      }
    }

    // =========================================================
    // RESULT
    // =========================================================

    self.showIcons(true, resultArr, allCorrect);

    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
    }
  },

  // =========================================================
  // SHOW / HIDE ICONS
  // =========================================================
  showIcons: function (aBoo, aVal, aResult) {
    var ob = this.ob;

    var e = ob.activity_area;

    var selShape = ob.data_obj.shape;

    var needIcon =
      typeof ob.data_obj.showicon != undefined && ob.data_obj.showicon != null
        ? ob.data_obj.showicon
        : "true";

    var elsQue = e.querySelectorAll(".que");

    console.log("showIcons : ", needIcon, aBoo, aVal, aResult);

    // =====================================================
    // QUESTIONS
    // =====================================================

    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      // =====================================================
      // FREE WRITING
      //
      // NEVER SHOW TICK / CROSS
      // =====================================================

      if (fDataObj != undefined && fDataObj.freeWriting === true) {
        var freeIconWrap = elsQue[i].querySelector(".icon_wrap");

        var freeTick = elsQue[i].querySelector(".tick");

        var freeCross = elsQue[i].querySelector(".cross");

        if (freeIconWrap) {
          freeIconWrap.style.display = "none";
        }

        if (freeTick) {
          freeTick.style.display = "none";
        }

        if (freeCross) {
          freeCross.style.display = "none";
        }

        continue;
      }

      // =====================================================
      // NORMAL QUESTION ICONS
      // =====================================================

      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      var tick = elsQue[i].querySelector(".tick");

      var cross = elsQue[i].querySelector(".cross");

      // =====================================================
      // SHOW
      // =====================================================

      if (aBoo) {
        // =================================================
        // MULTIPLE QUESTIONS
        // =================================================

        if (elsQue.length != 1) {
          if (iconWrap) {
            iconWrap.style.display = "block";
          }

          if (aVal && aVal[i] == 1) {
            if (tick) {
              tick.style.display = "block";
            }

            if (cross) {
              cross.style.display = "none";
            }
          } else {
            if (cross) {
              cross.style.display = "block";
            }

            if (tick) {
              tick.style.display = "none";
            }
          }
        }

        // =================================================
        // ONE QUESTION
        // =================================================
        else {
          var picks = elsQue[i].querySelectorAll(".pick");

          if (picks.length > 0) {
            if (needIcon == "true") {
              if (iconWrap) {
                iconWrap.style.display = "block";
              }

              if (aVal && aVal[i] == 1) {
                if (tick) {
                  tick.style.display = "block";
                }

                if (cross) {
                  cross.style.display = "none";
                }
              } else {
                if (cross) {
                  cross.style.display = "block";
                }

                if (tick) {
                  tick.style.display = "none";
                }
              }
            }
          }
        }
      }

      // =====================================================
      // HIDE
      // =====================================================
      else {
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
        // PICK ICONS
        // =================================================

        var picks = elsQue[i].querySelectorAll(".pick");

        if (picks.length > 0) {
          for (var a = 0; a < picks.length; a++) {
            var pickIconWrap = picks[a].querySelector(".icon_wrap");

            var pickTick = picks[a].querySelector(".tick");

            var pickCross = picks[a].querySelector(".cross");

            if (pickIconWrap) {
              pickIconWrap.style.display = "none";
            }

            if (pickTick) {
              pickTick.style.display = "none";
            }

            if (pickCross) {
              pickCross.style.display = "none";
            }
          }
        }
      }
    }
  },

  // =========================================================
  // RESET
  // =========================================================
  reset: function () {
    var self = this;

    var ob = this.ob;

    var e = ob.activity_area;

    var selShape = ob.data_obj.shape;

    var elsQue = e.querySelectorAll(".que");

    // =====================================================
    // QUESTIONS
    // =====================================================

    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      self.showIcons(false);

      // =================================================
      // QUESTION AUDIO
      // =================================================

      if (fDataObj.audio != "") {
        if (fDataObj.audio != "no") {
          if (elsQue[i].querySelectorAll(".audioIcon").length > 0) {
            if (fDataObj.audioenable == "correct") {
              elsQue[i].querySelector(".audioIcon").style.display = "block";

              elsQue[i].querySelector(".audioIcon").classList.add("disabled");
            } else if (fDataObj.audioenable == "default") {
              elsQue[i].querySelector(".audioIcon").style.display = "block";

              elsQue[i]
                .querySelector(".audioIcon")
                .classList.remove("disabled");
            }
          }
        } else {
          if (elsQue[i].querySelectorAll(".audioIcon").length > 0) {
            elsQue[i].querySelector(".audioIcon").style.display = "none";
          }
        }
      }

      // =================================================
      // PICKS
      // =================================================

      var pickOptions = elsQue[i].querySelectorAll(".pick");

      self.resetAllPicks(elsQue[i], pickOptions);

      if (pickOptions.length > 0) {
        for (var a = 0; a < pickOptions.length; a++) {
          // =============================================
          // OPTION AUDIO
          // =============================================

          if (fDataObj.options[a].audio != "") {
            if (fDataObj.options[a].audio != "no") {
              if (pickOptions[a].querySelectorAll(".audioIcon").length > 0) {
                if (fDataObj.options[a].audioenable == "correct") {
                  pickOptions[a].querySelector(".audioIcon").style.display =
                    "block";

                  pickOptions[a]
                    .querySelector(".audioIcon")
                    .classList.add("disabled");
                } else if (fDataObj.options[a].audioenable == "default") {
                  pickOptions[a].querySelector(".audioIcon").style.display =
                    "block";

                  pickOptions[a]
                    .querySelector(".audioIcon")
                    .classList.remove("disabled");
                }
              }
            } else {
              if (pickOptions[a].querySelectorAll(".audioIcon").length > 0) {
                pickOptions[a].querySelector(".audioIcon").style.display =
                  "none";
              }
            }
          }

          // =============================================
          // X
          // =============================================

          if (pickOptions[a].querySelectorAll(".selX").length > 0) {
            pickOptions[a].querySelector(".selX").style.display = "none";
          }

          // =============================================
          // SHAPE
          // =============================================

          if (selShape != "") {
            if (selShape == "roundrect") {
              pickOptions[a].classList.add("roundedCorners");
            } else if (selShape == "circle") {
              pickOptions[a].classList.add("noCorners");
            } else if (selShape == "rectangle") {
              pickOptions[a].classList.add("sharpCorners");
            } else if (selShape == "tickbox") {
              if (pickOptions[a].querySelectorAll(".tickBox").length > 0) {
                pickOptions[a].querySelector(".selectTick").style.display =
                  "none";
              }
            }
          }

          pickOptions[a].classList.remove("selected");

          pickOptions[a].style.cursor = "pointer";

          pickOptions[a].classList.remove("isCorrect");

          pickOptions[a].classList.remove("isNotCorrect");
        }
      }
    }

    // =====================================================
    // CLEAR ALL INPUTS
    // Includes free-writing question
    // =====================================================

    var allInputs = e.querySelectorAll("input");

    for (var inp = 0; inp < allInputs.length; inp++) {
      allInputs[inp].value = "";

      allInputs[inp].style.color = "black";
    }

    document.getElementsByClassName("checkBtn")[0].classList.add("disabled");
  },

  // =========================================================
  // INITIAL SETTINGS
  // =========================================================
  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
