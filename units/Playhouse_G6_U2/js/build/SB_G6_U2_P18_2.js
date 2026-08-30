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

    htmlStmt +=
      '<img src="../images/icons/back_btn.png" />';

    htmlStmt += "</a>";

    htmlStmt += "</div>";


    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt +=
      '<img src="../images/icons/next_btn.png" />';

    htmlStmt += "</a>";

    htmlStmt += "</div>";


    // =========================================================
    // HEADING
    // =========================================================
    htmlStmt +=
      '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt +=
      '<div class="q-type-img-container">';

    htmlStmt +=
      '<img class="mainTitle" src="' +
      aObj.mainTitle +
      '">';


    if (
      aObj.mainTitleIcon != undefined &&
      aObj.mainTitleIcon != ""
    ) {
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


    htmlStmt +=
      '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.subTitleAudio +
      '">';

    htmlStmt +=
      "<div class='page_sub_title'>";

    htmlStmt +=
      "<p>" +
      aObj.subTitleTextLeft +
      "</p>";


    if (
      aObj.subTitleIcons != undefined &&
      aObj.subTitleIcons.length > 0
    ) {
      for (
        var sicons = 0;
        sicons < aObj.subTitleIcons.length;
        sicons++
      ) {
        if (aObj.subTitleIcons[sicons] != "") {
          htmlStmt +=
            "<img src='" +
            aObj.subTitleIcons[sicons] +
            "'/>";
        }
      }
    }


    htmlStmt +=
      "<br><p class='subTitleTextRight'>" +
      aObj.subTitleTextRight +
      "</p>";


    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";


    // =========================================================
    // CONTENT
    // =========================================================
    htmlStmt +=
      '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';

    htmlStmt +=
      '<div class="group_elm ' +
      (aObj.parentClassName || "") +
      '">';


    // =========================================================
    // OPTIONS
    // =========================================================
    if (
      aObj.options != undefined &&
      aObj.options != null &&
      aObj.options.length > 0
    ) {
      htmlStmt +=
        '<div class="word_opt_sticky d-flex justify-content-center">';

      htmlStmt +=
        '<div class="word_options d-flex flex-wrap justify-content-around">';


      for (
        var op = 0;
        op < aObj.options.length;
        op++
      ) {
        htmlStmt +=
          '<div class="clue_word">' +
          aObj.options[op] +
          "</div>";
      }


      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }


    // =========================================================
    // QUESTIONS
    // =========================================================
    htmlStmt +=
      '<div class="ques">';


    for (
      var x = 0;
      x < numOfQuestions;
      x++
    ) {
      var tmpObj = aObj.questions[x];

      var isTextarea =
        tmpObj.type == "textarea";


      htmlStmt +=
        '<div class="que img_fillin_gr' +
        (isTextarea ? " textarea_question" : "") +
        '" data-qno="' +
        (x + 1) +
        '">';


      // =======================================================
      // IMAGE
      // =======================================================
      if (
        tmpObj.image != undefined &&
        tmpObj.image != "" &&
        tmpObj.image != "no"
      ) {
        htmlStmt +=
          '<div class="image_space">';

        htmlStmt +=
          '<img src="' +
          tmpObj.image +
          '">';

        htmlStmt +=
          "</div>";
      }


      var qStr = "";


      // =======================================================
      // TEXTAREA
      // =======================================================
      if (isTextarea) {
        var textareaMaxLength =
          tmpObj.maxlength != undefined
            ? tmpObj.maxlength
            : 3000;


        qStr = tmpObj.text.replace(
          /\[_]/g,
          '<textarea ' +
            'class="text_input_area screenplay_textarea" ' +
            'maxlength="' +
            textareaMaxLength +
            '" ' +
            'data-type="textarea">' +
          '</textarea>'
        );
      }


      // =======================================================
      // NORMAL INPUT
      // =======================================================
      else {

        if (tmpObj.singleword) {

          var str = tmpObj.text;


          qStr =
            '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
            'data-audio="' +
            (
              tmpObj.textaudios &&
              tmpObj.textaudios[0]
                ? tmpObj.textaudios[0]
                : ""
            ) +
            '">' +

            '<img src="../images/icons/sound-wave.png" class="audio_icon">' +

            "</div>";


          qStr +=
            str.replace(
              /\[_]/g,

              '<input ' +
                'class="text_input_area" ' +
                'type="text" ' +
                'maxlength="' +
                tmpObj.maxlength +
                '" ' +
                'data-type="' +
                tmpObj.type +
                '">'
            );

        } else {

          var words =
            tmpObj.text.split("[_]");


          qStr =
            words.join(

              '<input ' +
                'class="text_input_area" ' +
                'type="text" ' +
                'maxlength="' +
                tmpObj.maxlength +
                '" ' +
                'data-type="' +
                tmpObj.type +
                '">'
            );
        }
      }


      // =======================================================
      // FILLIN
      // =======================================================
      htmlStmt +=
        '<div class="fillin_gr">';

      htmlStmt +=
        '<div class="q_space">';

      htmlStmt +=
        '<div class="fillin_set">';


      htmlStmt += qStr;


      htmlStmt += "</div>";


      // =======================================================
      // ICONS
      // مهم: بنبنيهم حتى للـtextarea
      // بس نخفيهم بالـCSS
      // =======================================================
      htmlStmt +=
        '<div class="icon_wrap_holder' +
        (isTextarea ? " textarea_icons" : "") +
        '">';


      htmlStmt +=
        '<div class="icon_wrap">';


      htmlStmt +=
        '<div class="tick">';

      htmlStmt +=
        '<img src="../images/icons/check_btn.png">';

      htmlStmt +=
        "</div>";


      htmlStmt +=
        '<div class="cross">';

      htmlStmt +=
        '<img src="../images/icons/cross_btn.png">';

      htmlStmt +=
        "</div>";


      htmlStmt +=
        "</div>";

      htmlStmt +=
        "</div>";


      htmlStmt +=
        "</div>";

      htmlStmt +=
        "</div>";

      htmlStmt +=
        "</div>";
    }


    htmlStmt +=
      "</div>";

    htmlStmt +=
      "</div>";

    htmlStmt +=
      "</div>";

    htmlStmt +=
      "</div>";

    htmlStmt +=
      "</div>";
  }


  console.log(
    "htmlStmt >> fillin Built"
  );


  $(".activity_area").append(
    htmlStmt
  );


  setLoadedStatus(
    getCurrFileOrDirectory("file")
  );
}


function nextChar(c) {
  return String.fromCharCode(
    c.charCodeAt(0) + 1
  );
}