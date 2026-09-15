window.ReportedTickUnderline = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

ReportedTickUnderline.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.listen();
  },

  // =====================================================
  // LISTEN
  // =====================================================

  listen: function () {
    var self = this;

    var e = this.ob.activity_area;

    // =================================================
    // CHOOSE SENTENCE
    // =================================================

    $(e)
      .off("click.reportedTick", ".rtu_fake_check")

      .on(
        "click.reportedTick",
        ".rtu_fake_check",

        function (event) {
          event.stopPropagation();

          var choice = $(this).closest(".rtu_choice");

          var question = choice.closest(".rtu_question");

          // =================================================
          // IF THIS CHOICE ALREADY SELECTED
          // REMOVE IT
          // =================================================

          if (choice.hasClass("selected")) {
            choice.removeClass("selected");

            choice.find(".rtu_word").removeClass("underlined");
          } else {
            // only one checked sentence per question
            question.find(".rtu_choice").removeClass("selected");

            // remove previous underline
            question.find(".rtu_word").removeClass("underlined");

            choice.addClass("selected");
          }

          // clear old feedback
          question.find(".rtu_feedback .tick, .rtu_feedback .cross").hide();

          self.updateControls();
        },
      );

    // =================================================
    // CLICK WORD
    // ONLY SELECTED SENTENCE CAN BE UNDERLINED
    // =================================================

    $(e)
      .off("click.reportedWord", ".rtu_word")

      .on(
        "click.reportedWord",
        ".rtu_word",

        function (event) {
          event.stopPropagation();

          var word = $(this);

          var choice = word.closest(".rtu_choice");

          var question = word.closest(".rtu_question");

          // sentence is not checked
          if (!choice.hasClass("selected")) {
            return;
          }

          // remove old underlined word
          choice.find(".rtu_word").removeClass("underlined");

          // underline selected word
          word.addClass("underlined");

          // clear word feedback
          question
            .find(".rtu_word_feedback .tick, .rtu_word_feedback .cross")
            .hide();

          self.updateControls();
        },
      );
  },

  // =====================================================
  // UPDATE CONTROLS
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var checkedCount = $(e).find(".rtu_choice.selected").length;

    var underlinedCount = $(e).find(".rtu_word.underlined").length;

    if (checkedCount > 0 || underlinedCount > 0) {
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

    var allCorrect = true;

    $(e)
      .find(".rtu_question")
      .each(function () {
        var question = $(this);

        var correctChoice = String(question.attr("data-correct-choice"));

        var correctVerb = String(question.attr("data-correct-verb"))
          .toLowerCase()
          .trim();

        var selectedChoice = question.find(".rtu_choice.selected");

        var selectedChoiceKey = selectedChoice.attr("data-choice") || "";

        var selectedWord =
          selectedChoice.find(".rtu_word.underlined").attr("data-word") || "";

        selectedWord = String(selectedWord).toLowerCase().trim();

        // =================================================
        // CHECK SENTENCE
        // =================================================

        var choiceCorrect = selectedChoiceKey === correctChoice;

        // =================================================
        // CHECK WORD
        // =================================================

        var wordCorrect = choiceCorrect && selectedWord === correctVerb;

        // =================================================
        // CLEAR PREVIOUS FEEDBACK
        // =================================================

        question.find(".rtu_feedback .tick, .rtu_feedback .cross").hide();

        // =================================================
        // CHOICE FEEDBACK
        // =================================================

        if (choiceCorrect) {
          question.find(".rtu_choice_feedback .tick").show();
        } else {
          question.find(".rtu_choice_feedback .cross").show();
        }

        // =================================================
        // WORD FEEDBACK
        // =================================================

        if (wordCorrect) {
          question.find(".rtu_word_feedback .tick").show();
        } else {
          question.find(".rtu_word_feedback .cross").show();
        }

        if (!choiceCorrect || !wordCorrect) {
          allCorrect = false;
        }
      });

    showFeedback(true, allCorrect);

    return allCorrect;
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    // remove checked choices
    $(e).find(".rtu_choice").removeClass("selected");

    // remove underlines
    $(e).find(".rtu_word").removeClass("underlined");

    // hide all feedback
    $(e).find(".rtu_feedback .tick, .rtu_feedback .cross").hide();

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  // =====================================================
  // SCREEN
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
