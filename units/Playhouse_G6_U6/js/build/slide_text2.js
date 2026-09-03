function buildReadingHTML(aObj) {
  var slide = "";
  var slideHtml = "";

  slideHtml = "<div class='container content_wrap reading_container'>";

  // =========================================================
  // PAGE NAVIGATION
  // =========================================================

  slideHtml +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/back_btn.png">' +
    "</a>" +
    "</div>";

  slideHtml +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/next_btn.png">' +
    "</a>" +
    "</div>";

  // =========================================================
  // ACTIVITY HEADER
  // =========================================================

  slideHtml += '<div class="act_head_group justify-content-center">';

  for (var i = 0; i < aObj.slides.length; i++) {
    slide = aObj.slides[i];

    slideHtml +=
      "<div class='image_container " + slide.parent_class_name + "'>";

    slideHtml += "</div>";
  }

  // =========================================================
  // MAIN TITLE
  // =========================================================

  slideHtml +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.mainTitleAudio +
    '">';

  slideHtml += '<div class="q-type-img-container">';

  slideHtml += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

  if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
    slideHtml +=
      '<img class="mainTitleIcon" ' +
      'src="' +
      aObj.mainTitleIcon +
      '" ' +
      'style="right:' +
      aObj.mainTitleIconPos.right +
      ';">';
  }

  slideHtml += "</div>";

  slideHtml += "</div>";

  // =========================================================
  // SUB TITLE
  // =========================================================

  slideHtml += '<div class="activityHeading">';

  slideHtml +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.subTitleAudio +
    '">';

  slideHtml += "<div class='page_sub_title'>";

  slideHtml += "<p>" + aObj.subTitleTextLeft + "</p>";

  for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
    if (
      aObj.subTitleIcons[sicons] !== undefined &&
      aObj.subTitleIcons[sicons] !== ""
    ) {
      slideHtml += "<img src='" + aObj.subTitleIcons[sicons] + "'>";
    }
  }

  slideHtml +=
    "<br>" + "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

  slideHtml += "</div>";

  slideHtml += "</div>";

  slideHtml += "</div>";

  slideHtml += "</div>";

  // =========================================================
  // ACTIVITY CONTENT
  // =========================================================

  slideHtml += "<div class='options cont_ht_sf mx-auto'>";

  slideHtml +=
    "<div class='all_cont d-flex justify-content-center align-items-center'>";

  slideHtml +=
    '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

  slideHtml += '<div class="group_white_border">';

  // =========================================================
  // TABLET CAMERA
  // =========================================================

  slideHtml += '<div class="header_cam"></div>';

  // =========================================================
  // TABLET HEADER
  // =========================================================

  slideHtml += '<div class="header_bar">';

  slideHtml += '<div class="icons">';

  slideHtml += '<div class="icons_left">';

  slideHtml += '<i class="icon fa fa-reply"></i>';

  slideHtml += '<i class="icon fa fa-home"></i>';

  slideHtml += '<i class="icon fa fa-clone"></i>';

  slideHtml += "</div>";

  slideHtml += '<div class="icons_right">';

  slideHtml += '<i class="icon fa fa-paper-plane"></i>';

  slideHtml += '<i class="icon fa fa-envelope"></i>';

  slideHtml += '<i class="icon battery fa fa-battery-half"></i>';

  slideHtml += '<i class="icon fa fa-signal"></i>';

  slideHtml += "</div>";

  slideHtml += "</div>";

  slideHtml += "</div>";

  // =========================================================
  // BUILD READING SLIDES
  // =========================================================

  if (
    aObj !== undefined &&
    aObj !== null &&
    aObj.slides &&
    aObj.slides.length !== 0
  ) {
    for (
      var slideGroupIndex = 0;
      slideGroupIndex < aObj.slides.length;
      slideGroupIndex++
    ) {
      slide = aObj.slides[slideGroupIndex];

      // =================================================
      // TITLE
      // =================================================

      slideHtml += '<div class="title">' + slide.title + "</div>";

      // =================================================
      // CAROUSEL
      // =================================================

      slideHtml +=
        '<div id="carouselContainer" ' +
        'class="carousel slide" ' +
        'data-interval="false">';

      slideHtml += '<div class="carousel-inner">';

      // =================================================
      // INDIVIDUAL SLIDES
      // =================================================

      for (
        var textIndex = 0;
        textIndex < slide.array_text.length;
        textIndex++
      ) {
        var isActive = textIndex === 0 ? "active" : "";

        var slideImage = "";
        var imagePosition = "";

        // =============================================
        // OPTIONAL SLIDE IMAGE
        // =============================================

        if (slide.slide_images && slide.slide_images[textIndex]) {
          slideImage = slide.slide_images[textIndex];
        }

        // =============================================
        // OPTIONAL IMAGE POSITION
        // =============================================

        if (
          slide.slide_image_positions &&
          slide.slide_image_positions[textIndex]
        ) {
          imagePosition = slide.slide_image_positions[textIndex];
        }

        // =============================================
        // CAROUSEL ITEM
        // =============================================

        slideHtml += '<div class="carousel-item ' + isActive + '">';

        slideHtml += "<div class='slide-container slide-with-image'>";

        // =============================================
        // IMAGE INSIDE TEXT
        // =============================================

        if (slideImage !== "") {
          slideHtml +=
            "<img " +
            'src="' +
            slideImage +
            '" ' +
            'class="reading-slide-image ' +
            imagePosition +
            '">';
        }

        // =============================================
        // TEXT / CUSTOM HTML
        // =============================================

        slideHtml +=
          '<div class="reading-slide-text">' +
          slide.array_text[textIndex] +
          "</div>";

        slideHtml += "</div>";

        slideHtml += "</div>";
      }

      // =================================================
      // END INNER
      // =================================================

      slideHtml += "</div>";

      // =================================================
      // PREVIOUS
      // =================================================

      slideHtml +=
        '<a class="carousel-control-prev" ' +
        'href="#carouselContainer" ' +
        'role="button" ' +
        'data-slide="prev">';

      slideHtml +=
        '<span class="carousel-control-prev-icon" ' +
        'aria-hidden="true"></span>';

      slideHtml += '<span class="sr-only">Previous</span>';

      slideHtml += "</a>";

      // =================================================
      // NEXT
      // =================================================

      slideHtml +=
        '<a class="carousel-control-next" ' +
        'href="#carouselContainer" ' +
        'role="button" ' +
        'data-slide="next">';

      slideHtml +=
        '<span class="carousel-control-next-icon" ' +
        'aria-hidden="true"></span>';

      slideHtml += '<span class="sr-only">Next</span>';

      slideHtml += "</a>";

      slideHtml += "</div>";
    }
  }

  // =========================================================
  // HOME BUTTON
  // =========================================================

  slideHtml += '<div class="home_Btn" onclick="returnFirstSlide()"></div>';

  // =========================================================
  // CLOSE
  // =========================================================

  slideHtml += "</div>";
  slideHtml += "</div>";
  slideHtml += "</div>";
  slideHtml += "</div>";
  slideHtml += "</div>";

  // =========================================================
  // APPEND HTML
  // =========================================================

  $(".mainContent").append(slideHtml);

  $(".activity_area").append(slideHtml);

  // =========================================================
  // WAIT FOR CONTENT + INIT CANVAS
  // =========================================================

  setTimeout(function () {
    setReadingCarouselHeight();

    initStraightLineCanvas();

    resizeDrawingCanvases();
  }, 150);

  // =========================================================
  // NORMAL READING IMAGE LOAD
  // =========================================================

  $(".reading-slide-image").on("load", function () {
    setReadingCarouselHeight();
  });

  // =========================================================
  // NORMAL IMAGE CACHED
  // =========================================================

  $(".reading-slide-image").each(function () {
    if (this.complete) {
      setReadingCarouselHeight();
    }
  });

  // =========================================================
  // DRAWING QUESTION IMAGE LOAD
  // =========================================================

  $(".drawing_question_img").on("load", function () {
    setReadingCarouselHeight();

    resizeDrawingCanvases();
  });

  // =========================================================
  // DRAWING IMAGE CACHED
  // =========================================================

  $(".drawing_question_img").each(function () {
    if (this.complete) {
      setReadingCarouselHeight();

      resizeDrawingCanvases();
    }
  });

  shakeImage();

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* =========================================================
   STRAIGHT LINE CANVAS
