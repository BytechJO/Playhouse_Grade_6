// ******************************************
// FillIn - unordered answers + icon per input
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
  // =========================================================
  // INIT
  // =========================================================

  init: function (ob) {
    this.ob = ob;

    this.addInputIcons(ob);

    this.listen(ob);
  },

  // =========================================================
  // ADD TICK / CROSS FOR EACH INPUT
  // =========================================================

  addInputIcons: function (ob) {
    var e = ob.activity_area;

    var inputs = e.querySelectorAll(".que input");

    for (var i = 0; i < inputs.length; i++) {
      // ما نكرر الأيقونة إذا كانت موجودة
      if (
        inputs[i].nextElementSibling &&
        inputs[i].nextElementSibling.classList.contains("input_result_icon")
      ) {
        continue;
      }

      var resultIcon = document.createElement("span");

      resultIcon.className = "input_result_icon";

      // tick
      var tick = document.createElement("img");

      tick.className = "input_tick";

      tick.src = "../images/icons/check_btn.png";

      // cross
      var cross = document.createElement("img");

      cross.className = "input_cross";

      cross.src = "../images/icons/cross_btn.png";

      resultIcon.appendChild(tick);

      resultIcon.appendChild(cross);

      inputs[i].insertAdjacentElement("afterend", resultIcon);
    }
  },

  // =========================================================
  // LISTEN
  // =========================================================

  listen: function (ob) {
    var e = ob.activity_area;

    var inputs = e.querySelectorAll("input");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        $(this).css("color", "black");

        // -------------------------
        // number only
        // -------------------------

        var v = this.value;

        if ($(this).data("type") == "number") {
          if ($.isNumeric(v) === false) {
            this.value = this.value.replace(/\D/g, "");
          }
        }

        // -------------------------
        // إذا عدّل الفراغ
        // نشيل نتيجته القديمة
        // -------------------------

        var resultIcon = this.nextElementSibling;

        if (resultIcon && resultIcon.classList.contains("input_result_icon")) {
          var tick = resultIcon.querySelector(".input_tick");

          var cross = resultIcon.querySelector(".input_cross");

          if (tick) {
            tick.style.display = "none";
          }

          if (cross) {
            cross.style.display = "none";
          }
        }

        // -------------------------
        // enable buttons
        // -------------------------

        var checkBtn = document.getElementsByClassName("checkBtn")[0];

        var resetBtn = document.getElementsByClassName("resetBtn")[0];

        if (checkBtn) {
          checkBtn.classList.remove("disabled");
        }

        if (resetBtn) {
          resetBtn.classList.remove("disabled");
        }
      });
    }
  },

  // =========================================================
  // NORMALIZE
  // =========================================================

  normalizeAnswer: function (value, strictCase) {
    if (value === undefined || value === null) {
      return "";
    }

    value = String(value).trim();

    if (strictCase != "yes") {
      value = value.toLowerCase();
    }

    // نفس منطق الكود القديم:
    // تجاهل المسافات
    value = value.replace(/\s/g, "");

    return value;
  },

  // =========================================================
  // SHOW RESULT BESIDE ONE INPUT
  // =========================================================

  showInputResult: function (input, isCorrect) {
    var resultIcon = input.nextElementSibling;

    if (!resultIcon || !resultIcon.classList.contains("input_result_icon")) {
      return;
    }

    var tick = resultIcon.querySelector(".input_tick");

    var cross = resultIcon.querySelector(".input_cross");

    if (tick) {
      tick.style.display = isCorrect ? "inline-block" : "none";
    }

    if (cross) {
      cross.style.display = isCorrect ? "none" : "inline-block";
    }
  },

  // =========================================================
  // VALIDATE
  // =========================================================

  validate: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    var numOfFillIns = elsQue.length;

    var resultArr = [];

    var allCorrect = false;

    // =====================================================
    // EACH QUESTION
    // =====================================================

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      var strictCase =
        fDataObj.strictcase != undefined && fDataObj.strictcase != null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      var strictOrder =
        fDataObj.strictorder != undefined && fDataObj.strictorder != null
          ? fDataObj.strictorder.toLowerCase()
          : "yes";

      var inputBoxes = elsQue[i].querySelectorAll("input");

      // -------------------------
      // hide old question icon
      // -------------------------

      var oldTick = elsQue[i].querySelector(".icon_wrap_holder .tick");

      var oldCross = elsQue[i].querySelector(".icon_wrap_holder .cross");

      var oldIconWrap = elsQue[i].querySelector(".icon_wrap");

      if (oldTick) {
        oldTick.style.display = "none";
      }

      if (oldCross) {
        oldCross.style.display = "none";
      }

      if (oldIconWrap) {
        oldIconWrap.style.display = "none";
      }

      // =====================================================
      // CORRECT ANSWERS
      // =====================================================

      var correctAnswers = [];

      for (var c = 0; c < fDataObj.answer.length; c++) {
        correctAnswers.push(
          this.normalizeAnswer(fDataObj.answer[c], strictCase),
        );
      }

      var questionCorrect = true;

      // =====================================================
      // STRICT ORDER = YES
      // =====================================================

      if (strictOrder == "yes") {
        if (inputBoxes.length != correctAnswers.length) {
          questionCorrect = false;
        }

        for (var a = 0; a < inputBoxes.length; a++) {
          var userAnswer = this.normalizeAnswer(
            inputBoxes[a].value,
            strictCase,
          );

          var isCorrect =
            userAnswer != "" &&
            correctAnswers[a] != undefined &&
            userAnswer == correctAnswers[a];

          this.showInputResult(inputBoxes[a], isCorrect);

          if (!isCorrect) {
            questionCorrect = false;
          }
        }
      }

      // =====================================================
      // STRICT ORDER = NO
      // أي جواب صحيح يقدر يكون بأي input
      // =====================================================
      else {
        // نسخة حتى ما نقبل نفس الإجابة مرتين
        var remainingAnswers = correctAnswers.slice();

        if (inputBoxes.length != correctAnswers.length) {
          questionCorrect = false;
        }

        for (var b = 0; b < inputBoxes.length; b++) {
          var userAnswer = this.normalizeAnswer(
            inputBoxes[b].value,
            strictCase,
          );

          var foundIndex = -1;

          if (userAnswer != "") {
            foundIndex = remainingAnswers.indexOf(userAnswer);
          }

          var isCorrect = foundIndex !== -1;

          // -------------------------
          // إذا لقيناه نشيله
          // حتى ما يقبل نفس الجواب مرتين
          // -------------------------

          if (isCorrect) {
            remainingAnswers.splice(foundIndex, 1);
          }

          this.showInputResult(inputBoxes[b], isCorrect);

          if (!isCorrect) {
            questionCorrect = false;
          }
        }

        // لازم كل الإجابات الصحيحة تكون مستخدمة
        if (remainingAnswers.length > 0) {
          questionCorrect = false;
        }
      }

      // =====================================================
      // QUESTION RESULT
      // =====================================================

      if (questionCorrect) {
        resultArr[i] = 1;
      } else {
        resultArr[i] = 0;
      }

      // =====================================================
      // AUDIO
      // =====================================================

      if (fDataObj.audio != "" && fDataObj.audio != "no") {
        if (fDataObj.audioenable == "correct") {
          var audioIcon = elsQue[i].querySelector(".audioIcon");

          if (audioIcon) {
            if (questionCorrect) {
              audioIcon.classList.remove("disabled");
            } else {
              audioIcon.classList.add("disabled");
            }
          }
        }
      }
    }

    // =====================================================
    // ALL CORRECT
    // =====================================================

    allCorrect = resultArr.indexOf(0) === -1;

    console.log(resultArr, numOfFillIns);

    showFeedback(true, allCorrect);

    if (allCorrect) {
      var resetBtn = document.getElementsByClassName("resetBtn")[0];

      if (resetBtn) {
        resetBtn.classList.add("disabled");
      }
    }
  },

  // =========================================================
  // RESET
  // =========================================================

  reset: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      // -------------------------
      // hide original icons
      // -------------------------

      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      var tick = elsQue[i].querySelector(".icon_wrap_holder .tick");

      var cross = elsQue[i].querySelector(".icon_wrap_holder .cross");

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      // -------------------------
      // hide individual results
      // -------------------------

      var resultIcons = elsQue[i].querySelectorAll(".input_result_icon img");

      for (var r = 0; r < resultIcons.length; r++) {
        resultIcons[r].style.display = "none";
      }

      // -------------------------
      // audio
      // -------------------------

      if (fDataObj.audio != "" && fDataObj.audio != "no") {
        var audioIcon = elsQue[i].querySelector(".audioIcon");

        if (audioIcon) {
          if (fDataObj.audioenable == "correct") {
            audioIcon.classList.add("disabled");
          } else if (fDataObj.audioenable == "default") {
            audioIcon.classList.remove("disabled");
          }
        }
      }

      // -------------------------
      // clear inputs
      // -------------------------

      var inputBoxes = elsQue[i].querySelectorAll("input");

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

    var checkBtn = document.getElementsByClassName("checkBtn")[0];

    if (checkBtn) {
      checkBtn.classList.add("disabled");
    }
  },

  // =========================================================
  // INITIAL SETTINGS
  // =========================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
