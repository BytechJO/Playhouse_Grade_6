function buildLessWordSearchBody(aObj) {
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

  htmlStmt += '<div class="all_cont lws_all_cont">';

  htmlStmt += '<div class="lws_activity">';

  // =====================================================
  // WORD SEARCH AREA
  // =====================================================

  htmlStmt += '<div class="lws_grid_section">';

  // whole grid feedback
  htmlStmt += '<div class="icon_wrap lws_grid_feedback">';

  htmlStmt +=
    '<div class="tick">' +
    '<img src="../images/icons/check_btn.png"/>' +
    "</div>";

  htmlStmt +=
    '<div class="cross">' +
    '<img src="../images/icons/cross_btn.png"/>' +
    "</div>";

  htmlStmt += "</div>";

  // grid wrapper
  htmlStmt += '<div class="lws_grid_wrap">';

  // SVG marker layer
  htmlStmt += '<svg class="lws_highlight_svg">';

  htmlStmt += '<g class="lws_saved_lines"></g>';

  htmlStmt +=
    '<line class="lws_preview_line" x1="0" y1="0" x2="0" y2="0"></line>';

  htmlStmt += "</svg>";

  // numbers layer
  htmlStmt += '<div class="lws_numbers_layer"></div>';

  // letters
  htmlStmt +=
    '<div class="lws_matrix" style="--lws-cols:' + aObj.grid[0].length + ';">';

  for (var r = 0; r < aObj.grid.length; r++) {
    var row = aObj.grid[r];

    for (var c = 0; c < row.length; c++) {
      var letter = row.charAt(c);

      htmlStmt +=
        "<div " +
        'class="lws_cell lws_r' +
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
        letter.toLowerCase() +
        '">';

      htmlStmt += '<span class="lws_letter">' + letter + "</span>";

      htmlStmt += "</div>";
    }
  }

  htmlStmt += "</div>"; // matrix

  htmlStmt += "</div>"; // grid wrap

  htmlStmt += "</div>"; // grid section

  // =====================================================
  // ANSWER INPUTS
  // =====================================================

  htmlStmt += '<div class="lws_answers">';

  for (var i = 0; i < aObj.words.length; i++) {
    htmlStmt += '<div class="lws_answer_item">';

    htmlStmt +=
      "<input " +
      'type="text" ' +
      'class="lws_answer_input" ' +
      'autocomplete="off" ' +
      'spellcheck="false" ' +
      'data-index="' +
      i +
      '" />';

    htmlStmt += '<div class="icon_wrap lws_answer_feedback">';

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
  }

  htmlStmt += "</div>"; // answers

  htmlStmt += "</div>"; // activity

  htmlStmt += "</div>"; // all_cont

  htmlStmt += "</div>"; // options

  // =====================================================
  // APPEND
  // =====================================================

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
