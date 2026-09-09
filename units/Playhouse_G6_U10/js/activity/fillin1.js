//  ****************************************** //
//  FillIn - Custom Prefix Activity
//  ****************************************** //

window.FillIn = function (obj, dataObj) {
  ob = obj[0].getElementsByClassName("options");

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

    this.listen(ob);
  },

  // =========================================================
  // NORMALIZE
  // =========================================================

  normalize: function (value) {
    if (value == undefined || value == null) {
      return "";
    }

    return String(value).toLowerCase().replace(/\s+/g, "").trim();
  },

  // =========================================================
  // LISTEN
  // =========================================================

  listen: function (ob) {
    var self = this;

    var e = ob.activity_area;

    var inputs = e.querySelectorAll(".prefix_input");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        this.style.color = "black";

        this.classList.remove("input_correct");

        this.classList.remove("input_wrong");

        self.hideIcons();

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
  // HIDE ICONS
  // =========================================================

  hideIcons: function () {
    $(".group_tick").hide();

    $(".group_cross").hide();
  },

  // =========================================================
  // CHECK GROUP
  //
  // ORDER DOES NOT MATTER
  // DUPLICATE ANSWERS ARE NOT ALLOWED
  // =========================================================

  validateGroup: function (selector, correctAnswers) {
    var self = this;

    var inputs = this.ob.activity_area.querySelectorAll(selector);

    var validAnswers = correctAnswers.map(function (answer) {
      return self.normalize(answer);
    });

    var usedAnswers = [];
    var correctCount = 0;
    var hasWrong = false;

    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];

      var value = self.normalize(input.value);

      var holder = input.closest(".prefix_input_holder");

      var tick = holder.querySelector(".input_tick");

      var cross = holder.querySelector(".input_cross");

      tick.style.display = "none";
      cross.style.display = "none";

      input.classList.remove("input_correct");
      input.classList.remove("input_wrong");

      // فارغ
      if (value == "") {
        continue;
      }

      var answerIndex = validAnswers.indexOf(value);

      // =========================================
      // CORRECT + NOT DUPLICATED
      // =========================================
      if (answerIndex !== -1 && usedAnswers.indexOf(value) === -1) {
        usedAnswers.push(value);

        correctCount++;

        input.classList.add("input_correct");

        tick.style.display = "block";
        cross.style.display = "none";
      }

      // =========================================
      // WRONG OR DUPLICATED
      // =========================================
      else {
        hasWrong = true;

        input.classList.add("input_wrong");

        tick.style.display = "none";
        cross.style.display = "block";
      }
    }

    var groupCorrect =
      correctCount === validAnswers.length && hasWrong === false;

    return {
      correct: groupCorrect,
      count: correctCount,
      required: validAnswers.length,
    };
  },

  // =========================================================
  // VALIDATE
  // =========================================================

  validate: function () {
    var ob = this.ob;

    var reResult = this.validateGroup(".re_input", ob.data_obj.reAnswers);

    var preResult = this.validateGroup(".pre_input", ob.data_obj.preAnswers);

    var allCorrect = reResult.correct && preResult.correct;

    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
    }
  },

  // =========================================================
  // RESET
  // =========================================================

  reset: function () {
    var e = this.ob.activity_area;

    var inputs = e.querySelectorAll(".prefix_input");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";

      inputs[i].style.color = "black";

      inputs[i].classList.remove("input_correct");

      inputs[i].classList.remove("input_wrong");
    }

    this.hideIcons();

    document.getElementsByClassName("checkBtn")[0].classList.add("disabled");
  },

  // =========================================================
  // INITIAL
  // =========================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
