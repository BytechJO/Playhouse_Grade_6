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

    // =========================================================
    // FLEXIBLE INPUTS
    // =========================================================

    /*
        flexibleInputs:
        بعرفنا أي input تابع لأي flexible group

        flexibleInputResults:
        النتيجة لكل input لحاله
        true  = صح
        false = غلط
    */

    var flexibleInputs = {};
    var flexibleInputResults = {};

    // =========================================================
    // PREPARE FLEXIBLE GROUPS
    // =========================================================

    if (
      ob.data_obj.flexibleGroups != undefined &&
      ob.data_obj.flexibleGroups != null &&
      ob.data_obj.flexibleGroups.length > 0
    ) {
      ob.data_obj.flexibleGroups.forEach(function (group, groupIndex) {
        // =============================================
        // عدد مرات السماح بكل جواب
        // =============================================

        var allowedCounts = {};

        group.answers.forEach(function (answer) {
          var normalizedAnswer = (answer || "")
            .toLowerCase()
            .replace(/\s/g, "");

          if (allowedCounts[normalizedAnswer] == undefined) {
            allowedCounts[normalizedAnswer] = 0;
          }

          allowedCounts[normalizedAnswer]++;
        });

        // =============================================
        // عدد المرات المستخدمة حاليًا
        // =============================================

        var usedCounts = {};

        // =============================================
        // افحص كل input لحاله
        // =============================================

        group.inputs.forEach(function (item) {
          var key = item.questionIndex + "_" + item.inputIndex;

          flexibleInputs[key] = groupIndex;

          var questionElement = e.querySelector(
            '.que[data-qno="' + (item.questionIndex + 1) + '"]',
          );

          if (!questionElement) {
            flexibleInputResults[key] = false;
            return;
          }

          var inputs = questionElement.querySelectorAll("input");

          var input = inputs[item.inputIndex];

          if (!input) {
            flexibleInputResults[key] = false;
            return;
          }

          var value = (input.value || "").toLowerCase().replace(/\s/g, "");

          // =========================================
          // EMPTY
          // =========================================

          if (value === "") {
            flexibleInputResults[key] = false;
            return;
          }

          // =========================================
          // الكلمات المسموحة لهذا الـ input
          // =========================================

          var allowedForThisInput = [];

          if (item.allowed != undefined && item.allowed != null) {
            allowedForThisInput = item.allowed.map(function (answer) {
              return (answer || "").toLowerCase().replace(/\s/g, "");
            });
          } else {
            // إذا ما حددنا allowed
            // استخدم answers تبع المجموعة كاملة

            allowedForThisInput = group.answers.map(function (answer) {
              return (answer || "").toLowerCase().replace(/\s/g, "");
            });
          }

          // =========================================
          // هل الكلمة مسموحة بهذا المكان؟
          // =========================================

          if (allowedForThisInput.indexOf(value) === -1) {
            flexibleInputResults[key] = false;
            return;
          }

          // =========================================
          // هل الكلمة موجودة بالمجموعة أصلًا؟
          // =========================================

          if (allowedCounts[value] == undefined) {
            flexibleInputResults[key] = false;
            return;
          }

          // =========================================
          // USED COUNT
          // =========================================

          if (usedCounts[value] == undefined) {
            usedCounts[value] = 0;
          }

          // =========================================
          // PREVENT DUPLICATES
          // =========================================

          if (usedCounts[value] < allowedCounts[value]) {
            flexibleInputResults[key] = true;

            usedCounts[value]++;
          } else {
            flexibleInputResults[key] = false;
          }
        });
      });
    }

    // =========================================================
    // QUESTIONS LOOP
    // =========================================================

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      // =====================================================
      // ICONS
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
      // CASE
      // =====================================================

      var _case =
        fDataObj.strictcase != undefined && fDataObj.strictcase != null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      // =====================================================
      // CORRECT ANSWERS
      // =====================================================

      var _cAns = getStrArray(fDataObj.answer, "activity");

      var _uAns = [];

      var _isReadOnly = [];

      var _corr = 0;

      var _wrong = 0;

      var inputBoxes = elsQue[i].querySelectorAll("input");

      // =====================================================
      // GET USER ANSWERS
      // =====================================================

      if (inputBoxes.length > 0) {
        for (var a = 0; a < inputBoxes.length; a++) {
          _isReadOnly[a] =
            inputBoxes[a].getAttribute("disabled") == null &&
            inputBoxes[a].getAttribute("readonly") == null
              ? 0
              : 1;

          var flexKey = fIndx - 1 + "_" + a;

          // =================================================
          // FLEXIBLE INPUT
          // =================================================

          if (flexibleInputs[flexKey] != undefined) {
            /*
                        لازم نحط قيمة حتى
                        _uAns.length
                        يظل صحيح
                    */

            _uAns[a] = "__FLEX__";
          }

          // =================================================
          // NORMAL INPUT
          // =================================================
          else {
            if (inputBoxes[a].value.length > 0) {
              if (inputBoxes[a].dataset.type != "number") {
                _uAns[a] =
                  _case == "yes"
                    ? inputBoxes[a].value
                    : inputBoxes[a].value.toLowerCase();
              } else {
                _uAns[a] = inputBoxes[a].value;
              }
            }
          }
        }
      }

      // =====================================================
      // SHOW ICON
      // =====================================================

      elsQue[i].dataset.showIcon =
        _isReadOnly.join("").split("1")[0].length == _cAns.length;

      // =====================================================
      // VALIDATE
      // =====================================================

      if (_uAns.length > 0 && _cAns.length == _uAns.length) {
        for (var cc = 0; cc < _cAns.length; cc++) {
          var flexKey = fIndx - 1 + "_" + cc;

          // =================================================
          // FLEXIBLE
          // =================================================

          if (flexibleInputs[flexKey] != undefined) {
            /*
                        هون الفرق الأساسي:
                        ما بنفحص المجموعة كلها.

                        بنفحص هذا الـ input
                        لحاله.
                    */

            if (flexibleInputResults[flexKey] === true) {
              _corr++;
            } else {
              _wrong++;
            }

            continue;
          }

          // =================================================
          // NORMAL
          // =================================================

          _cAns[cc] = _case == "yes" ? _cAns[cc] : _cAns[cc].toLowerCase();

          _cAns[cc] = _cAns[cc].replace(/\s/g, "");

          if (_uAns[cc] != undefined) {
            _uAns[cc] = _uAns[cc].replace(/\s/g, "");
          }

          if (_cAns[cc] == _uAns[cc]) {
            _corr++;
          } else {
            _wrong++;
          }
        }
      } else {
        _wrong++;
      }

      // =====================================================
      // QUESTION RESULT
      // =====================================================

      if (_corr == _uAns.length && _wrong == 0) {
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

      // =====================================================
      // ICON WRAPPER
      // =====================================================

      if (elsQue[i].querySelectorAll(".icon_wrap").length > 0) {
        if (elsQue[i].dataset.showIcon == "true") {
          elsQue[i].querySelector(".icon_wrap").style.display = "block";
        }
      }
    }

    // =========================================================
    // FINAL RESULT
    // =========================================================

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
