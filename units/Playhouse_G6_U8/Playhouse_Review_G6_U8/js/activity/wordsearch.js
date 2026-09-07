window.WordSearch = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

WordSearch.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.isSelecting = false;

    this.startCell = null;

    this.endCell = null;

    this.currentCells = [];

    this.foundWords = [];

    /*
            نخزن:
            {
                word:"",
                start:{row,col},
                end:{row,col}
            }
        */
    this.foundLines = [];

    this.listen();
  },

  // =====================================================
  // NORMALIZE WORD
  // =====================================================

  normalizeWord: function (value) {
    return (value || "").toLowerCase().replace(/\s+/g, "");
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

    $(e).on("mousedown.wordsearch", ".ws_cell", function (event) {
      event.preventDefault();

      self.startSelection(this);
    });

    // =================================================
    // MOUSE MOVE
    // =================================================

    $(e).on("mouseenter.wordsearch", ".ws_cell", function () {
      if (self.isSelecting) {
        self.updateSelection(this);
      }
    });

    // =================================================
    // MOUSE UP
    // =================================================

    $(document)
      .off("mouseup.wordsearch")
      .on("mouseup.wordsearch", function () {
        if (self.isSelecting) {
          self.finishSelection();
        }
      });

    // =================================================
    // TOUCH START
    // =================================================

    $(e).on("touchstart.wordsearch", ".ws_cell", function (event) {
      event.preventDefault();

      self.startSelection(this);
    });

    // =================================================
    // TOUCH MOVE
    // =================================================

    $(e).on("touchmove.wordsearch", ".ws_grid_wrap", function (event) {
      if (!self.isSelecting) {
        return;
      }

      var originalEvent = event.originalEvent;

      if (
        originalEvent == undefined ||
        originalEvent.touches == undefined ||
        originalEvent.touches.length == 0
      ) {
        return;
      }

      var touch = originalEvent.touches[0];

      var target = document.elementFromPoint(touch.clientX, touch.clientY);

      if (target == null) {
        return;
      }

      var cell = $(target).closest(".ws_cell")[0];

      if (cell != undefined && cell != null) {
        self.updateSelection(cell);
      }
    });

    // =================================================
    // TOUCH END
    // =================================================

    $(e).on(
      "touchend.wordsearch touchcancel.wordsearch",
      ".ws_grid_wrap",
      function () {
        if (self.isSelecting) {
          self.finishSelection();
        }
      },
    );
  },

  // =====================================================
  // START SELECTION
  // =====================================================

  startSelection: function (cell) {
    this.isSelecting = true;

    this.startCell = cell;

    this.endCell = cell;

    this.currentCells = [cell];

    this.drawPreviewLine(this.startCell, this.endCell);
  },

  // =====================================================
  // UPDATE SELECTION
  // =====================================================

  updateSelection: function (endCell) {
    if (this.startCell == null || endCell == null) {
      return;
    }

    var startRow = parseInt(this.startCell.dataset.row);

    var startCol = parseInt(this.startCell.dataset.col);

    var endRow = parseInt(endCell.dataset.row);

    var endCol = parseInt(endCell.dataset.col);

    var rowDiff = endRow - startRow;

    var colDiff = endCol - startCol;

    // =================================================
    // MUST BE:
    // horizontal
    // vertical
    // diagonal 45deg
    // =================================================

    if (
      rowDiff !== 0 &&
      colDiff !== 0 &&
      Math.abs(rowDiff) !== Math.abs(colDiff)
    ) {
      return;
    }

    this.endCell = endCell;

    this.currentCells = this.getCellsBetween(this.startCell, this.endCell);

    this.drawPreviewLine(this.startCell, this.endCell);
  },

  // =====================================================
  // GET CELLS BETWEEN
  // =====================================================

  getCellsBetween: function (startCell, endCell) {
    var cells = [];

    var startRow = parseInt(startCell.dataset.row);

    var startCol = parseInt(startCell.dataset.col);

    var endRow = parseInt(endCell.dataset.row);

    var endCol = parseInt(endCell.dataset.col);

    var rowDiff = endRow - startRow;

    var colDiff = endCol - startCol;

    var dr = rowDiff === 0 ? 0 : rowDiff > 0 ? 1 : -1;

    var dc = colDiff === 0 ? 0 : colDiff > 0 ? 1 : -1;

    var count = Math.max(Math.abs(rowDiff), Math.abs(colDiff));

    for (var i = 0; i <= count; i++) {
      var row = startRow + dr * i;

      var col = startCol + dc * i;

      var cell = this.ob.activity_area.querySelector(
        '.ws_cell[data-row="' + row + '"][data-col="' + col + '"]',
      );

      if (cell != null) {
        cells.push(cell);
      }
    }

    return cells;
  },

  // =====================================================
  // GET SELECTED WORD
  // =====================================================

  getSelectedWord: function () {
    var word = "";

    for (var i = 0; i < this.currentCells.length; i++) {
      word += this.currentCells[i].dataset.letter;
    }

    return word.toLowerCase();
  },

  // =====================================================
  // FINISH SELECTION
  // =====================================================

  finishSelection: function () {
    if (!this.isSelecting) {
      return;
    }

    this.isSelecting = false;

    var selectedWord = this.getSelectedWord();

    var reversedWord = selectedWord.split("").reverse().join("");

    var words = this.ob.data_obj.words;

    var actualWord = null;

    // =================================================
    // FIND WORD
    // =================================================

    for (var i = 0; i < words.length; i++) {
      var normalized = this.normalizeWord(words[i]);

      if (selectedWord === normalized) {
        actualWord = normalized;

        break;
      }

      if (reversedWord === normalized) {
        actualWord = normalized;

        break;
      }
    }

    // =================================================
    // CORRECT
    // =================================================

    if (actualWord != null && this.foundWords.indexOf(actualWord) === -1) {
      this.foundWords.push(actualWord);

      this.markBankWord(actualWord);

      var lineObject = {
        word: actualWord,

        start: {
          row: parseInt(this.startCell.dataset.row),

          col: parseInt(this.startCell.dataset.col),
        },

        end: {
          row: parseInt(this.endCell.dataset.row),

          col: parseInt(this.endCell.dataset.col),
        },
      };

      this.foundLines.push(lineObject);

      this.drawSavedLine(lineObject);

      $(".resetBtn").removeClass("disabled");

      // =================================================
      // ALL FOUND = GOOD JOB
      // =================================================

      if (this.foundWords.length === this.ob.data_obj.words.length) {
        showFeedback(true, true);
      }
    }

    // =================================================
    // CLEAR TEMPORARY LINE
    // =================================================

    this.clearPreviewLine();

    this.startCell = null;

    this.endCell = null;

    this.currentCells = [];
  },

  // =====================================================
  // GET CELL CENTER
  // =====================================================

  getCellCenter: function (cell) {
    var wrap = this.ob.activity_area.querySelector(".ws_grid_wrap");

    var cellRect = cell.getBoundingClientRect();

    var wrapRect = wrap.getBoundingClientRect();

    return {
      x: cellRect.left - wrapRect.left + cellRect.width / 2,

      y: cellRect.top - wrapRect.top + cellRect.height / 2,
    };
  },

  // =====================================================
  // DRAW PREVIEW LINE
  // =====================================================

  drawPreviewLine: function (startCell, endCell) {
    if (startCell == null || endCell == null) {
      return;
    }

    var svg = this.ob.activity_area.querySelector(".ws_highlight_svg");

    var line = svg.querySelector(".ws_preview_line");

    var gloss = svg.querySelector(".ws_preview_gloss");

    var point1 = this.getCellCenter(startCell);

    var point2 = this.getCellCenter(endCell);

    line.setAttribute("x1", point1.x);

    line.setAttribute("y1", point1.y);

    line.setAttribute("x2", point2.x);

    line.setAttribute("y2", point2.y);

    gloss.setAttribute("x1", point1.x);

    gloss.setAttribute("y1", point1.y);

    gloss.setAttribute("x2", point2.x);

    gloss.setAttribute("y2", point2.y);

    line.style.display = "block";

    gloss.style.display = "block";
  },

  // =====================================================
  // CLEAR PREVIEW
  // =====================================================

  clearPreviewLine: function () {
    var e = this.ob.activity_area;

    var line = e.querySelector(".ws_preview_line");

    var gloss = e.querySelector(".ws_preview_gloss");

    if (line != null) {
      line.style.display = "none";
    }

    if (gloss != null) {
      gloss.style.display = "none";
    }
  },

  // =====================================================
  // DRAW SAVED LINE
  // =====================================================

  drawSavedLine: function (lineObject) {
    var e = this.ob.activity_area;

    var savedGroup = e.querySelector(".ws_saved_lines");

    var startCell = e.querySelector(
      '.ws_cell[data-row="' +
        lineObject.start.row +
        '"][data-col="' +
        lineObject.start.col +
        '"]',
    );

    var endCell = e.querySelector(
      '.ws_cell[data-row="' +
        lineObject.end.row +
        '"][data-col="' +
        lineObject.end.col +
        '"]',
    );

    if (startCell == null || endCell == null) {
      return;
    }

    var point1 = this.getCellCenter(startCell);

    var point2 = this.getCellCenter(endCell);

    var ns = "http://www.w3.org/2000/svg";

    // =================================================
    // MAIN MARKER
    // =================================================

    var line = document.createElementNS(ns, "line");

    line.setAttribute("class", "ws_saved_line");

    line.setAttribute("x1", point1.x);

    line.setAttribute("y1", point1.y);

    line.setAttribute("x2", point2.x);

    line.setAttribute("y2", point2.y);

    line.setAttribute("data-word", lineObject.word);

    savedGroup.appendChild(line);

    // =================================================
    // GLOSS
    // =================================================

    var gloss = document.createElementNS(ns, "line");

    gloss.setAttribute("class", "ws_saved_gloss");

    gloss.setAttribute("x1", point1.x);

    gloss.setAttribute("y1", point1.y);

    gloss.setAttribute("x2", point2.x);

    gloss.setAttribute("y2", point2.y);

    gloss.setAttribute("data-word", lineObject.word);

    savedGroup.appendChild(gloss);
  },

  // =====================================================
  // REDRAW FOUND LINES
  // useful after resize/orientation
  // =====================================================

  redrawSavedLines: function () {
    var e = this.ob.activity_area;

    var group = e.querySelector(".ws_saved_lines");

    if (group == null) {
      return;
    }

    group.innerHTML = "";

    for (var i = 0; i < this.foundLines.length; i++) {
      this.drawSavedLine(this.foundLines[i]);
    }
  },

  // =====================================================
  // SCREEN ADJUSTMENTS
  // =====================================================

  screenPoseAdjustments: function () {
    this.redrawSavedLines();
  },

  // =====================================================
  // MARK WORD BANK
  // =====================================================

  markBankWord: function (word) {
    var bankWords = this.ob.activity_area.querySelectorAll(".ws_bank_word");

    for (var i = 0; i < bankWords.length; i++) {
      var bankWord = this.normalizeWord(bankWords[i].dataset.word);

      if (bankWord === word) {
        bankWords[i].classList.add("found");
      }
    }
  },

  // =====================================================
  // PROJECT TOUCH COMPATIBILITY
  // =====================================================

  cellMove: function (classValue) {
    if (!this.isSelecting) {
      return;
    }

    var value = classValue;

    if (value != undefined && value.value != undefined) {
      value = value.value;
    }

    value = String(value || "");

    var match = value.match(/ws_r(\d+)_c(\d+)/);

    if (match == null) {
      return;
    }

    var row = parseInt(match[1]);

    var col = parseInt(match[2]);

    var cell = this.ob.activity_area.querySelector(
      '.ws_cell[data-row="' + row + '"][data-col="' + col + '"]',
    );

    if (cell != null) {
      this.updateSelection(cell);
    }
  },

  // =====================================================
  // TOUCH END COMPATIBILITY
  // =====================================================

  cellTouchEnd: function () {
    if (this.isSelecting) {
      this.finishSelection();
    }
  },

  // =====================================================
  // VALIDATE
  // =====================================================

  validate: function () {
    var correct = this.foundWords.length === this.ob.data_obj.words.length;

    showFeedback(true, correct);

    return correct;
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    this.isSelecting = false;

    this.startCell = null;

    this.endCell = null;

    this.currentCells = [];

    this.foundWords = [];

    this.foundLines = [];

    // remove marker lines
    var group = e.querySelector(".ws_saved_lines");

    if (group != null) {
      group.innerHTML = "";
    }

    this.clearPreviewLine();

    // word bank
    $(e).find(".ws_bank_word").removeClass("found");

    // no cell background
    $(e).find(".ws_cell").removeClass("ws_current ws_found");

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
