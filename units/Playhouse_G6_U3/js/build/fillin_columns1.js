function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (aObj != undefined && aObj != null) {

    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;

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
       READING POPUP
    ========================================================= */

    if (
      aObj.helpPopup != undefined &&
      aObj.helpPopup != null
    ) {

      htmlStmt +=
        '<button type="button" class="reading_help_btn">';
      htmlStmt += "Read the text";
      htmlStmt += "</button>";


      htmlStmt +=
        '<div class="reading_popup_overlay">';

      htmlStmt +=
        '<div class="reading_popup">';


      /* CLOSE */

      htmlStmt +=
        '<button type="button" class="reading_popup_close">';
      htmlStmt += "&times;";
      htmlStmt += "</button>";


      /* TITLE */

      htmlStmt +=
        '<div class="reading_popup_title">';

      htmlStmt += aObj.helpPopup.title;

      htmlStmt += "</div>";


      /* CONTENT */

      htmlStmt +=
        '<div class="reading_popup_content">';


      /* TEXT */

      htmlStmt +=
        '<div class="reading_popup_text">';

      for (
        var rp = 0;
        rp < aObj.helpPopup.paragraphs.length;
        rp++
      ) {
        htmlStmt +=
          '<div class="reading_popup_paragraph">';

        htmlStmt +=
          aObj.helpPopup.paragraphs[rp];

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";


      /* IMAGE */

      if (
        aObj.helpPopup.image != undefined &&
        aObj.helpPopup.image != ""
      ) {
        htmlStmt +=
          '<div class="reading_popup_image">';

        htmlStmt +=
          '<img src="' +
          aObj.helpPopup.image +
          '">';

        htmlStmt += "</div>";
      }


      htmlStmt += "</div>";
      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }


    /* =========================================================
       ACTIVITY BODY
    ========================================================= */

    htmlStmt +=
      '<div class="options cont_ht_sf mx-auto fillin_activity_body">';

    htmlStmt +=
      '<div class="all_cont">';

    htmlStmt +=
      '<div class="screen_elements">';


    /* =========================================================
       OPTIONS / WORD BANK
    ========================================================= */

    if (
      aObj.options != undefined &&
      aObj.options != null &&
      aObj.options.length > 0
    ) {

      htmlStmt +=
        '<div class="word_opt_sticky d-flex justify-content-center">';

      htmlStmt +=
        '<div class="word_options d-flex flex-wrap justify-content-around">';

      jQuery.each(
        aObj.options,
        function (key, value) {

          htmlStmt +=
            '<div class="audioIcon textEnd off d-flex contant" ' +
            'data-audio="' +
            aObj.optionsAudios[key] +
            '">';

          htmlStmt +=
            '<div class="clue_word">' +
            value +
            "</div>";

          htmlStmt += "</div>";
        }
      );

      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }


    /* =========================================================
       QUESTIONS
    ========================================================= */

    htmlStmt +=
      '<div class="group_elm question_group">';

    for (var x = 0; x < numOfRows; x++) {

      htmlStmt +=
        '<div class="ques">';

      for (
        var y = 0;
        y < numInRowArray[x].length;
        y++
      ) {

        var question =
          aObj.questions[currentQue - 1];

        if (!question) {
          continue;
        }


        htmlStmt +=
          '<div class="q_box">';


        /* IMAGE */

        var className = "without_Img";

        if (
          question.image != undefined &&
          question.image != ""
        ) {

          htmlStmt +=
            '<div class="image_space">';

          htmlStmt +=
            '<img src="' +
            question.image +
            '"/>';

          htmlStmt += "</div>";

          className = "with_Img";
        }


        /* QUESTION */

        htmlStmt +=
          '<div class="que ' +
          className +
          " que_" +
          currentQue +
          '" data-qno="' +
          currentQue +
          '">';


        htmlStmt +=
          '<div class="txt_wrap">';


        /* INPUT */

        var inputboxstmt =
          '<input class="fillin_input" type="text" maxlength="300"/>';

        if (
          aObj.defaultAnswer == currentQue
        ) {
          inputboxstmt =
            '<input class="fillin_input" ' +
            'type="text" ' +
            'maxlength="300" ' +
            'readonly ' +
            'value="' +
            question.answer[0] +
            '"/>';
        }


        htmlStmt +=
          '<div class="txtBox" data-type="text">';


        /* TEXT FRONT */

        if (
          question.textfront != undefined &&
          question.textfront != ""
        ) {

          htmlStmt +=
            '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
            'data-audio="' +
            question.audio +
            '">';

          htmlStmt +=
            '<span class="q_order">' +
            currentQue +
            ".</span>";

          htmlStmt += question.textfront;

          htmlStmt += "</div>";
        }


        /* INPUT FIELD */

        htmlStmt += inputboxstmt;


        htmlStmt += "</div>";
        htmlStmt += "</div>";


        /* =====================================================
           CHECK ICONS
        ===================================================== */

        htmlStmt +=
          '<div class="theIcons">';

        htmlStmt +=
          '<div class="icon_wrap">';

        htmlStmt +=
          '<div class="tick">' +
          '<img src="../images/icons/check_btn.png"/>' +
          "</div>";

        htmlStmt +=
          '<div class="cross">' +
          '<img src="../images/icons/cross_btn.png"/>' +
          "</div>";

        htmlStmt += "</div>";
        htmlStmt += "</div>";


        htmlStmt += "</div>";
        htmlStmt += "</div>";

        currentQue++;
      }

      htmlStmt += "</div>";
    }


    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }


  /* =========================================================
     APPEND
  ========================================================= */

  $(".activity_area").append(htmlStmt);


  /* =========================================================
     POPUP EVENTS
  ========================================================= */

  $(".reading_help_btn")
    .off("click")
    .on("click", function () {
      $(".reading_popup_overlay").addClass("show");
    });


  $(".reading_popup_close")
    .off("click")
    .on("click", function () {
      $(".reading_popup_overlay").removeClass("show");
    });


  $(".reading_popup_overlay")
    .off("click")
    .on("click", function (e) {

      if (
        $(e.target).hasClass(
          "reading_popup_overlay"
        )
      ) {
        $(".reading_popup_overlay")
          .removeClass("show");
      }

    });


  setLoadedStatus(
    getCurrFileOrDirectory("file")
  );
}