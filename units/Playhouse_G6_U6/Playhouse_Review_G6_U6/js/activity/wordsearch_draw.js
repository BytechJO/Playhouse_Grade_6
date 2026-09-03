//  ****************************************** //
//  WordSearch - Version no: 5
//  Date updated - June 19, 2020
//  Date updated - September 02, 2020 (matrix touchmove touchend touchcancel added)
//  Date updated - September 12, 2020 (spaces in words validated)
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
    ob._rectOb = {};
    ob._rectOb.left = 0;
    ob._rectOb.top = 0;
    ob._rectOb.width = 0;
    ob._rectOb.height = 0;
    ob._rectOb.endX = 0;
    ob._rectOb.endY = 0;
    ob._rectOb.angle = 0;
    ob._rectOb.offsetPose = 0;
    ob._rectOb.originalwidth = 0;
    ob._rectOb.transformPerc = "";
    ob._rectOb.borderRadius = "";
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
      var totalWidth =
        parseInt($options.find(".wordlist").css("width")) +
        ob.boxSize * ob.num_columns;
      var availWidth = $options.find(".all_cont").innerWidth();
      if (availWidth < 900) {
        $options.find(".wordmatrix_holder").css("width", "100%");
        //  console.log(' here --- ',availWidth, $options.find('.wordmatrix_holder').innerWidth());
        var tmpWid =
          $options.find(".wordmatrix_holder").innerWidth() / ob.num_columns;
        var tmpHt =
          parseInt($options.find(".wordmatrix_holder").innerHeight()) /
          ob.num_rows;
        ob.boxSize = tmpWid <= tmpHt ? tmpWid : tmpHt;

        ob.mobileView = "yes";
        $options.find(".wordlist").addClass("onPop");
        self.showWordList(false);
        console.log("ob.boxSize:: ", availWidth, ob.boxSize);
        $parent.find(".wordlist_but").removeClass("d-none");
      } else {
        $options.find(".wordmatrix_holder").css("width", "50vw");
        var tmpWid =
          parseInt($options.find(".wordmatrix_holder").innerWidth()) /
          ob.num_columns;
        var tmpHt =
          parseInt($options.find(".wordmatrix_holder").innerHeight()) /
          ob.num_rows;
        ob.boxSize = tmpWid <= tmpHt ? tmpWid : tmpHt;
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
      //  ob.fontSize = ((ob.boxSize -10) < min_font_size)? min_font_size : Math.round(ob.boxSize -10);
      //  console.log('min-size>> ',$data.fontsizemin,min_font_size,(ob.boxSize -10),   ((ob.boxSize -10) < min_font_size), ob.fontSize);
    }
    $parent
      .find(".wordlist_but")
      .css("right", parseInt(ob.rightOffset) + 10 + "px");
    self.setSizes();
  },
  showWordList: function (bool) {
    var ob = this.ob;
    var $options = $(ob.activity_area);
    var $wordList = $options.find(".wordlist");
    if ($wordList.hasClass("onPop")) {
      if (!bool) {
        if ($options.find(".wordlist").hasClass("d-block")) {
          $options.find(".wordlist").removeClass("d-block");
        }
        $options.find(".wordlist").addClass("d-none");
      } else {
        if ($options.find(".wordlist").hasClass("d-none")) {
          $options.find(".wordlist").removeClass("d-none");
        }
        $options.find(".wordlist").addClass("d-block");
      }
    } else {
      if ($options.find(".wordlist").hasClass("d-none")) {
        $options.find(".wordlist").removeClass("d-none");
      }
      $options.find(".wordlist").addClass("d-block");
    }
  },
  buildMatrix: function (ob) {
    this.deleteChild(ob.matrix_holder);
    var self = this;
    var letArr = this.getletters(ob.letters);
    var divCorrect = document.createElement("div");
    divCorrect.setAttribute("class", "corrHolder");
    ob.matrix_holder.appendChild(divCorrect);

    var divRect = document.createElement("div");
    divRect.setAttribute("class", "rect");
    ob.matrix_holder.appendChild(divRect);

    for (var row = 0; row < ob.num_rows; row++) {
      var divEl = document.createElement("div");
      divEl.setAttribute("class", "ws_row row_" + (row + 1));
      divEl.classList.add("d-flex");
      ob.matrix_holder.appendChild(divEl);
      for (var col = 0; col < ob.num_columns; col++) {
        var colEl = document.createElement("div");
        var t = document.createElement("p");
        colEl.setAttribute(
          "class",
          "ws_col col_" + (row + 1) + "_" + (col + 1),
        );
        // colEl.style.width = ob.boxSize+'px';
        // colEl.style.height = ob.boxSize+'px';
        colEl.appendChild(t);
        colEl.getElementsByTagName("p")[0].innerHTML = letArr[row][col];
        divEl.appendChild(colEl);
      }
    }
    ob.matrixbuilt = "yes";

    var matrix = $(ob.matrix_holder);
    var cells = matrix.find(".ws_col");

    cells.on("touchstart", function (event) {
      //ob.trackTxt ='';
      self.cellDown($(this), event);
    });
    cells.on("mousedown", function (event) {
      self.cellDown($(this), event);
    });

    cells.on("mouseover", function (event) {
      var fCl = $(this).attr("class").split(" ")[1];
      self.cellMove(fCl);
    });
    /* cells.on("touchmove", function(e){
             
            // self.cellMove($(this).attr('class'));
            var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
            var touch = evt.touches[0] || evt.changedTouches[0];
            x = touch.pageX;
            y = touch.pageY;
            console.log('touchmove : ', $(this), event, x, y);
            
         });*/
    cells.on("mouseup", function (event) {
      self.cellUp($(this).attr("class"));
    });
    /* cells.on("touchend" || "touchcancel", function(event){
          //   self.cellUp($(this).attr('class'));
         });*/
  },
  setSizes: function () {
    var self = this;
    var ob = this.ob;
    var $options = $(ob.activity_area);
    var matrix = $(ob.matrix_holder);
    var _par = $(ob.parent_holder);
    if (ob.matrixbuilt == "yes") {
      $options.find(".ws_col").each(function () {
        $(this).css("width", ob.boxSize + "px");
        $(this).css("height", ob.boxSize + "px");
        //$(this).find('p').css({'position' : 'absolute'});
        $(this).find("p").css({
          position: "absolute",
          top: "50%",
          left: "50%",
          "margin-right": "-50%",
          transform: "translate(-50%, -50%)",
        });
        // console.log($(this).find('p').css('height'), $(this).find('p').css('line-height'));
        //var mTop = Math.floor((ob.boxSize - (parseInt($(this).find('p').css('line-height'))))/2);
      });

      var lastXBox = matrix.find(".col_1_" + ob.num_columns);

      var lastYBox = matrix.find(".col_" + ob.num_rows + "_" + ob.num_columns);
      ob._rectOb.endX = lastXBox.position().left + lastXBox.innerWidth();
      ob._rectOb.endY = lastYBox.position().top + lastYBox.innerHeight();
      ob._rectOb.borderRadius = lastYBox.height();
      ob._rectOb.height = Math.round(
        0.8 * $(".col_1_" + ob.num_columns).outerHeight(),
      );
      ob._rectOb.transformPerc =
        Math.round(0.8 * $(".col_1_" + ob.num_columns).outerHeight()) / 2;
      ob._rectOb.originalwidth = Math.round(
        0.8 * $(".col_1_" + ob.num_columns).outerWidth(),
      );
      ob._rectOb.width = Math.round(
        0.8 * $(".col_1_" + ob.num_columns).outerWidth(),
      );
      ob._rectOb.offsetPose = Math.round(
        0.1 * $(".col_1_" + ob.num_columns).outerWidth(),
      );
      //console.log( 'setSizes >> ',Math.round($options.find('.wordmatrix').outerWidth()),(ob.boxSize*ob.num_columns) );
      //$options.find('.wordmatrix_holder').css('min-width', (ob.boxSize*ob.num_columns)+'px');
      var marginTopMatrix = Math.round(
        ($options.find(".wordmatrix_holder").height() -
          $options.find(".wordmatrix").outerHeight()) /
          2,
      );
      var marginTopList = Math.round(
        ($options.find(".wordmatrix_holder").height() -
          $options.find(".wordlist").outerHeight()) /
          2,
      );
      // console.log( 'setSizes >> ',marginTopMatrix, marginTopList );
      $options.find(".wordmatrix").css("margin-top", marginTopMatrix + "px");
      // $options.find('.wordlist').css('height',$options.find('.wordmatrix_holder').height()+'px' );
      if ($options.find(".wordlist").hasClass("onPop")) {
        $options.find(".wordlist").css("margin-top", "auto");
      } else {
        $options.find(".wordlist").css("margin-top", marginTopList + "px");
      }

      $options.find(".ws_col").each(function () {
        //console.log($(this).attr('class'),' >> ', $(this).position(), $(this).offset(), $(this).css('width'), $(this).css('height'));
        var cellCls = $(this).attr("class");
        var fCellClass = cellCls.split(" ")[1];
        if (fCellClass == "col_1_1") {
          ob.rLeft = $(this).offset().left;
          ob.rTop = $(this).offset().top;
        }
      });
    }
    if (ob.corrWords.length > 0) {
      var e = $(ob.matrix_holder);
      var corr = e.find(".corrHolder");
      // corr.empty();
      for (var cc = 0; cc < ob.corrWords.length; cc++) {
        self.drawRect(ob.corrWords[cc], "redraw", ob.corrWords[cc].word);
      }
    }
    matrix.on("touchmove", function (e) {
      // self.cellMove($(this).attr('class'));
      var evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
      var touch = evt.touches[0] || evt.changedTouches[0];
      x = touch.clientX; // touch.pageX;
      y = touch.clientY; //touch.pageY;
      //console.log('touchmove : ',x, y, ob.rLeft, ob.rTop, (y > ob.rTop), (x > ob.rLeft));
      if (y > ob.rTop && x > ob.rLeft) {
        //console.log('x>> ', Math.ceil((x-ob.rLeft)/ob.boxSize));
        //console.log('y>> ', Math.ceil((y-ob.rTop)/ob.boxSize));ws_col
        var thsCellClss =
          "col_" +
          Math.ceil((y - ob.rTop) / ob.boxSize) +
          "_" +
          Math.ceil((x - ob.rLeft) / ob.boxSize);
        //console.log('thsCellClss>> ', thsCellClss);
        self.cellMove(thsCellClss);
      }
      /*ob.trackTxt = Math.round(x) +':'+ Math.round(y)+':'+thsCellClss;
            ob.trackTxt += '<br>'  +_par.find('.iConsole1').html();
            _par.find('.iConsole1').html(ob.trackTxt) ;*/
    });
    matrix.on("touchend" || "touchcancel", function (e) {
      self.cellTouchEnd();
    });
  },
  cellDown: function (cell, evt) {
    var self = this;
    var ob = this.ob;

    ob._startSelect = true;

    ob._selWordArr = [];

    if (cell != undefined && cell.length) {
      var thisCell = cell.attr("class").split(" ")[1];

      ob._selStart = thisCell;

      ob._selEnd = thisCell;

      var startX = cell.position().left + cell.outerWidth() / 2;

      var startY = cell.position().top + cell.outerHeight() / 2;

      var thickness = Math.min(cell.outerWidth(), cell.outerHeight()) * 0.72;

      ob._rectOb.left = startX - thickness / 2;

      ob._rectOb.top = startY - thickness / 2;

      ob._rectOb.width = thickness;

      ob._rectOb.originalwidth = thickness;

      ob._rectOb.height = thickness;

      ob._rectOb.angle = 0;

      ob._rectOb.borderRadius = thickness / 2;

      self.drawRect(ob, "start", "");
    }

    self.showWordList(false);
  },
  cellMove: function (cell) {
    var self = this;
    var ob = this.ob;
    var eMatrix = $(ob.matrix_holder);

    var cellCls = cell;

    if (cell && cell.value != undefined) {
      cellCls = cell.value;
    }

    if (!ob._startSelect || !cellCls) {
      return;
    }

    var startCell = eMatrix.find("." + ob._selStart);
    var endCell = eMatrix.find("." + cellCls);

    if (startCell.length === 0 || endCell.length === 0) {
      return;
    }

    ob._selEnd = cellCls;

    // =========================================================
    // CENTERS OF START + END CELLS
    // =========================================================

    var startX = startCell.position().left + startCell.outerWidth() / 2;

    var startY = startCell.position().top + startCell.outerHeight() / 2;

    var endX = endCell.position().left + endCell.outerWidth() / 2;

    var endY = endCell.position().top + endCell.outerHeight() / 2;

    // =========================================================
    // DISTANCE
    // =========================================================

    var dx = endX - startX;
    var dy = endY - startY;

    var distance = Math.sqrt(dx * dx + dy * dy);

    // =========================================================
    // ANGLE
    // =========================================================

    var angle = (Math.atan2(dy, dx) * 180) / Math.PI;

    // =========================================================
    // RECT SIZE
    // =========================================================

    var thickness =
      Math.min(startCell.outerWidth(), startCell.outerHeight()) * 0.72;

    ob._rectOb.left = startX - thickness / 2;

    ob._rectOb.top = startY - thickness / 2;

    ob._rectOb.width = distance + thickness;

    ob._rectOb.height = thickness;

    ob._rectOb.angle = angle;

    ob._rectOb.transformPerc = thickness / 2;

    ob._rectOb.borderRadius = thickness / 2;

    self.drawRect(ob, "move", "");
  },
  cellUp: function (cell) {
    var self = this;
    var ob = this.ob;
    if (ob._startSelect && cell != undefined) {
      var thisCell = cell.split(" ")[1];
      ob._selEnd = thisCell;
      self.validate(ob);
      ob._startSelect = false;
    }
  },
  cellTouchEnd: function () {
    var ob = this.ob;
    var self = this;
    if (ob._startSelect) {
      self.validate(ob);
      ob._startSelect = false;
    }
  },
  drawRect: function (ob, axn, nam) {
    var e = $(ob.matrix_holder);
    var corr = e.find(".corrHolder");

    var rect;

    if (axn != "redraw") {
      var $data = ob.data_obj.questions[0];

      var rect_color =
        $data.selectionbooxcolor != undefined &&
        $data.selectionbooxcolor != null
          ? $data.selectionbooxcolor
          : "blue";
    }

    // =========================================================
    // GET RECT
    // =========================================================

    if (nam == "") {
      rect = e.find(".rect");
    } else {
      if (corr.find(".corr_" + nam).length === 0) {
        corr.append('<div class="corr corr_' + nam + '"></div>');
      }

      rect = corr.find(".corr_" + nam);
    }

    var obj = axn == "redraw" ? ob.rectObj : ob._rectOb;

    // =========================================================
    // DRAW
    // =========================================================

    rect.css({
      top: obj.top + "px",

      left: obj.left + "px",

      width: obj.width + "px",

      height: obj.height + "px",

      "border-radius": obj.borderRadius + "px",

      transform: "rotate(" + obj.angle + "deg)",

      "transform-origin": obj.height / 2 + "px " + obj.height / 2 + "px",

      display: "block",
    });

    if (axn == "start" || axn == "move") {
      rect.css("border-color", rect_color);
    }
  },
  angleBetweenTwoPoints: function (
    point1X,
    point1Y,
    point2X,
    point2Y,
    fixedX,
    fixedY,
  ) {
    angle1 = Math.atan2(point1Y - fixedY, point1X - fixedX);
    angle2 = Math.atan2(point2Y - fixedY, point2X - fixedX);
    return angle1 - angle2;
  },
  addSlideListeners: function (ob) {
    var self = this;
    var parentEl = ob.parent_holder;
    var $parent = $(ob.parent_holder);
    var $options = $(ob.activity_area);
    parentEl.addEventListener("mouseup", function (event) {
      if (ob._startSelect) {
        self.validate(ob);
        ob._startSelect = false;
      }
    });
    var listDiv = $options.find(".wordlist");
    $parent.find(".wordlist_but").click(function () {
      var visibl = listDiv.hasClass("d-none");
      self.showWordList(visibl);
    });
  },
  validate: function (ob) {
    var self = this;

    var wordArr = this.changeCase(ob.wordList);
    wordArr = this.trimSpaces(wordArr);

    var e = $(ob.matrix_holder);
    var e1 = ob.word_holder;
    var corr = e.find(".corrHolder");

    ob._selWordArr = [];

    ob.allCorrect = self.checkTotals(ob);

    if (ob.allCorrect != 1) {
      var startCell = ob._selStart;
      var endCell = ob._selEnd;

      if (!startCell || !endCell) {
        ob._rectOb.width = ob._rectOb.originalwidth;
        self.resetDraw("tmp");
        return;
      }

      var startArr = getIntArray(startCell.split("_"));
      var endArr = getIntArray(endCell.split("_"));

      var startRow = startArr[1];
      var startCol = startArr[2];

      var endRow = endArr[1];
      var endCol = endArr[2];

      // =========================================================
      // GET DIRECTION
      // =========================================================

      var rowDiff = endRow - startRow;
      var colDiff = endCol - startCol;

      var rowStep = 0;
      var colStep = 0;

      if (rowDiff > 0) {
        rowStep = 1;
      } else if (rowDiff < 0) {
        rowStep = -1;
      }

      if (colDiff > 0) {
        colStep = 1;
      } else if (colDiff < 0) {
        colStep = -1;
      }

      // =========================================================
      // VALID DIRECTION?
      //
      // horizontal
      // vertical
      // diagonal
      // =========================================================

      var isHorizontal = rowDiff === 0;

      var isVertical = colDiff === 0;

      var isDiagonal = Math.abs(rowDiff) === Math.abs(colDiff);

      if (isHorizontal || isVertical || isDiagonal) {
        var row = startRow;
        var col = startCol;

        while (true) {
          var thisCell = e.find(".col_" + row + "_" + col);

          if (thisCell.length > 0) {
            ob._selWordArr.push($(thisCell).find("p").html());
          }

          // reached last cell
          if (row === endRow && col === endCol) {
            break;
          }

          row += rowStep;
          col += colStep;
        }
      }

      // =========================================================
      // BUILD SELECTED WORD
      // =========================================================

      if (ob._selWordArr.length > 0) {
        var tWord = ob._selWordArr.join("").toLowerCase();

        var isCorrect = false;

        var theIndx = $.inArray(tWord, wordArr);

        // normal direction
        if (theIndx >= 0) {
          isCorrect = true;
        } else {
          // reverse direction

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

        // =========================================================
        // CORRECT WORD
        // =========================================================

        if (isCorrect) {
          if (corr.find(".corr_" + tWord).length == 0) {
            var _w = e1.getElementsByClassName("word_" + (theIndx + 1))[0];

            if (_w) {
              var _p = _w.getElementsByTagName("p")[0];

              var _i = _w.getElementsByTagName("i")[0];

              var _tAns = this.trimSpaces([_p.innerHTML]);

              if (
                _tAns[0].toLowerCase() === tWord &&
                _i.style.display == "none"
              ) {
                ob.correctCount++;

                _i.style.display = "block";
              }
            }

            // IMPORTANT:
            // make a COPY of rect object

            var newObj = {};

            newObj.word = tWord;

            newObj.rectObj = $.extend({}, ob._rectOb);

            ob.corrWords.push(newObj);

            self.drawRect(ob, "correct", tWord);

            var resetBtn = document.getElementsByClassName("resetBtn")[0];

            if (resetBtn) {
              resetBtn.classList.remove("disabled");
            }
          }
        }
      }

      // =========================================================
      // ALL CORRECT
      // =========================================================

      ob.allCorrect = self.checkTotals(ob);

      if (ob.allCorrect == 1) {
        showFeedback(true, true);
      }
    }

    // =========================================================
    // RESET TEMP SELECTION
    // =========================================================

    ob._rectOb.width = ob._rectOb.originalwidth;

    self.resetDraw("tmp");
  },
  checkTotals: function (ob) {
    var ret = 0;
    if (ob.wordList.length > 0) {
      if (ob.correctCount == ob.wordList.length) {
        ret = 1;
      }
    }
    return ret;
  },
  buildWordList: function (ob) {
    this.deleteChild(ob.word_holder);
    var cssArr = [];
    if (ob.css_words != "none") {
      cssArr = ob.css_words.toString().split(",");
    }
    if (ob.wordList.length > 0) {
      for (var r = 0; r < ob.wordList.length; r++) {
        var divEl = document.createElement("div");
        divEl.setAttribute("class", "word word_" + (r + 1));
        divEl.classList.add("inLine");
        var i = document.createElement("i");
        i.setAttribute("class", "fa fa-check green");
        i.style.display = "none";
        divEl.appendChild(i);
        var t = document.createElement("p");
        if (ob.css_words != "none") {
          if (cssArr[r].length > 0) {
            var tcss = cssArr[r].split("|");
            if (tcss.length > 0) {
              divEl.style.position = "absolute";
              for (var css = 0; css < tcss.length; css++) {
                var tArr = tcss[css].split(":");
                if ($.trim(tArr[0]) == "left") {
                  divEl.style.left = tArr[1];
                }
                if ($.trim(tArr[0]) == "top") {
                  divEl.style.top = tArr[1];
                }
              }
            }
          }
        }
        divEl.appendChild(t);
        divEl.getElementsByTagName("p")[0].innerHTML = ob.wordList[r];
        ob.word_holder.appendChild(divEl);
        ob.wordlistbuilt = "yes";
      }
    }
  },
  resetDraw: function (val) {
    var ob = this.ob;
    var e = $(ob.matrix_holder);
    var corr = e.find(".corrHolder");
    var rect = e.find(".rect");
    if (val == "all") {
      corr.empty();
      rect.css({ display: "none" });
    } else if (val == "tmp") {
      rect.css({ display: "none" });
    }
  },
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
  },
  deleteChild: function (obj) {
    var e = obj;
    var child = e.lastElementChild;
    while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
    }
  },
  getWordsFromOb: function (arr) {
    var fArr = [];
    if (arr.length > 0) {
      for (var a = 0; a < arr.length; a++) {
        fArr[a] = $.trim(arr[a].text);
      }
    }
    return fArr;
  },
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
  changeCase: function (arr) {
    var arr1 = [];
    if (arr.length > 0) {
      for (var i = 0; i < arr.length; i++) {
        arr1[i] = arr[i].toLowerCase();
      }
    }
    return arr1;
  },
  trimSpaces: function (arr) {
    var arr1 = [];
    if (arr.length > 0) {
      for (var i = 0; i < arr.length; i++) {
        var tmpArr = arr[i].split(" ");
        arr1[i] = tmpArr.join("");
      }
    }
    return arr1;
  },
  initialSettings: function () {
    this.reset();
    initialSettingsDone(1);
  },
};
