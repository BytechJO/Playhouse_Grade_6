window.PrepCircleUnderline = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

PrepCircleUnderline.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.currentMode = (ob.data_obj.toolDefault || "circle").toLowerCase();

    this.listen();
  },

  // =====================================================
  // LISTEN
  // =====================================================

  listen: function () {
    var self = this;

    var e = this.ob.activity_area;

    // =================================================
    // TOOL CLICK
    // =================================================

    $(e).on("click", ".pcu_tool_btn", function () {
      $(e).find(".pcu_tool_btn").removeClass("active");

      $(this).addClass("active");

      self.currentMode = $(this).attr("data-mode");
    });

    // =================================================
    // WORD CLICK
    // =================================================

    $(e).on("click", ".pcu_token", function () {
      var token = $(this);

      // =================================================
      // UNDERLINE MODE
      // =================================================

      if (self.currentMode == "underline") {
        token.toggleClass("selected-underline");
      }

      // =================================================
      // CIRCLE MODE
      // =================================================
      else if (self.currentMode == "circle") {
        token.toggleClass("selected-circle");
      }

      // =================================================
      // CLEAR QUESTION FEEDBACK AFTER CHANGE
      // =================================================

      token.closest(".pcu_question").find(".tick, .cross").hide();

      // =================================================
      // ENABLE CONTROLS
      // =================================================

      $(".checkBtn").removeClass("disabled");

      $(".resetBtn").removeClass("disabled");
    });
  },

  // =====================================================
  // VALIDATE
  // =====================================================

  validate: function () {
    var e = this.ob.activity_area;

    var allCorrect = true;

    var questions = e.querySelectorAll(".pcu_question");

    // =================================================
    // EACH QUESTION
    // =================================================

    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];

      var tokens = q.querySelectorAll(".pcu_token");

      var questionCorrect = true;

      // =================================================
      // EACH TOKEN
      // =================================================

      for (var t = 0; t < tokens.length; t++) {
        var token = tokens[t];

        var role = token.getAttribute("data-role");

        var isCircled = token.classList.contains("selected-circle");

        var isUnderlined = token.classList.contains("selected-underline");

        // =================================================
        // CIRCLE
        //
        // ONLY PREPOSITION SHOULD BE CIRCLED
        // =================================================

        if (role == "prep") {
          if (!isCircled) {
            questionCorrect = false;
          }
        } else {
          if (isCircled) {
            questionCorrect = false;
          }
        }

        // =================================================
        // UNDERLINE
        //
        // ONLY OBJECT SHOULD BE UNDERLINED
        // =================================================

        if (role == "object") {
          if (!isUnderlined) {
            questionCorrect = false;
          }
        } else {
          if (isUnderlined) {
            questionCorrect = false;
          }
        }
      }

      // =================================================
      // RESET FEEDBACK
      // =================================================

      var tick = q.querySelector(".tick");

      var cross = q.querySelector(".cross");

      if (tick != null) {
        tick.style.display = "none";
      }

      if (cross != null) {
        cross.style.display = "none";
      }

      // =================================================
      // SHOW QUESTION RESULT
      // =================================================

      if (questionCorrect) {
        if (tick != null) {
          tick.style.display = "block";
        }
      } else {
        if (cross != null) {
          cross.style.display = "block";
        }

        allCorrect = false;
      }
    }

    // =====================================================
    // GLOBAL FEEDBACK
    // =====================================================

    showFeedback(true, allCorrect);

    return allCorrect;
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    // selections
    $(e).find(".pcu_token").removeClass("selected-circle selected-underline");

    // feedback
    $(e).find(".pcu_icon_wrap .tick, .pcu_icon_wrap .cross").hide();

    // tool state
    $(e).find(".pcu_tool_btn").removeClass("active");

    var defaultTool = $(e).find(
      '.pcu_tool_btn[data-mode="' + this.currentMode + '"]',
    );

    if (defaultTool.length > 0) {
      defaultTool.addClass("active");
    } else {
      $(e).find('.pcu_tool_btn[data-mode="circle"]').addClass("active");

      this.currentMode = "circle";
    }

    // controls
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
