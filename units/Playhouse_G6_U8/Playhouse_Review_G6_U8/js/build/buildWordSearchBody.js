function buildWordSearchBody(aObj) {
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

  htmlStmt += '<img src="../images/icons/back_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";
  // ===================================================================== heading =====================
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
  htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =====================================================
  // BODY
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont ws_all_cont">';

  htmlStmt += '<div class="ws_activity">';

  // =====================================================
  // WORD BANK
  // =====================================================

  htmlStmt += '<div class="ws_word_bank">';

  for (var w = 0; w < aObj.words.length; w++) {
    htmlStmt +=
      "<div " +
      'class="ws_bank_word" ' +
      'data-word="' +
      aObj.words[w].toLowerCase().replace(/\s+/g, "") +
      '">' +
      aObj.words[w] +
      "</div>";
  }

  htmlStmt += "</div>";

  // =====================================================
  // GRID FRAME
  // =====================================================

  htmlStmt += '<div class="ws_grid_frame">';

  // =====================================================
  // WRAPPER
  // SVG + GRID
  // =====================================================

  htmlStmt += '<div class="ws_grid_wrap">';

  // =====================================================
  // SVG HIGHLIGHT LAYER
  // =====================================================

  htmlStmt +=
    "<svg " +
    'class="ws_highlight_svg" ' +
    'xmlns="http://www.w3.org/2000/svg">';

  // saved lines container
  htmlStmt += '<g class="ws_saved_lines"></g>';

  // temporary preview
  htmlStmt +=
    "<line " +
    'class="ws_preview_line" ' +
    'x1="0" y1="0" x2="0" y2="0">' +
    "</line>";

  htmlStmt +=
    "<line " +
    'class="ws_preview_gloss" ' +
    'x1="0" y1="0" x2="0" y2="0">' +
    "</line>";

  htmlStmt += "</svg>";

  // =====================================================
  // MATRIX
  // =====================================================

  htmlStmt +=
    "<div " +
    'class="wordmatrix ws_matrix" ' +
    'style="--ws-cols:' +
    aObj.grid[0].length +
    ';">';

  // =====================================================
  // CELLS
  // =====================================================

  for (var r = 0; r < aObj.grid.length; r++) {
    var row = aObj.grid[r];

    for (var c = 0; c < row.length; c++) {
      htmlStmt +=
        "<div " +
        'class="ws_col ws_cell ws_r' +
        r +
        "_c" +
        c +
        '" ' +
        'data-row="' +
        r +
        '" ' +
        'data-col="' +
        c +
        '" ' +
        'data-letter="' +
        row[c].toLowerCase() +
        '">';

      htmlStmt += '<span class="ws_letter">' + row[c] + "</span>";

      htmlStmt += "</div>";
    }
  }

  htmlStmt += "</div>"; // matrix

  htmlStmt += "</div>"; // grid wrap

  htmlStmt += "</div>"; // frame

  htmlStmt += "</div>"; // activity

  htmlStmt += "</div>"; // all cont

  htmlStmt += "</div>"; // options

  // =====================================================
  // APPEND
  // =====================================================

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