========================================================= */

function initStraightLineCanvas() {
  $(".drawing_canvas").each(function () {
    var canvas = this;

    // لا تهيئ نفس canvas مرتين
    if (canvas._straightLineInitialized) {
      return;
    }

    canvas._straightLineInitialized = true;

    var ctx = canvas.getContext("2d");

    var $canvas = $(canvas);

    var $wrapper = $canvas.closest(".drawing_question");

    var clearButton = $wrapper.find(".clear_drawing_btn")[0];

    // =========================================
    // SAVED LINES
    // =========================================

    var lines = [];

    var isDrawing = false;

    var startX = 0;
    var startY = 0;

    var currentX = 0;
    var currentY = 0;

    // =========================================
    // STYLE
    // =========================================

    function setLineStyle() {
      ctx.strokeStyle = "#000000";

      ctx.lineWidth = 3;

      ctx.lineCap = "round";

      ctx.lineJoin = "round";
    }

    // =========================================
    // RESIZE
    // =========================================

    function resizeCanvas() {
      var rect = canvas.getBoundingClientRect();

      if (rect.width <= 0 || rect.height <= 0) {
        return;
      }

      var dpr = window.devicePixelRatio || 1;

      canvas.width = Math.round(rect.width * dpr);

      canvas.height = Math.round(rect.height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      redrawLines();
    }

    // =========================================
    // POINTER POSITION
    // =========================================

    function getPointerPosition(e) {
      var rect = canvas.getBoundingClientRect();

      return {
        x: e.clientX - rect.left,

        y: e.clientY - rect.top,
      };
    }

    // =========================================
    // DRAW ONE STRAIGHT LINE
    // =========================================

    function drawLine(x1, y1, x2, y2) {
      setLineStyle();

      ctx.beginPath();

      ctx.moveTo(x1, y1);

      ctx.lineTo(x2, y2);

      ctx.stroke();

      ctx.closePath();
    }

    // =========================================
    // REDRAW SAVED LINES
    // =========================================

    function redrawLines() {
      var rect = canvas.getBoundingClientRect();

      ctx.clearRect(0, 0, rect.width, rect.height);

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];

        drawLine(
          line.x1 * rect.width,

          line.y1 * rect.height,

          line.x2 * rect.width,

          line.y2 * rect.height,
        );
      }
    }

    // =========================================
    // START LINE
    // =========================================

    canvas.addEventListener("pointerdown", function (e) {
      e.preventDefault();

      var pos = getPointerPosition(e);

      isDrawing = true;

      startX = pos.x;

      startY = pos.y;

      currentX = pos.x;

      currentY = pos.y;

      if (canvas.setPointerCapture) {
        canvas.setPointerCapture(e.pointerId);
      }
    });

    // =========================================
    // PREVIEW STRAIGHT LINE
    // =========================================

    canvas.addEventListener("pointermove", function (e) {
      if (!isDrawing) {
        return;
      }

      e.preventDefault();

      var pos = getPointerPosition(e);

      currentX = pos.x;

      currentY = pos.y;

      // امسح الـpreview السابق
      redrawLines();

      // ارسم خط مستقيم مؤقت
      drawLine(startX, startY, currentX, currentY);
    });

    // =========================================
    // FINISH LINE
    // =========================================

    function finishLine(e) {
      if (!isDrawing) {
        return;
      }

      isDrawing = false;

      var pos = getPointerPosition(e);

      currentX = pos.x;

      currentY = pos.y;

      var rect = canvas.getBoundingClientRect();

      var dx = currentX - startX;

      var dy = currentY - startY;

      var distance = Math.sqrt(dx * dx + dy * dy);

      // تجاهل click صغير
      if (distance < 5) {
        redrawLines();

        return;
      }

      // نخزن الخط كنسب
      lines.push({
        x1: startX / rect.width,

        y1: startY / rect.height,

        x2: currentX / rect.width,

        y2: currentY / rect.height,
      });

      redrawLines();
    }

    // =========================================
    // POINTER UP
    // =========================================

    canvas.addEventListener("pointerup", finishLine);

    // =========================================
    // POINTER CANCEL
    // =========================================

    canvas.addEventListener("pointercancel", function () {
      isDrawing = false;

      redrawLines();
    });

    // =========================================
    // CLEAR
    // =========================================

    if (clearButton) {
      clearButton.addEventListener("click", function (e) {
        e.preventDefault();

        e.stopPropagation();

        lines.length = 0;

        redrawLines();
      });
    }

    // =========================================
    // SAVE FUNCTIONS
    // =========================================

    canvas._drawingLines = lines;

    canvas._resizeCanvas = resizeCanvas;

    resizeCanvas();
  });

  // =========================================
  // WINDOW RESIZE
  // =========================================

  if (!window._straightLineResizeAdded) {
    window.addEventListener("resize", function () {
      resizeDrawingCanvases();
    });

    window._straightLineResizeAdded = true;
  }
}

