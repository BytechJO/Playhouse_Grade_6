function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;
    var headings = aObj.headings.length;
    var numOfColumns = aObj.numOfColumns;
    var numOfRow = aObj.numOfRow;

    var fieldIndex = 0;

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
    // OPTIONS WRAPPER
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont d-flex flex-column justify-content-center align-items-center">';

    // =========================================================
    // WORD OPTIONS
    // =========================================================

    if (
      aObj.options != undefined &&
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

    htmlStmt +=
      '<div class="screen_elements h-100 d-flex justify-content-center align-items-center">';

    htmlStmt +=
      '<div class="group_elm d-flex justify-content-center align-items-center">';

    // =========================================================
    // MAIN TABLE
    // =========================================================

    htmlStmt +=
      '<div class="fillin_gr d-flex justify-content-center align-items-center">';

    htmlStmt += '<div class="q_space w-100">';

    htmlStmt += '<table class="verb_table">';

    // =========================================================
    // TABLE HEADER
    // =========================================================

    htmlStmt += '<tr class="verb_header_row">';

    // empty place above numbers
    htmlStmt += '<th class="number_head"></th>';

    for (var x = 0; x < headings; x++) {
      htmlStmt += '<th class="verb_heading_cell">';

      htmlStmt +=
        '<div class="off d-flex text-wrap Box contant min_w_fit_contant heading_box">';

      htmlStmt +=
        '<span class="audioIcon" ' +
        'data-audio="' +
        aObj.headingsAudio[x] +
        '">' +
        aObj.headings[x] +
        "</span>";

      htmlStmt += "</div>";

      htmlStmt += "</th>";
    }

    htmlStmt += "</tr>";

    // =========================================================
    // TABLE ROWS
    // =========================================================

    fieldIndex = 0;

    for (let col = 0; col < numOfRow; col++) {
      htmlStmt += '<tr class="verb_data_row">';

      // =====================================================
      // ROW NUMBER
      // =====================================================

      htmlStmt += '<td class="row_number">' + (col + 1) + "</td>";

      // =====================================================
      // TWO VERB COLUMNS
      // =====================================================

      for (let row = 0; row < numOfColumns; row++) {
        htmlStmt += '<td class="verb_cell">';

        htmlStmt +=
          '<div class="que img_fillin_gr d-flex flex-wrap flex-sm-nowrap" ' +
          'data-qno="' +
          (fieldIndex + 1) +
          '">';

        htmlStmt += '<div class="fillin_set Box">';

        // =================================================
        // DEFAULT / READONLY ANSWER
        // =================================================

        if (aObj.defaultAnswer.includes(fieldIndex + 1)) {
          htmlStmt +=
            "<input " +
            'type="text" ' +
            "readonly " +
            'value="' +
            aObj.questions[fieldIndex].answer[0] +
            '"/>';

          htmlStmt += '<div class="icon_wrap">';

          htmlStmt += '<div class="tick"><img src=""></div>';

          htmlStmt += '<div class="cross"><img src=""></div>';

          htmlStmt += "</div>";

          // =================================================
          // STUDENT INPUT
          // =================================================
        } else {
          htmlStmt +=
            "<input " +
            'class="text_input_area" ' +
            'type="text" ' +
            'maxlength="' +
            aObj.questions[fieldIndex].maxlength +
            '" ' +
            'data-type="' +
            aObj.questions[fieldIndex].type +
            '">';

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
        }

        htmlStmt += "</div>";
        htmlStmt += "</div>";

        fieldIndex++;

        htmlStmt += "</td>";
      }

      htmlStmt += "</tr>";
    }

    htmlStmt += "</table>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
