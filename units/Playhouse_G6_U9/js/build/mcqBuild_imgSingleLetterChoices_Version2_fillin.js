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
    // READING POPUP BUTTON
    // =====================================================
    if (aObj.helpPopup != undefined && aObj.helpPopup != null) {
      htmlStmt += '<button type="button" class="reading_help_btn">';
      htmlStmt += "Read the text";
      htmlStmt += "</button>";

      // ===================================================
      // POPUP
      // ===================================================
      htmlStmt += '<div class="reading_popup_overlay">';

      htmlStmt += '<div class="reading_popup">';

      // CLOSE
      htmlStmt += '<button type="button" class="reading_popup_close">';
      htmlStmt += "&times;";
      htmlStmt += "</button>";

      // TITLE
      htmlStmt += '<div class="reading_popup_title">';
      htmlStmt += aObj.helpPopup.title;
      htmlStmt += "</div>";

      // CONTENT
      htmlStmt += '<div class="reading_popup_content">';

      // TEXT
      htmlStmt += '<div class="reading_popup_text">';

      for (var rp = 0; rp < aObj.helpPopup.paragraphs.length; rp++) {
        htmlStmt += '<div class="reading_popup_paragraph">';
        htmlStmt += aObj.helpPopup.paragraphs[rp];
        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      // IMAGE
      if (aObj.helpPopup.image != undefined && aObj.helpPopup.image != "") {
        htmlStmt += '<div class="reading_popup_image">';

        htmlStmt += '<img src="' + aObj.helpPopup.image + '">';

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }
    // =========================================================
    // ACTIVITY BODY
    // =========================================================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont h-100 justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="group_elm d-flex justify-content-center align-items-center">';

    htmlStmt += '<div class="ques_part_space my-2">';

    // =====================================================
    // QUESTIONS
    // =====================================================
    for (var x = 0; x < numOfQuestions; x++) {
      var tpOb = aObj.questions[x];

      htmlStmt +=
        '<div id="que_' + (x + 1) + '" class="que" data-qno="' + (x + 1) + '">';

      // =================================================
      // QUESTION NUMBER
      // =================================================
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

      // =================================================
      // QUESTION CONTENT
      // =================================================
      htmlStmt += '<div class="question_content">';

      // =================================================
      // QUESTION TEXT
      // =================================================
      if (tpOb.question != undefined && tpOb.question != "") {
        htmlStmt += '<div class="question_text">' + tpOb.question + "</div>";
      }

      // =================================================
      // MCQ OPTIONS
      // =================================================
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

      // =================================================
      // FILL IN INPUT
      // =================================================
      if (tpOb.fillinanswer != undefined && tpOb.fillinanswer != "") {
        htmlStmt += '<div class="fill-group">';

        htmlStmt += '<input type="text" data-type="text" autocomplete="off">';

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";
      // END question_content

      // =================================================
      // TICK / CROSS
      // =================================================
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

      htmlStmt += "</div>";
      // END que
    }

    // =====================================================
    // PREDICTION ACTIVITY
    // =====================================================
    htmlStmt += '<div class="prediction_group">';

    htmlStmt += '<div class="prediction_text">';
    htmlStmt += '<span class="prediction_star">★</span>';
    htmlStmt +=
      "Using your senses, observe and predict the weather. Write your prediction on the line.";
    htmlStmt += "</div>";

    htmlStmt += '<div class="prediction_line">';
    htmlStmt +=
      '<input type="text" class="prediction_input" data-skip-validation="true" autocomplete="off">';
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";
    // END ques_part_space

    // =====================================================
    // SIDE IMAGE
    // =====================================================
    if (aObj.image != undefined && aObj.image != "") {
      htmlStmt +=
        '<div class="image_space d-flex justify-content-center align-items-center">';

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

  $(".activity_area").append(htmlStmt);
  // =====================================================
  // OPEN READING POPUP
  // =====================================================
  $(".reading_help_btn")
    .off("click")
    .on("click", function () {
      $(".reading_popup_overlay").addClass("show");
    });

  // =====================================================
  // CLOSE
  // =====================================================
  $(".reading_popup_close")
    .off("click")
    .on("click", function () {
      $(".reading_popup_overlay").removeClass("show");
    });

  // =====================================================
  // CLICK OUTSIDE
  // =====================================================
  $(".reading_popup_overlay")
    .off("click")
    .on("click", function (e) {
      if ($(e.target).hasClass("reading_popup_overlay")) {
        $(".reading_popup_overlay").removeClass("show");
      }
    });
  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
