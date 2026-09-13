function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.questions.length;

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
      '<div class="audioIcon off contant" data-slideNum="1" data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt += '<div class="q-type-img-container">';
    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" src="' +
        aObj.mainTitleIcon +
        '" style="right:' +
        aObj.mainTitleIconPos.right +
        ';">';
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" data-audio="' +
      aObj.subTitleAudio +
      '">';

    htmlStmt += "<div class='page_sub_title'>";

    htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

    htmlStmt +=
      "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // LANGUAGE BUILDING BUTTON
    // =========================================================
    if (aObj.helpPopup != undefined && aObj.helpPopup != null) {
      htmlStmt +=
        '<button type="button" class="less_help_btn">' +
        "Language Building" +
        "</button>";

      // =====================================================
      // POPUP
      // =====================================================
      htmlStmt += '<div class="less_popup_overlay">';

      htmlStmt += '<div class="less_popup">';

      // CLOSE
      htmlStmt +=
        '<button type="button" class="less_popup_close">' +
        "&times;" +
        "</button>";

      // TITLE
      htmlStmt +=
        '<div class="less_popup_title">' + aObj.helpPopup.title + "</div>";

      // INTRO
      htmlStmt +=
        '<div class="less_popup_intro">' + aObj.helpPopup.intro + "</div>";

      // ROWS
      htmlStmt += '<div class="less_popup_rows">';

      for (var r = 0; r < aObj.helpPopup.rows.length; r++) {
        var row = aObj.helpPopup.rows[r];

        htmlStmt += '<div class="less_popup_row">';

        htmlStmt += '<div class="less_root bold_text">' + row[0] + "</div>";

        htmlStmt += '<div class="less_symbol bold_text">+</div>';

        htmlStmt +=
          '<div class="less_suffix blue_text bold_text">' + row[1] + "</div>";

        htmlStmt += '<div class="less_symbol bold_text">=</div>';

        htmlStmt +=
          '<div class="less_result blue_text bold_text">' + row[2] + "</div>";

        htmlStmt += '<div class="less_arrow bold_text">&rarr;</div>';

        htmlStmt += '<div class="less_meaning bold_text">' + row[3] + "</div>";

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    // =========================================================
    // ACTIVITY
    // =========================================================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    htmlStmt += '<div class="screen_elements h-100">';

    htmlStmt += '<div class="group_elm questions_grid">';

    // =========================================================
    // QUESTIONS
    // =========================================================
    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      htmlStmt +=
        '<div class="que question_' +
        (x + 1) +
        ' background_audio img_fillin_gr d-flex flex-column" ' +
        'data-qno="' +
        (x + 1) +
        '">';

      // =====================================================
      // BUILD QUESTION STRING
      // =====================================================
      var qStr = "";

      if (tmpObj.singleword) {
        qStr = tmpObj.text.replace(
          /\[_]/g,
          '<input class="text_input_area" ' +
            'type="text" ' +
            'maxlength="' +
            tmpObj.maxlength +
            '" ' +
            'data-type="' +
            tmpObj.type +
            '">',
        );
      } else {
        var wordIndex = -1;

        var words = tmpObj.text.split("[_]");

        qStr = words
          .map(function (word) {
            if (word !== "") {
              wordIndex++;

              var audioUrl =
                tmpObj.textaudios && tmpObj.textaudios[wordIndex]
                  ? tmpObj.textaudios[wordIndex]
                  : "";

              return (
                '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
                'data-audio="' +
                audioUrl +
                '">' +
                word +
                "</div>"
              );
            }

            return "";
          })
          .join(
            '<input class="text_input_area" ' +
              'type="text" ' +
              'maxlength="' +
              tmpObj.maxlength +
              '" ' +
              'data-type="' +
              tmpObj.type +
              '">',
          );
      }

      // =====================================================
      // QUESTION CONTENT
      // =====================================================
      htmlStmt += '<div class="fillin_gr d-flex align-items-center">';

      htmlStmt += '<div class="q_space d-flex">';

      // NUMBER
      if (aObj.numbering != "none") {
        htmlStmt +=
          '<div class="q_num_space">' +
          (x + parseInt(aObj.numberstartfrom)) +
          "</div>";
      }

      htmlStmt += '<div class="fillin_set d-flex flex-wrap">';

      htmlStmt += qStr;

      htmlStmt += "</div>";

      // ICONS
      htmlStmt += '<div class="icon_wrap_holder">';

      htmlStmt += '<div class="icon_wrap">';

      htmlStmt +=
        '<div class="tick">' +
        '<img src="../images/icons/check_btn.png">' +
        "</div>";

      htmlStmt +=
        '<div class="cross">' +
        '<img src="../images/icons/cross_btn.png">' +
        "</div>";

      htmlStmt += "</div>";
      htmlStmt += "</div>";

      htmlStmt += "</div>";
      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    // =========================================================
    // FLOW IMAGES
    // =========================================================

    // spider
    if (aObj.images && aObj.images[0]) {
      htmlStmt +=
        '<div class="flow_image flow_image_spider">' +
        '<img src="' +
        aObj.images[0] +
        '">' +
        "</div>";
    }

    // cat
    if (aObj.images && aObj.images[1]) {
      htmlStmt +=
        '<div class="flow_image flow_image_cat">' +
        '<img src="' +
        aObj.images[1] +
        '">' +
        "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  $(".activity_area").append(htmlStmt);

  // =========================================================
  // POPUP EVENTS
  // =========================================================
  $(".less_help_btn")
    .off("click")
    .on("click", function () {
      $(".less_popup_overlay").addClass("show");
    });

  $(".less_popup_close")
    .off("click")
    .on("click", function () {
      $(".less_popup_overlay").removeClass("show");
    });

  $(".less_popup_overlay")
    .off("click")
    .on("click", function (e) {
      if ($(e.target).hasClass("less_popup_overlay")) {
        $(this).removeClass("show");
      }
    });

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
