window.PrepCircleUnderline = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

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

PrepCircleUnderline.prototype = {
  init: function (ob) {
    this.ob = ob;
    this.currentMode = (ob.data_obj.toolDefault || "underline").toLowerCase();
    this.listen(ob);
  },

  listen: function (ob) {
    var self = this;
    var e = ob.activity_area;

    // tool switch
    $(e).on("click", ".pcu_tool_btn", function () {
      $(".pcu_tool_btn", e).removeClass("active");
      $(this).addClass("active");
      self.currentMode = $(this).attr("data-mode");
    });

    // token click
    $(e).on("click", ".pcu_token", function () {
      if (self.currentMode == "underline") {
        $(this).toggleClass("selected-underline");
      } else if (self.currentMode == "circle") {
        $(this).toggleClass("selected-circle");
      }

      $(this).closest(".pcu_question").find(".tick, .cross").hide();

      document
        .getElementsByClassName("checkBtn")[0]
        .classList.remove("disabled");
      document
        .getElementsByClassName("resetBtn")[0]
        .classList.remove("disabled");
    });
  },

  validate: function () {
    var e = this.ob.activity_area;
    var allCorrect = true;
    var questions = e.querySelectorAll(".pcu_question");

    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      var tokens = q.querySelectorAll(".pcu_token");

      var ok = true;

      for (var t = 0; t < tokens.length; t++) {
        var token = tokens[t];
        var role = token.getAttribute("data-role");
        var isCircled = token.classList.contains("selected-circle");
        var isUnderlined = token.classList.contains("selected-underline");

        // CIRCLE VALIDATION
        if (role == "prep") {
          if (!isCircled) {
            ok = false;
          }
        } else {
          if (isCircled) {
            ok = false;
          }
        }

        // UNDERLINE VALIDATION
        if (role == "prep" || role == "phrase") {
          if (!isUnderlined) {
            ok = false;
          }
        } else {
          if (isUnderlined) {
            ok = false;
          }
        }
      }

      q.querySelector(".tick").style.display = "none";
      q.querySelector(".cross").style.display = "none";

      if (ok) {
        q.querySelector(".tick").style.display = "block";
      } else {
        q.querySelector(".cross").style.display = "block";
        allCorrect = false;
      }
    }

    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
    }
  },

  reset: function () {
    var e = this.ob.activity_area;

    $(e).find(".pcu_token").removeClass("selected-circle selected-underline");
    $(e).find(".tick, .cross").hide();

    $(".pcu_tool_btn", e).removeClass("active");
    $('.pcu_tool_btn[data-mode="' + this.currentMode + '"]', e).addClass(
      "active",
    );

    document.getElementsByClassName("checkBtn")[0].classList.add("disabled");
    document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
  },

  initialSettings: function () {
    this.reset();
    initialSettingsDone(1);
  },
};
