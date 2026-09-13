function buildConversationUnderlineBody(aObj) {
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
  if (aObj.title_position != undefined && aObj.title_position == "under") {
    htmlStmt += "<div class='page_sub_title'>";
    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }
    htmlStmt +=
      "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";
  } else {
    htmlStmt += "<div class='page_sub_title d-flex'>";
    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }
    htmlStmt +=
      "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";
  }
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =====================================================
  // BODY
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont cu_all_cont">';

  htmlStmt += '<div class="cu_activity">';

  // =====================================================
  // CONVERSATION
  // =====================================================

  htmlStmt += '<div class="cu_conversation">';

  for (var i = 0; i < aObj.conversation.length; i++) {
    var row = aObj.conversation[i];

    htmlStmt += '<div class="cu_row">';

    // =================================================
    // SPEAKER
    // =================================================

    htmlStmt +=
      '<span class="cu_speaker">' +
      escapeConversationUnderlineHtml(row.speaker || "") +
      "</span>";

    // =================================================
    // TEXT
    // only correct words are clickable
    // =================================================

    htmlStmt +=
      '<span class="cu_text">' +
      makeConversationUnderlineWords(row.text || "", aObj.correctWords || []) +
      "</span>";

    htmlStmt += "</div>"; // cu_row
  }

  htmlStmt += "</div>"; // cu_conversation

  // =====================================================
  // ONE FEEDBACK FOR THE WHOLE ACTIVITY
  // =====================================================

  htmlStmt += '<div class="icon_wrap cu_main_feedback">';

  htmlStmt += '<div class="tick">';

  htmlStmt += '<img src="../images/icons/check_btn.png"/>';

  htmlStmt += "</div>";

  htmlStmt += '<div class="cross">';

  htmlStmt += '<img src="../images/icons/cross_btn.png"/>';

  htmlStmt += "</div>";

  htmlStmt += "</div>"; // cu_main_feedback

  htmlStmt += "</div>"; // cu_activity

  htmlStmt += "</div>"; // cu_all_cont

  htmlStmt += "</div>"; // options

  // =====================================================
  // APPEND
  // =====================================================

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

// =========================================================
// TURN ONLY CORRECT WORD POWER WORDS INTO CLICKABLE SPANS
// =========================================================

function makeConversationUnderlineWords(text, correctWords) {
  var matches = [];

  var lowerText = String(text).toLowerCase();

  // =====================================================
  // LONGEST FIRST
  // important for phrases like "first aid kit"
  // =====================================================

  var sortedWords = correctWords.slice().sort(function (a, b) {
    return b.length - a.length;
  });

  // =====================================================
  // FIND ALL MATCHES
  // =====================================================

  for (var i = 0; i < sortedWords.length; i++) {
    var word = String(sortedWords[i]);

    var lowerWord = word.toLowerCase();

    var startIndex = 0;

    var foundIndex = -1;

    while ((foundIndex = lowerText.indexOf(lowerWord, startIndex)) !== -1) {
      matches.push({
        start: foundIndex,

        end: foundIndex + word.length,

        word: text.substring(foundIndex, foundIndex + word.length),
      });

      startIndex = foundIndex + word.length;
    }
  }

  // =====================================================
  // SORT MATCHES
  // =====================================================

  matches.sort(function (a, b) {
    if (a.start === b.start) {
      return b.end - b.start - (a.end - a.start);
    }

    return a.start - b.start;
  });

  // =====================================================
  // REMOVE OVERLAPPING MATCHES
  // =====================================================

  var cleanMatches = [];

  var lastEnd = -1;

  for (var m = 0; m < matches.length; m++) {
    if (matches[m].start >= lastEnd) {
      cleanMatches.push(matches[m]);

      lastEnd = matches[m].end;
    }
  }

  // =====================================================
  // BUILD FINAL TEXT
  // =====================================================

  var result = "";

  var currentIndex = 0;

  for (var c = 0; c < cleanMatches.length; c++) {
    var match = cleanMatches[c];

    // normal text before clickable word
    result += escapeConversationUnderlineHtml(
      text.substring(currentIndex, match.start),
    );

    // clickable correct word
    result +=
      "<span " +
      'class="cu_word" ' +
      'data-word="' +
      escapeConversationUnderlineAttribute(match.word) +
      '">' +
      escapeConversationUnderlineHtml(match.word) +
      "</span>";

    currentIndex = match.end;
  }

  // rest of sentence
  result += escapeConversationUnderlineHtml(text.substring(currentIndex));

  return result;
}

// =========================================================
// ESCAPE HTML
// =========================================================

function escapeConversationUnderlineHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// =========================================================
// ESCAPE ATTRIBUTE
// =========================================================

function escapeConversationUnderlineAttribute(value) {
  return escapeConversationUnderlineHtml(value)
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
