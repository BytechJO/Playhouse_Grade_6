//  ****************************************** //
//  FillIn - Version no: 1
//  Updated to support alternate answers
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

  /*
    ================================================
    NORMALIZE ANSWER
    ================================================

    - Ignore case when strictcase = no
    - Ignore spaces
    - Ignore punctuation at the END:
      . , ! ? ; : etc.
    ================================================
    */

  normalizeAnswer: function (value, strictCase) {
    if (value === undefined || value === null) {
      return "";
    }

    value = String(value).trim();

    // Ignore punctuation at the END
    value = value.replace(/[.,!?;:'"،؛؟]+$/g, "");

    // Trim again in case there was space before punctuation
    value = value.trim();

    // Ignore case
    if (strictCase !== "yes") {
      value = value.toLowerCase();
    }

    // Ignore spaces
    value = value.replace(/\s+/g, "");

    return value;
  },

  validate: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    var numOfFillIns = elsQue.length;

    var allCorrect = false;

    var resultArr = [];

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

      /*
            ================================================
            CORRECT ANSWERS
            ================================================
            */

      var _cAns = getStrArray(fDataObj.answer, "activity");

      /*
            ================================================
            ALTERNATE ANSWERS
            ================================================

            Format:

            answer: ["professor"],

            alternateanswer: [
                ["teacher", "instructor"]
            ]

            Each input has its own array of alternatives.
            ================================================
            */

      var _altAns = fDataObj.alternateanswer || [];

      var _uAns = [];

      var _isReadOnly = [];

      var _corr = 0;

      var _wrong = 0;

      var inputBoxes = elsQue[i].querySelectorAll("input");

      if (inputBoxes.length > 0) {
        for (var a = 0; a < inputBoxes.length; a++) {
          console.log(a, inputBoxes[a].dataset.type);

          _isReadOnly[a] =
            inputBoxes[a].getAttribute("disabled") == null &&
            inputBoxes[a].getAttribute("readonly") == null
              ? 0
              : 1;

          if (inputBoxes[a].value.length > 0) {
            _uAns[a] = inputBoxes[a].value;
          }
        }
      }

      elsQue[i].dataset.showIcon =
        _isReadOnly.join("").split("1")[0].length == _cAns.length;

      console.log(_uAns, _cAns, i, elsQue[i].dataset.showIcon);

      /*
            ================================================
            VALIDATION
            ================================================
            */

      if (_uAns.length > 0 && _cAns.length == _uAns.length) {
        for (var cc = 0; cc < _cAns.length; cc++) {
          /*
                    ----------------------------
                    User answer
                    ----------------------------
                    */

          var userAnswer = this.normalizeAnswer(_uAns[cc], _case);

          /*
                    ----------------------------
                    Main correct answer
                    ----------------------------
                    */

          var correctAnswer = this.normalizeAnswer(_cAns[cc], _case);

          /*
                    ----------------------------
                    Check main answer
                    ----------------------------
                    */

          var isCorrect = userAnswer === correctAnswer;

          /*
                    ----------------------------
                    Check alternate answers
                    ----------------------------
                    */

          if (!isCorrect) {
            var alternatives = [];

            if (_altAns[cc] !== undefined && _altAns[cc] !== null) {
              /*
                            Allow:

                            ["teacher"]

                            OR even:

                            "teacher"
                            */

              if (Array.isArray(_altAns[cc])) {
                alternatives = _altAns[cc];
              } else {
                alternatives = [_altAns[cc]];
              }
            }

            for (var alt = 0; alt < alternatives.length; alt++) {
              var normalizedAlternative = this.normalizeAnswer(
                alternatives[alt],
                _case,
              );

              if (userAnswer === normalizedAlternative) {
                isCorrect = true;

                break;
              }
            }
          }

          /*
                    ----------------------------
                    Result
                    ----------------------------
                    */

          if (isCorrect) {
            _corr++;
          } else {
            _wrong++;
          }
        }
      } else {
        _wrong++;
      }

      /*
            ================================================
            QUESTION RESULT
            ================================================
            */

      if (_corr == _uAns.length && _wrong == 0) {
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

      /*
            ================================================
            ICON WRAPPER
            ================================================
            */

      if (elsQue[i].querySelectorAll(".icon_wrap").length > 0) {
        if (elsQue[i].dataset.showIcon == "true") {
          elsQue[i].querySelector(".icon_wrap").style.display = "block";
        }
      }
    }

    console.log(resultArr, numOfFillIns);

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

    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      elsQue[i].querySelector(".icon_wrap").style.display = "none";

      elsQue[i].querySelector(".tick").style.display = "none";

      elsQue[i].querySelector(".cross").style.display = "none";

      /*
            ================================================
            AUDIO RESET
            ================================================
            */

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
      }

      /*
            ================================================
            CLEAR INPUTS
            ================================================
            */

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
