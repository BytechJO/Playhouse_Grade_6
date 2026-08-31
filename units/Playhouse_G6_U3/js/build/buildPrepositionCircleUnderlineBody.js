function buildPrepCircleUnderlineBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
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
    // ======================================================
    // BODY
    // ======================================================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt +=
      '<div class="all_cont pcu_all_cont justify-content-start justify-content-sm-center">';
    htmlStmt += '<div class="pcu_activity">';

    // tools
    htmlStmt += '<div class="pcu_tools">';
    htmlStmt +=
      '<div class="pcu_tool_btn active" data-mode="underline">Underline</div>';
    htmlStmt += '<div class="pcu_tool_btn" data-mode="circle">Circle</div>';
    htmlStmt += "</div>";

    // content
    htmlStmt += '<div class="pcu_content_wrap">';

    // left side
    htmlStmt += '<div class="pcu_questions_area">';

    for (var i = 0; i < aObj.questions.length; i++) {
      var q = aObj.questions[i];
      var phraseWords = q.phraseRest.split(" ");
      var prefixWords = q.prefix.split(" ");
      var suffixWords = q.suffix != "" ? q.suffix.split(" ") : [];

      htmlStmt += '<div class="pcu_question" data-qno="' + (i + 1) + '">';
      htmlStmt += '<div class="pcu_question_row">';

      htmlStmt += '<div class="pcu_q_num">' + (i + 1) + "</div>";

      htmlStmt += '<div class="pcu_sentence">';

      // prefix words
      for (var p = 0; p < prefixWords.length; p++) {
        htmlStmt +=
          '<span class="pcu_token" data-role="normal">' +
          prefixWords[p] +
          "</span>";
      }

      // preposition (single token even if 2 words)
      htmlStmt +=
        '<span class="pcu_token pcu_prep_token" data-role="prep">' +
        q.preposition +
        "</span>";

      // phrase rest
      for (var w = 0; w < phraseWords.length; w++) {
        htmlStmt +=
          '<span class="pcu_token" data-role="phrase">' +
          phraseWords[w] +
          "</span>";
      }

      // suffix words
      for (var s = 0; s < suffixWords.length; s++) {
        htmlStmt +=
          '<span class="pcu_token" data-role="normal">' +
          suffixWords[s] +
          "</span>";
      }

      htmlStmt += "</div>";

      htmlStmt += '<div class="icon_wrap pcu_icon_wrap">';
      htmlStmt +=
        '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
      htmlStmt +=
        '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
      htmlStmt += "</div>";

      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // right side images
    htmlStmt += '<div class="pcu_side_images">';
    if (aObj.sideImages != undefined && aObj.sideImages.length > 0) {
      for (var im = 0; im < aObj.sideImages.length; im++) {
        htmlStmt += '<div class="pcu_side_img_box">';
        htmlStmt += '<img src="' + aObj.sideImages[im] + '">';
        htmlStmt += "</div>";
      }
    }
    htmlStmt += "</div>";

    htmlStmt += "</div>"; // content_wrap
    htmlStmt += "</div>"; // pcu_activity
    htmlStmt += "</div>"; // all_cont
    htmlStmt += "</div>"; // options
  }

  $(".activity_area").append(htmlStmt);
  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
