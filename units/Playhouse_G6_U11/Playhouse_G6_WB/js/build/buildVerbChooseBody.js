function buildVerbChooseBody(aObj) {
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
  htmlStmt += "<div class='page_sub_title d-flex>";
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

  htmlStmt += '<div class="all_cont vc_all_cont">';

  htmlStmt += '<div class="vc_activity">';

  htmlStmt += '<div class="vc_questions_grid">';

  // =====================================================
  // QUESTIONS
  // =====================================================

  for (var i = 0; i < aObj.questions.length; i++) {
    var q = aObj.questions[i];

    htmlStmt += '<div class="vc_question" data-qno="' + q.number + '">';

    // =================================================
    // SENTENCE
    // =================================================

    htmlStmt += '<div class="vc_sentence_row">';

    // number
    htmlStmt += '<span class="vc_q_num">' + q.number + "</span>";

    // sentence content
    htmlStmt += '<div class="vc_sentence_content">';

    // BEFORE
    htmlStmt += '<span class="vc_before">' + q.before + "</span>";

    // INPUT
    htmlStmt +=
      "<input " +
      'type="text" ' +
      'class="vc_answer_input" ' +
      "readonly " +
      'autocomplete="off" ' +
      'spellcheck="false" ' +
      "/>";

    // AFTER WORD BY WORD
    var afterWords =
      q.after != undefined && q.after != "" ? q.after.split(" ") : [];

    for (var aw = 0; aw < afterWords.length; aw++) {
      htmlStmt += '<span class="vc_after_word">' + afterWords[aw] + "</span>";
    }

    htmlStmt += "</div>"; // vc_sentence_content

    // FEEDBACK
    htmlStmt += '<div class="icon_wrap vc_feedback">';

    htmlStmt +=
      '<div class="tick">' +
      '<img src="../images/icons/check_btn.png"/>' +
      "</div>";

    htmlStmt +=
      '<div class="cross">' +
      '<img src="../images/icons/cross_btn.png"/>' +
      "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>"; // vc_sentence_row

    // =================================================
    // OPTIONS
    // =================================================

    htmlStmt += '<div class="vc_options">';

    for (var o = 0; o < q.options.length; o++) {
      var opt = q.options[o];

      htmlStmt +=
        "<div " + 'class="vc_option" ' + 'data-value="' + opt.value + '">';

      htmlStmt +=
        '<span class="vc_option_letter">' +
        String.fromCharCode(97 + o) +
        "</span>";

      htmlStmt += '<span class="vc_option_text">' + opt.label + "</span>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>"; // options

    htmlStmt += "</div>"; // question
  }

  htmlStmt += "</div>"; // grid

  htmlStmt += "</div>"; // activity

  htmlStmt += "</div>"; // all_cont

  htmlStmt += "</div>"; // options

  // =====================================================
  // APPEND
  // =====================================================

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
