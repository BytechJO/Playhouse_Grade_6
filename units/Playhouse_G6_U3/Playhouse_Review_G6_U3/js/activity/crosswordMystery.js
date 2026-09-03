window.CrosswordMystery = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

CrosswordMystery.prototype = {
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
    // INPUT
    // =================================================

    $(e).on("input", ".cwm_input:not([readonly])", function () {
      var input = $(this);

      var value = input
        .val()
        .toUpperCase()
        .replace(/[^A-Z]/g, "");

      input.val(value.slice(0, 1));

      // =================================================
      // AUTO NEXT
      // =================================================

      if (value != "") {
        self.moveNext(this);
      }

      self.clearWordFeedback(input.attr("data-word"));

      self.enableControls();
    });

    // =================================================
    // KEYDOWN
    // =================================================

    $(e).on("keydown", ".cwm_input:not([readonly])", function (event) {
      // backspace on empty cell
      if (event.key === "Backspace" && $(this).val() === "") {
        event.preventDefault();

        self.movePrevious(this);
      }

      // arrow keys
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();

        self.moveNext(this);
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();

        self.movePrevious(this);
      }
    });

    // =================================================
    // MYSTERY INPUT
    // =================================================

    $(e).on("input", ".cwm_mystery_input", function () {
      $(this).val(
        $(this)
          .val()
          .toUpperCase()
          .replace(/[^A-Z ]/g, ""),
      );

      $(e)
        .find(".cwm_mystery_feedback .tick, .cwm_mystery_feedback .cross")
        .hide();

      self.enableControls();
    });
  },

  // =====================================================
  // MOVE NEXT
  // =====================================================

  moveNext: function (current) {
    var wordNumber = current.getAttribute("data-word");

    var currentIndex = parseInt(current.getAttribute("data-index"));

    var inputs = this.ob.activity_area.querySelectorAll(
      '.cwm_input[data-word="' + wordNumber + '"]',
    );

    var nextIndex = currentIndex + 1;

    while (nextIndex < inputs.length) {
      var next = inputs[nextIndex];

      // skip readonly
      if (next.hasAttribute("readonly")) {
        nextIndex++;

        continue;
      }

      next.focus();

      next.select();

      return;
    }
  },

  // =====================================================
  // MOVE PREVIOUS
  // =====================================================

  movePrevious: function (current) {
    var wordNumber = current.getAttribute("data-word");

    var currentIndex = parseInt(current.getAttribute("data-index"));

    var inputs = this.ob.activity_area.querySelectorAll(
      '.cwm_input[data-word="' + wordNumber + '"]',
    );

    var previousIndex = currentIndex - 1;

    while (previousIndex >= 0) {
      var previous = inputs[previousIndex];

      if (previous.hasAttribute("readonly")) {
        previousIndex--;

        continue;
      }

      previous.focus();

      previous.select();

      return;
    }
  },

  // =====================================================
  // ENABLE CONTROLS
  // =====================================================

  enableControls: function () {
    $(".checkBtn").removeClass("disabled");

    $(".resetBtn").removeClass("disabled");
  },

  // =====================================================
  // CLEAR WORD FEEDBACK
  // =====================================================

  clearWordFeedback: function (wordNumber) {
    this.ob.activity_area
      .querySelectorAll(
        '.cwm_word_feedback[data-word="' +
          wordNumber +
          '"] .tick, ' +
          '.cwm_word_feedback[data-word="' +
          wordNumber +
          '"] .cross',
      )
      .forEach(function (icon) {
        icon.style.display = "none";
      });
  },

  // =====================================================
  // GET WORD VALUE
  // =====================================================

  getWordValue: function (wordNumber) {
    var inputs = this.ob.activity_area.querySelectorAll(
      '.cwm_input[data-word="' + wordNumber + '"]',
    );

    var value = "";

    for (var i = 0; i < inputs.length; i++) {
      value += (inputs[i].value || "").trim().toUpperCase();
    }

    return value;
  },

  // =====================================================
  // NORMALIZE
  // =====================================================

  normalize: function (value) {
    return (value || "").toUpperCase().replace(/[^A-Z]/g, "");
  },

  // =====================================================
  // VALIDATE
  // =====================================================

  validate: function () {
    var e = this.ob.activity_area;

    var data = this.ob.data_obj;

    var allCorrect = true;

    // =================================================
    // CHECK ALL 7 WORDS
    // =================================================

    for (var i = 0; i < data.words.length; i++) {
      var wordObj = data.words[i];

      var entered = this.getWordValue(wordObj.number);

      var correct = this.normalize(wordObj.answer);

      var feedback = e.querySelector(
        '.cwm_word_feedback[data-word="' + wordObj.number + '"]',
      );

      if (feedback != null) {
        var tick = feedback.querySelector(".tick");

        var cross = feedback.querySelector(".cross");

        if (tick != null) {
          tick.style.display = "none";
        }

        if (cross != null) {
          cross.style.display = "none";
        }

        if (entered === correct) {
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
    }

    // =================================================
    // MYSTERY
    // =================================================

    var mysteryInput = e.querySelector(".cwm_mystery_input");

    var mysteryEntered = this.normalize(mysteryInput.value);

    var mysteryCorrect = this.normalize(data.mysteryAnswer);

    var mysteryTick = e.querySelector(".cwm_mystery_feedback .tick");

    var mysteryCross = e.querySelector(".cwm_mystery_feedback .cross");

    if (mysteryTick != null) {
      mysteryTick.style.display = "none";
    }

    if (mysteryCross != null) {
      mysteryCross.style.display = "none";
    }

    if (mysteryEntered === mysteryCorrect) {
      if (mysteryTick != null) {
        mysteryTick.style.display = "block";
      }
    } else {
      if (mysteryCross != null) {
        mysteryCross.style.display = "block";
      }

      allCorrect = false;
    }

    showFeedback(true, allCorrect);

    return allCorrect;
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    // editable crossword cells only
    $(e).find(".cwm_input:not([readonly])").val("");

    $(e).find(".cwm_mystery_input").val("");

    $(e)
      .find(
        ".cwm_word_feedback .tick, " +
          ".cwm_word_feedback .cross, " +
          ".cwm_mystery_feedback .tick, " +
          ".cwm_mystery_feedback .cross",
      )
      .hide();

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  // =====================================================
  // INITIAL
  // =====================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
