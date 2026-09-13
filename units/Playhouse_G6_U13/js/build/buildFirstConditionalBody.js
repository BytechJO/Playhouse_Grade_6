function buildFirstConditionalBody(aObj) {
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
  htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
  for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
    htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
  }
  htmlStmt +=
    "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  // =====================================================
  // BODY
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont fc_all_cont">';

  htmlStmt += '<div class="fc_activity">';
  // =====================================================
  // SIDE IMAGE
  // =====================================================

  if (aObj.sideImage != undefined && aObj.sideImage != "") {
    htmlStmt += '<div class="fc_side_image">';

    htmlStmt += '<img src="' + aObj.sideImage + '" alt="" />';

    htmlStmt += "</div>";
  }
  // =====================================================
  // QUESTIONS
  // =====================================================

  htmlStmt += '<div class="fc_questions">';

  for (var i = 0; i < aObj.questions.length; i++) {
    var q = aObj.questions[i];

    htmlStmt +=
      "<div " +
      'class="fc_question fc_question_' +
      q.number +
      '" ' +
      'data-index="' +
      i +
      '" ' +
      'data-type="' +
      q.type +
      '">';

    // =================================================
    // TOP ROW
    // =================================================

    htmlStmt += '<div class="fc_sentence_row">';

    // NUMBER

    htmlStmt += '<span class="fc_number">' + q.number + "</span>";

    // SENTENCE

    htmlStmt += '<span class="fc_sentence">' + q.sentence + "</span>";

    // =================================================
    // STUDENT CHECK AREA
    // =================================================

    htmlStmt += '<div class="fc_student_check">';

    htmlStmt += '<span class="fc_student_check_mark">✓</span>';

    htmlStmt += "</div>";

    // =================================================
    // FEEDBACK
    // =================================================

    htmlStmt += '<div class="icon_wrap fc_feedback">';

    htmlStmt += '<div class="tick">';

    htmlStmt += '<img src="../images/icons/check_btn.png"/>';

    htmlStmt += "</div>";

    htmlStmt += '<div class="cross">';

    htmlStmt += '<img src="../images/icons/cross_btn.png"/>';

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>"; // sentence row

    // =================================================
    // REWRITE INPUT
    // =================================================

    htmlStmt += '<div class="fc_rewrite_row">';

    htmlStmt +=
      "<input " +
      'type="text" ' +
      'class="fc_rewrite_input" ' +
      'autocomplete="off" ' +
      'spellcheck="false" ' +
      "/>";

    htmlStmt += "</div>";

    htmlStmt += "</div>"; // question
  }

  htmlStmt += "</div>"; // questions

  htmlStmt += "</div>"; // activity

  htmlStmt += "</div>"; // all_cont

  htmlStmt += "</div>"; // options

  // =====================================================
  // APPEND
  // =====================================================

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
