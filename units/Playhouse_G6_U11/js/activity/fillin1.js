// ******************************************
// FillIn - Version no: 1
// ******************************************

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

    this.listen(ob);
  },

  // =========================================
  // LISTEN
  // =========================================
  listen: function (ob) {
    var e = ob.activity_area;

    var inputs = e.querySelectorAll("input");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        $(this).css("color", "black");

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

  // =========================================
  // NORMALIZE ANSWER
  // =========================================
  normalizeAnswer: function (str, strictCase) {
    if (str == undefined || str == null) {
      return "";
    }

    str = String(str);

    // -----------------------------------------
    // case insensitive
    // -----------------------------------------
    if (strictCase != "yes") {
      str = str.toLowerCase();
    }

    // -----------------------------------------
    // remove spaces
    // -----------------------------------------
    str = str.replace(/\s+/g, "");

    // -----------------------------------------
    // remove punctuation
    // -----------------------------------------
    str = str.replace(/[.,!?;:'"()\[\]{}\-–—_/\\]/g, "");

    return str;
  },

  // =========================================
  // VALIDATE
  // =========================================
  validate: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    var numOfFillIns = elsQue.length;

    var allCorrect = false;

    var resultArr = [];

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      // -----------------------------------------
      // question data
      // -----------------------------------------
      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      // -----------------------------------------
      // hide icons first
      // -----------------------------------------
      elsQue[i].querySelector(".tick").style.display = "none";

      elsQue[i].querySelector(".cross").style.display = "none";

      // -----------------------------------------
      // strict case
      // -----------------------------------------
      var _case =
        fDataObj.strictcase != undefined && fDataObj.strictcase != null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      // -----------------------------------------
      // correct answers
      // -----------------------------------------
      var _cAns = getStrArray(fDataObj.answer, "activity");

      // -----------------------------------------
      // alternate answers
      // -----------------------------------------
      var _altAns = fDataObj.alternateanswer || [];

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

          if (inputBoxes[a].value.trim().length > 0) {
            _uAns[a] = inputBoxes[a].value;
          }
        }
      }

      // =========================================
      // SHOW ICON RULE
      // =========================================
      elsQue[i].dataset.showIcon =
        _isReadOnly.join("").split("1")[0].length == _cAns.length;

      // =========================================
      // CHECK ANSWERS
      // =========================================
      if (_uAns.length > 0 && _cAns.length == _uAns.length) {
        for (var cc = 0; cc < _cAns.length; cc++) {
          var userAnswer = this.normalizeAnswer(_uAns[cc], _case);

          var correctAnswer = this.normalizeAnswer(_cAns[cc], _case);

          var isCorrect = userAnswer == correctAnswer;

          // =====================================
          // CHECK ALTERNATE ANSWERS
          // =====================================
          if (
            !isCorrect &&
            _altAns &&
            _altAns[cc] &&
            Array.isArray(_altAns[cc])
          ) {
            for (var alt = 0; alt < _altAns[cc].length; alt++) {
              var altAnswer = this.normalizeAnswer(_altAns[cc][alt], _case);

              if (userAnswer == altAnswer) {
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

        // ---------------------------------------
        // audio
        // ---------------------------------------
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
    // ALL QUESTIONS CORRECT?
    // =========================================
    allCorrect = resultArr.join("").split("0")[0].length == numOfFillIns;

    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
    }
  },

  // =========================================
  // RESET
  // =========================================
  reset: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      // -----------------------------------------
      // hide icons
      // -----------------------------------------
      if (elsQue[i].querySelector(".icon_wrap")) {
        elsQue[i].querySelector(".icon_wrap").style.display = "none";
      }

      if (elsQue[i].querySelector(".tick")) {
        elsQue[i].querySelector(".tick").style.display = "none";
      }

      if (elsQue[i].querySelector(".cross")) {
        elsQue[i].querySelector(".cross").style.display = "none";
      }

      // -----------------------------------------
      // audio reset
      // -----------------------------------------
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

      // -----------------------------------------
      // clear inputs
      // -----------------------------------------
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

  // =========================================
  // INITIAL SETTINGS
  // =========================================
  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
