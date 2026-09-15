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
    var numOfFillIns = 0;

    // =====================================================
    // NORMALIZE ANSWER
    // =====================================================

    function normalizeAnswer(value, strictCase) {
      if (value === undefined || value === null) {
        return "";
      }

      value = String(value);

      value = value.trim();

      value = value.replace(/\s+/g, " ");

      // تجاهل علامات الترقيم
      value = value.replace(/[.,!?;:'"()[\]{}]+/g, "");

      value = value.replace(/\s+/g, " ").trim();

      if (strictCase !== "yes") {
        value = value.toLowerCase();
      }

      return value;
    }

    // =====================================================
    // QUESTIONS
    // =====================================================

    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      var inputBoxes = elsQue[i].querySelectorAll("input");

      var tick = elsQue[i].querySelector(".tick");

      var cross = elsQue[i].querySelector(".cross");

      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      // اخفي الأيقونات بالبداية
      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      // =====================================================
      // CHECK IF THIS CELL HAS AN EDITABLE INPUT
      // =====================================================

      var editableInputs = [];

      for (var a = 0; a < inputBoxes.length; a++) {
        if (
          !inputBoxes[a].hasAttribute("readonly") &&
          !inputBoxes[a].hasAttribute("disabled")
        ) {
          editableInputs.push(inputBoxes[a]);
        }
      }

      // =====================================================
      // FIXED / READONLY CELL
      // SKIP COMPLETELY
      // =====================================================

      if (editableInputs.length === 0) {
        continue;
      }

      // فقط الخانات القابلة للكتابة تدخل بالحساب
      numOfFillIns++;

      var strictCase =
        fDataObj.strictcase !== undefined && fDataObj.strictcase !== null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      var correctAnswers = fDataObj.answer || [];

      var alternateAnswers = fDataObj.alternateanswer || [];

      var questionCorrect = true;

      // =====================================================
      // VALIDATE EDITABLE INPUTS
      // =====================================================

      for (
        var inputIndex = 0;
        inputIndex < editableInputs.length;
        inputIndex++
      ) {
        var userAnswer = normalizeAnswer(
          editableInputs[inputIndex].value,
          strictCase,
        );

        // فاضي
        if (userAnswer === "") {
          questionCorrect = false;

          break;
        }

        // ===================================================
        // CORRECT ANSWERS
        // ===================================================

        var validAnswers = [];

        if (correctAnswers[inputIndex] !== undefined) {
          validAnswers.push(
            normalizeAnswer(correctAnswers[inputIndex], strictCase),
          );
        }

        // ===================================================
        // ALTERNATE ANSWERS
        // ===================================================

        if (
          alternateAnswers[inputIndex] !== undefined &&
          Array.isArray(alternateAnswers[inputIndex])
        ) {
          for (var alt = 0; alt < alternateAnswers[inputIndex].length; alt++) {
            if (
              alternateAnswers[inputIndex][alt] !== undefined &&
              alternateAnswers[inputIndex][alt] !== ""
            ) {
              validAnswers.push(
                normalizeAnswer(alternateAnswers[inputIndex][alt], strictCase),
              );
            }
          }
        }

        // ===================================================
        // COMPARE
        // ===================================================

        if (validAnswers.indexOf(userAnswer) === -1) {
          questionCorrect = false;

          break;
        }
      }

      // =====================================================
      // RESULT
      // =====================================================

      if (questionCorrect) {
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
      numOfFillIns > 0 &&
      resultArr.length === numOfFillIns &&
      resultArr.every(function (result) {
        return result === 1;
      });

    console.log("Editable fields:", numOfFillIns);

    console.log("FillIn result:", resultArr);

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
