function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);

    if (layOut == 4) {

      // =========================================================
      // BACK / NEXT
      // =========================================================

      htmlStmt +=
        '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

      htmlStmt += '<a href="">';

      htmlStmt +=
        '<img src="../images/icons/back_btn.png" />';

      htmlStmt += "</a>";
      htmlStmt += "</div>";


      htmlStmt +=
        '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

      htmlStmt += '<a href="">';

      htmlStmt +=
        '<img src="../images/icons/next_btn.png" />';

      htmlStmt += "</a>";
      htmlStmt += "</div>";


      // =========================================================
      // HEADING
      // =========================================================

      htmlStmt +=
        '<div class="act_head_group justify-content-center">';

      htmlStmt +=
        '<div class="audioIcon off contant" ' +
        'data-slideNum="1" ' +
        'data-audio="' +
        aObj.mainTitleAudio +
        '">';

      htmlStmt +=
        '<div class="q-type-img-container">';

      htmlStmt +=
        '<img class="mainTitle" src="' +
        aObj.mainTitle +
        '">';


      if (
        aObj.mainTitleIcon != undefined &&
        aObj.mainTitleIcon != ""
      ) {
        htmlStmt +=
          '<img class="mainTitleIcon" ' +
          'src="' +
          aObj.mainTitleIcon +
          '" ' +
          'style="right:' +
          aObj.mainTitleIconPos.right +
          ';">';
      }

      htmlStmt += "</div>";
      htmlStmt += "</div>";


      htmlStmt +=
        '<div class="activityHeading">';

      htmlStmt +=
        '<div class="audioIcon off contant audioQuestionTitle" ' +
        'data-slideNum="1" ' +
        'data-audio="' +
        aObj.subTitleAudio +
        '">';

      htmlStmt +=
        "<div class='page_sub_title d-flex'>";

      htmlStmt +=
        "<p>" +
        aObj.subTitleTextLeft +
        "</p>";


      if (
        aObj.subTitleIcons &&
        aObj.subTitleIcons.length > 0
      ) {
        for (
          var sicons = 0;
          sicons < aObj.subTitleIcons.length;
          sicons++
        ) {
          htmlStmt +=
            "<img src='" +
            aObj.subTitleIcons[sicons] +
            "'/>";
        }
      }


      htmlStmt +=
        "<p>" +
        (aObj.subTitleTextRight || "") +
        "</p>";

      htmlStmt += "</div>";
      htmlStmt += "</div>";
      htmlStmt += "</div>";
      htmlStmt += "</div>";


      // =========================================================
      // OPTIONS
      // =========================================================

      htmlStmt += '<div class="options">';


      // =========================================================
      // DRAW AREA WRAPPER
      // =========================================================

      htmlStmt += '<div class="draw_area_wrap">';


      // =========================================================
      // WORD OPTIONS
      // =========================================================

      if (
        aObj.options != undefined &&
        aObj.options != null &&
        aObj.options.length > 0
      ) {

        htmlStmt +=
          '<div class="word_opt_sticky d-flex justify-content-center">';

        htmlStmt +=
          '<div class="word_options d-flex flex-wrap justify-content-start">';


        jQuery.each(
          aObj.options,
          function (key, value) {

            var audioPath = "";

            if (
              aObj.optionsAudios &&
              aObj.optionsAudios[key]
            ) {
              audioPath =
                aObj.optionsAudios[key];
            }

            htmlStmt +=
              '<div class="audioIcon textEnd off d-flex contant" ' +
              'data-audio="' +
              audioPath +
              '">';

            htmlStmt +=
              '<div class="clue_word">' +
              value +
              "</div>";

            htmlStmt += "</div>";
          }
        );


        htmlStmt += "</div>";
        htmlStmt += "</div>";
      }


      // =========================================================
      // CONTENT
      // =========================================================

      htmlStmt +=
        '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';


      // =========================================================
      // TOP TEXT
      // =========================================================

      if (
        aObj.topText != undefined &&
        aObj.topText != null &&
        aObj.topText.length > 0
      ) {

        htmlStmt +=
          '<div class="topText_container d-flex flex-wrap ' +
          (aObj.parent_class_name || "") +
          '">';


        for (
          var x = 0;
          x < aObj.topText.length;
          x++
        ) {

          var topAudio = "";

          if (
            aObj.topTextAudio &&
            aObj.topTextAudio[x]
          ) {
            topAudio =
              aObj.topTextAudio[x];
          }

          htmlStmt +=
            '<div class="text audioIcon off contant" ' +
            'data-audio="' +
            topAudio +
            '">';

          htmlStmt +=
            '<span class="text">' +
            aObj.topText[x] +
            "</span>";

          htmlStmt += "</div>";
        }

        htmlStmt += "</div>";
      }


      // =========================================================
      // TEXTAREA
      // =========================================================

      htmlStmt +=
        '<div class="textarea-container">';

      htmlStmt +=
        '<textarea ' +
        'id="paper-textarea" ' +
        'rows="10" ' +
        'cols="50" ' +
        'maxlength="400">' +
        "</textarea>";

      htmlStmt += "</div>";


      htmlStmt += "</div>"; // group_elm


      // =========================================================
      // CANVAS OVER WORDS + TEXTAREA
      // =========================================================

      htmlStmt +=
        '<canvas id="circleCanvas"></canvas>';


      htmlStmt += "</div>"; // draw_area_wrap


      // =========================================================
      // OPTIONAL SECOND TITLE
      // =========================================================

      if (
        aObj.secondTitle &&
        aObj.secondTitle.show === true
      ) {

        htmlStmt +=
          '<div class="circle_question">';

        htmlStmt +=
          '<div class="circle_question_text">';

        htmlStmt +=
          '<span class="circle_number">' +
          (aObj.secondTitle.number || "") +
          "</span>";

        htmlStmt +=
          '<b class="circle_title">' +
          (aObj.secondTitle.title || "") +
          "</b>";

        htmlStmt +=
          '<span class="circle_text">' +
          (aObj.secondTitle.text || "") +
          "</span>";

        htmlStmt += "</div>";


        htmlStmt +=
          '<button type="button" ' +
          'id="circlePenBtn" ' +
          'class="circle_pen_btn" ' +
          'title="Draw">';

        htmlStmt +=
          '<i class="fas fa-pencil-alt"></i>';

        htmlStmt += "</button>";

        htmlStmt += "</div>";
      }


      htmlStmt += "</div>"; // options
    }
  }


  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);


  // =========================================================
  // INIT CANVAS
  // =========================================================

  if (
    aObj.secondTitle &&
    aObj.secondTitle.show === true
  ) {

    setTimeout(function () {
      initCircleCanvas();
    }, 100);
  }


  setLoadedStatus(
    getCurrFileOrDirectory("file")
  );
}



