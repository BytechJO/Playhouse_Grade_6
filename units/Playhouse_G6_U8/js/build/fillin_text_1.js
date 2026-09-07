function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.questions.length;

    // =========================================================
    // BACK / NEXT
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

    htmlStmt += '<div class="audioIcon off contant" ';
    htmlStmt += 'data-slideNum="1" ';
    htmlStmt += 'data-audio="' + aObj.mainTitleAudio + '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt += '<img class="mainTitleIcon" ';
      htmlStmt += 'src="' + aObj.mainTitleIcon + '" ';
      htmlStmt += 'style="right:' + aObj.mainTitleIconPos.right + ';">';
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =====================================================
    // SUB TITLE
    // =====================================================
    htmlStmt += '<div class="activityHeading">';

    htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" ';
    htmlStmt += 'data-slideNum="1" ';
    htmlStmt += 'data-audio="' + aObj.subTitleAudio + '">';

    if (aObj.title_position != undefined && aObj.title_position == "under") {
      htmlStmt += '<div class="page_sub_title">';

      htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '">';
      }

      htmlStmt += "<br>";

      htmlStmt += '<p class="subTitleTextRight">';
      htmlStmt += aObj.subTitleTextRight;
      htmlStmt += "</p>";

      htmlStmt += "</div>";
    } else {
      htmlStmt += '<div class="page_sub_title d-flex">';

      htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '">';
      }

      htmlStmt += '<p class="subTitleTextRight">';
      htmlStmt += aObj.subTitleTextRight;
      htmlStmt += "</p>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // CONTENT
    // =========================================================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt += '<div class="all_cont">';

    // =================================================
    // OPTIONS IF EXIST
    // =================================================
    if (
      aObj.options != undefined &&
      aObj.options != null &&
      aObj.options.length > 0
    ) {
      htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';

      htmlStmt +=
        '<div class="word_options d-flex flex-wrap justify-content-around">';

      jQuery.each(aObj.options, function (key, value) {
        htmlStmt += '<div class="audioIcon textEnd off d-flex contant" ';
        htmlStmt += 'data-audio="' + aObj.optionsAudios[key] + '">';

        htmlStmt += '<div class="clue_word">';
        htmlStmt += value;
        htmlStmt += "</div>";

        htmlStmt += "</div>";
      });

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    // =================================================
    // SCREEN
    // =================================================
    htmlStmt += '<div class="screen_elements">';

    htmlStmt += '<div class="group_elm ' + (aObj.parentClassName || "") + '">';

    // =========================================
    // GENERAL TEXT
    // =========================================
    if (aObj.text != undefined && aObj.text != "") {
      htmlStmt += '<div class="audioIcon off contant general_text" ';
      htmlStmt += 'data-audio="' + aObj.textAudio + '">';

      htmlStmt += '<div class="text">';
      htmlStmt += aObj.text;
      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    // =========================================
    // QUESTIONS
    // =========================================
    htmlStmt += '<div class="ques">';

    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      var textParts = Array.isArray(tmpObj.text) ? tmpObj.text : [tmpObj.text];
      var inputsCount = tmpObj.answer.length;

      htmlStmt +=
        '<div class="que question_side question_' +
        (x + 1) +
        '" data-qno="' +
        (x + 1) +
        '">';

      // =================================
      // TEXT ABOVE IMAGE
      // =================================
      htmlStmt += '<div class="question_text">';

      for (var partIndex = 0; partIndex < textParts.length; partIndex++) {
        htmlStmt +=
          '<div class="audioIcon txt-audioIcon off contant question_text_line" ';
        htmlStmt +=
          'data-audio="' + (tmpObj.textaudios[partIndex] || "") + '">';

        htmlStmt += textParts[partIndex];

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      // =================================
      // IMAGE + INPUTS
      // =================================
      htmlStmt += '<div class="question_image_wrap">';

      if (
        tmpObj.image != undefined &&
        tmpObj.image != "" &&
        tmpObj.image != "no"
      ) {
        htmlStmt += '<img class="question_image" ';
        htmlStmt += 'src="' + tmpObj.image + '">';
      }

      // INPUTS
      for (var inp = 0; inp < inputsCount; inp++) {
        htmlStmt += "<input ";
        htmlStmt +=
          'class="text_input_area overlay_input input_' + x + "_" + inp + '" ';

        htmlStmt += 'type="text" ';

        htmlStmt += 'maxlength="' + tmpObj.maxlength + '" ';

        htmlStmt += 'data-type="' + tmpObj.type + '" ';

        htmlStmt += 'data-input-index="' + inp + '">';
      }

      // =================================
      // TICK / CROSS
      // =================================
      if (inputsCount > 0) {
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

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

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
