function buildMcqTickBody(aObj) {
  var htmlStmt = "";

  if (aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;
    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;
    var xx;

    console.log("NUm of Question: ", numOfQuestions, numInRowArray, numOfRows);

    if (layOut == 1) {
      /* ======================================================
               BACK NAV
            ====================================================== */

      htmlStmt +=
        '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

      htmlStmt += '<a href="">';

      htmlStmt += '<img src="../images/icons/back_btn.png" />';

      htmlStmt += "</a>";

      htmlStmt += "</div>";

      /* ======================================================
               NEXT NAV
            ====================================================== */

      htmlStmt +=
        '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

      htmlStmt += '<a href="">';

      htmlStmt += '<img src="../images/icons/next_btn.png" />';

      htmlStmt += "</a>";

      htmlStmt += "</div>";

      /* ======================================================
               HEADING
            ====================================================== */

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
          '">';
      }

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      /* ======================================================
               SUB TITLE
            ====================================================== */

      htmlStmt += '<div class="activityHeading">';

      htmlStmt +=
        '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="1" data-audio="' +
        aObj.subTitleAudio +
        '">';

      htmlStmt += '<div class="page_sub_title">';

      htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

      if (aObj.subTitleIcons != undefined && aObj.subTitleIcons != null) {
        for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
          if (aObj.subTitleIcons[sicons] != "") {
            htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '"/>';
          }
        }
      }

      htmlStmt += "<br>";

      htmlStmt +=
        '<p class="subTitleTextRight">' + aObj.subTitleTextRight + "</p>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      /* ======================================================
               OPTIONS
            ====================================================== */

      htmlStmt += '<div class="options cont_ht_sf mx-auto">';

      htmlStmt += '<div class="all_cont">';

      /* ======================================================
               MAIN LAYOUT
               LEFT IMAGE | QUESTIONS | RIGHT IMAGE
            ====================================================== */

      htmlStmt += '<div class="tick_group">';

      /* ======================================================
               LEFT IMAGE
            ====================================================== */

      if (
        aObj.images != undefined &&
        aObj.images != null &&
        aObj.images.length > 0
      ) {
        htmlStmt += '<div class="side_image side_image_left">';

        htmlStmt += '<img src="' + aObj.images[0] + '">';

        htmlStmt += "</div>";
      }

      /* ======================================================
               QUESTIONS CENTER
            ====================================================== */

      htmlStmt += '<div class="questions_center">';

      for (var x = 0; x < numOfQuestions; x++) {
        var tempObj = aObj.questions[x];

        /* ==================================================
                   QUESTION
                ================================================== */

        htmlStmt +=
          '<div id="que_' +
          (x + 1) +
          '" class="que" data-qno="' +
          (x + 1) +
          '">';

        /* ==================================================
                   QUESTION HEADING
                ================================================== */

        htmlStmt += '<div class="heading">';

        htmlStmt += tempObj.question;

        htmlStmt += "</div>";

        /* ==================================================
                   RESULT ICON
                ================================================== */

        htmlStmt += '<div class="d-flex justify-content-end icon_wrap_holder">';

        htmlStmt += '<div class="icon_wrap mx-1">';

        htmlStmt += '<div class="tick iconcontainer">';

        htmlStmt += '<img src="../images/icons/check_btn.png"/>';

        htmlStmt += "</div>";

        htmlStmt += '<div class="cross iconcontainer">';

        htmlStmt += '<img src="../images/icons/cross_btn.png"/>';

        htmlStmt += "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";

        /* ==================================================
                   QUESTION GROUP
                ================================================== */

        htmlStmt +=
          '<div class="que_group d-flex flex-wrap justify-content-start align-items-center">';

        htmlStmt += '<div class="tick_fields">';

        htmlStmt +=
          '<div class="ans_grup que_group d-flex flex-column justify-content-center">';

        /* ==================================================
                   OPTIONS
                ================================================== */

        for (var y = 0; y < tempObj.options.length; y++) {
          htmlStmt +=
            '<div id="pick_' +
            (x + 1) +
            "_" +
            (y + 1) +
            '" class="tick_field d-flex pick align-items-baseline">';

          /* ==============================================
                       NUMBER
                    ============================================== */

          htmlStmt += '<div class="q_num_space">';

          if (tempObj.numbering == "alphabet") {
            xx = y == 0 ? tempObj.numberstartfrom : nextChar(xx);
          } else if (tempObj.numbering == "number") {
            xx = y + parseInt(tempObj.numberstartfrom);
          } else {
            xx = "";
          }

          if (xx !== "") {
            htmlStmt += xx + ".";
          }

          htmlStmt += "</div>";

          /* ==============================================
                       TICK BOX
                    ============================================== */

          htmlStmt += '<div class="tickBox">';

          htmlStmt += '<span class="selectTick" style="display:none;">';

          htmlStmt += '<i class="fa fa-check" aria-hidden="true"></i>';

          htmlStmt += "</span>";

          htmlStmt += "</div>";

          /* ==============================================
                       OPTION TEXT
                    ============================================== */

          htmlStmt += '<div class="tickContent">';

          htmlStmt += tempObj.options[y].text;

          htmlStmt += "</div>";

          htmlStmt += "</div>";
        }

        htmlStmt += "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";
      }

      /* ======================================================
               END QUESTIONS CENTER
            ====================================================== */

      htmlStmt += "</div>";

      /* ======================================================
               RIGHT IMAGE
            ====================================================== */

      if (
        aObj.images != undefined &&
        aObj.images != null &&
        aObj.images.length > 1
      ) {
        htmlStmt += '<div class="side_image side_image_right">';

        htmlStmt += '<img src="' + aObj.images[1] + '">';

        htmlStmt += "</div>";
      }

      /* ======================================================
               END MAIN LAYOUT
            ====================================================== */

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }
  }

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
