window.ConversationUnderline = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

ConversationUnderline.prototype = {
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

    $(e)
      .off("click.conversationUnderline", ".cu_word")
      .on("click.conversationUnderline", ".cu_word", function () {
        $(this).toggleClass("selected");

        self.updateControls();
      });
  },

  // =====================================================
  // UPDATE BUTTONS
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var selectedCount = $(e).find(".cu_word.selected").length;

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

    var allWords = $(e).find(".cu_word");

    var selectedWords = $(e).find(".cu_word.selected");

    var allCorrect = selectedWords.length === allWords.length;

    // hide both first
    $(e).find(".cu_main_feedback .tick, .cu_main_feedback .cross").hide();

    if (allCorrect) {
      $(e).find(".cu_main_feedback .tick").show();
    } else {
      $(e).find(".cu_main_feedback .cross").show();
    }

    showFeedback(true, allCorrect);

    return allCorrect;
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    // remove underline
    $(e).find(".cu_word").removeClass("selected");

    // hide main feedback
    $(e).find(".cu_main_feedback .tick, .cu_main_feedback .cross").hide();

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
