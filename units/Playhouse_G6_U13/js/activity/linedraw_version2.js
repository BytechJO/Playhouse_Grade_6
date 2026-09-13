// ******************************************
// LINE DRAW (revamped)
// Version no: 1.2
// ******************************************

window.LineDraw = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.orientationAdjust = "yes";

  this.init(this.settings);
};

LineDraw.prototype = {
  // =========================================================
  // INIT
  // =========================================================

  init: function (ob) {
    ob.startDraw = false;

    ob.dropConnections = [];

    ob.correctCount = 0;
    ob.wrongCount = 0;

    ob.resultArr = [];

    ob.lineObjects = [];

    ob.lineOb = {};

    ob.lineOb.startNode;
    ob.lineOb.endNode;

    ob.lineOb.startX = 0;
    ob.lineOb.startY = 0;

    ob.lineOb.endX = 0;
    ob.lineOb.endY = 0;

    ob.lineOb.distance = 0;
    ob.lineOb.angle = 0;

    ob.lineOb.startElement = "";
    ob.lineOb.color = "";

    ob.lineColor = "";

    ob.lineThickness = 0;

    ob.connectType = "";

    ob.selectionColor = "";

    ob.transformPerc = "";

    ob.rightOffset;

    ob.containerRight = 0;

    ob.topOffset = 0;

    ob.setI;

    this.ob = ob;

    this.listen(ob);
  },

  // =========================================================
  // SCREEN RESIZE / ORIENTATION
  // =========================================================

  screenPoseAdjustments: function () {
    var self = this;

    var ob = this.ob;

    if (ob.lineObjects.length > 0) {
      for (var ln = 0; ln < ob.lineObjects.length; ln++) {
        self.setValuesForLine(ob.lineObjects[ln]);

        self.drawRect(ob.lineObjects[ln], "draw", "");
      }
    }
  },

  // =========================================================
  // REMOVE CONNECTION FROM NODE
  // =========================================================
  // إذا ضغطنا على نقطة موصولة:
  // احذف الخط القديم وافصل النقطتين
  // =========================================================

  removeConnectionForNode: function (nodeId) {
    var self = this;

    var ob = this.ob;

    var $area = $(ob.activity_area);

    var $holder = $area.find("#" + nodeId);

    var $node = $holder.find(".node");

    if (!$node.length) {
      return;
    }

    var connectedData = $node.data("connected");

    if (
      connectedData == undefined ||
      connectedData == null ||
      connectedData == ""
    ) {
      $node.data("connected", "");

      return;
    }

    var connectedIds = String(connectedData).split(",");

    // =====================================================
    // LOOP THROUGH CONNECTIONS
    // =====================================================

    for (var i = 0; i < connectedIds.length; i++) {
      var otherId = connectedIds[i];

      if (otherId == undefined || otherId == null || otherId == "") {
        continue;
      }

      // =================================================
      // REMOVE LINE OBJECT
      // =================================================

      for (var l = ob.lineObjects.length - 1; l >= 0; l--) {
        var lineObj = ob.lineObjects[l];

        var sameConnection =
          (lineObj.startID == nodeId && lineObj.endID == otherId) ||
          (lineObj.startID == otherId && lineObj.endID == nodeId);

        if (sameConnection) {
          // remove line from DOM
          $area.find("#" + lineObj.name).remove();

          // remove from array
          ob.lineObjects.splice(l, 1);
        }
      }

      // =================================================
      // CLEAR OTHER NODE CONNECTION
      // =================================================

      var $otherHolder = $area.find("#" + otherId);

      var $otherNode = $otherHolder.find(".node");

      if ($otherNode.length) {
        var otherConnections = $otherNode.data("connected");

        if (
          otherConnections != undefined &&
          otherConnections != null &&
          otherConnections != ""
        ) {
          var otherArr = String(otherConnections)
            .split(",")
            .filter(function (id) {
              return id != nodeId && id != "";
            });

          $otherNode.data("connected", otherArr.join(","));
        }

        $otherNode.css("border-color", "transparent");
      }
    }

    // =====================================================
    // CLEAR THIS NODE
    // =====================================================

    $node.data("connected", "");

    $node.css("border-color", "transparent");

    // =====================================================
    // HIDE PREVIOUS VALIDATION ICONS
    // =====================================================

    self.showIcons(false, []);
  },

  // =========================================================
  // LISTEN
  // =========================================================

  listen: function (ob) {
    var self = this;

    var $area = $(ob.activity_area);

    // =====================================================
    // SETTINGS
    // =====================================================

    ob.lineColor =
      typeof ob.data_obj.linecolor != undefined && ob.data_obj.linecolor != null
        ? ob.data_obj.linecolor
        : "blue";

    ob.nodeColor =
      typeof ob.data_obj.nodecolor != undefined && ob.data_obj.nodecolor != null
        ? ob.data_obj.nodecolor
        : "#5d5d5d";

    ob.lineThickness =
      typeof ob.data_obj.strokewidth != undefined &&
      ob.data_obj.strokewidth != null
        ? parseInt(ob.data_obj.strokewidth)
        : 4;

    ob.connectType =
      typeof ob.data_obj.connect != undefined && ob.data_obj.connect != null
        ? ob.data_obj.connect
        : "single";

    ob.selectionColor =
      typeof ob.data_obj.nodeselectioncolor != undefined &&
      ob.data_obj.nodeselectioncolor != null
        ? ob.data_obj.nodeselectioncolor
        : "#38a3ff";

    ob.transformPerc = parseInt(ob.lineThickness) / 2;

    // =====================================================
    // INITIALIZE NODES
    // =====================================================

    $area.find(".node").each(function () {
      if (
        $(this).data("connected") == undefined ||
        $(this).data("connected") == null
      ) {
        $(this).data("connected", "");
      }

      $(this).css("cursor", "pointer");

      $(this).css("background-color", ob.nodeColor);
    });

    // =====================================================
    // NODE CLICK
    // =====================================================

    $area
      .find(".node")
      .off("click.lineDraw")
      .on("click.lineDraw", function () {
        var $thisNode = $(this);

        var classArray = $thisNode.attr("class").split(" ");

        var thisNode = "";

        // find dragPoint / dropPoint safely
        for (var c = 0; c < classArray.length; c++) {
          if (classArray[c] == "dragPoint" || classArray[c] == "dropPoint") {
            thisNode = classArray[c];

            break;
          }
        }

        var thisID = $thisNode.parent().attr("id");

        // =================================================
        // ALWAYS EDITABLE
        // =================================================

        $thisNode.css("cursor", "pointer");

        // =================================================
        // START NEW LINE
        // =================================================

        if (!ob.startDraw) {
          // ---------------------------------------------
          // If this node already has a connection:
          // remove it first
          // ---------------------------------------------

          if (
            ob.connectType == "single" &&
            $thisNode.data("connected") != undefined &&
            $thisNode.data("connected") != ""
          ) {
            self.removeConnectionForNode(thisID);
          }

          // hide old validation
          self.showIcons(false, []);

          ob.lineOb = {};

          ob.lineOb.startNode = $thisNode;

          ob.lineOb.startID = thisID;

          ob.lineOb.startElement = thisNode;

          $thisNode.css("border-color", ob.selectionColor);

          ob.startDraw = true;

          return;
        }

        // =================================================
        // COMPLETE NEW LINE
        // =================================================

        var connectCondition =
          ob.lineOb.startElement == "dragPoint"
            ? thisNode == "dropPoint"
            : thisNode == "dragPoint";

        // =================================================
        // SAME SIDE CLICKED
        // Cancel selection
        // =================================================

        if (!connectCondition) {
          self.resetNodes("draw", true);

          ob.startDraw = false;

          ob.lineOb = {};

          return;
        }

        // =================================================
        // DESTINATION ALREADY CONNECTED
        // REMOVE OLD CONNECTION
        // =================================================

        if (
          ob.connectType == "single" &&
          $thisNode.data("connected") != undefined &&
          $thisNode.data("connected") != ""
        ) {
          self.removeConnectionForNode(thisID);
        }

        // =================================================
        // GET START HOLDER
        // =================================================

        var $tpOb = $area.find("#" + ob.lineOb.startID);

        var $startNode = $tpOb.find(".node");

        var startNodeConnectedData = $startNode.data("connected");

        if (
          startNodeConnectedData == undefined ||
          startNodeConnectedData == null
        ) {
          startNodeConnectedData = "";
        }

        // =================================================
        // SET END NODE
        // =================================================

        ob.lineOb.endNode = $thisNode;

        ob.lineOb.endID = thisID;

        // =================================================
        // SAVE CONNECTION TO START
        // =================================================

        if (startNodeConnectedData == "") {
          $startNode.data("connected", thisID);
        } else {
          $startNode.data("connected", startNodeConnectedData + "," + thisID);
        }

        // =================================================
        // SAVE CONNECTION TO END
        // =================================================

        var endConnectedData = $thisNode.data("connected");

        if (
          endConnectedData == undefined ||
          endConnectedData == null ||
          endConnectedData == ""
        ) {
          $thisNode.data("connected", ob.lineOb.startID);
        } else {
          $thisNode.data(
            "connected",
            endConnectedData + "," + ob.lineOb.startID,
          );
        }

        // =================================================
        // DRAW LINE
        // =================================================

        ob.lineOb.color = ob.lineColor;

        self.setValuesForLine(ob.lineOb);

        self.drawRect(ob.lineOb, "draw", "");

        $thisNode.css("border-color", ob.selectionColor);

        // =================================================
        // SAVE LINE OBJECT
        // =================================================

        ob.lineObjects.push(ob.lineOb);

        // =================================================
        // RESET CURRENT LINE
        // =================================================

        ob.lineOb = {};

        ob.startDraw = false;

        // =================================================
        // RESET NODE BORDERS
        // =================================================

        clearTimeout(ob.nodeResetTimeout);

        ob.nodeResetTimeout = setTimeout(function () {
          self.resetNodes("draw", true);
        }, 250);

        // =================================================
        // ENABLE CHECK / RESET
        // =================================================

        if (ob.lineObjects.length > 0) {
          var checkBtn = document.getElementsByClassName("checkBtn")[0];

          var resetBtn = document.getElementsByClassName("resetBtn")[0];

          if (checkBtn) {
            checkBtn.classList.remove("disabled");
          }

          if (resetBtn) {
            resetBtn.classList.remove("disabled");
          }
        }
      });
  },

  // =========================================================
  // SET VALUES FOR LINE
  // =========================================================

  setValuesForLine: function (lineOb) {
    var ob = this.ob;

    var halfWidth = parseInt(lineOb.startNode.outerWidth()) / 2;

    lineOb.height = ob.lineThickness;

    var lineHalfHeight = lineOb.height / 2;

    var st_margin_left = parseInt(lineOb.startNode.css("margin-left"));

    var st_margin_top = parseInt(lineOb.startNode.css("margin-top"));

    // Prevent NaN
    if (isNaN(st_margin_left)) {
      st_margin_left = 0;
    }

    if (isNaN(st_margin_top)) {
      st_margin_top = 0;
    }

    lineOb.startY =
      lineOb.startNode.position().top +
      (st_margin_top + halfWidth) -
      lineHalfHeight;

    lineOb.startX =
      lineOb.startNode.position().left +
      (st_margin_left + halfWidth) -
      lineHalfHeight;

    var ed_margin_left = parseInt(lineOb.endNode.css("margin-left"));

    var ed_margin_top = parseInt(lineOb.endNode.css("margin-top"));

    // Prevent NaN
    if (isNaN(ed_margin_left)) {
      ed_margin_left = 0;
    }

    if (isNaN(ed_margin_top)) {
      ed_margin_top = 0;
    }

    lineOb.endY =
      lineOb.endNode.position().top +
      (ed_margin_top + halfWidth) -
      lineHalfHeight;

    lineOb.endX =
      lineOb.endNode.position().left +
      (ed_margin_left + halfWidth) -
      lineHalfHeight;

    lineOb.distance = Math.sqrt(
      (lineOb.endX - lineOb.startX) * (lineOb.endX - lineOb.startX) +
        (lineOb.endY - lineOb.startY) * (lineOb.endY - lineOb.startY),
    );

    lineOb.distance = lineOb.distance + lineOb.height;

    lineOb.angle =
      (Math.atan2(lineOb.endY - lineOb.startY, lineOb.endX - lineOb.startX) *
        180) /
      Math.PI;

    lineOb.name = "line-" + lineOb.startID + "-" + lineOb.endID;
  },

  // =========================================================
  // DRAW LINE
  // =========================================================

  drawRect: function (lineOb, axn, nam) {
    var ob = this.ob;

    var e = $(ob.activity_area);

    var $lines = e.find(".lines");

    var obj = lineOb;

    // avoid duplicate DOM lines
    $lines.find("#" + obj.name).remove();

    $lines.append('<div class="line" id="' + obj.name + '"></div>');

    var rect = $lines.find("#" + obj.name);

    if (axn == "draw") {
      rect.css({
        top: obj.startY + "px",

        left: obj.startX + "px",

        width: obj.distance + "px",

        height: obj.height + "px",

        transform: "rotate(" + obj.angle + "deg)",
      });

      rect.css({
        "transform-origin":
          ob.transformPerc + "px " + ob.transformPerc + "px 0px",
      });
    }

    rect.css({
      "border-color": obj.color,

      "background-color": obj.color,

      display: "block",
    });
  },

  // =========================================================
  // VALIDATE
  // =========================================================

  validate: function () {
    var ob = this.ob;

    var $area = $(ob.activity_area);

    var self = this;

    var dataQuestion = ob.data_obj.questions;

    ob.dropConnections = [];

    ob.resultArr = [];

    ob.correctCount = 0;

    ob.wrongCount = 0;

    var numOfDrops = dataQuestion.drops.length;

    // =====================================================
    // INIT DROP CONNECTIONS
    // =====================================================

    for (var dp = 0; dp < numOfDrops; dp++) {
      ob.dropConnections[dp] = [];
    }

    // =====================================================
    // CHECK EACH LINE
    // =====================================================

    for (var ll = 0; ll < ob.lineObjects.length; ll++) {
      var tOb = ob.lineObjects[ll];

      var dropElement =
        tOb.startElement == "dropPoint" ? tOb.startID : tOb.endID;

      var dragElement = dropElement == tOb.startID ? tOb.endID : tOb.startID;

      var dropArr = dropElement.split("_");

      var dragArr = dragElement.split("_");

      var correctAns = dataQuestion.drops[parseInt(dropArr[2]) - 1].answer;

      ob.dropConnections[parseInt(dropArr[2]) - 1].push(parseInt(dragArr[2]));

      if (correctAns.length > 0) {
        var isAns =
          $.inArray(parseInt(dragArr[2]), getIntArray(correctAns)) >= 0;

        tOb.color = isAns ? "green" : "red";

        ob.lineObjects[ll].color = tOb.color;

        $area.find("#" + tOb.name).css({
          "border-color": tOb.color,

          "background-color": tOb.color,
        });
      }
    }

    // =====================================================
    // RESULT FOR EACH DROP
    // =====================================================

    for (var dp1 = 0; dp1 < numOfDrops; dp1++) {
      var thisIsCorr = compareArrays(
        ob.dropConnections[dp1],
        dataQuestion.drops[dp1].answer,
      );

      if (
        ob.dropConnections[dp1][0] == undefined &&
        dataQuestion.drops[dp1].answer[0] == "0"
      ) {
        thisIsCorr = true;
      }

      if (thisIsCorr) {
        ob.correctCount++;

        ob.resultArr[dp1] = 1;
      } else {
        ob.wrongCount++;

        ob.resultArr[dp1] = 0;
      }
    }

    // =====================================================
    // IMPORTANT:
    // KEEP NODES ACTIVE AFTER CHECK
    // =====================================================

    self.resetNodes("all", true);

    // =====================================================
    // SHOW TICK / CROSS
    // =====================================================

    self.showIcons(true, ob.resultArr);

    var allCorrect = ob.correctCount == numOfDrops && ob.wrongCount == 0;

    showFeedback(true, allCorrect);
  },

  // =========================================================
  // SHOW ICONS
  // =========================================================

  showIcons: function (aBoo, aResult) {
    var ob = this.ob;

    var $area = $(ob.activity_area);

    $area.find(".drop").each(function () {
      var thisDrp = parseInt($(this).attr("id").split("_")[2]) - 1;

      if (aBoo) {
        $(this).find(".icon_wrap").css("display", "block");

        if (aResult[thisDrp] == 1) {
          $(this).find(".tick").css("display", "block");

          $(this).find(".cross").css("display", "none");
        } else {
          $(this).find(".cross").css("display", "block");

          $(this).find(".tick").css("display", "none");
        }
      } else {
        $(this).find(".icon_wrap").css("display", "none");

        $(this).find(".tick").css("display", "none");

        $(this).find(".cross").css("display", "none");
      }
    });
  },

  // =========================================================
  // RESET NODES
  // =========================================================

  resetNodes: function (aVal, aBoo) {
    var ob = this.ob;

    var $area = $(ob.activity_area);

    clearInterval(ob.setI);

    $area.find(".node").each(function () {
      $(this).css("background-color", ob.nodeColor);

      if (aVal == "all") {
        if (aBoo) {
          // IMPORTANT:
          // keep connection data
          // فقط نخلي النقطة قابلة للتعديل
          $(this).css("cursor", "pointer");
        } else {
          $(this).css("cursor", "default");
        }

        $(this).css("border-color", "transparent");
      } else {
        $(this).css("border-color", "transparent");

        if (aBoo) {
          $(this).css("cursor", "pointer");
        }
      }
    });
  },

  // =========================================================
  // RESET FULL ACTIVITY
  // =========================================================

  reset: function () {
    var self = this;

    var ob = this.ob;

    var $area = $(ob.activity_area);

    // remove lines
    $area.find(".lines").empty();

    // clear arrays
    ob.lineObjects = [];

    ob.dropConnections = [];

    ob.resultArr = [];

    ob.correctCount = 0;

    ob.wrongCount = 0;

    ob.startDraw = false;

    ob.lineOb = {};

    // hide validation
    self.showIcons(false, []);

    // =====================================================
    // CLEAR ALL CONNECTION DATA
    // =====================================================

    $area.find(".node").each(function () {
      $(this).data("connected", "");

      $(this).css({
        cursor: "pointer",

        "border-color": "transparent",

        "background-color": ob.nodeColor,
      });
    });
  },

  // =========================================================
  // INITIAL SETTINGS
  // =========================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
