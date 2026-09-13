window.LessWordSearch = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

LessWordSearch.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.isSelecting = false;

    this.startCell = null;

    this.endCell = null;

    this.foundWords = [];

    this.foundLines = [];

    this.listen();
  },

  // =====================================================
  // NORMALIZE
  // =====================================================

  normalizeWord: function (word) {
    return String(word || "")
      .toLowerCase()
      .trim();
  },

  // =====================================================
  // LISTEN
  // =====================================================

  listen: function () {
    var self = this;

    var e = this.ob.activity_area;

    // =================================================
    // MOUSE DOWN
    // =================================================

    $(e)
      .off("mousedown.lessWordSearch", ".lws_cell")
      .on("mousedown.lessWordSearch", ".lws_cell", function (event) {
        event.preventDefault();

        self.isSelecting = true;

        self.startCell = this;

        self.endCell = this;

        self.drawPreview();
      });

    // =================================================
    // MOUSE ENTER
    // =================================================

    $(e)
      .off("mouseenter.lessWordSearch", ".lws_cell")
      .on("mouseenter.lessWordSearch", ".lws_cell", function () {
        if (!self.isSelecting) {
          return;
        }

        self.endCell = this;

        self.drawPreview();
      });

    // =================================================
    // MOUSE UP
    // =================================================

    $(document)
      .off("mouseup.lessWordSearch")
      .on("mouseup.lessWordSearch", function () {
        if (!self.isSelecting) {
          return;
        }

        self.isSelecting = false;

        self.finishSelection();
      });

    // =================================================
    // INPUT
    // =================================================

    $(e)
      .off("input.lessWordSearch", ".lws_answer_input")
      .on("input.lessWordSearch", ".lws_answer_input", function () {
        $(this).closest(".lws_answer_item").find(".tick, .cross").hide();

        self.updateControls();
      });

    // =================================================
    // TOUCH START
    // =================================================

    $(e)
      .off("touchstart.lessWordSearch", ".lws_cell")
      .on("touchstart.lessWordSearch", ".lws_cell", function (event) {
        self.isSelecting = true;

        self.startCell = this;

        self.endCell = this;

        self.drawPreview();

        event.preventDefault();
      });

    // =================================================
    // TOUCH MOVE
    // =================================================

    $(e)
      .off("touchmove.lessWordSearch", ".lws_grid_wrap")
      .on("touchmove.lessWordSearch", ".lws_grid_wrap", function (event) {
        if (!self.isSelecting) {
          return;
        }

        var touch = event.originalEvent.touches[0];

        var element = document.elementFromPoint(touch.clientX, touch.clientY);

        var cell = $(element).closest(".lws_cell")[0];

        if (cell) {
          self.endCell = cell;

          self.drawPreview();
        }

        event.preventDefault();
      });

    // =================================================
    // TOUCH END
    // =================================================

    $(e)
      .off("touchend.lessWordSearch", ".lws_grid_wrap")
      .on("touchend.lessWordSearch", ".lws_grid_wrap", function () {
        if (!self.isSelecting) {
          return;
        }

        self.isSelecting = false;

        self.finishSelection();
      });
  },

  // =====================================================
  // GET CELL DATA
  // =====================================================

  getCellData: function (cell) {
    return {
      row: parseInt($(cell).attr("data-row"), 10),

      col: parseInt($(cell).attr("data-col"), 10),
    };
  },

  // =====================================================
  // GET SELECTED CELLS
  // =====================================================

  getSelectedCells: function (startCell, endCell) {
    var start = this.getCellData(startCell);

    var end = this.getCellData(endCell);

    var rowDiff = end.row - start.row;

    var colDiff = end.col - start.col;

    // only horizontal / vertical / diagonal
    if (
      rowDiff !== 0 &&
      colDiff !== 0 &&
      Math.abs(rowDiff) !== Math.abs(colDiff)
    ) {
      return [];
    }

    var rowStep = rowDiff === 0 ? 0 : rowDiff > 0 ? 1 : -1;

    var colStep = colDiff === 0 ? 0 : colDiff > 0 ? 1 : -1;

    var length = Math.max(Math.abs(rowDiff), Math.abs(colDiff)) + 1;

    var cells = [];

    for (var i = 0; i < length; i++) {
      var row = start.row + rowStep * i;

      var col = start.col + colStep * i;

      var cell = $(this.ob.activity_area).find(".lws_r" + row + "_c" + col)[0];

      if (cell) {
        cells.push(cell);
      }
    }

    return cells;
  },

  // =====================================================
  // GET WORD FROM CELLS
  // =====================================================

  getWordFromCells: function (cells) {
    var word = "";

    for (var i = 0; i < cells.length; i++) {
      word += $(cells[i]).attr("data-letter");
    }

    return this.normalizeWord(word);
  },

  // =====================================================
  // FINISH SELECTION
  // =====================================================

  finishSelection: function () {
    this.clearPreview();

    if (!this.startCell || !this.endCell) {
      return;
    }

    var cells = this.getSelectedCells(this.startCell, this.endCell);

    if (cells.length === 0) {
      return;
    }

    var selectedWord = this.getWordFromCells(cells);

    var reversedWord = selectedWord.split("").reverse().join("");

    var actualWord = null;

    for (var i = 0; i < this.ob.data_obj.words.length; i++) {
      var word = this.normalizeWord(this.ob.data_obj.words[i]);

      if (word === selectedWord || word === reversedWord) {
        actualWord = word;

        break;
      }
    }

    if (actualWord == null) {
      return;
    }

    // =================================================
    // PREVENT DUPLICATE FOUND WORD
    // =================================================

    if (this.foundWords.indexOf(actualWord) !== -1) {
      return;
    }

    // =================================================
    // SAVE
    // =================================================

    this.foundWords.push(actualWord);

    var lineObject = {
      word: actualWord,

      startCell: cells[0],

      endCell: cells[cells.length - 1],

      number: this.foundWords.length,
    };

    this.foundLines.push(lineObject);

    this.drawSavedLine(lineObject);

    this.drawFoundNumber(lineObject);

    this.updateControls();
  },

  // =====================================================
  // CELL CENTER
  // =====================================================

  getCellCenter: function (cell) {
    var wrap = $(this.ob.activity_area).find(".lws_grid_wrap")[0];

    var cellRect = cell.getBoundingClientRect();

    var wrapRect = wrap.getBoundingClientRect();

    return {
      x: cellRect.left - wrapRect.left + cellRect.width / 2,

      y: cellRect.top - wrapRect.top + cellRect.height / 2,
    };
  },

  // =====================================================
  // PREVIEW
  // =====================================================

  drawPreview: function () {
    if (!this.startCell || !this.endCell) {
      return;
    }

    var cells = this.getSelectedCells(this.startCell, this.endCell);

    if (cells.length === 0) {
      this.clearPreview();

      return;
    }

    var p1 = this.getCellCenter(cells[0]);

    var p2 = this.getCellCenter(cells[cells.length - 1]);

    $(this.ob.activity_area)
      .find(".lws_preview_line")
      .attr({
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
      })
      .show();
  },

  clearPreview: function () {
    $(this.ob.activity_area).find(".lws_preview_line").hide();
  },

  // =====================================================
  // SAVED LINE
  // =====================================================

  drawSavedLine: function (line) {
    var p1 = this.getCellCenter(line.startCell);

    var p2 = this.getCellCenter(line.endCell);

    var svgLine = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line",
    );

    svgLine.setAttribute("class", "lws_saved_line");

    svgLine.setAttribute("x1", p1.x);

    svgLine.setAttribute("y1", p1.y);

    svgLine.setAttribute("x2", p2.x);

    svgLine.setAttribute("y2", p2.y);

    $(this.ob.activity_area).find(".lws_saved_lines")[0].appendChild(svgLine);
  },

  // =====================================================
  // NUMBER FOR FOUND WORD
  // =====================================================

  drawFoundNumber: function (line) {
    var p = this.getCellCenter(line.startCell);

    var html =
      "<div " +
      'class="lws_found_number" ' +
      'data-number="' +
      line.number +
      '" ' +
      'style="left:' +
      p.x +
      "px; top:" +
      p.y +
      'px;">' +
      line.number +
      "</div>";

    $(this.ob.activity_area).find(".lws_numbers_layer").append(html);
  },

  // =====================================================
  // REDRAW
  // =====================================================

  redrawFound: function () {
    var e = this.ob.activity_area;

    $(e).find(".lws_saved_lines").empty();

    $(e).find(".lws_numbers_layer").empty();

    for (var i = 0; i < this.foundLines.length; i++) {
      this.drawSavedLine(this.foundLines[i]);

      this.drawFoundNumber(this.foundLines[i]);
    }
  },

  // =====================================================
  // CONTROLS
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var hasFound = this.foundWords.length > 0;

    var hasInput = false;

    $(e)
      .find(".lws_answer_input")
      .each(function () {
        if ($.trim($(this).val()) !== "") {
          hasInput = true;
        }
      });

    if (hasFound || hasInput) {
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

    var correctWords = [];

    for (var w = 0; w < this.ob.data_obj.words.length; w++) {
      correctWords.push(this.normalizeWord(this.ob.data_obj.words[w]));
    }

    // =================================================
    // GRID FEEDBACK
    // =================================================

    var gridCorrect = this.foundWords.length === correctWords.length;

    $(e).find(".lws_grid_feedback .tick, .lws_grid_feedback .cross").hide();

    if (gridCorrect) {
      $(e).find(".lws_grid_feedback .tick").show();
    } else {
      $(e).find(".lws_grid_feedback .cross").show();
    }

    // =================================================
    // INPUT FEEDBACK
    // =================================================

    var usedWords = [];

    var allInputsCorrect = true;

    $(e)
      .find(".lws_answer_item")
      .each(function () {
        var item = $(this);

        var input = item.find(".lws_answer_input");

        var value = $.trim(input.val().toLowerCase());

        var isValidWord = correctWords.indexOf(value) !== -1;

        var isDuplicate = usedWords.indexOf(value) !== -1;

        item.find(".tick, .cross").hide();

        if (isValidWord && !isDuplicate) {
          item.find(".tick").show();

          usedWords.push(value);
        } else {
          item.find(".cross").show();

          allInputsCorrect = false;
        }
      });

    if (usedWords.length !== correctWords.length) {
      allInputsCorrect = false;
    }

    // =================================================
    // FINAL
    // =================================================

    var allCorrect = gridCorrect && allInputsCorrect;

    showFeedback(true, allCorrect);

    return allCorrect;
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    this.isSelecting = false;

    this.startCell = null;

    this.endCell = null;

    this.foundWords = [];

    this.foundLines = [];

    $(e).find(".lws_saved_lines").empty();

    $(e).find(".lws_numbers_layer").empty();

    this.clearPreview();

    $(e).find(".lws_answer_input").val("");

    $(e)
      .find(
        ".lws_grid_feedback .tick, .lws_grid_feedback .cross, .lws_answer_feedback .tick, .lws_answer_feedback .cross",
      )
      .hide();

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  // =====================================================
  // SCREEN ADJUST
  // =====================================================

  screenPoseAdjustments: function () {
    this.redrawFound();
  },

  // =====================================================
  // INITIAL SETTINGS
  // =====================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
