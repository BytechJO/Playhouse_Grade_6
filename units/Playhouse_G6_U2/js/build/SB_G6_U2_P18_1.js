function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (aObj != undefined && aObj != null) {
    // =========================================================
    // NAVIGATION
    // =========================================================
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

    // =========================================================
    // HEADING
    // =========================================================
    htmlStmt += '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt += '<div class="q-type-img-container">';
    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        aObj.mainTitleIconPos.right +
        ';">';
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.subTitleAudio +
      '">';

    htmlStmt += "<div class='page_sub_title'>";
    htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

    if (aObj.subTitleIcons != undefined && aObj.subTitleIcons.length > 0) {
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        if (aObj.subTitleIcons[sicons] != "") {
          htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
        }
      }
    }

    htmlStmt +=
      "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // =========================================================
    // CONTENT
    // =========================================================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt += '<div class="all_cont justify-content-start">';
    htmlStmt += '<div class="screen_elements w-100 h-100 d-flex flex-wrap">';
    htmlStmt += '<div class="group_elm h-100 d-flex flex-wrap">';

    // =========================================================
    // IMAGES
    // =========================================================
    if (
      aObj.images != undefined &&
      aObj.images != null &&
      aObj.images.length > 0
    ) {
      for (var i = 0; i < aObj.images.length; i++) {
        htmlStmt += '<div class="image_item">';
        htmlStmt += '<div class="image_space">';
        htmlStmt += '<img src="' + aObj.images[i] + '">';
        htmlStmt += "</div>";
        htmlStmt += "</div>";
      }
    }

    // =========================================================
    // WRITING TIPS
    // =========================================================
    if (aObj.writingTips != undefined && aObj.writingTips != null) {
      htmlStmt +=
        '<div class="writing_tips_content_holder writing_tips_mid_text">';

      htmlStmt += '<div class="writing_tips">';

      if (
        aObj.writingTips.background_image != undefined &&
        aObj.writingTips.background_image != ""
      ) {
        htmlStmt += '<div class="writing_tips_background_image_container">';

        htmlStmt +=
          '<img src="' +
          aObj.writingTips.background_image +
          '" class="writing_tips_background_image">';

        htmlStmt += "</div>";
      }

      if (
        aObj.writingTips.top_right_image != undefined &&
        aObj.writingTips.top_right_image != ""
      ) {
        htmlStmt +=
          '<div class="writing_tips_top_right_image_image_container">';

        htmlStmt +=
          '<img src="' +
          aObj.writingTips.top_right_image +
          '" class="writing_tips_top_right_image">';

        htmlStmt += "</div>";
      }

      htmlStmt += '<div class="writing_tips_container">';

      if (
        aObj.writingTips.header != undefined &&
        aObj.writingTips.header != ""
      ) {
        htmlStmt += '<div class="writing_tips_header">';

        htmlStmt +=
          '<div class="snap_card audioIcon" ' +
          'data-slideNum="1" ' +
          'data-audio="' +
          (aObj.writingTips.headerAudio || "") +
          '">';

        htmlStmt += "<p>" + aObj.writingTips.header + "</p>";
        htmlStmt += "</div>";
        htmlStmt += "</div>";
      }

      htmlStmt += '<div class="writing_tips_paragraph">';
      htmlStmt += aObj.writingTips.paragraph;
      htmlStmt += "</div>";

      htmlStmt += "</div>";

      // =========================================================
      // LABELS ON THE RIGHT
      // =========================================================
      if (
        aObj.writingTips.labels != undefined &&
        aObj.writingTips.labels != null &&
        aObj.writingTips.labels.length > 0
      ) {
        for (
          var labelIndex = 0;
          labelIndex < aObj.writingTips.labels.length;
          labelIndex++
        ) {
          htmlStmt +=
            '<div class="' +
            aObj.writingTips.labels[labelIndex].className +
            '">';

          htmlStmt += aObj.writingTips.labels[labelIndex].text;

          htmlStmt += "</div>";
        }
      }

      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
