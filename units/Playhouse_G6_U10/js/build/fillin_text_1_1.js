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

    // =========================================================
    // SUBTITLE
    // =========================================================

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.subTitleAudio +
      '">';

    htmlStmt += "<div class='page_sub_title'>";

    htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }

    htmlStmt += "<br>";

    htmlStmt +=
      "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // OPTIONS AREA
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt += '<div class="all_cont">';

    htmlStmt += '<div class="screen_elements">';

    // =========================================================
    // TOP IMAGE
    // =========================================================

    if (
      aObj.image != undefined &&
      aObj.image != "" &&
      aObj.image != "no" &&
      aObj.imageposition == "front"
    ) {
      htmlStmt += '<div class="img_space">';

      htmlStmt += '<img src="' + aObj.image + '">';

      htmlStmt += "</div>";
    }

    // =========================================================
    // ANSWERS BOX
    // =========================================================

    htmlStmt += '<div class="prefix_answer_box">';

    // =====================================================
    // RE GROUP
    // =====================================================

    htmlStmt += '<div class="prefix_row re_row">';

    htmlStmt += '<div class="prefix_label re_label">re-</div>';

    htmlStmt += '<div class="prefix_inputs">';

    for (var r = 0; r < aObj.reInputCount; r++) {
      htmlStmt += '<div class="prefix_input_holder re_input_holder">';

      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="prefix_input re_input" ' +
        'data-group="re" ' +
        'autocomplete="off">';

      htmlStmt += '<div class="input_result_icon">';

      htmlStmt +=
        '<div class="input_tick">' +
        '<img src="../images/icons/check_btn.png">' +
        "</div>";

      htmlStmt +=
        '<div class="input_cross">' +
        '<img src="../images/icons/cross_btn.png">' +
        "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }
    htmlStmt += "</div>";
    // prefix_inputs

    htmlStmt += '<div class="prefix_icon_holder">';

    htmlStmt +=
      '<div class="re_group_tick group_tick">' +
      '<img src="../images/icons/check_btn.png">' +
      "</div>";

    htmlStmt +=
      '<div class="re_group_cross group_cross">' +
      '<img src="../images/icons/cross_btn.png">' +
      "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
    // re_row

    // =====================================================
    // PRE GROUP
    // =====================================================

    htmlStmt += '<div class="prefix_row pre_row">';

    htmlStmt += '<div class="prefix_label pre_label">pre-</div>';

    htmlStmt += '<div class="prefix_inputs">';

    for (var p = 0; p < aObj.preInputCount; p++) {
      htmlStmt += '<div class="prefix_input_holder pre_input_holder">';

      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="prefix_input pre_input" ' +
        'data-group="pre" ' +
        'autocomplete="off">';

      htmlStmt += '<div class="input_result_icon">';

      htmlStmt +=
        '<div class="input_tick">' +
        '<img src="../images/icons/check_btn.png">' +
        "</div>";

      htmlStmt +=
        '<div class="input_cross">' +
        '<img src="../images/icons/cross_btn.png">' +
        "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    // prefix_inputs

  
    htmlStmt += "</div>";
    // pre_row

    htmlStmt += "</div>";
    // prefix_answer_box

    // =========================================================
    // BACK IMAGE
    // =========================================================

    if (
      aObj.image != undefined &&
      aObj.image != "" &&
      aObj.image != "no" &&
      aObj.imageposition == "back"
    ) {
      htmlStmt += '<div class="img_space">';

      htmlStmt += '<img src="' + aObj.image + '">';

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    // screen_elements

    htmlStmt += "</div>";
    // all_cont

    htmlStmt += "</div>";
    // options
  }

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
