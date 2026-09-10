window.PreferenceChoose = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

PreferenceChoose.prototype = {
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

    $(e).on("change", ".pc_checkbox", function () {
      var checkbox = $(this);

      var question = checkbox.closest(".pc_question");

      // =================================================
      // ONLY ONE CHECKBOX PER QUESTION
      // =================================================

      question.find(".pc_checkbox").not(this).prop("checked", false);

      var input = question.find(".pc_answer_input");

      // =================================================
      // WRITE VALUE TO INPUT
      // =================================================

      if (checkbox.prop("checked")) {
        input.val(checkbox.attr("data-value"));
      } else {
        input.val("");
      }

      // clear old feedback
      question.find(".pc_feedback .tick, .pc_feedback .cross").hide();

      self.updateControls();
    });
  },

  // =====================================================
  // UPDATE CONTROLS
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var selected = $(e).find(".pc_checkbox:checked").length;

    if (selected > 0) {
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

    var questions = e.querySelectorAll(".pc_question");

    var allCorrect = true;

    for (var i = 0; i < questions.length; i++) {
      var question = questions[i];

      var input = question.querySelector(".pc_answer_input");

      var entered = (input.value || "").toLowerCase().trim();

      var correct = (data.questions[i].answer || "").toLowerCase().trim();

      var tick = question.querySelector(".pc_feedback .tick");

      var cross = question.querySelector(".pc_feedback .cross");

      tick.style.display = "none";

      cross.style.display = "none";

      if (entered === correct) {
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

    $(e).find(".pc_checkbox").prop("checked", false);

    $(e).find(".pc_answer_input").val("");

    $(e).find(".pc_feedback .tick, .pc_feedback .cross").hide();

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
