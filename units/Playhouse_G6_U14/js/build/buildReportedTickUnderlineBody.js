function buildReportedTickUnderlineBody(aObj) {
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

  htmlStmt += '<div class="all_cont rtu_all_cont">';

  htmlStmt += '<div class="rtu_activity">';

  htmlStmt += '<div class="rtu_layout">';

  // =====================================================
  // QUESTIONS
  // =====================================================

  htmlStmt += '<div class="rtu_questions_col">';

  for (var i = 0; i < aObj.questions.length; i++) {
    var q = aObj.questions[i];

    htmlStmt +=
      '<div class="rtu_question" ' +
      'data-index="' +
      i +
      '" ' +
      'data-correct-choice="' +
      q.correctChoice +
      '" ' +
      'data-correct-verb="' +
      q.correctVerb.toLowerCase() +
      '">';

    // =================================================
    // NUMBER
    // =================================================

    htmlStmt += '<div class="rtu_question_number">' + q.number + "</div>";

    // =================================================
    // CHOICES
    // =================================================

    htmlStmt += '<div class="rtu_question_main">';

    for (var c = 0; c < q.choices.length; c++) {
      var choice = q.choices[c];

      htmlStmt +=
        '<div class="rtu_choice" ' + 'data-choice="' + choice.key + '">';

      htmlStmt += '<div class="rtu_choice_topline">';

      // check area
      htmlStmt += '<div class="rtu_fake_check">';

      htmlStmt += '<span class="rtu_check_mark">✓</span>';

      htmlStmt += "</div>";

      // a / b
      htmlStmt += '<div class="rtu_choice_letter">' + choice.key + "</div>";

      // sentence
      htmlStmt += '<div class="rtu_sentence">';

      htmlStmt += buildRTUSentenceWords(choice.text);

      htmlStmt += "</div>";

      htmlStmt += "</div>"; // topline

      htmlStmt += "</div>"; // choice
    }

    htmlStmt += "</div>"; // question main

    // =================================================
    // TWO FEEDBACKS
    // =================================================

    htmlStmt += '<div class="rtu_feedback_col">';

    // feedback 1 = tick choice
    htmlStmt += '<div class="icon_wrap rtu_feedback rtu_choice_feedback">';

    htmlStmt +=
      '<div class="tick">' +
      '<img src="../images/icons/check_btn.png"/>' +
      "</div>";

    htmlStmt +=
      '<div class="cross">' +
      '<img src="../images/icons/cross_btn.png"/>' +
      "</div>";

    htmlStmt += "</div>";

    // feedback 2 = underlined word
    htmlStmt += '<div class="icon_wrap rtu_feedback rtu_word_feedback">';

    htmlStmt +=
      '<div class="tick">' +
      '<img src="../images/icons/check_btn.png"/>' +
      "</div>";

    htmlStmt +=
      '<div class="cross">' +
      '<img src="../images/icons/cross_btn.png"/>' +
      "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>"; // feedback col

    htmlStmt += "</div>"; // question
  }

  htmlStmt += "</div>"; // questions col

  // =====================================================
  // SIDE IMAGE
  // =====================================================

  htmlStmt += '<div class="rtu_side_image_wrap">';

  if (aObj.sideImage != undefined && aObj.sideImage != "") {
    htmlStmt += '<img src="' + aObj.sideImage + '" class="rtu_side_image" />';
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>"; // layout

  htmlStmt += "</div>"; // activity

  htmlStmt += "</div>"; // all_cont

  htmlStmt += "</div>"; // options

  // =====================================================
  // APPEND
  // =====================================================

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

// =========================================================
// BUILD WORDS
// =========================================================

function buildRTUSentenceWords(sentence) {
  var html = "";

  var words = sentence.split(" ");

  for (var i = 0; i < words.length; i++) {
    var rawWord = words[i];

    var cleanWord = rawWord
      .replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, "")
      .toLowerCase();

    if (cleanWord == "") {
      html += '<span class="rtu_plain_word">' + rawWord + "</span> ";
    } else {
      html +=
        '<span class="rtu_word" ' +
        'data-word="' +
        cleanWord +
        '">' +
        rawWord +
        "</span> ";
    }
  }

  return html;
}
