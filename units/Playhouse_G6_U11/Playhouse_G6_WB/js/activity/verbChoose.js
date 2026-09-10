window.VerbChoose = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

VerbChoose.prototype = {
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

    $(e).on("click", ".vc_option", function () {
      var option = $(this);

      var question = option.closest(".vc_question");

      // شيل التحديد من باقي الخيارات
      question.find(".vc_option").removeClass("selected");

      // حدد هذا الخيار
      option.addClass("selected");

      // اكتب الجواب بالـinput
      question.find(".vc_answer_input").val(option.attr("data-value"));

      // اخفي feedback القديم
      question.find(".vc_feedback .tick, .vc_feedback .cross").hide();

      self.updateControls();
    });
  },

  // =====================================================
  // CONTROLS
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var selected = $(e).find(".vc_option.selected").length;

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

    var questions = e.querySelectorAll(".vc_question");

    var allCorrect = true;

    for (var i = 0; i < questions.length; i++) {
      var question = questions[i];

      var input = question.querySelector(".vc_answer_input");

      var entered = (input.value || "").toLowerCase().trim();

      var correct = (data.questions[i].answer || "").toLowerCase().trim();

      var tick = question.querySelector(".vc_feedback .tick");

      var cross = question.querySelector(".vc_feedback .cross");

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

    // =====================================================
    // REMOVE SELECTED CIRCLE FROM ALL OPTIONS
    // =====================================================

    $(e).find(".vc_option").removeClass("selected");

    // =====================================================
    // CLEAR ALL INPUTS
    // =====================================================

    $(e).find(".vc_answer_input").val("");

    // =====================================================
    // HIDE FEEDBACK
    // =====================================================

    $(e).find(".vc_feedback .tick, .vc_feedback .cross").hide();

    // =====================================================
    // DISABLE CHECK
    // =====================================================

    $(".checkBtn").addClass("disabled");

    // =====================================================
    // DISABLE RESET
    // =====================================================

    $(".resetBtn").addClass("disabled");
  },

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
