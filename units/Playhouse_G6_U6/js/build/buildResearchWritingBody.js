function buildResearchWritingBody(aObj) {
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

  htmlStmt += '<div class="all_cont rw_all_cont">';

  htmlStmt += '<div class="rw_activity">';

  // =====================================================
  // QUESTIONS
  // =====================================================

  for (var i = 0; i < aObj.questions.length; i++) {
    var q = aObj.questions[i];

    htmlStmt +=
      "<div " + 'class="rw_question" ' + 'data-qno="' + q.number + '">';

    // =================================================
    // QUESTION TOP ROW
    // =================================================

    htmlStmt += '<div class="rw_question_top">';

    htmlStmt += '<span class="rw_q_num">' + q.number + "</span>";

    htmlStmt += '<span class="rw_question_text">' + q.question + "</span>";

    htmlStmt += '<span class="rw_keywords_label">' + "Keywords:" + "</span>";

    htmlStmt +=
      "<input " +
      'type="text" ' +
      'class="rw_keywords_input ' +
      (i === 0 ? "rw_readonly_input" : "") +
      '" ' +
      'autocomplete="off" ' +
      'spellcheck="false" ' +
      (i === 0 ? "readonly " : "") +
      'value="' +
      escapeResearchWritingValue(q.defaultKeywords || "") +
      '" />';
    htmlStmt += "</div>";

    // =================================================
    // ANSWER LABEL
    // =================================================

    htmlStmt += '<div class="rw_answer_label">' + "Answer:" + "</div>";

    // =================================================
    // ANSWER AREA
    // textarea واحد، والخطوط background
    // =================================================

    htmlStmt +=
      "<textarea " +
      'class="rw_answer_textarea ' +
      (i === 0 ? "rw_readonly_answer" : "") +
      '" ' +
      'autocomplete="off" ' +
      'spellcheck="false" ' +
      (i === 0 ? "readonly " : "") +
      ">" +
      escapeResearchWritingText(q.defaultAnswer || "") +
      "</textarea>";

    htmlStmt += "</div>"; // question
  }

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
// ESCAPE INPUT VALUE
// =========================================================

function escapeResearchWritingValue(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// =========================================================
// ESCAPE TEXTAREA
// =========================================================

function escapeResearchWritingText(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
