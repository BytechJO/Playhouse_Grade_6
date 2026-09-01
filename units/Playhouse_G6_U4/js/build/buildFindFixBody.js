function buildFindFixBody(aObj) {
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

  htmlStmt += '<div class="all_cont ff_all_cont">';

  htmlStmt += '<div class="ff_activity">';

  // =====================================================
  // QUESTIONS GRID
  // =====================================================

  htmlStmt += '<div class="ff_questions_grid">';

  for (var qIndex = 0; qIndex < aObj.questions.length; qIndex++) {
    var question = aObj.questions[qIndex];

    // Split sentence preserving normal word display
    var words = question.sentence.split(" ");

    htmlStmt +=
      "<div " + 'class="ff_question" ' + 'data-qno="' + (qIndex + 1) + '">';

    // =================================================
    // IMAGE
    // =================================================

    htmlStmt += '<div class="ff_image_wrap">';

    htmlStmt += "<img " + 'src="' + question.image + '" ' + 'alt="" />';

    htmlStmt += "</div>";

    // =================================================
    // ORIGINAL SENTENCE
    // =================================================

    htmlStmt += '<div class="ff_sentence_row">';

    htmlStmt += '<div class="ff_sentence">';

    for (var wordIndex = 0; wordIndex < words.length; wordIndex++) {
      var displayedWord = words[wordIndex];

      var cleanWord = displayedWord.replace(/[.,!?;:'"]/g, "").toLowerCase();

      htmlStmt +=
        "<span " +
        'class="ff_word" ' +
        'data-word="' +
        cleanWord +
        '">' +
        displayedWord +
        "</span>";
    }

    htmlStmt += "</div>";

    // sentence feedback
    htmlStmt += '<div class="icon_wrap ff_sentence_feedback">';

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
    // ANSWER ROW
    // =================================================

    htmlStmt += '<div class="ff_answer_row">';

    // number
    htmlStmt += '<span class="ff_q_number">' + (qIndex + 1) + "</span>";

    // input
    htmlStmt +=
      "<input " +
      'type="text" ' +
      'class="ff_answer_input" ' +
      'autocomplete="off" ' +
      'spellcheck="false" ' +
      "/>";

    // answer feedback
    htmlStmt += '<div class="icon_wrap ff_answer_feedback">';

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

    htmlStmt += "</div>"; // question
  }

  htmlStmt += "</div>"; // questions grid

  htmlStmt += "</div>"; // activity

  htmlStmt += "</div>"; // all_cont

  htmlStmt += "</div>"; // options

  // =====================================================
  // APPEND
  // =====================================================

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
