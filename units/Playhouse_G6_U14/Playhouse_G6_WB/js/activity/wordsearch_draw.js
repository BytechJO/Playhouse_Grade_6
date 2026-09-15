//  ****************************************** //
//  WordSearch - Version no: 5
//  Updated - Improved diagonal / horizontal / vertical selection
//  ****************************************** //

window.WordSearch = function (obj, dataObj) {
  ob = obj[0].getElementsByClassName("options");

  this.settings = {
    num_rows: dataObj.questions[0].rows,

    num_columns: dataObj.questions[0].columns,

    matrix_holder: ob[0].querySelector(".wordmatrix"),

    word_holder: ob[0].querySelector(".wordlist"),

    letters: dataObj.questions[0].letters,

    words: dataObj.questions[0].words,

    css_words:
      ob[0].dataset.css_words != undefined && ob[0].dataset.css_words != null
        ? ob[0].dataset.css_words
        : "none",

    data_obj: dataObj,

    activity_area: ob[0],

    parent_holder: obj[0],
  };

  this.orientationAdjust = "yes";

  this.init(this.settings);
};

WordSearch.prototype = {
  /* =========================================================
       INIT
    ========================================================= */

  init: function (ob) {
    ob.wordList = this.getWordsFromOb(ob.words);

    ob._startSelect = false;

    ob._selCellArr = [];

    ob._selStart = "";

    ob._selEnd = "";

    ob._selWordArr = [];

    ob.boxSize = 0;

    ob.fontSize = 30;

    ob.matrixbuilt = "no";

    ob.wordlistbuilt = "no";

    ob.mobileView = "no";

    ob._rectOb = {
      left: 0,

      top: 0,

      width: 0,

      height: 0,

      endX: 0,

      endY: 0,

      angle: 0,

      offsetPose: 0,

      originalwidth: 0,

      transformPerc: "",

      borderRadius: "",
    };

    ob.correctCount = 0;

    ob.allCorrect = 0;

    ob.rightOffset = 0;

    ob.corrWords = [];

    ob.rLeft = 0;

    ob.rTop = 0;

    ob.trackTxt = "";

    this.buildWordList(ob);

    this.buildMatrix(ob);

    this.addSlideListeners(ob);

    this.ob = ob;
  },

  /* =========================================================
       SCREEN SIZE
    ========================================================= */

  screenPoseAdjustments: function () {
    var self = this;

    var ob = this.ob;

    var $options = $(ob.activity_area);

    var $parent = $(ob.parent_holder);

    var $data = ob.data_obj.questions[0];

    ob.mobileView = "no";

    $options.find(".wordmatrix_holder").css("height", $options.height() - 10);

    ob.rightOffset = $(".container").css("margin-left");

    if (isMobile()) {
      ob.rightOffset = 0;
    }

    if (ob.wordlistbuilt == "yes") {
      var availWidth = $options.find(".all_cont").innerWidth();

      /* =====================================================
               MOBILE
            ===================================================== */

      if (availWidth < 900) {
        $options.find(".wordmatrix_holder").css("width", "100%");

        var tmpWid =
          $options.find(".wordmatrix_holder").innerWidth() / ob.num_columns;

        var tmpHt =
          $options.find(".wordmatrix_holder").innerHeight() / ob.num_rows;

        ob.boxSize = tmpWid <= tmpHt ? tmpWid : tmpHt;

        ob.mobileView = "yes";

        $options.find(".wordlist").addClass("onPop");

        self.showWordList(false);

        $parent.find(".wordlist_but").removeClass("d-none");
      } else {

      /* =====================================================
               DESKTOP
            ===================================================== */
        $options.find(".wordmatrix_holder").css("width", "50%");

        var tmpWid =
          $options.find(".wordmatrix_holder").innerWidth() / ob.num_columns;

        var tmpHt =
          $options.find(".wordmatrix_holder").innerHeight() / ob.num_rows;

        ob.boxSize = tmpWid <= tmpHt ? tmpWid : tmpHt;

        /*
                    خلي حجم الخلية ما يكبر كثير
                */

        if (ob.boxSize > 42) {
          ob.boxSize = 42;
        }

        ob.mobileView = "no";

        $parent.find(".wordlist_but").addClass("d-none");

        $options.find(".wordlist").removeClass("onPop");

        self.showWordList(true);
      }

      var min_font_size =
        typeof $data.fontsizemin != undefined && $data.fontsizemin != null
          ? parseInt($data.fontsizemin)
          : 30;

      ob.fontSize = "90%";
    }

    $parent
      .find(".wordlist_but")
      .css("right", parseInt(ob.rightOffset) + 10 + "px");

    self.setSizes();
  },

  /* =========================================================
       SHOW WORD LIST
    ========================================================= */

  showWordList: function (bool) {
    var ob = this.ob;

    var $options = $(ob.activity_area);

    var $wordList = $options.find(".wordlist");

    if ($wordList.hasClass("onPop")) {
      if (!bool) {
        $wordList.removeClass("d-block").addClass("d-none");
      } else {
        $wordList.removeClass("d-none").addClass("d-block");
      }
    } else {
      $wordList.removeClass("d-none").addClass("d-block");
    }
  },

  /* =========================================================
       BUILD MATRIX
    ========================================================= */

  buildMatrix: function (ob) {
    this.deleteChild(ob.matrix_holder);

    var self = this;

    var letArr = this.getletters(ob.letters);

    /* correct holder */

    var divCorrect = document.createElement("div");

    divCorrect.setAttribute("class", "corrHolder");

    ob.matrix_holder.appendChild(divCorrect);

    /* active selection */

    var divRect = document.createElement("div");

    divRect.setAttribute("class", "rect");

    ob.matrix_holder.appendChild(divRect);

    /* rows */

    for (var row = 0; row < ob.num_rows; row++) {
      var divEl = document.createElement("div");

      divEl.setAttribute("class", "ws_row row_" + (row + 1));

      divEl.classList.add("d-flex");

      ob.matrix_holder.appendChild(divEl);

      /* columns */

      for (var col = 0; col < ob.num_columns; col++) {
        var colEl = document.createElement("div");

        var t = document.createElement("p");

        colEl.setAttribute(
          "class",
          "ws_col col_" + (row + 1) + "_" + (col + 1),
        );

        colEl.appendChild(t);

        t.innerHTML = letArr[row][col];

        divEl.appendChild(colEl);
      }
    }

    ob.matrixbuilt = "yes";

    var matrix = $(ob.matrix_holder);

    var cells = matrix.find(".ws_col");

    /* =====================================================
           MOUSE / TOUCH START
        ===================================================== */

    cells.on("touchstart", function (event) {
      event.preventDefault();

      self.cellDown($(this), event);
    });

    cells.on("mousedown", function (event) {
      event.preventDefault();

      self.cellDown($(this), event);
    });

    /* =====================================================
           MOUSE MOVE
        ===================================================== */

    cells.on("mouseover", function () {
      var classes = $(this).attr("class").split(" ");

      var cellClass = classes.filter(function (c) {
        return c.indexOf("col_") === 0;
      })[0];

      self.cellMove(cellClass);
    });

    /* =====================================================
           MOUSE UP
        ===================================================== */

    cells.on("mouseup", function () {
      self.cellUp($(this).attr("class"));
    });
  },

  /* =========================================================
       SET SIZES
    ========================================================= */

  setSizes: function () {
    var self = this;

    var ob = this.ob;

    var $options = $(ob.activity_area);

    var matrix = $(ob.matrix_holder);

    if (ob.matrixbuilt == "yes") {
      /* cells */

      $options.find(".ws_col").each(function () {
        $(this).css({
          width: ob.boxSize + "px",

          height: ob.boxSize + "px",
        });
      });

      var firstCell = matrix.find(".col_1_1");

      if (firstCell.length) {
        var cellWidth = firstCell.outerWidth();

        var cellHeight = firstCell.outerHeight();

        var selectionSize = Math.round(Math.min(cellWidth, cellHeight) * 0.72);

        ob._rectOb.height = selectionSize;

        ob._rectOb.borderRadius = selectionSize;

        ob._rectOb.transformPerc = selectionSize / 2;

        ob._rectOb.originalwidth = selectionSize;

        ob._rectOb.width = selectionSize;

        ob._rectOb.offsetPose = Math.round((cellWidth - selectionSize) / 2);

        ob.rLeft = firstCell.offset().left;

        ob.rTop = firstCell.offset().top;
      }

      /* matrix center */

      var matrixHolder = $options.find(".wordmatrix_holder");

      var matrixHeight = matrix.outerHeight();

      var holderHeight = matrixHolder.height();

      if (holderHeight > matrixHeight) {
        matrix.css(
          "margin-top",
          Math.round((holderHeight - matrixHeight) / 2) + "px",
        );
      }

      /* word list center */

      var wordList = $options.find(".wordlist");

      if (!wordList.hasClass("onPop")) {
        var listHeight = wordList.outerHeight();

        if (holderHeight > listHeight) {
          wordList.css(
            "margin-top",
            Math.round((holderHeight - listHeight) / 2) + "px",
          );
        }
      }
    }

    /* =====================================================
           REDRAW CORRECT WORDS
        ===================================================== */

    if (ob.corrWords.length > 0) {
      for (var cc = 0; cc < ob.corrWords.length; cc++) {
        self.drawRect(ob.corrWords[cc], "redraw", ob.corrWords[cc].word);
      }
    }

    /* =====================================================
           TOUCH MOVE
        ===================================================== */

    matrix.off("touchmove.wordsearch").on("touchmove.wordsearch", function (e) {
      e.preventDefault();

      if (!ob._startSelect) {
        return;
      }

      var evt = e.originalEvent || e;

      var touch = evt.touches[0] || evt.changedTouches[0];

      if (!touch) {
        return;
      }

      var matrixOffset = matrix.offset();

      var x = touch.pageX - matrixOffset.left;

      var y = touch.pageY - matrixOffset.top;

      var col = Math.floor(x / ob.boxSize) + 1;

      var row = Math.floor(y / ob.boxSize) + 1;

      if (row >= 1 && row <= ob.num_rows && col >= 1 && col <= ob.num_columns) {
        self.cellMove("col_" + row + "_" + col);
      }
    });

    matrix
      .off("touchend.wordsearch touchcancel.wordsearch")
      .on("touchend.wordsearch touchcancel.wordsearch", function () {
        self.cellTouchEnd();
      });
  },

  /* =========================================================
       CELL DOWN
    ========================================================= */

  cellDown: function (cell, evt) {
    var self = this;

    var ob = this.ob;

    ob._startSelect = true;

    ob._selWordArr = [];

    if (!cell || !cell.length) {
      return;
    }

    var classes = cell.attr("class").split(" ");

    var thisCell = classes.filter(function (c) {
      return c.indexOf("col_") === 0;
    })[0];

    if (!thisCell) {
      return;
    }

    var $cell = $(ob.matrix_holder).find("." + thisCell);

    var centerX = $cell.position().left + $cell.outerWidth() / 2;

    var centerY = $cell.position().top + $cell.outerHeight() / 2;

    ob._rectOb.left = centerX - ob._rectOb.height / 2;

    ob._rectOb.top = centerY - ob._rectOb.height / 2;

    ob._rectOb.width = ob._rectOb.originalwidth;

    ob._rectOb.angle = 0;

    ob._selStart = thisCell;

    ob._selEnd = thisCell;

    self.drawRect(ob, "start", "");

    self.showWordList(false);
  },

  /* =========================================================
       CELL MOVE
       SUPPORTS 8 DIRECTIONS
    ========================================================= */

  cellMove: function (cell) {
    var self = this;

    var ob = this.ob;

    if (!ob._startSelect || !cell) {
      return;
    }

    var cellCls = String(cell);

    var startMatch = ob._selStart.match(/col_(\d+)_(\d+)/);

    var endMatch = cellCls.match(/col_(\d+)_(\d+)/);

    if (!startMatch || !endMatch) {
      return;
    }

    var startRow = parseInt(startMatch[1], 10);

    var startCol = parseInt(startMatch[2], 10);

    var endRow = parseInt(endMatch[1], 10);

    var endCol = parseInt(endMatch[2], 10);

    var rowDiff = endRow - startRow;

    var colDiff = endCol - startCol;

    var absRow = Math.abs(rowDiff);

    var absCol = Math.abs(colDiff);

    /* =====================================================
           SNAP TO HORIZONTAL / VERTICAL / DIAGONAL
        ===================================================== */

    if (rowDiff !== 0 && colDiff !== 0) {
      /*
                إذا الفرق بين الصف والعمود قريب
                اعتبره قطري
            */

      if (Math.abs(absRow - absCol) <= 1) {
        var len = Math.min(absRow, absCol);

        endRow = startRow + (rowDiff > 0 ? len : -len);

        endCol = startCol + (colDiff > 0 ? len : -len);
      } else if (absCol > absRow) {

      /* horizontal */
        endRow = startRow;
      } else {

      /* vertical */
        endCol = startCol;
      }
    }

    if (
      endRow < 1 ||
      endRow > ob.num_rows ||
      endCol < 1 ||
      endCol > ob.num_columns
    ) {
      return;
    }

    var snappedCell = "col_" + endRow + "_" + endCol;

    var matrix = $(ob.matrix_holder);

    var startCell = matrix.find("." + ob._selStart);

    var endCell = matrix.find("." + snappedCell);

    if (!startCell.length || !endCell.length) {
      return;
    }

    ob._selEnd = snappedCell;

    /* centers */

    var startX = startCell.position().left + startCell.outerWidth() / 2;

    var startY = startCell.position().top + startCell.outerHeight() / 2;

    var endX = endCell.position().left + endCell.outerWidth() / 2;

    var endY = endCell.position().top + endCell.outerHeight() / 2;

    var dx = endX - startX;

    var dy = endY - startY;

    var distance = Math.sqrt(dx * dx + dy * dy);

    ob._rectOb.width = distance + ob._rectOb.height;

    ob._rectOb.angle = Math.atan2(dy, dx) * (180 / Math.PI);

    self.drawRect(ob, "move", "");
  },

  /* =========================================================
       CELL UP
    ========================================================= */

  cellUp: function (cell) {
    var self = this;

    var ob = this.ob;

    if (!ob._startSelect) {
      return;
    }

    if (cell) {
      var classes = cell.split(" ");

      for (var i = 0; i < classes.length; i++) {
        if (classes[i].indexOf("col_") === 0) {
          self.cellMove(classes[i]);

          break;
        }
      }
    }

    self.validate(ob);

    ob._startSelect = false;
  },

  /* =========================================================
       TOUCH END
    ========================================================= */

  cellTouchEnd: function () {
    var ob = this.ob;

    var self = this;

    if (ob._startSelect) {
      self.validate(ob);

      ob._startSelect = false;
    }
  },

  /* =========================================================
       DRAW RECTANGLE
    ========================================================= */

  drawRect: function (ob, axn, nam) {
    var mainOb = this.ob;

    var e = $(mainOb.matrix_holder);

    var corr = e.find(".corrHolder");

    var rect;

    var $data = mainOb.data_obj.questions[0];

    var rectColor =
      typeof $data.selectionbooxcolor != "undefined" &&
      $data.selectionbooxcolor != null
        ? $data.selectionbooxcolor
        : "rgb(39,150,166)";

    if (nam === "") {
      rect = e.find(".rect");
    } else {
      var safeName = nam.replace(/[^a-zA-Z0-9_-]/g, "_");

      if (corr.find(".corr_" + safeName).length === 0) {
        corr.append('<div class="corr corr_' + safeName + '"></div>');
      }

      rect = corr.find(".corr_" + safeName);
    }

    var obj = axn === "redraw" ? ob.rectObj : ob._rectOb;

    if (!obj) {
      return;
    }

    rect.css({
      top: obj.top + "px",

      left: obj.left + "px",

      width: obj.width + "px",

      height: obj.height + "px",

      "border-radius": obj.borderRadius + "px",

      "transform-origin": obj.height / 2 + "px " + obj.height / 2 + "px",

      transform: "rotate(" + obj.angle + "deg)",

      display: "block",
    });

    if (axn === "start" || axn === "move") {
      rect.css("border-color", rectColor);
    }
  },

  /* =========================================================
       VALIDATE
       IMPORTANT:
       DIRECTION IS CALCULATED FROM ROW/COLUMN,
       NOT CSS ANGLE
    ========================================================= */

  validate: function (ob) {
    var self = this;

    var wordArr = this.changeCase(ob.wordList);

    wordArr = this.trimSpaces(wordArr);

    var e = $(ob.matrix_holder);

    var e1 = ob.word_holder;

    var corr = e.find(".corrHolder");

    ob._selWordArr = [];

    ob.allCorrect = self.checkTotals(ob);

    if (ob.allCorrect === 1) {
      return;
    }

    var startCell = ob._selStart;

    var endCell = ob._selEnd;

    if (!startCell || !endCell) {
      self.resetDraw("tmp");

      return;
    }

    var startArr = getIntArray(startCell.split("_"));

    var endArr = getIntArray(endCell.split("_"));

    /*
            col_row_column

            startArr[1] = row
            startArr[2] = column
        */

    var startRow = startArr[1];

    var startCol = startArr[2];

    var endRow = endArr[1];

    var endCol = endArr[2];

    var rowDiff = endRow - startRow;

    var colDiff = endCol - startCol;

    /* =====================================================
           VALID DIRECTION
        ===================================================== */

    var validDirection = false;

    /* horizontal */

    if (rowDiff === 0) {
      validDirection = true;
    } else if (colDiff === 0) {

    /* vertical */
      validDirection = true;
    } else if (Math.abs(rowDiff) === Math.abs(colDiff)) {

    /* diagonal */
      validDirection = true;
    }

    if (!validDirection) {
      self.resetDraw("tmp");

      ob._rectOb.width = ob._rectOb.originalwidth;

      return;
    }

    /* =====================================================
           STEP DIRECTION
        ===================================================== */

    var rowStep = rowDiff === 0 ? 0 : rowDiff > 0 ? 1 : -1;

    var colStep = colDiff === 0 ? 0 : colDiff > 0 ? 1 : -1;

    var totalSteps = Math.max(Math.abs(rowDiff), Math.abs(colDiff));

    /* =====================================================
           READ SELECTED LETTERS
        ===================================================== */

    for (var step = 0; step <= totalSteps; step++) {
      var currentRow = startRow + rowStep * step;

      var currentCol = startCol + colStep * step;

      var thisCell = e.find(".col_" + currentRow + "_" + currentCol);

      if (thisCell.length) {
        ob._selWordArr.push(thisCell.find("p").html());
      }
    }

    /* =====================================================
           CREATE WORD
        ===================================================== */

    if (ob._selWordArr.length > 0) {
      var tWord = ob._selWordArr.join("").toLowerCase();

      var isCorrect = false;

      var theIndx = $.inArray(tWord, wordArr);

      /* direct direction */

      if (theIndx >= 0) {
        isCorrect = true;
      } else {

      /* reverse direction */
        var reverseWord = ob._selWordArr
          .slice()
          .reverse()
          .join("")
          .toLowerCase();

        theIndx = $.inArray(reverseWord, wordArr);

        if (theIndx >= 0) {
          isCorrect = true;

          tWord = reverseWord;
        }
      }

      /* =================================================
               CORRECT
            ================================================= */

      if (isCorrect) {
        var safeClass = tWord.replace(/[^a-zA-Z0-9_-]/g, "_");

        if (corr.find(".corr_" + safeClass).length === 0) {
          var _w = e1.getElementsByClassName("word_" + (theIndx + 1))[0];

          if (_w) {
            var _p = _w.getElementsByTagName("p")[0];

            var _i = _w.getElementsByTagName("i")[0];

            var _tAns = this.trimSpaces([_p.innerHTML]);

            if (_tAns[0].toLowerCase() === tWord) {
              if (_i.style.display === "none") {
                ob.correctCount++;
              }

              _i.style.display = "block";
            }
          }

          /*
                        نسخ rect object
                        بدل reference
                    */

          var rectCopy = {
            left: ob._rectOb.left,

            top: ob._rectOb.top,

            width: ob._rectOb.width,

            height: ob._rectOb.height,

            endX: ob._rectOb.endX,

            endY: ob._rectOb.endY,

            angle: ob._rectOb.angle,

            offsetPose: ob._rectOb.offsetPose,

            originalwidth: ob._rectOb.originalwidth,

            transformPerc: ob._rectOb.transformPerc,

            borderRadius: ob._rectOb.borderRadius,
          };

          var newObj = {
            word: tWord,

            rectObj: rectCopy,
          };

          ob.corrWords.push(newObj);

          self.drawRect(ob, "correct", tWord);

          var resetBtn = document.getElementsByClassName("resetBtn")[0];

          if (resetBtn) {
            resetBtn.classList.remove("disabled");
          }
        }
      }
    }

    /* =====================================================
           CHECK FINISH
        ===================================================== */

    ob.allCorrect = self.checkTotals(ob);

    if (ob.allCorrect === 1) {
      showFeedback(true, true);
    }

    ob._rectOb.width = ob._rectOb.originalwidth;

    self.resetDraw("tmp");
  },

  /* =========================================================
       CHECK TOTAL
    ========================================================= */

  checkTotals: function (ob) {
    var ret = 0;

    if (ob.wordList.length > 0) {
      if (ob.correctCount === ob.wordList.length) {
        ret = 1;
      }
    }

    return ret;
  },

  /* =========================================================
       BUILD WORD LIST
    ========================================================= */

  buildWordList: function (ob) {
    this.deleteChild(ob.word_holder);

    var cssArr = [];

    if (ob.css_words !== "none") {
      cssArr = ob.css_words.toString().split(",");
    }

    if (ob.wordList.length > 0) {
      for (var r = 0; r < ob.wordList.length; r++) {
        var divEl = document.createElement("div");

        divEl.setAttribute("class", "word word_" + (r + 1));

        divEl.classList.add("inLine");

        /* CHECK */

        var i = document.createElement("i");

        i.setAttribute("class", "fa fa-check green");

        i.style.display = "none";

        divEl.appendChild(i);

        /* WORD */

        var t = document.createElement("p");

        /* custom positions */

        if (ob.css_words !== "none" && cssArr[r]) {
          var tcss = cssArr[r].split("|");

          if (tcss.length > 0) {
            divEl.style.position = "absolute";

            for (var css = 0; css < tcss.length; css++) {
              var tArr = tcss[css].split(":");

              if ($.trim(tArr[0]) === "left") {
                divEl.style.left = tArr[1];
              }

              if ($.trim(tArr[0]) === "top") {
                divEl.style.top = tArr[1];
              }
            }
          }
        }

        divEl.appendChild(t);

        t.innerHTML = ob.wordList[r];

        ob.word_holder.appendChild(divEl);

        ob.wordlistbuilt = "yes";
      }
    }
  },

  /* =========================================================
       SLIDE LISTENERS
    ========================================================= */

  addSlideListeners: function (ob) {
    var self = this;

    var parentEl = ob.parent_holder;

    var $parent = $(ob.parent_holder);

    var $options = $(ob.activity_area);

    parentEl.addEventListener("mouseup", function () {
      if (ob._startSelect) {
        self.validate(ob);

        ob._startSelect = false;
      }
    });

    var listDiv = $options.find(".wordlist");

    $parent.find(".wordlist_but").click(function () {
      var visible = listDiv.hasClass("d-none");

      self.showWordList(visible);
    });
  },

  /* =========================================================
       RESET DRAW
    ========================================================= */

  resetDraw: function (val) {
    var ob = this.ob;

    var e = $(ob.matrix_holder);

    var corr = e.find(".corrHolder");

    var rect = e.find(".rect");

    if (val === "all") {
      corr.empty();

      rect.css("display", "none");
    } else if (val === "tmp") {
      rect.css("display", "none");
    }
  },

  /* =========================================================
       RESET
    ========================================================= */

  reset: function () {
    var self = this;

    var ob = this.ob;

    var el = ob.word_holder;

    var elsIcon = el.querySelectorAll("i");

    for (var j = 0; j < elsIcon.length; j++) {
      elsIcon[j].style.display = "none";
    }

    self.resetDraw("all");

    ob.correctCount = 0;

    ob.allCorrect = 0;

    ob.corrWords = [];

    ob._selStart = "";

    ob._selEnd = "";

    ob._selWordArr = [];
  },

  /* =========================================================
       DELETE CHILD
    ========================================================= */

  deleteChild: function (obj) {
    var child = obj.lastElementChild;

    while (child) {
      obj.removeChild(child);

      child = obj.lastElementChild;
    }
  },

  /* =========================================================
       GET WORDS
    ========================================================= */

  getWordsFromOb: function (arr) {
    var fArr = [];

    if (arr.length > 0) {
      for (var a = 0; a < arr.length; a++) {
        fArr[a] = $.trim(arr[a].text);
      }
    }

    return fArr;
  },

  /* =========================================================
       GET WORDS FROM STRING
    ========================================================= */

  getWords: function (str) {
    var arr = [];

    if (str != null) {
      str = str.toString().split(",");

      for (var i = 0; i < str.length; i++) {
        var tmpStr = $.trim(str[i]).split("-");

        arr[i] = tmpStr[0];
      }
    }

    return arr;
  },

  /* =========================================================
       GET LETTERS
    ========================================================= */

  getletters: function (str) {
    var arr = [];

    if (str != null) {
      str = str.toString().split(",");

      for (var i = 0; i < str.length; i++) {
        arr[i] = [];

        var tmpStr = $.trim(str[i]);

        arr[i] = tmpStr.split("");
      }
    }

    return arr;
  },

  /* =========================================================
       LOWERCASE
    ========================================================= */

  changeCase: function (arr) {
    var arr1 = [];

    if (arr.length > 0) {
      for (var i = 0; i < arr.length; i++) {
        arr1[i] = arr[i].toLowerCase();
      }
    }

    return arr1;
  },

  /* =========================================================
       REMOVE SPACES
    ========================================================= */

  trimSpaces: function (arr) {
    var arr1 = [];

    if (arr.length > 0) {
      for (var i = 0; i < arr.length; i++) {
        arr1[i] = arr[i].replace(/\s+/g, "");
      }
    }

    return arr1;
  },

  /* =========================================================
       INITIAL SETTINGS
    ========================================================= */

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
