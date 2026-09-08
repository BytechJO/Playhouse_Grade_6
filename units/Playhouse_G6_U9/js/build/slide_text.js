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
        // IMAGE
        // =============================================

        if (slide.slide_images && slide.slide_images[textIndex]) {
          slideImage = slide.slide_images[textIndex];
        }

        // =============================================
        // IMAGE POSITION
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
        // TEXT
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

      slideHtml += '<span class="sr-only">' + "Previous" + "</span>";

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

      slideHtml += '<span class="sr-only">' + "Next" + "</span>";

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
  // WAIT FOR CONTENT
  // =========================================================

  setTimeout(function () {
    setReadingCarouselHeight();
  }, 100);

  // =========================================================
  // RECALCULATE AFTER IMAGE LOAD
  // =========================================================

  $(".reading-slide-image").on("load", function () {
    setReadingCarouselHeight();
  });

  // =========================================================
  // IF IMAGE ALREADY CACHED
  // =========================================================

  $(".reading-slide-image").each(function () {
    if (this.complete) {
      setReadingCarouselHeight();
    }
  });

  shakeImage();

  setLoadedStatus(getCurrFileOrDirectory("file"));
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
