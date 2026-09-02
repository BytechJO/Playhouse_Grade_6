function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;
    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;

    // =========================================================
    // NAVIGATION
    // =========================================================

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/back_btn.png" />';

    htmlStmt += "</a>";

    htmlStmt += "</div>";

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/next_btn.png" />';

    htmlStmt += "</a>";

    htmlStmt += "</div>";

    // =========================================================
    // HEADING
    // =========================================================

    htmlStmt += '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
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

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.subTitleAudio +
      '">';

    htmlStmt += "<div class='page_sub_title'>";

    htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }

    htmlStmt +=
      "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // MAIN CONTENT
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    htmlStmt += '<div class="screen_elements">';

    // =========================================================
    // OPTIONS IMAGE
    // =========================================================

    if (aObj.options_img != undefined) {
      htmlStmt += '<img src="' + aObj.options_img + '" class="options_img">';
    }

    // =========================================================
    // OPTIONS
    // =========================================================

    if (typeof aObj.options != undefined && aObj.options != null) {
      if (aObj.options.length > 0) {
        htmlStmt +=
          '<div class="word_opt_sticky d-flex justify-content-center">';

        htmlStmt +=
          '<div class="word_options d-flex flex-wrap justify-content-around">';

        jQuery.each(aObj.options, function (key, value) {
          htmlStmt +=
            '<div class="audioIcon textEnd off d-flex contant" ' +
            'data-audio="' +
            (aObj.optionsAudios ? aObj.optionsAudios[key] : "") +
            '">';

          htmlStmt += '<div class="clue_word">' + value + "</div>";

          htmlStmt += "</div>";
        });

        htmlStmt += "</div>";

        htmlStmt += "</div>";
      }
    }

    // =========================================================
    // TOP IMAGES
    // =========================================================

    if (aObj.images != undefined && aObj.images != "") {
      htmlStmt += '<div class="q_images d-flex flex-wrap">';

      for (let y = 0; y < aObj.images.length; y++) {
        htmlStmt += '<img src="' + aObj.images[y] + '"/>';
      }

      htmlStmt += "</div>";
    }

    // =========================================================
    // QUESTIONS WRAPPER
    // =========================================================

    htmlStmt += '<div class="group_elm">';

    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      var isFinalPuzzle = tmpObj.finalPuzzle === true;

      htmlStmt +=
        '<div class="que img_fillin_gr ' +
        (isFinalPuzzle ? "final_puzzle_row" : "normal_puzzle_row") +
        " " +
        (aObj.parent_class_name ? aObj.parent_class_name : "") +
        '" data-qno="' +
        (x + 1) +
        '">';

      // =====================================================
      // QUESTION IMAGE
      // =====================================================

      if (tmpObj.image != "" && tmpObj.image != "no") {
        htmlStmt +=
          '<div class="image_space">' +
          '<img src="' +
          tmpObj.image +
          '">' +
          "</div>";
      }

      // =====================================================
      // MAIN ROW
      // =====================================================

      htmlStmt += '<div class="fillin_gr">';

      htmlStmt += '<div class="q_space">';

      // =====================================================
      // NUMBERING
      // =====================================================

      if (aObj.numbering != "none") {
        htmlStmt += '<div class="q_num_space">';

        if (aObj.numbering == "alphabet") {
          xx = x == 0 ? aObj.numberstartfrom : nextChar(xx);
        } else if (aObj.numbering == "number") {
          xx = x + parseInt(aObj.numberstartfrom);
        }

        htmlStmt += xx + ".";

        htmlStmt += "</div>";
      }

      // =====================================================
      // SPLIT TEXT
      // =====================================================

      var parts = tmpObj.text.split("[_]");

      var inputCount = parts.length - 1;

      var leftText = "";
      var rightText = "";

      if (!isFinalPuzzle) {
        leftText = parts[0] || "";

        rightText = parts[parts.length - 1] || "";
      }

      // =====================================================
      // PUZZLE ROW
      // =====================================================

      htmlStmt += '<div class="fillin_set puzzle_row">';

      // =====================================================
      // FINAL PUZZLE
      // =====================================================

      if (isFinalPuzzle) {
        htmlStmt += '<div class="final_boxes_wrap">';
      } else {
        // LEFT WORD
        htmlStmt += '<div class="puzzle_left_text">' + leftText + "</div>";

        // BOXES
        htmlStmt += '<div class="puzzle_boxes">';
      }

      // =====================================================
      // INPUT BOXES
      // =====================================================

      for (var inputIndex = 0; inputIndex < inputCount; inputIndex++) {
        var additionalText = "";

        if (tmpObj.Additional_text && tmpObj.Additional_text.length) {
          for (var at = 0; at < tmpObj.Additional_text.length; at++) {
            var addItem = tmpObj.Additional_text[at];

            // new object format
            if (typeof addItem === "object" && addItem.index === inputIndex) {
              additionalText = addItem.text;

              break;
            }

            // old format support
            if (typeof addItem === "string") {
              if (tmpObj.Additional_text.length === inputCount) {
                additionalText = tmpObj.Additional_text[inputIndex] || "";

                break;
              }
            }
          }
        }

        htmlStmt += '<div class="letter_box_wrap">';

        htmlStmt +=
          "<input " +
          'class="text_input_area" ' +
          'type="text" ' +
          'maxlength="1" ' +
          'autocomplete="off" ' +
          'data-type="' +
          (tmpObj.type || "") +
          '">';

        htmlStmt += '<div class="Additional_text">' + additionalText + "</div>";

        htmlStmt += "</div>";
      }

      // close boxes
      htmlStmt += "</div>";

      // =====================================================
      // RIGHT TEXT
      // =====================================================

      if (!isFinalPuzzle) {
        htmlStmt += '<div class="puzzle_right_text">' + rightText + "</div>";
      }

      htmlStmt += "</div>";

      // =====================================================
      // TICK / CROSS
      // =====================================================

      htmlStmt += '<div class="icon_wrap_holder">';

      htmlStmt += '<div class="icon_wrap">';

      htmlStmt +=
        '<div class="tick">' +
        '<img src="../images/icons/check_btn.png">' +
        "</div>";

      htmlStmt +=
        '<div class="cross">' +
        '<img src="../images/icons/cross_btn.png">' +
        "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    // =========================================================
    // SIDE IMAGE
    // =========================================================

    if (aObj.sideImage != undefined && aObj.sideImage != "") {
      htmlStmt +=
        '<div class="puzzle_side_image">' +
        '<img src="' +
        aObj.sideImage +
        '">' +
        "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  // =============================================================
  // OLD PAGE IMAGE SUPPORT
  // =============================================================

  if (aObj.image != undefined && aObj.image != "") {
    htmlStmt +=
      '<div class="image-container">' +
      '<img src="' +
      aObj.image +
      '"/>' +
      "</div>";
  }

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
