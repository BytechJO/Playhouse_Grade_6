function buildMcqBody(aObj) {
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
    // SUB TITLE
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

    htmlStmt +=
      "<br>" +
      "<p class='subTitleTextRight'>" +
      aObj.subTitleTextRight +
      "</p>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // HELP POPUP
    // =========================================================

    if (
      aObj.helpPopup != undefined &&
      aObj.helpPopup != null &&
      aObj.helpPopup.array_text != undefined &&
      aObj.helpPopup.array_text.length > 0
    ) {
      // BUTTON
      htmlStmt +=
        '<div class="help_popup_btn" ' +
        'onclick="showMcqHelpPopup()">' +
        "view text" +
        "</div>";

      // OVERLAY
      htmlStmt +=
        '<div class="mcq_help_overlay" ' + 'style="display:none !important;">';

      // POPUP
      htmlStmt += '<div class="mcq_help_popup">';

      // CLOSE
      htmlStmt +=
        '<button type="button" ' +
        'class="mcq_help_close">' +
        "&times;" +
        "</button>";

      // CONTENT
      htmlStmt += '<div class="mcq_help_content">';

      for (var hp = 0; hp < aObj.helpPopup.array_text.length; hp++) {
        htmlStmt += aObj.helpPopup.array_text[hp];
      }

      htmlStmt += "</div>";
      // END mcq_help_content

      htmlStmt += "</div>";
      // END mcq_help_popup

      htmlStmt += "</div>";
      // END mcq_help_overlay
    }

    // =========================================================
    // ACTIVITY BODY
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont h-100 ' +
      "justify-content-start " +
      'justify-content-sm-center">';

    htmlStmt +=
      '<div class="group_elm ' +
      "d-flex " +
      "justify-content-center " +
      'align-items-center">';

    htmlStmt += '<div class="ques_part_space my-2">';

    // =========================================================
    // QUESTIONS
    // =========================================================

    for (var x = 0; x < numOfQuestions; x++) {
      var tpOb = aObj.questions[x];

      var freeWritingClass =
        tpOb.freeWriting === true ? " free_writing_question" : "";

      htmlStmt +=
        '<div id="que_' +
        (x + 1) +
        '" class="que' +
        freeWritingClass +
        '" data-qno="' +
        (x + 1) +
        '">';

      // =======================================================
      // NUMBER
      // =======================================================

      if (aObj.numbering != "") {
        htmlStmt += '<div class="q_num_space">';

        if (aObj.numbering == "alphabet") {
          if (x == 0) {
            xx = aObj.numberstartfrom;
          } else {
            xx = nextChar(xx);
          }
        } else if (aObj.numbering == "number") {
          xx = x + parseInt(aObj.numberstartfrom);
        }

        htmlStmt += xx + ".";

        htmlStmt += "</div>";
      }

      // =======================================================
      // QUESTION CONTENT
      // =======================================================

      htmlStmt += '<div class="question_content">';

      // =======================================================
      // QUESTION TEXT
      // =======================================================

      if (tpOb.question != undefined && tpOb.question != "") {
        htmlStmt += '<div class="question_text">' + tpOb.question + "</div>";
      }

      // =======================================================
      // MCQ OPTIONS
      // =======================================================

      var options = tpOb.options || [];

      if (options.length > 0) {
        htmlStmt += '<div class="picks_grp">';

        for (var y = 0; y < options.length; y++) {
          var needspace =
            options[y].needspaceafter == "yes" ? "right_space" : "";

          htmlStmt +=
            '<div id="pick_' +
            (x + 1) +
            "_" +
            (y + 1) +
            '" class="mcq_1_5_q_group pick ' +
            needspace +
            '">';

          htmlStmt += '<div class="txt_box">';

          htmlStmt += "<span>" + options[y].text + "</span>";

          htmlStmt += "</div>";

          htmlStmt += "</div>";
        }

        htmlStmt += "</div>";
      }

      // =======================================================
      // NORMAL FILL-IN
      // QUESTION 4
      // =======================================================

      if (
        tpOb.freeWriting !== true &&
        tpOb.fillinanswer != undefined &&
        tpOb.fillinanswer != ""
      ) {
        htmlStmt += '<div class="fill-group normal_fill_line">';

        htmlStmt +=
          "<input " +
          'type="text" ' +
          'data-type="text" ' +
          'autocomplete="off">';

        htmlStmt += "</div>";
      }

      // =======================================================
      // FREE WRITING
      // QUESTION 5 ONLY
      // =======================================================

      if (tpOb.freeWriting === true) {
        var numberOfLines = tpOb.lines || 1;

        htmlStmt += '<div class="free_writing_lines">';

        for (var lineIndex = 0; lineIndex < numberOfLines; lineIndex++) {
          htmlStmt += '<div class="fill-group free_writing_line">';

          htmlStmt +=
            "<input " +
            'type="text" ' +
            'class="free_writing_input" ' +
            'data-type="text" ' +
            'data-skip-validation="true" ' +
            'autocomplete="off">';

          htmlStmt += "</div>";
        }

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";
      // END question_content

      // =======================================================
      // TICK / CROSS
      // =======================================================

      if (tpOb.freeWriting !== true) {
        htmlStmt += '<div class="icon_wrap_holder">';

        htmlStmt += '<div class="icon_wrap">';

        htmlStmt += '<div class="tick">';

        htmlStmt += '<img src="../images/icons/check_btn.png">';

        htmlStmt += "</div>";

        htmlStmt += '<div class="cross">';

        htmlStmt += '<img src="../images/icons/cross_btn.png">';

        htmlStmt += "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";
      // END QUESTION
    }

    htmlStmt += "</div>";
    // END ques_part_space

    // =========================================================
    // SIDE IMAGE
    // =========================================================

    if (aObj.image != undefined && aObj.image != "") {
      htmlStmt +=
        '<div class="image_space ' +
        "d-flex " +
        "justify-content-center " +
        'align-items-center">';

      htmlStmt += '<img src="' + aObj.image + '">';

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    // END group_elm

    htmlStmt += "</div>";
    // END all_cont

    htmlStmt += "</div>";
    // END options
  }

  // =========================================================
  // APPEND
  // =========================================================

  $(".activity_area").append(htmlStmt);

  // =========================================================
  // CLOSE POPUP
  // =========================================================

  $(".mcq_help_close")
    .off("click")
    .on("click", function () {
      $(".mcq_help_overlay").attr("style", "display:none !important;");
    });

  // =========================================================
  // CLICK OUTSIDE
  // =========================================================

  $(".mcq_help_overlay")
    .off("click")
    .on("click", function (e) {
      if ($(e.target).hasClass("mcq_help_overlay")) {
        $(".mcq_help_overlay").attr("style", "display:none !important;");
      }
    });

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

// =========================================================
// OPEN HELP POPUP
// =========================================================

function showMcqHelpPopup() {
  $(".mcq_help_overlay").attr("style", "display:flex !important;");
}

// =========================================================
// NEXT CHAR
// =========================================================

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
