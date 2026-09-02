window.SentenceColour = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

SentenceColour.prototype = {
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

    $(e).on("click", ".sc_choice", function () {
      var question = $(this).closest(".sc_question");

      // only one selection per row
      question.find(".sc_choice").removeClass("selected");

      $(this).addClass("selected");

      // clear old feedback
      question.find(".sc_feedback .tick, .sc_feedback .cross").hide();

      self.updateControls();
    });
  },

  // =====================================================
  // CONTROLS
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var selectedCount = $(e).find(".sc_choice.selected").length;

    if (selectedCount > 0) {
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

    var questions = e.querySelectorAll(".sc_question");

    for (var i = 0; i < questions.length; i++) {
      var question = questions[i];

      var selected = question.querySelector(".sc_choice.selected");

      var correctAnswer = data.questions[i].answer;

      var isCorrect = false;

      if (selected != null) {
        var selectedValue = selected.getAttribute("data-value");

        if (selectedValue === correctAnswer) {
          isCorrect = true;
        }
      }

      var tick = question.querySelector(".sc_feedback .tick");

      var cross = question.querySelector(".sc_feedback .cross");

      tick.style.display = "none";

      cross.style.display = "none";

      if (isCorrect) {
        tick.style.display = "block";
      } else {
        cross.style.display = "block";

        allCorrect = false;
      }
    }

    showFeedback(true, allCorrect);

    return allCorrect;
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    $(e).find(".sc_choice").removeClass("selected");

    $(e).find(".sc_feedback .tick, .sc_feedback .cross").hide();

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