// =============================================================
// DRAW CANVAS
// =============================================================

function initCircleCanvas() {

  var canvas =
    document.getElementById("circleCanvas");

  var wrap =
    document.querySelector(".draw_area_wrap");

  var penBtn =
    document.getElementById("circlePenBtn");


  if (!canvas || !wrap || !penBtn) {
    console.log("Drawing elements missing");
    return;
  }


  var ctx =
    canvas.getContext("2d");

  var drawingEnabled = false;
  var drawing = false;


  // =========================================================
  // CANVAS SIZE
  // =========================================================

  function resizeCanvas() {

    var rect =
      wrap.getBoundingClientRect();


    if (
      rect.width <= 0 ||
      rect.height <= 0
    ) {
      return;
    }


    canvas.width =
      Math.round(rect.width);

    canvas.height =
      Math.round(rect.height);


    canvas.style.width =
      rect.width + "px";

    canvas.style.height =
      rect.height + "px";


    console.log(
      "canvas:",
      canvas.width,
      canvas.height
    );
  }


  resizeCanvas();


  window.addEventListener(
    "resize",
    resizeCanvas
  );


  // =========================================================
  // PEN TOGGLE
  // =========================================================

  penBtn.addEventListener(
    "click",
    function () {

      drawingEnabled =
        !drawingEnabled;


      if (drawingEnabled) {

        canvas.classList.add(
          "drawing-active"
        );

        penBtn.classList.add(
          "active"
        );


        // وقت الرسم ما نخلي textarea تستقبل click
        $("#paper-textarea").blur();

      } else {

        canvas.classList.remove(
          "drawing-active"
        );

        penBtn.classList.remove(
          "active"
        );

        drawing = false;
      }
    }
  );


  // =========================================================
  // GET POSITION
  // =========================================================

  function getPosition(e) {

    var rect =
      canvas.getBoundingClientRect();

    var clientX;
    var clientY;


    if (
      e.touches &&
      e.touches.length > 0
    ) {

      clientX =
        e.touches[0].clientX;

      clientY =
        e.touches[0].clientY;

    } else {

      clientX =
        e.clientX;

      clientY =
        e.clientY;
    }


    return {

      x:
        (clientX - rect.left) *
        (canvas.width / rect.width),

      y:
        (clientY - rect.top) *
        (canvas.height / rect.height)
    };
  }


  // =========================================================
  // START
  // =========================================================

  function startDrawing(e) {

    if (!drawingEnabled) {
      return;
    }

    e.preventDefault();

    drawing = true;

    var pos =
      getPosition(e);

    ctx.beginPath();

    ctx.moveTo(
      pos.x,
      pos.y
    );
  }


  // =========================================================
  // DRAW
  // =========================================================

  function draw(e) {

    if (
      !drawingEnabled ||
      !drawing
    ) {
      return;
    }

    e.preventDefault();

    var pos =
      getPosition(e);


    ctx.strokeStyle =
      "#e53935";

    ctx.lineWidth = 3;

    ctx.lineCap =
      "round";

    ctx.lineJoin =
      "round";


    ctx.lineTo(
      pos.x,
      pos.y
    );

    ctx.stroke();
  }


  // =========================================================
  // STOP
  // =========================================================

  function stopDrawing() {

    if (!drawing) {
      return;
    }

    drawing = false;

    ctx.closePath();
  }


  // =========================================================
  // MOUSE
  // =========================================================

  canvas.addEventListener(
    "mousedown",
    startDrawing
  );

  canvas.addEventListener(
    "mousemove",
    draw
  );

  canvas.addEventListener(
    "mouseup",
    stopDrawing
  );

  canvas.addEventListener(
    "mouseleave",
    stopDrawing
  );


  // =========================================================
  // TOUCH
  // =========================================================

  canvas.addEventListener(
    "touchstart",
    startDrawing,
    { passive: false }
  );

  canvas.addEventListener(
    "touchmove",
    draw,
    { passive: false }
  );

  canvas.addEventListener(
    "touchend",
    stopDrawing,
    { passive: false }
  );
}