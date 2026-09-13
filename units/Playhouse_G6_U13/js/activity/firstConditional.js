window.FirstConditional = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

FirstConditional.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.listen();
  },

  // =====================================================
  // NORMALIZE
  // =====================================================

  normalize: function (value) {
    return String(value || "")
      .toLowerCase()

      .replace(/[’']/g, "'")

      .replace(/[.,!?]/g, "")

      .replace(/\s+/g, " ")

      .trim();
  },

  // =====================================================
  // LISTEN
  // =====================================================

  listen: function () {
    var self = this;

    var e = this.ob.activity_area;

    // =================================================
    // STUDENT CHECK
    // =================================================

    $(e)
      .off("click.firstConditional", ".fc_student_check")

      .on(
        "click.firstConditional",
        ".fc_student_check",

        function () {
          var question = $(this).closest(".fc_question");

          // toggle check
          $(this).toggleClass("selected");

          // hide old feedback
          question.find(".fc_feedback .tick, .fc_feedback .cross").hide();

          self.updateControls();
        },
      );

    // =================================================
    // INPUT
    // =================================================

    $(e)
      .off("input.firstConditional", ".fc_rewrite_input")

      .on(
        "input.firstConditional",
        ".fc_rewrite_input",

        function () {
          var question = $(this).closest(".fc_question");

          question.find(".fc_feedback .tick, .fc_feedback .cross").hide();

          self.updateControls();
        },
      );
  },

  // =====================================================
  // UPDATE CONTROLS
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var hasCheck = $(e).find(".fc_student_check.selected").length > 0;

    var hasText = false;

    $(e)
      .find(".fc_rewrite_input")
      .each(function () {
        if ($.trim($(this).val()) !== "") {
          hasText = true;
        }
      });

    if (hasCheck || hasText) {
      $(".checkBtn").removeClass("disabled");

      $(".resetBtn").removeClass("disabled");
    } else {
      $(".checkBtn").addClass("disabled");

      $(".resetBtn").addClass("disabled");
    }
  },

  // =====================================================
  // VALIDATE
  // =====================================================

  validate: function () {
    var e = this.ob.activity_area;

    var data = this.ob.data_obj;

    var allCorrect = true;

    $(e)
      .find(".fc_question")
      .each(function (index) {
        var question = $(this);

        var q = data.questions[index];

        var isChecked = question.find(".fc_student_check").hasClass("selected");

        var entered = selfSafeNormalize(
          question.find(".fc_rewrite_input").val(),
        );

        var correctAnswer = selfSafeNormalize(q.answer);

        var isCorrect = false;

        // =========================================
        // CORRECT SENTENCE
        // =========================================

        if (q.type === "correct") {
          if (isChecked === true && entered === "") {
            isCorrect = true;
          }
        }

        // =========================================
        // REWRITE SENTENCE
        // =========================================
        else if (q.type === "rewrite") {
          if (isChecked === false && entered === correctAnswer) {
            isCorrect = true;
          }
        }

        // =========================================
        // FEEDBACK
        // =========================================

        question.find(".fc_feedback .tick, .fc_feedback .cross").hide();

        if (isCorrect) {
          question.find(".fc_feedback .tick").show();
        } else {
          question.find(".fc_feedback .cross").show();

          allCorrect = false;
        }
      });

    showFeedback(true, allCorrect);

    return allCorrect;

    // =================================================
    // LOCAL NORMALIZE
    // =================================================

    function selfSafeNormalize(value) {
      return String(value || "")
        .toLowerCase()

        .replace(/[’']/g, "'")

        .replace(/[.,!?]/g, "")

        .replace(/\s+/g, " ")

        .trim();
    }
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    // remove student checks
    $(e).find(".fc_student_check").removeClass("selected");

    // clear inputs
    $(e).find(".fc_rewrite_input").val("");

    // hide feedback
    $(e).find(".fc_feedback .tick, .fc_feedback .cross").hide();

    // disable controls
    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  // =====================================================
  // SCREEN ADJUST
  // =====================================================

  screenPoseAdjustments: function () {},

  // =====================================================
  // INITIAL SETTINGS
  // =====================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
