function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);

    var numOfQuestions = aObj.questions.length;

    var numInRowArray = aObj.numinrow;

    var numOfRows = numInRowArray.length;

    var currentQue = 1;

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

    if (aObj.title_position != undefined && aObj.title_position == "under") {
      htmlStmt += "<div class='page_sub_title'>";

      htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }

      htmlStmt +=
        "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

      htmlStmt += "</div>";
    } else {
      htmlStmt += "<div class='page_sub_title d-flex'>";

      htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }

      htmlStmt +=
        "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // MAIN CONTENT
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt += '<div class="all_cont">';

    htmlStmt += '<div class="screen_elements d-flex align-items-center">';

    // =========================================================
    // OPTIONS
    // =========================================================

    if (
      aObj.options != undefined &&
      aObj.options != null &&
      aObj.options.length > 0
    ) {
      htmlStmt += '<div class="word_opt_sticky">';

      htmlStmt += '<div class="word_options">';

      jQuery.each(aObj.options, function (key, value) {
        htmlStmt +=
          '<div class="audioIcon textEnd off contant word_option_item" ' +
          'data-option-value="' +
          value.toLowerCase() +
          '" ' +
          'data-audio="' +
          (aObj.optionsAudios[key] || "") +
          '">';

        htmlStmt += '<div class="clue_word">' + value + "</div>";

        htmlStmt += "</div>";
      });

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    // =========================================================
    // QUESTIONS + IMAGE GROUP
    // =========================================================

    htmlStmt += '<div class="group_elm ' + (aObj.parentClassName || "") + '">';

    // =========================================================
    // FRONT IMAGE
    // =========================================================

    if (aObj.image != "no" && aObj.image != "") {
      if (aObj.imageposition == "front") {
        htmlStmt +=
          '<div class="img_space">' +
          '<img src="' +
          aObj.image +
          '">' +
          "</div>";
      }
    }

    // =========================================================
    // OPTIONAL TEXT
    // =========================================================

    if (aObj.text != undefined && aObj.text != "") {
      htmlStmt +=
        '<div class="audioIcon off contant" ' +
        'data-audio="' +
        aObj.textAudio +
        '">';

      htmlStmt += '<div class="text">' + aObj.text + "</div>";

      htmlStmt += "</div>";
    }

    // =========================================================
    // QUESTIONS
    // =========================================================

    htmlStmt += '<div class="ques">';

    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      htmlStmt +=
        '<div class="que img_fillin_gr d-flex flex-wrap" ' +
        'data-qno="' +
        (x + 1) +
        '">';

      // =====================================================
      // QUESTION IMAGE
      // =====================================================

      if (tmpObj.image != "" && tmpObj.image != "no") {
        htmlStmt +=
          '<div class="image_space">' +
          '<img src="' +
          tmpObj.image +
          '">' +
          "</div>";
      }

      // =====================================================
      // BUILD INPUT
      // =====================================================

      var qStr = "";

      if (tmpObj.singleword) {
        var str = tmpObj.text;

        qStr +=
          '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
          'data-audio="' +
          tmpObj.textaudios[0] +
          '">';

        qStr += '<img src="../images/icons/sound-wave.png" class="audio_icon">';

        qStr += "</div>";

        qStr += str.replace(
          /\[_]/g,

          "<input " +
            'class="text_input_area" ' +
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

        for (var w = 0; w < words.length; w++) {
          if (words[w] !== "") {
            qStr +=
              '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
              'data-audio="' +
              (tmpObj.textaudios[w] || "") +
              '">';

            qStr += words[w];

            qStr += "</div>";
          }

          if (w < words.length - 1) {
            qStr +=
              "<input " +
              'class="text_input_area" ' +
              'type="text" ' +
              'maxlength="' +
              tmpObj.maxlength +
              '" ' +
              'data-type="' +
              tmpObj.type +
              '">';
          }
        }
      }

      // =====================================================
      // FILLIN
      // =====================================================

      htmlStmt += '<div class="fillin_gr d-flex align-items-center">';

      htmlStmt += '<div class="q_space d-flex">';

      // =====================================================
      // NUMBERING
      // =====================================================

      if (aObj.numbering != "none") {
        htmlStmt += '<div class="q_num_space">';

        if (aObj.numbering == "alphabet") {
          xx = currentQue == 1 ? aObj.numberstartfrom : nextChar(xx);
        } else if (aObj.numbering == "number") {
          xx = x + parseInt(aObj.numberstartfrom);
        }

        htmlStmt += xx + " ";

        htmlStmt += "</div>";
      }

      // =====================================================
      // INPUT HOLDER
      // =====================================================

      htmlStmt += '<div class="fillin_set d-flex flex-wrap">';

      htmlStmt += qStr;

      // =====================================================
      // OPTIONAL WORDS
      // =====================================================

      if (tmpObj.options_words != undefined && tmpObj.options_words != "") {
        htmlStmt += '<div class="options_words d-flex flex-wrap">';

        for (let y = 0; y < tmpObj.options_words.length; y++) {
          htmlStmt +=
            '<div class="audioIcon txt-audioIcon off d-flex contant" ' +
            'data-audio="' +
            tmpObj.options_words_audios[y] +
            '">';

          htmlStmt += tmpObj.options_words[y];

          htmlStmt += "</div>";
        }

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      // =====================================================
      // CHECK / CROSS
      // =====================================================

      var ans = tmpObj.text.includes("[_]") ? "true" : "false";

      if (ans == "true") {
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
      } else {
        htmlStmt += '<div class="icon_wrap_holder">';

        htmlStmt += '<div class="icon_wrap">';

        htmlStmt += '<div class="tick"></div>';

        htmlStmt += '<div class="cross"></div>';

        htmlStmt += "</div>";

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =========================================================
    // BACK IMAGE
    // =========================================================

    if (aObj.image != "no" && aObj.image != "") {
      if (aObj.imageposition == "back") {
        htmlStmt +=
          '<div class="img_space">' +
          '<img src="' +
          aObj.image +
          '">' +
          "</div>";
      }
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
