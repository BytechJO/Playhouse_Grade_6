function buildSentenceColourBody(aObj) {
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

  htmlStmt += '<div class="all_cont sc_all_cont">';

  htmlStmt += '<div class="sc_activity">';

  // =====================================================
  // QUESTIONS
  // =====================================================

  for (var i = 0; i < aObj.questions.length; i++) {
    var q = aObj.questions[i];

    htmlStmt +=
      "<div " + 'class="sc_question" ' + 'data-qno="' + (i + 1) + '">';

    // =================================================
    // CHOICES
    // =================================================

    htmlStmt += '<div class="sc_choices">';

    for (var c = 0; c < aObj.choices.length; c++) {
      var choice = aObj.choices[c];

      htmlStmt +=
        "<div " +
        'class="sc_choice sc_choice_' +
        choice.value +
        '" ' +
        'data-value="' +
        choice.value +
        '">';

      // =============================================
      // SVG
      // =============================================

      htmlStmt +=
        "<svg " +
        'class="sc_choice_svg" ' +
        'viewBox="0 0 270 54" ' +
        'preserveAspectRatio="none">';

      // =============================================
      // COMPLETE
      // =============================================

      if (choice.value === "complete") {
        htmlStmt +=
          "<path " +
          'class="sc_choice_shape sc_choice_shape_complete" ' +
          'd="' +
          "M 21 1 " +
          "H 247 " +
          "C 247 11 253 16 269 17 " +
          "V 37 " +
          "C 253 38 247 43 247 53 " +
          "H 21 " +
          "C 21 42 15 37 1 37 " +
          "V 17 " +
          "C 15 17 21 12 21 1 " +
          "Z" +
          '" />';
      }

      // =============================================
      // INCOMPLETE
      // =============================================
      else {
        htmlStmt +=
          "<path " +
          'class="sc_choice_shape sc_choice_shape_incomplete" ' +
          'd="' +
          "M 22 1 " +
          "H 249 " +
          "C 249 12 255 17 269 17 " +
          "V 37 " +
          "C 255 37 249 42 249 53 " +
          "H 22 " +
          "C 22 43 16 38 1 37 " +
          "V 17 " +
          "C 16 16 22 11 22 1 " +
          "Z" +
          '" />';
      }

      htmlStmt += "</svg>";

      // =============================================
      // TEXT
      // =============================================

      htmlStmt += '<span class="sc_choice_text">' + choice.label + "</span>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =================================================
    // SENTENCE
    // =================================================

    htmlStmt += '<div class="sc_sentence_wrap">';

    htmlStmt += '<span class="sc_q_number">' + (i + 1) + "</span>";

    htmlStmt += '<span class="sc_sentence">' + q.sentence + "</span>";

    // =================================================
    // FEEDBACK
    // =================================================

    htmlStmt += '<div class="icon_wrap sc_feedback">';

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
  }

  // =====================================================
  // CLOSE
  // =====================================================

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // APPEND
  // =====================================================

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
