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
    var allCorrect = false;
    var resultArr = [];

    // =========================================
    // Normalize answer
    // =========================================
    function normalizeAnswer(value) {
      if (value === undefined || value === null) {
        return "";
      }

      value = String(value);

      // lower case
      value = value.toLowerCase();

      // unify apostrophes
      value = value.replace(/[’‘`´]/g, "'");

      // remove extra spaces
      value = value.replace(/\s+/g, " ");

      // trim
      value = $.trim(value);

      return value;
    }

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var fIndx = parseInt(elsQue[i].dataset.qno);
      var fDataObj = ob.data_obj.questions[fIndx - 1];

      elsQue[i].querySelector(".tick").style.display = "none";
      elsQue[i].querySelector(".cross").style.display = "none";

      var _case =
        fDataObj.strictcase != undefined && fDataObj.strictcase != null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      var _cAns = getStrArray(fDataObj.answer, "activity");

      var _uAns = [];
      var _isReadOnly = [];

      var _corr = 0;
      var _wrong = 0;

      var inputBoxes = elsQue[i].querySelectorAll("input");

      // =========================================
      // GET USER ANSWERS
      // =========================================

      if (inputBoxes.length > 0) {
        for (var a = 0; a < inputBoxes.length; a++) {
          _isReadOnly[a] =
            inputBoxes[a].getAttribute("disabled") == null &&
            inputBoxes[a].getAttribute("readonly") == null
              ? 0
              : 1;

          if (inputBoxes[a].value.length > 0) {
            if (inputBoxes[a].dataset.type != "number") {
              if (_case == "yes") {
                _uAns[a] = $.trim(inputBoxes[a].value);
              } else {
                _uAns[a] = normalizeAnswer(inputBoxes[a].value);
              }
            } else {
              _uAns[a] = inputBoxes[a].value;
            }
          }
        }
      }

      // =========================================
      // SHOW ICON
      // =========================================

      elsQue[i].dataset.showIcon =
        _isReadOnly.join("").split("1")[0].length == _cAns.length;

      // =========================================
      // VALIDATE
      // =========================================

      if (_uAns.length > 0 && _cAns.length == _uAns.length) {
        for (var cc = 0; cc < _cAns.length; cc++) {
          var userAnswer = "";

          var correctAnswer = "";

          // =====================================
          // USER ANSWER
          // =====================================

          if (_uAns[cc] !== undefined) {
            if (_case == "yes") {
              userAnswer = $.trim(_uAns[cc]);
            } else {
              userAnswer = normalizeAnswer(_uAns[cc]);
            }
          }

          // =====================================
          // MAIN ANSWER
          // =====================================

          if (_case == "yes") {
            correctAnswer = $.trim(_cAns[cc]);
          } else {
            correctAnswer = normalizeAnswer(_cAns[cc]);
          }

          var isCorrect = userAnswer !== "" && userAnswer === correctAnswer;

          // =====================================
          // ALTERNATE ANSWERS
          // =====================================

          if (!isCorrect && fDataObj.alternateanswer) {
            var alternateList = [];

            if (fDataObj.alternateanswer[cc] !== undefined) {
              alternateList = fDataObj.alternateanswer[cc];
            }

            // لو كانت string بدل array
            if (typeof alternateList === "string") {
              alternateList = [alternateList];
            }

            for (var alt = 0; alt < alternateList.length; alt++) {
              var alternateAnswer = "";

              if (_case == "yes") {
                alternateAnswer = $.trim(alternateList[alt]);
              } else {
                alternateAnswer = normalizeAnswer(alternateList[alt]);
              }

              if (userAnswer !== "" && userAnswer === alternateAnswer) {
                isCorrect = true;

                break;
              }
            }
          }

          // =====================================
          // RESULT
          // =====================================

          if (isCorrect) {
            _corr++;
          } else {
            _wrong++;
          }
        }
      } else {
        _wrong++;
      }

      // =========================================
      // QUESTION RESULT
      // =========================================

      if (_corr == _cAns.length && _wrong == 0) {
        resultArr[i] = 1;

        elsQue[i].querySelector(".tick").style.display = "block";

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

        elsQue[i].querySelector(".cross").style.display = "block";

        if (fDataObj.audio != "" && fDataObj.audio != "no") {
          if (
            fDataObj.audioenable == "correct" &&
            elsQue[i].querySelectorAll(".audioIcon").length > 0
          ) {
            elsQue[i].querySelector(".audioIcon").classList.add("disabled");
          }
        }
      }

      // =========================================
      // ICON WRAPPER
      // =========================================

      if (elsQue[i].querySelectorAll(".icon_wrap").length > 0) {
        if (elsQue[i].dataset.showIcon == "true") {
          elsQue[i].querySelector(".icon_wrap").style.display = "block";
        }
      }
    }

    // =========================================
    // ALL CORRECT
    // =========================================

    allCorrect = resultArr.join("").split("0")[0].length == numOfFillIns;

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
