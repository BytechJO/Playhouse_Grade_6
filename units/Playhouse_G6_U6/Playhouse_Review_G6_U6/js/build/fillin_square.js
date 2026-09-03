function buildWordSearchBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null && aObj != {}) {
    // =========================================================
    // BACK BUTTON
    // =========================================================

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/back_btn.png" />';

    htmlStmt += "</a>";

    htmlStmt += "</div>";

    // =========================================================
    // NEXT BUTTON
    // =========================================================

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

    // MAIN TITLE
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
    // ACTIVITY HEADING
    // =========================================================

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.subTitleAudio +
      '">';

    htmlStmt += "<div class='page_sub_title d-flex'>";

    // LEFT TEXT
    htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

    // SUBTITLE ICONS
    if (aObj.subTitleIcons != undefined && aObj.subTitleIcons != null) {
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        if (
          aObj.subTitleIcons[sicons] != undefined &&
          aObj.subTitleIcons[sicons] != ""
        ) {
          htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
        }
      }
    }

    // RIGHT TEXT
    if (aObj.subTitleTextRight != undefined && aObj.subTitleTextRight != "") {
      htmlStmt += "<p>" + aObj.subTitleTextRight + "</p>";
    }

    htmlStmt += "</div>"; // page_sub_title

    htmlStmt += "</div>"; // audioQuestionTitle

    htmlStmt += "</div>"; // activityHeading

    htmlStmt += "</div>"; // act_head_group

    // =========================================================
    // OPTIONS
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf">';

    // =========================================================
    // ALL CONTENT
    // =========================================================

    htmlStmt += '<div class="all_cont">';

    // =========================================================
    // WORD SEARCH WRAPPER
    // =========================================================

    htmlStmt += '<div class="wordsearch_wrap">';

    // =========================================================
    // MATRIX
    // =========================================================

    htmlStmt += '<div class="wordmatrix_holder">';

    htmlStmt += '<div class="wordmatrix"></div>';

    htmlStmt += "</div>";

    // =========================================================
    // WORD LIST
    // =========================================================

    htmlStmt += '<div class="wordlist"></div>';

    htmlStmt += "</div>"; // wordsearch_wrap

    htmlStmt += "</div>"; // all_cont

    // =========================================================
    // MOBILE WORDS BUTTON
    // =========================================================

    htmlStmt += '<div class="wordlist_but">WORDS</div>';

    htmlStmt += "</div>"; // options

    // =========================================================
    // APPEND
    // =========================================================

    $(".activity_area").append(htmlStmt);

    // =========================================================
    // LOADED
    // =========================================================

    setLoadedStatus(getCurrFileOrDirectory("file"));
  }
}
