//  ****************************************** //
//  FillIn - Version no: 1.2
//  Date updated - June 3, 2020
//  Date updated - August 12, 2020
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
    var self = this;
    var e = ob.activity_area;
    var inputs = e.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        $(this).css("color", "black");
        console.log($(this).data("type"));
        var v = this.value;
        /*if($(this).data('type') == 'number'){
                    if($.isNumeric(v) === false) {               
                        this.value = this.value.replace(/\D/g, '');           
                    }
                }*/
        if (
          typeof $(this).data("type") != undefined &&
          $(this).data("type") != null
        ) {
          var typ = $(this).data("type");
          if (typ == "text") {
            $(this).val(
              $(this)
                .val()
                .replace(/[^a-zA-Z\s'’‘"!]/g, ""),
            );
          } else if (typ == "number") {
            if ($.isNumeric(v) === false) {
              this.value = this.value.replace(/\D/g, "");
            }
          }
        }
        self.showTickCross();
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
    var self = this;
    var ob = this.ob;
    var $area = $(ob.activity_area);

    self.showTickCross(false);

    var $questions = $area.find(".que");

    var resultArr = [];

    // =====================================================
    // NORMALIZE
    // نخلي علامات الاقتباس والتعجب والـ apostrophe ما تفرق
    // =====================================================
    function normalizeAnswer(value) {
      if (value === undefined || value === null) {
        return "";
      }

      value = String(value);

      // small letters
      value = value.toLowerCase();

      // توحيد أنواع apostrophe
      value = value.replace(/[’‘`´]/g, "'");

      // شيل apostrophe بالكامل
      value = value.replace(/'/g, "");

      // شيل علامات الاقتباس
      value = value.replace(/["“”]/g, "");

      // شيل punctuation
      value = value.replace(/[!?.:,;]/g, "");

      // شيل المسافات الزائدة
      value = value.replace(/\s+/g, " ");

      // trim
      value = $.trim(value);

      return value;
    }

    // =====================================================
    // BUILD CORRECT ANSWERS LIST
    // نجمع كل الإجابات بغض النظر عن ترتيب الأسئلة
    // =====================================================

    var correctAnswers = [];

    ob.data_obj.questions.forEach(function (question) {
      if (question.answer && question.answer.length > 0) {
        question.answer.forEach(function (answer) {
          correctAnswers.push(normalizeAnswer(answer));
        });
      }
    });

    // =====================================================
    // USED ANSWERS
    // عشان كل كلمة تستخدم مرة واحدة فقط
    // =====================================================

    var usedCorrectAnswers = [];

    // =====================================================
    // CHECK EACH INPUT
    // =====================================================

    $questions.each(function (questionIndex) {
      var $question = $(this);

      var $inputs = $question.find("input");

      var questionCorrect = true;

      $inputs.each(function () {
        var userAnswer = normalizeAnswer($(this).val());

        // فاضي = غلط
        if (userAnswer === "") {
          questionCorrect = false;

          return;
        }

        // =============================================
        // دور على جواب مطابق ولسا مش مستخدم
        // =============================================

        var matchedIndex = -1;

        for (var i = 0; i < correctAnswers.length; i++) {
          if (
            correctAnswers[i] === userAnswer &&
            usedCorrectAnswers.indexOf(i) === -1
          ) {
            matchedIndex = i;

            break;
          }
        }

        // =============================================
        // FOUND
        // =============================================

        if (matchedIndex !== -1) {
          // سجله إنه انستخدم
          usedCorrectAnswers.push(matchedIndex);
        } else {
          // يا إما الكلمة غلط
          // أو موجودة بس مستخدمة قبل
          questionCorrect = false;
        }
      });

      resultArr[questionIndex] = questionCorrect ? 1 : 0;
    });

    // =====================================================
    // ALL CORRECT
    // =====================================================

    var allCorrect =
      resultArr.length === $questions.length &&
      resultArr.every(function (result) {
        return result === 1;
      });

    self.showTickCross(true, resultArr);

    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
    }
  },
  showTickCross: function (aBool, aArr) {
    var ob = this.ob;
    var e = ob.activity_area;
    var elsQue = e.querySelectorAll(".que");
    if (!aBool) {
      for (var i = 0; i < elsQue.length; i++) {
        elsQue[i].querySelector(".icon_wrap").style.display = "none";
        elsQue[i].querySelector(".tick").style.display = "none";
        elsQue[i].querySelector(".cross").style.display = "none";
      }
    } else {
      for (var i = 0; i < elsQue.length; i++) {
        elsQue[i].querySelector(".icon_wrap").style.display = "block";
        if (aArr.length > 0) {
          if (aArr[i] == 1) {
            elsQue[i].querySelector(".tick").style.display = "block";
            elsQue[i].querySelector(".cross").style.display = "none";
          } else {
            elsQue[i].querySelector(".tick").style.display = "none";
            elsQue[i].querySelector(".cross").style.display = "block";
          }
        }
      }
    }
  },
  reset: function () {
    var self = this;
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
    self.showTickCross(false);
    document.getElementsByClassName("checkBtn")[0].classList.add("disabled");
  },
  initialSettings: function () {
    this.reset();
    initialSettingsDone(1);
  },
};
