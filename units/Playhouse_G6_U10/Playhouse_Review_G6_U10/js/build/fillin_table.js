function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;

    var numOfColumns = aObj.numOfColumns;
    var numOfRow = aObj.numOfRow;

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

    if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
      htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
    }

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

    // =========================================================
    // SUB TITLE
    // =========================================================
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

    htmlStmt += "<br>";

    htmlStmt +=
      "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // =========================================================
    // OPTIONS AREA
    // =========================================================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont d-flex flex-column justify-content-start justify-content-sm-center">';

    // =========================================================
    // WORD OPTIONS IF EXIST
    // =========================================================
    if (
      typeof aObj.options != undefined &&
      aObj.options != null &&
      aObj.options.length > 0
    ) {
      htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';

      htmlStmt +=
        '<div class="word_options d-flex flex-wrap justify-content-around">';

      jQuery.each(aObj.options, function (key, value) {
        htmlStmt +=
          '<div class="audioIcon off d-flex contant" ' +
          'data-audio="' +
          aObj.optionsAudios[key] +
          '">';

        htmlStmt += '<div class="clue_word">' + value + "</div>";

        htmlStmt += "</div>";
      });

      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    // =========================================================
    // SCREEN
    // =========================================================
    htmlStmt += '<div class="screen_elements h-100 d-flex flex-wrap">';

    htmlStmt +=
      '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

    // =========================================================
    // FRONT IMAGE
    // =========================================================
    if (
      aObj.image != undefined &&
      aObj.image != "" &&
      aObj.image != "no" &&
      aObj.imageposition == "front"
    ) {
      htmlStmt += '<div class="img_space">';

      htmlStmt += '<img src="' + aObj.image + '">';

      htmlStmt += "</div>";
    }

    // =========================================================
    // FILLIN AREA
    // =========================================================
    htmlStmt += '<div class="fillin_gr d-flex align-items-center">';

    htmlStmt += '<div class="q_space w-100">';

    // =========================================================
    // TWO BIG BOXES
    // =========================================================
    htmlStmt += '<div class="group_boxes_container">';

    var fieldIndex = 0;

    // =========================================================
    // COLUMNS LOOP
    // =========================================================
    for (var col = 0; col < numOfColumns; col++) {
      htmlStmt += '<div class="group_box group_box_' + (col + 1) + '">';

      // =====================================================
      // HEADING
      // =====================================================
      htmlStmt += '<div class="group_box_heading">';

      htmlStmt +=
        '<div class="audioIcon off contant" ' +
        'data-audio="' +
        aObj.headingsAudio[col] +
        '">';

      htmlStmt += aObj.headings[col];

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      // =====================================================
      // INPUTS
      // =====================================================
      htmlStmt += '<div class="group_box_inputs">';

      // =====================================================
      // ROWS LOOP
      // =====================================================
      for (var row = 0; row < numOfRow; row++) {
        if (fieldIndex >= numOfQuestions) {
          break;
        }

        var tmpObj = aObj.questions[fieldIndex];

        // =================================================
        // QUESTION
        // =================================================
        htmlStmt +=
          '<div class="que group_input_question" ' +
          'data-qno="' +
          (fieldIndex + 1) +
          '">';

        htmlStmt += '<div class="group_input_wrap">';

        // =================================================
        // DEFAULT ANSWER
        // =================================================
        if (
          aObj.defaultAnswer != undefined &&
          Array.isArray(aObj.defaultAnswer) &&
          aObj.defaultAnswer.includes(fieldIndex + 1)
        ) {
          htmlStmt +=
            "<input " +
            'class="text_input_area group_word_input" ' +
            'type="text" ' +
            'maxlength="' +
            tmpObj.maxlength +
            '" ' +
            'data-type="' +
            tmpObj.type +
            '" ' +
            "readonly " +
            'value="' +
            tmpObj.answer[0] +
            '">';
        }

        // =================================================
        // NORMAL INPUT
        // =================================================
        else {
          htmlStmt +=
            "<input " +
            'class="text_input_area group_word_input" ' +
            'type="text" ' +
            'maxlength="' +
            tmpObj.maxlength +
            '" ' +
            'data-type="' +
            tmpObj.type +
            '" ' +
            'autocomplete="off">';
        }

        // =================================================
        // ICON WRAP
        // IMPORTANT FOR fillin.js reset()
        // =================================================
        htmlStmt += '<div class="group_input_icon icon_wrap">';

        htmlStmt += '<div class="tick">';

        htmlStmt += '<img src="../images/icons/check_btn.png">';

        htmlStmt += "</div>";

        htmlStmt += '<div class="cross">';

        htmlStmt += '<img src="../images/icons/cross_btn.png">';

        htmlStmt += "</div>";

        htmlStmt += "</div>";
        // END icon_wrap

        htmlStmt += "</div>";
        // END group_input_wrap

        htmlStmt += "</div>";
        // END que

        fieldIndex++;
      }

      htmlStmt += "</div>";
      // END group_box_inputs

      htmlStmt += "</div>";
      // END group_box
    }

    htmlStmt += "</div>";
    // END group_boxes_container

    htmlStmt += "</div>";
    // END q_space

    htmlStmt += "</div>";
    // END fillin_gr

    // =========================================================
    // BACK IMAGE
    // =========================================================
    if (
      aObj.image != undefined &&
      aObj.image != "" &&
      aObj.image != "no" &&
      aObj.imageposition == "back"
    ) {
      htmlStmt += '<div class="img_space">';

      htmlStmt += '<img src="' + aObj.image + '">';

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    // END group_elm

    htmlStmt += "</div>";
    // END screen_elements

    htmlStmt += "</div>";
    // END all_cont

    htmlStmt += "</div>";
    // END options
  }

  // =========================================================
  // APPEND
  // =========================================================
  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

// =========================================================
// NEXT CHAR
// =========================================================
function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
