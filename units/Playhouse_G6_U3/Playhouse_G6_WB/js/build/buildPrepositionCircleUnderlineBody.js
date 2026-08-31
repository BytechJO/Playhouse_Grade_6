function buildPrepCircleUnderlineBody(aObj) {
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

  // =====================================================
  // HEADER
  // =====================================================

  htmlStmt += '<div class="act_head_group justify-content-center">';

  // main title
  htmlStmt +=
    "<div " +
    'class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        "<img " +
        'class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        aObj.mainTitleIconPos.right +
        ';">';
    }

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  // activity heading
  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    "<div " +
    'class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  htmlStmt += '<div class="page_sub_title pcu_page_sub_title">';

  htmlStmt +=
    '<p class="pcu_sub_title_left">' + (aObj.subTitleTextLeft || "") + "</p>";

  if (aObj.subTitleIcons != undefined && aObj.subTitleIcons != null) {
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      if (aObj.subTitleIcons[sicons] != "") {
        htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '"/>';
      }
    }
  }

  htmlStmt +=
    '<p class="subTitleTextRight pcu_sub_title_right">' +
    (aObj.subTitleTextRight || "") +
    "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // BODY
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont pcu_all_cont justify-content-start justify-content-sm-center">';

  htmlStmt += '<div class="pcu_activity">';

  // =====================================================
  // TOOLS
  // =====================================================

  htmlStmt += '<div class="pcu_tools">';

  htmlStmt +=
    "<div " +
    'class="pcu_tool_btn" ' +
    'data-mode="underline">' +
    "Underline" +
    "</div>";

  htmlStmt +=
    "<div " +
    'class="pcu_tool_btn" ' +
    'data-mode="circle">' +
    "Circle" +
    "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // CONTENT
  // =====================================================

  htmlStmt += '<div class="pcu_content_wrap">';

  // =====================================================
  // QUESTIONS
  // =====================================================

  htmlStmt += '<div class="pcu_questions_area">';

  for (var i = 0; i < aObj.questions.length; i++) {
    var q = aObj.questions[i];

    var prefixWords =
      q.prefix != undefined && q.prefix != "" ? q.prefix.split(" ") : [];

    var objectWords =
      q.object != undefined && q.object != "" ? q.object.split(" ") : [];

    var suffixWords =
      q.suffix != undefined && q.suffix != "" ? q.suffix.split(" ") : [];

    // =================================================
    // QUESTION
    // =================================================

    htmlStmt +=
      "<div " + 'class="pcu_question" ' + 'data-qno="' + (i + 1) + '">';

    htmlStmt += '<div class="pcu_question_row">';

    // number
    htmlStmt += '<div class="pcu_q_num">' + (i + 1) + "</div>";

    // =================================================
    // SENTENCE
    // =================================================

    htmlStmt += '<div class="pcu_sentence">';

    // =================================================
    // PREFIX WORDS
    // =================================================

    for (var p = 0; p < prefixWords.length; p++) {
      htmlStmt +=
        "<span " +
        'class="pcu_token" ' +
        'data-role="normal">' +
        prefixWords[p] +
        "</span>";
    }

    // =================================================
    // PREPOSITION
    //
    // next to تبقى token واحد
    // =================================================

    htmlStmt +=
      "<span " +
      'class="pcu_token pcu_prep_token" ' +
      'data-role="prep">' +
      q.preposition +
      "</span>";

    // =================================================
    // OBJECT WORDS
    // =================================================

    for (var w = 0; w < objectWords.length; w++) {
      htmlStmt +=
        "<span " +
        'class="pcu_token" ' +
        'data-role="object">' +
        objectWords[w] +
        "</span>";
    }

    // =================================================
    // SUFFIX WORDS
    // =================================================

    for (var s = 0; s < suffixWords.length; s++) {
      htmlStmt +=
        "<span " +
        'class="pcu_token" ' +
        'data-role="normal">' +
        suffixWords[s] +
        "</span>";
    }

    htmlStmt += "</div>"; // sentence

    // =================================================
    // FEEDBACK
    // =================================================

    htmlStmt += '<div class="icon_wrap pcu_icon_wrap">';

    htmlStmt +=
      '<div class="tick">' +
      '<img src="../images/icons/check_btn.png">' +
      "</div>";

    htmlStmt +=
      '<div class="cross">' +
      '<img src="../images/icons/cross_btn.png">' +
      "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>"; // question row

    htmlStmt += "</div>"; // question
  }

  htmlStmt += "</div>"; // questions area

  // =====================================================
  // SIDE IMAGES
  // =====================================================

  htmlStmt += '<div class="pcu_side_images">';

  if (aObj.sideImages != undefined && aObj.sideImages != null) {
    for (var im = 0; im < aObj.sideImages.length; im++) {
      if (aObj.sideImages[im] != "") {
        htmlStmt += '<div class="pcu_side_img_box">';

        htmlStmt += '<img src="' + aObj.sideImages[im] + '">';

        htmlStmt += "</div>";
      }
    }
  }

  htmlStmt += "</div>"; // side images

  // =====================================================
  // CLOSE
  // =====================================================

  htmlStmt += "</div>"; // content wrap

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