/* =========================================================
   RESIZE ALL DRAWING CANVASES
========================================================= */

function resizeDrawingCanvases() {
  $(".drawing_canvas").each(function () {
    if (typeof this._resizeCanvas === "function") {
      this._resizeCanvas();
    }
  });
}

/* =========================================================
   SET HEIGHT BASED ON BIGGEST SLIDE
========================================================= */

function setReadingCarouselHeight() {
  $(".carousel").each(function () {
    var $carousel = $(this);

    var $inner = $carousel.find(".carousel-inner");

    var $items = $carousel.find(".carousel-item");

    var maxHeight = 0;

    // =====================================================
    // REMOVE PREVIOUS HEIGHT
    // =====================================================

    $inner.css({
      height: "auto",
    });

    $items.css({
      minHeight: "0",
    });

    // =====================================================
    // MEASURE EVERY SLIDE
    // =====================================================

    $items.each(function () {
      var $item = $(this);

      var isActive = $item.hasClass("active");

      // =================================================
      // SHOW HIDDEN SLIDE TEMPORARILY
      // =================================================

      if (!isActive) {
        $item.css({
          display: "block",
          position: "absolute",
          visibility: "hidden",
          width: "100%",
          left: "0",
          top: "0",
        });
      }

      // =================================================
      // GET REAL CONTENT HEIGHT
      // =================================================

      var currentHeight = $item.find(".slide-container").outerHeight(true);

      if (currentHeight > maxHeight) {
        maxHeight = currentHeight;
      }

      // =================================================
      // RESTORE HIDDEN SLIDE
      // =================================================

      if (!isActive) {
        $item.css({
          display: "",
          position: "",
          visibility: "",
          width: "",
          left: "",
          top: "",
        });
      }
    });

    // =====================================================
    // SMALL EXTRA SPACE
    // =====================================================

    maxHeight += 20;

    // =====================================================
    // SAME HEIGHT FOR ALL
    // =====================================================

    $inner.css({
      height: maxHeight + "px",
    });

    $items.css({
      minHeight: maxHeight + "px",
    });
  });
}

/* =========================================================
   RETURN FIRST SLIDE
========================================================= */

function returnFirstSlide() {
  $(".carousel").carousel(0);
}

/* =========================================================
   FIND TIME RANGE
========================================================= */

function findTimeRange(timeToCheck, targetTime) {
  for (let i = 0; i < targetTime.length; i++) {
    let [startTime, endTime] = targetTime[i];

    if (timeToCheck >= startTime && timeToCheck <= endTime) {
      return i;
    }
  }
}

/* =========================================================
   SHAKE IMAGE
========================================================= */

function shakeImage() {
  $(".shakingImage").css("width", "400px");

  setTimeout(function () {
    $(".shakingImage").css("width", "420px");

    setTimeout(function () {
      $(".shakingImage").css("width", "400px");

      setTimeout(shakeImage, 600);
    }, 600);
  }, 600);
}
