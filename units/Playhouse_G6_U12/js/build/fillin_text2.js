function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.questions.length;

    /* =========================================================
       NAVIGATION
    ========================================================= */

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

    /* =========================================================
       MAIN CONTENT
    ========================================================= */

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt += '<div class="all_cont">';

    htmlStmt += '<div class="screen_elements">';

    /* =========================================================
       OPTIONS
    ========================================================= */

    if (
      aObj.options != undefined &&
      aObj.options != null &&
      aObj.options.length > 0
    ) {
      htmlStmt += '<div class="word_opt_sticky">';

      htmlStmt += '<div class="word_options">';

      jQuery.each(aObj.options, function (key, value) {
        htmlStmt +=
          '<div class="audioIcon textEnd off contant option_item" ' +
          'data-audio="' +
          (aObj.optionsAudios[key] || "") +
          '">';

        htmlStmt += '<div class="clue_word">' + value + "</div>";

        htmlStmt += "</div>";
      });

      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    /* =========================================================
       QUESTIONS AREA
    ========================================================= */

    htmlStmt += '<div class="questions_layout">';

    /* =========================================================
       CENTER IMAGE
    ========================================================= */

    if (aObj.centerImage != undefined && aObj.centerImage != "") {
      htmlStmt += '<div class="center_question_image">';

      htmlStmt += '<img src="' + aObj.centerImage + '">';

      htmlStmt += "</div>";
    }

    /* =========================================================
       QUESTIONS
    ========================================================= */

    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      htmlStmt +=
        '<div class="que question_' + (x + 1) + '" data-qno="' + (x + 1) + '">';

      /* =====================================================
         TEXT
      ===================================================== */

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
        var words = tmpObj.text.split("[_]");

        var wordIndex = -1;

        qStr = words
          .map(function (word) {
            if (word !== "") {
              wordIndex++;

              return (
                '<div class="audioIcon txt-audioIcon off contant" ' +
                'data-audio="' +
                (tmpObj.textaudios[wordIndex] || "") +
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

      /* =====================================================
         QUESTION CONTENT
      ===================================================== */

      htmlStmt += '<div class="fillin_gr">';

      htmlStmt += '<div class="q_space">';

      htmlStmt += '<div class="fillin_set">';

      htmlStmt += qStr;

      htmlStmt += "</div>";

      /* =====================================================
         ICONS
      ===================================================== */

      if (tmpObj.text.indexOf("[_]") !== -1) {
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
      }

      htmlStmt += "</div>";
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
