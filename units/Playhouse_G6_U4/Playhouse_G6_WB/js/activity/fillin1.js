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
function normalizeFillAnswer(str, strictCase) {
  if (str == undefined || str == null) return "";

  str = String(str).trim();

  if (strictCase !== "yes") {
    str = str.toLowerCase();
  }

  // remove punctuation
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’“”]/g, "");

  // normalize spaces
  str = str.replace(/\s+/g, " ").trim();

  return str;
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
    var numOfFillIns = elsQue.length;
    var allCorrect = false;
    var resultArr = [];

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var fIndx = parseInt(elsQue[i].dataset.qno);
      var fDataObj = ob.data_obj.questions[fIndx - 1];

      if (elsQue[i].querySelector(".tick")) {
        elsQue[i].querySelector(".tick").style.display = "none";
      }

      if (elsQue[i].querySelector(".cross")) {
        elsQue[i].querySelector(".cross").style.display = "none";
      }

      var _case =
        fDataObj.strictcase != undefined && fDataObj.strictcase != null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      var inputBoxes = elsQue[i].querySelectorAll("input");

      var questionCorrect = true;

      for (var a = 0; a < inputBoxes.length; a++) {
        var userAnswer = normalizeFillAnswer(inputBoxes[a].value, _case);

        if (userAnswer === "") {
          questionCorrect = false;
          break;
        }

        var acceptedAnswers = [];

        /* ===============================
               MAIN ANSWER
            =============================== */

        if (fDataObj.answer && fDataObj.answer[a] != undefined) {
          acceptedAnswers.push(normalizeFillAnswer(fDataObj.answer[a], _case));
        }

        /* ===============================
               ALTERNATE ANSWERS
            =============================== */

        if (fDataObj.alternateanswer && fDataObj.alternateanswer.length > 0) {
          var alternateForThisInput = fDataObj.alternateanswer[a];

          if (Array.isArray(alternateForThisInput)) {
            for (var alt = 0; alt < alternateForThisInput.length; alt++) {
              acceptedAnswers.push(
                normalizeFillAnswer(alternateForThisInput[alt], _case),
              );
            }
          } else if (
            inputBoxes.length === 1 &&
            Array.isArray(fDataObj.alternateanswer)
          ) {
            for (var alt2 = 0; alt2 < fDataObj.alternateanswer.length; alt2++) {
              if (typeof fDataObj.alternateanswer[alt2] === "string") {
                acceptedAnswers.push(
                  normalizeFillAnswer(fDataObj.alternateanswer[alt2], _case),
                );
              }
            }
          }
        }

        console.log("User:", userAnswer, "Accepted:", acceptedAnswers);

        if (acceptedAnswers.indexOf(userAnswer) === -1) {
          questionCorrect = false;
          break;
        }
      }

      if (questionCorrect) {
        resultArr[i] = 1;

        if (elsQue[i].querySelector(".tick")) {
          elsQue[i].querySelector(".tick").style.display = "block";
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

        if (elsQue[i].querySelector(".cross")) {
          elsQue[i].querySelector(".cross").style.display = "block";
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

      if (elsQue[i].querySelectorAll(".icon_wrap").length > 0) {
        elsQue[i].querySelector(".icon_wrap").style.display = "block";
      }
    }

    allCorrect = resultArr.every(function (val) {
      return val === 1;
    });

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
