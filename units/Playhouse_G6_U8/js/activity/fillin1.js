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
    var inputBoxes = e.querySelectorAll(".que input");

    var correctAnswers = ob.data_obj.answers || [];

    var resultArr = [];
    var allCorrect = false;

    var strictCase = "no";

    if (
      ob.data_obj.questions &&
      ob.data_obj.questions.length > 0 &&
      ob.data_obj.questions[0].strictcase
    ) {
      strictCase = ob.data_obj.questions[0].strictcase.toLowerCase();
    }

    // =====================================================
    // NORMALIZE ANSWER
    // =====================================================
    function normalizeAnswer(value) {
      value = String(value || "");

      if (strictCase !== "yes") {
        value = value.toLowerCase();
      }

      // smart apostrophe -> normal apostrophe
      value = value.replace(/’/g, "'").replace(/‘/g, "'");

      // contractions
      value = value
        .replace(/\bhasn't\b/g, "has not")
        .replace(/\bhaven't\b/g, "have not")
        .replace(/\bhadn't\b/g, "had not")

        .replace(/\bisn't\b/g, "is not")
        .replace(/\baren't\b/g, "are not")
        .replace(/\bwasn't\b/g, "was not")
        .replace(/\bweren't\b/g, "were not")

        .replace(/\bdon't\b/g, "do not")
        .replace(/\bdoesn't\b/g, "does not")
        .replace(/\bdidn't\b/g, "did not")

        .replace(/\bcan't\b/g, "cannot")
        .replace(/\bwon't\b/g, "will not")

        .replace(/\bwouldn't\b/g, "would not")
        .replace(/\bshouldn't\b/g, "should not")
        .replace(/\bcouldn't\b/g, "could not");

      // remove spaces + punctuation
      value = value.replace(/[^a-zA-Z0-9]/g, "");

      return value;
    }

    // =====================================================
    // SHOW ICON
    // =====================================================
    function showResultIcon(que, isCorrect) {
      if (!que) return;

      var iconWrap = que.querySelector(".icon_wrap");
      var tick = que.querySelector(".tick");
      var cross = que.querySelector(".cross");

      if (iconWrap) {
        iconWrap.style.setProperty("display", "block", "important");
      }

      if (isCorrect) {
        if (tick) {
          tick.style.setProperty("display", "block", "important");
        }

        if (cross) {
          cross.style.setProperty("display", "none", "important");
        }
      } else {
        if (tick) {
          tick.style.setProperty("display", "none", "important");
        }

        if (cross) {
          cross.style.setProperty("display", "block", "important");
        }
      }
    }

    // =====================================================
    // HIDE ALL OLD ICONS
    // =====================================================
    for (var i = 0; i < elsQue.length; i++) {
      var iconWrap = elsQue[i].querySelector(".icon_wrap");
      var tick = elsQue[i].querySelector(".tick");
      var cross = elsQue[i].querySelector(".cross");

      if (iconWrap) {
        iconWrap.style.setProperty("display", "none", "important");
      }

      if (tick) {
        tick.style.setProperty("display", "none", "important");
      }

      if (cross) {
        cross.style.setProperty("display", "none", "important");
      }

      resultArr[i] = 0;
    }

    // =====================================================
    // NORMALIZE CORRECT ANSWERS
    // =====================================================
    var normalizedCorrect = [];

    for (var c = 0; c < correctAnswers.length; c++) {
      normalizedCorrect.push(normalizeAnswer(correctAnswers[c]));
    }

    // =====================================================
    // USER ANSWERS
    // =====================================================
    var userAnswers = [];

    for (var u = 0; u < inputBoxes.length; u++) {
      userAnswers.push(normalizeAnswer(inputBoxes[u].value));
    }

    // =====================================================
    // MATCH ANY ORDER + DON'T REUSE ANSWER
    // =====================================================
    var usedCorrectIndexes = [];

    for (var u = 0; u < userAnswers.length; u++) {
      var userValue = userAnswers[u];

      var foundMatch = false;

      // ---------------------------
      // EMPTY INPUT
      // ---------------------------
      if (userValue === "") {
        resultArr[u] = 0;

        // empty = cross
        showResultIcon(elsQue[u], false);

        continue;
      }

      // ---------------------------
      // FIND CORRECT ANSWER
      // ---------------------------
      for (var c = 0; c < normalizedCorrect.length; c++) {
        if (
          userValue === normalizedCorrect[c] &&
          usedCorrectIndexes.indexOf(c) === -1
        ) {
          usedCorrectIndexes.push(c);

          foundMatch = true;

          break;
        }
      }

      // ---------------------------
      // RESULT
      // ---------------------------
      if (foundMatch) {
        resultArr[u] = 1;

        showResultIcon(elsQue[u], true);
      } else {
        resultArr[u] = 0;

        showResultIcon(elsQue[u], false);
      }
    }

    // =====================================================
    // FINAL
    // =====================================================
    allCorrect =
      resultArr.length === correctAnswers.length &&
      resultArr.every(function (value) {
        return value === 1;
      });

    console.log("Correct:", normalizedCorrect);

    console.log("User:", userAnswers);

    console.log("Result:", resultArr);

    console.log("Used:", usedCorrectIndexes);

    console.log("All Correct:", allCorrect);

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
