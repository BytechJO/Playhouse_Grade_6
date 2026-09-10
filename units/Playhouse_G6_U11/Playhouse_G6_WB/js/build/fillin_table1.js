function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;

    var headings = aObj.headings.length;
    var numOfColumns = parseInt(aObj.numOfColumns);
    var numOfRow = parseInt(aObj.numOfRow);

    var fieldIndex = 0;

    // =========================================================
    // PAGE NAVIGATION
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
    // ACTIVITY HEADER
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

    if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
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

    htmlStmt += "<div class='page_sub_title d-flex'>";

    htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

    if (aObj.subTitleIcons !== undefined && aObj.subTitleIcons !== null) {
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        if (aObj.subTitleIcons[sicons] !== "") {
          htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
        }
      }
    }

    if (aObj.subTitleTextRight !== undefined && aObj.subTitleTextRight !== "") {
      htmlStmt +=
        "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // CONTENT
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont d-flex flex-column justify-content-start justify-content-sm-center">';

    // =========================================================
    // WORD OPTIONS
    // =========================================================

    if (
      aObj.options !== undefined &&
      aObj.options !== null &&
      aObj.options.length > 0
    ) {
      htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';

      htmlStmt +=
        '<div class="word_options d-flex flex-wrap justify-content-around">';

      jQuery.each(aObj.options, function (key, value) {
        htmlStmt +=
          '<div class="audioIcon off d-flex contant" ' +
          'data-audio="' +
          aObj.optionsAudios[key] +
          '">';

        htmlStmt += '<div class="clue_word">' + value + "</div>";

        htmlStmt += "</div>";
      });

      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    // =========================================================
    // SCREEN
    // =========================================================

    htmlStmt += '<div class="screen_elements h-100 d-flex flex-wrap">';

    htmlStmt +=
      '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

    // =========================================================
    // FRONT IMAGE
    // =========================================================

    if (
      aObj.image !== "no" &&
      aObj.image !== "" &&
      aObj.imageposition === "front"
    ) {
      htmlStmt +=
        '<div class="img_space">' + '<img src="' + aObj.image + '">' + "</div>";
    }

    // =========================================================
    // FILL IN GROUP
    // =========================================================

    htmlStmt += '<div class="fillin_gr">';

    htmlStmt += '<div class="q_space">';

    // =========================================================
    // TABLE
    // =========================================================

    htmlStmt += '<table class="fillin_table">';

    // =========================================================
    // MAIN HEADINGS
    // Activities and Sports = 2 columns
    // Foods = 2 columns
    // =========================================================

    htmlStmt += "<thead>";

    htmlStmt += '<tr class="main_heading_row">';

    for (var x = 0; x < headings; x++) {
      htmlStmt += '<th colspan="2">';

      htmlStmt += '<div class="heading_box off d-flex text-wrap contant">';

      htmlStmt +=
        '<span class="audioIcon" ' +
        'data-audio="' +
        (aObj.headingsAudio[x] || "") +
        '">' +
        aObj.headings[x] +
        "</span>";

      htmlStmt += "</div>";

      htmlStmt += "</th>";
    }

    htmlStmt += "</tr>";

    htmlStmt += "</thead>";

    // =========================================================
    // TABLE BODY
    // =========================================================

    htmlStmt += "<tbody>";

    for (var col = 0; col < numOfRow; col++) {
      htmlStmt += "<tr>";

      for (var row = 0; row < numOfColumns; row++) {
        if (fieldIndex >= numOfQuestions) {
          htmlStmt += "<td></td>";
          continue;
        }

        var question = aObj.questions[fieldIndex];
        var qNo = fieldIndex + 1;

        htmlStmt += "<td>";

        htmlStmt +=
          '<div class="que img_fillin_gr" ' + 'data-qno="' + qNo + '">';

        htmlStmt += '<div class="fillin_set Box">';

        // =====================================================
        // DEFAULT ANSWER
        // =====================================================

        if (aObj.defaultAnswer.includes(qNo)) {
          htmlStmt +=
            "<input " +
            'class="default_fillin_input" ' +
            'type="text" ' +
            "readonly " +
            'value="' +
            question.answer[0] +
            '">';

          htmlStmt += '<div class="icon_wrap default_icon_wrap">';

          htmlStmt += '<div class="tick"><img src=""></div>';

          htmlStmt += '<div class="cross"><img src=""></div>';

          htmlStmt += "</div>";
        }

        // =====================================================
        // STUDENT INPUT
        // =====================================================
        else {
          htmlStmt +=
            "<input " +
            'class="text_input_area" ' +
            'type="text" ' +
            'maxlength="' +
            question.maxlength +
            '" ' +
            'data-type="' +
            question.type +
            '">';

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
        }

        htmlStmt += "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</td>";

        fieldIndex++;
      }

      htmlStmt += "</tr>";
    }

    htmlStmt += "</tbody>";

    htmlStmt += "</table>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // BACK IMAGE
    // =========================================================

    if (
      aObj.image !== "no" &&
      aObj.image !== "" &&
      aObj.imageposition === "back"
    ) {
      htmlStmt +=
        '<div class="img_space">' + '<img src="' + aObj.image + '">' + "</div>";
    }

    // =========================================================
    // CLOSE
    // =========================================================

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
