window.FindFix = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

FindFix.prototype = {
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
    // CLICK WORD
    // =================================================

    $(e).on("click", ".ff_word", function () {
      $(this).toggleClass("selected");

      // clear only sentence feedback
      $(this)
        .closest(".ff_question")
        .find(".ff_sentence_feedback .tick, " + ".ff_sentence_feedback .cross")
        .hide();

      self.enableControls();
    });

    // =================================================
    // INPUT
    // =================================================

    $(e).on("input", ".ff_answer_input", function () {
      $(this)
        .closest(".ff_question")
        .find(".ff_answer_feedback .tick, " + ".ff_answer_feedback .cross")
        .hide();

      self.enableControls();
    });
  },

  // =====================================================
  // ENABLE BUTTONS
  // =====================================================

  enableControls: function () {
    $(".checkBtn").removeClass("disabled");

    $(".resetBtn").removeClass("disabled");
  },

  // =====================================================
  // NORMALIZE WORD
  // =====================================================

  normalizeWord: function (value) {
    return (value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  },

  // =====================================================
  // NORMALIZE SENTENCE
  //
  // ignores:
  // case
  // punctuation
  // extra spaces
  // =====================================================

  normalizeSentence: function (value) {
    return (value || "")
      .toLowerCase()

      .replace(/[’‘]/g, "'")

      .replace(/[^a-z0-9\s']/g, "")

      .replace(/\s+/g, " ")

      .trim();
  },

  // =====================================================
  // SHOW FEEDBACK
  // =====================================================

  setFeedback: function (feedback, correct) {
    if (feedback == null) {
      return;
    }

    var tick = feedback.querySelector(".tick");

    var cross = feedback.querySelector(".cross");

    if (tick != null) {
      tick.style.display = "none";
    }

    if (cross != null) {
      cross.style.display = "none";
    }

    if (correct) {
      if (tick != null) {
        tick.style.display = "block";
      }
    } else {
      if (cross != null) {
        cross.style.display = "block";
      }
    }
  },

  // =====================================================
  // VALIDATE
  // =====================================================

  validate: function () {
    var e = this.ob.activity_area;

    var data = this.ob.data_obj;

    var allCorrect = true;

    var questionElements = e.querySelectorAll(".ff_question");

    for (var i = 0; i < questionElements.length; i++) {
      var questionElement = questionElements[i];

      var questionData = data.questions[i];

      // =================================================
      // PART 1
      // UNDERLINE WRONG ADJECTIVE
      // =================================================

      var selectedWords = questionElement.querySelectorAll(".ff_word.selected");

      var selectionCorrect = false;

      // لازم يختار كلمة واحدة فقط
      if (selectedWords.length === 1) {
        var selectedWord = this.normalizeWord(
          selectedWords[0].getAttribute("data-word"),
        );

        var correctWord = this.normalizeWord(questionData.wrongWord);

        if (selectedWord === correctWord) {
          selectionCorrect = true;
        }
      }

      this.setFeedback(
        questionElement.querySelector(".ff_sentence_feedback"),

        selectionCorrect,
      );

      if (!selectionCorrect) {
        allCorrect = false;
      }

      // =================================================
      // PART 2
      // CORRECTED SENTENCE
      // =================================================

      var input = questionElement.querySelector(".ff_answer_input");

      var entered = this.normalizeSentence(input.value);

      var answerCorrect = false;

      for (var a = 0; a < questionData.answers.length; a++) {
        var possibleAnswer = this.normalizeSentence(questionData.answers[a]);

        if (entered === possibleAnswer) {
          answerCorrect = true;

          break;
        }
      }

      this.setFeedback(
        questionElement.querySelector(".ff_answer_feedback"),

        answerCorrect,
      );

      if (!answerCorrect) {
        allCorrect = false;
      }
    }

    // =====================================================
    // GENERAL FEEDBACK
    // =====================================================

    showFeedback(true, allCorrect);

    return allCorrect;
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    // remove underline
    $(e).find(".ff_word").removeClass("selected");

    // clear inputs
    $(e).find(".ff_answer_input").val("");

    // hide all feedback
    $(e)
      .find(
        ".ff_sentence_feedback .tick, " +
          ".ff_sentence_feedback .cross, " +
          ".ff_answer_feedback .tick, " +
          ".ff_answer_feedback .cross",
      )
      .hide();

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  // =====================================================
  // INITIAL SETTINGS
  // =====================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
