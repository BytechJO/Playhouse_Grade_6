function buildPreferenceChooseBody(aObj) {
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

  htmlStmt += '<div class="all_cont pc_all_cont">';

  htmlStmt += '<div class="pc_activity">';

  htmlStmt += '<div class="pc_questions_grid">';

  for (var i = 0; i < aObj.questions.length; i++) {
    var q = aObj.questions[i];

    htmlStmt += '<div class="pc_question" data-qno="' + q.number + '">';

    // =================================================
    // IMAGE
    // =================================================

    htmlStmt += '<div class="pc_image_wrap">';

    htmlStmt += '<img src="' + q.image + '" alt="" />';

    htmlStmt += "</div>";

    // =================================================
    // SENTENCE
    // =================================================

    htmlStmt += '<div class="pc_sentence_row">';

    htmlStmt += '<span class="pc_q_num">' + q.number + "</span>";

    htmlStmt += '<span class="pc_before">' + q.before + "</span>";

    htmlStmt +=
      "<input " +
      'type="text" ' +
      'class="pc_answer_input" ' +
      "readonly " +
      'autocomplete="off" ' +
      'spellcheck="false" ' +
      "/>";

    htmlStmt += '<span class="pc_after">' + q.after + "</span>";

    // feedback
    htmlStmt += '<div class="icon_wrap pc_feedback">';

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
    // OPTIONS
    // =================================================

    htmlStmt += '<div class="pc_options">';

    for (var o = 0; o < q.options.length; o++) {
      var opt = q.options[o];

      htmlStmt += '<label class="pc_option">';

      htmlStmt +=
        "<input " +
        'type="checkbox" ' +
        'class="pc_checkbox" ' +
        'data-value="' +
        opt.value +
        '" />';

      htmlStmt += '<span class="pc_fake_box"></span>';

      htmlStmt += '<span class="pc_option_text">' + opt.label + "</span>";

      htmlStmt += "</label>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>"; // grid

  htmlStmt += "</div>"; // activity

  htmlStmt += "</div>"; // all_cont

  htmlStmt += "</div>"; // options

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
