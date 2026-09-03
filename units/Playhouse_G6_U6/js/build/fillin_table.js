function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;
    var numInRowArray = aObj.numinrow;
    var currentQue = 1;

    var headings = aObj.headings.length;
    var numOfColumns = aObj.numOfColumns;
    var numOfRow = aObj.numOfRow;

    // =========================================================
    // FOOTER NAVIGATION
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
      '<div class="audioIcon off contant" data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" src="' +
        aObj.mainTitleIcon +
        '" style="right:' +
        aObj.mainTitleIconPos.right +
        ';">';
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' +
      1 +
      '" data-audio="' +
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
    // ALL CONTENT
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont d-flex flex-column justify-content-start justify-content-sm-center">';

    // =================================================
    // OPTIONS
    // =================================================

    if (typeof aObj.options != undefined && aObj.options != null) {
      if (aObj.options.length > 0) {
        htmlStmt +=
          '<div class="word_opt_sticky d-flex justify-content-center">';

        htmlStmt +=
          '<div class="word_options d-flex flex-wrap justify-content-around">';

        jQuery.each(aObj.options, function (key, value) {
          htmlStmt +=
            '<div class="audioIcon off d-flex contant" data-audio="' +
            aObj.optionsAudios[key] +
            '">';

          htmlStmt += '<div class="clue_word">' + value + "</div>";

          htmlStmt += "</div>";
        });

        htmlStmt += "</div>";

        htmlStmt += "</div>";
      }
    }

    // =================================================
    // SCREEN
    // =================================================

    htmlStmt += '<div class="screen_elements h-100 d-flex flex-wrap">';

    htmlStmt +=
      '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

    // =========================================
    // IMAGE FRONT
    // =========================================

    if (aObj.image != "no" && aObj.image != "") {
      if (aObj.imageposition == "front") {
        htmlStmt += '<div class="img_space">';

        htmlStmt += '<img src="' + aObj.image + '">';

        htmlStmt += "</div>";
      }
    }

    // =========================================
    // FILL IN
    // =========================================

    htmlStmt += '<div class="fillin_gr d-flex align-items-center">';

    htmlStmt += '<div class="q_space w-100">';

    // =================================
    // TABLE
    // =================================

    htmlStmt += '<table class="device_table">';

    // ===============================
    // DEVICE ROW
    // ===============================

    htmlStmt += '<tr class="device_row">';

    // Device 1

    htmlStmt += '<th colspan="2" class="device_box device_box_left">';

    htmlStmt += '<div class="device_content">';

    htmlStmt += '<span class="device_label">Device:</span>';

    htmlStmt +=
      '<input type="text" class="device_name_input device_name_input_1" maxlength="50">';

    htmlStmt += "</div>";

    htmlStmt += "</th>";

    // Device 2

    htmlStmt += '<th colspan="2" class="device_box device_box_right">';

    htmlStmt += '<div class="device_content">';

    htmlStmt += '<span class="device_label">Device:</span>';

    htmlStmt +=
      '<input type="text" class="device_name_input device_name_input_2" maxlength="50">';

    htmlStmt += "</div>";

    htmlStmt += "</th>";

    htmlStmt += "</tr>";

    // ===============================
    // HEADINGS ROW
    // ===============================

    htmlStmt += '<tr class="headings_row">';

    for (var x = 0; x < headings; x++) {
      htmlStmt += '<th class="heading_cell">';

      htmlStmt +=
        '<div class="off d-flex text-wrap Box contant min_w_fit_contant">';

      htmlStmt +=
        '<span class="audioIcon" data-audio="' + aObj.headingsAudio[x] + '">';

      htmlStmt += aObj.headings[x];

      htmlStmt += "</span>";

      htmlStmt += "</div>";

      htmlStmt += "</th>";
    }

    htmlStmt += "</tr>";

    // ===============================
    // QUESTIONS ROWS
    // ===============================

    var fieldIndex = 0;

    for (let col = 0; col < numOfRow; col++) {
      htmlStmt += '<tr class="question_row">';

      for (let row = 0; row < numOfColumns; row++) {
        htmlStmt += "<td>";

        htmlStmt +=
          '<div class="que img_fillin_gr d-flex flex-wrap flex-sm-nowrap" data-qno="' +
          (fieldIndex + 1) +
          '">';

        htmlStmt += '<div class="fillin_set Box">';

        // ===================
        // DEFAULT ANSWER
        // ===================

        if (aObj.defaultAnswer.includes(fieldIndex + 1)) {
          htmlStmt +=
            '<input type="text" maxlength="1" readonly value="' +
            aObj.questions[fieldIndex].answer[0] +
            '">';

          htmlStmt += '<div class="icon_wrap">';

          htmlStmt += '<div class="tick">';

          htmlStmt += '<img src="">';

          htmlStmt += "</div>";

          htmlStmt += '<div class="cross">';

          htmlStmt += '<img src="">';

          htmlStmt += "</div>";

          htmlStmt += "</div>";
        } else {
          // ===================
          // NORMAL INPUT
          // ===================

          htmlStmt += "<input ";

          htmlStmt += 'class="text_input_area" ';

          htmlStmt += 'type="text" ';

          htmlStmt +=
            'maxlength="' + aObj.questions[fieldIndex].maxlength + '" ';

          htmlStmt += 'data-type="' + aObj.questions[fieldIndex].type + '">';

          htmlStmt += '<div class="icon_wrap">';

          htmlStmt += '<div class="tick">';

          htmlStmt += '<img src="../images/icons/check_btn.png">';

          htmlStmt += "</div>";

          htmlStmt += '<div class="cross">';

          htmlStmt += '<img src="../images/icons/cross_btn.png">';

          htmlStmt += "</div>";

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
