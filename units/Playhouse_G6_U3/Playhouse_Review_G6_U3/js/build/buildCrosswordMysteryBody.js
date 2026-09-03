function buildCrosswordMysteryBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj == null) {
    return;
  }

  // =====================================================
  // NAVIGATION
  // =====================================================

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png"/>';
 
  htmlStmt += "</a>";

  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png"/>';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  htmlStmt += '<div class="act_head_group justify-content-center">';
  htmlStmt +=
    '<div class="audioIcon off contant " data-slideNum="' +
    1 +
    '" data-audio="' +
    aObj.mainTitleAudio +
    '">';
  htmlStmt += '<div class="q-type-img-container">';
  htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + ">";
  if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
    htmlStmt +=
      '<img class="mainTitleIcon" src=' +
      aObj.mainTitleIcon +
      ' style="right: ' +
      aObj.mainTitleIconPos.right +
      '">';
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
  htmlStmt += "<div class='page_sub_title d-flex'>";
  htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
  for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
    htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
  }
  htmlStmt +=
    "<p class='subTitleTextRight'> " + aObj.subTitleTextRight + " </p>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =====================================================
  // BODY
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont cwm_all_cont">';

  htmlStmt += '<div class="cwm_activity">';

  // =====================================================
  // WORD BANK
  // =====================================================

  htmlStmt += '<div class="cwm_word_bank">';

  for (var wb = 0; wb < aObj.wordBank.length; wb++) {
    htmlStmt += '<span class="cwm_bank_word">' + aObj.wordBank[wb] + "</span>";
  }

  htmlStmt += "</div>";

  // =====================================================
  // PUZZLE AREA
  // =====================================================

  htmlStmt += '<div class="cwm_puzzle_wrap">';

  htmlStmt += '<div class="cwm_grid">';

  // =====================================================
  // BUILD WORDS
  // =====================================================

  for (var w = 0; w < aObj.words.length; w++) {
    var wordObj = aObj.words[w];

    var answer = wordObj.answer;

    // =================================================
    // FEEDBACK POSITION
    // =================================================

    var feedbackRow;
    var feedbackCol;

    if (wordObj.direction == "across") {
      feedbackRow = wordObj.row;

      feedbackCol = wordObj.col + answer.length + 1;
    } else {
      feedbackRow = wordObj.row + answer.length;

      feedbackCol = wordObj.col + 1;
    }

    // =================================================
    // FEEDBACK
    // =================================================

    htmlStmt +=
      "<div " +
      'class="cwm_word_feedback" ' +
      'data-word="' +
      wordObj.number +
      '" ' +
      'style="' +
      "grid-row:" +
      feedbackRow +
      ";" +
      "grid-column:" +
      feedbackCol +
      ";" +
      '">';

    htmlStmt += '<div class="icon_wrap">';

    htmlStmt +=
      '<div class="tick">' +
      '<img src="../images/icons/check_btn.png"/>' +
      "</div>";

    htmlStmt +=
      '<div class="cross">' +
      '<img src="../images/icons/cross_btn.png"/>' +
      "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =================================================
    // CELLS
    // =================================================

    for (var c = 0; c < answer.length; c++) {
      var row = wordObj.direction == "down" ? wordObj.row + c : wordObj.row;

      var col = wordObj.direction == "across" ? wordObj.col + c : wordObj.col;

      var isRed =
        wordObj.redPositions != undefined &&
        wordObj.redPositions.indexOf(c) != -1;

      var prefilled =
        wordObj.prefill != undefined && wordObj.prefill[c] != undefined;

      var cellValue = prefilled ? wordObj.prefill[c] : "";

      htmlStmt +=
        "<div " +
        'class="cwm_cell ' +
        (isRed ? "cwm_red_cell " : "") +
        '" ' +
        'style="' +
        "grid-row:" +
        row +
        ";" +
        "grid-column:" +
        col +
        ";" +
        '" ' +
        'data-row="' +
        row +
        '" ' +
        'data-col="' +
        col +
        '">';

      // =================================================
      // NUMBER
      // =================================================

      if (c == 0) {
        htmlStmt +=
          '<span class="cwm_cell_number">' + wordObj.number + "</span>";
      }

      // =================================================
      // INPUT
      // =================================================

      htmlStmt +=
        "<input " +
        'type="text" ' +
        'maxlength="1" ' +
        'class="cwm_input" ' +
        'data-word="' +
        wordObj.number +
        '" ' +
        'data-index="' +
        c +
        '" ' +
        'data-direction="' +
        wordObj.direction +
        '" ' +
        'data-answer="' +
        answer[c] +
        '" ' +
        (isRed ? 'data-mystery="true" ' : "") +
        (prefilled ? 'readonly value="' + cellValue + '" ' : "") +
        "/>";

      htmlStmt += "</div>";
    }
  }

  // =====================================================
  // EXTRA MYSTERY CELLS
  // =====================================================

  if (aObj.extraMysteryCells != undefined && aObj.extraMysteryCells != null) {
    for (var ex = 0; ex < aObj.extraMysteryCells.length; ex++) {
      var extra = aObj.extraMysteryCells[ex];

      htmlStmt +=
        "<div " +
        'class="cwm_cell cwm_red_cell cwm_extra_mystery" ' +
        'style="' +
        "grid-row:" +
        extra.row +
        ";" +
        "grid-column:" +
        extra.col +
        ";" +
        '">';

      htmlStmt +=
        "<input " +
        'type="text" ' +
        'maxlength="1" ' +
        "readonly " +
        'class="cwm_input" ' +
        'data-mystery="true" ' +
        'value="' +
        extra.letter +
        '"/>';

      htmlStmt += "</div>";
    }
  }

  htmlStmt += "</div>"; // grid

  htmlStmt += "</div>"; // puzzle wrap

  // =====================================================
  // MYSTERY ANSWER
  // =====================================================

  htmlStmt += '<div class="cwm_mystery_row">';

  htmlStmt +=
    '<span class="cwm_mystery_label">' + "The mystery word is" + "</span>";

  htmlStmt += '<div class="cwm_mystery_input_wrap">';

  htmlStmt +=
    "<input " +
    'type="text" ' +
    'class="cwm_mystery_input" ' +
    'autocomplete="off" ' +
    'spellcheck="false" ' +
    "/>";

  htmlStmt += '<div class="icon_wrap cwm_mystery_feedback">';

  htmlStmt +=
    '<div class="tick">' +
    '<img src="../images/icons/check_btn.png"/>' +
    "</div>";

  htmlStmt +=
    '<div class="cross">' +
    '<img src="../images/icons/cross_btn.png"/>' +
    "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // CLOSE
  // =====================================================

  htmlStmt += "</div>"; // activity

  htmlStmt += "</div>"; // all_cont

  htmlStmt += "</div>"; // options

  // =====================================================
  // APPEND
  // =====================================================

  $(".activity_area").append(htmlStmt);

  // =====================================================
  // LOADED
  // =====================================================

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
