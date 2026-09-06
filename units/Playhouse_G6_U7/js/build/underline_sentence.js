function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.questions.length;
    var numberofCols = parseInt(aObj.numberofcolumns);

    // عدد الأسئلة في كل عمود
    var numOfQinCol = Math.ceil(numOfQuestions / numberofCols);

    var currQueNum = 0;

    // =========================================================
    // FOOTER NAV
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
      '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="1" data-audio="' +
      aObj.subTitleAudio +
      '">';

    htmlStmt += "<div class='page_sub_title'>";

    htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }

    htmlStmt +=
      "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // =========================================================
    // CONTENT
    // =========================================================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-center align-items-center">';

    htmlStmt += '<div class="group_elm">';

    // =========================================================
    // COLUMNS
    // =========================================================
    for (var x = 0; x < numberofCols; x++) {
      htmlStmt += '<div class="tick_group">';

      for (var y = 0; y < numOfQinCol; y++) {
        currQueNum++;

        // إذا خلصت الأسئلة وقف
        if (currQueNum > numOfQuestions) {
          break;
        }

        var tpOb = aObj.questions[currQueNum - 1];

        if (typeof tpOb != undefined && tpOb != null) {
          // =================================================
          // QUESTION
          // =================================================
          htmlStmt +=
            '<div class="que" id="que_' +
            currQueNum +
            '" data-qno="' +
            currQueNum +
            '">';

          // =================================================
          // QUESTION TEXT
          // =================================================
          if (tpOb.question != undefined && tpOb.question != "") {
            htmlStmt += '<div class="q_part">';

            htmlStmt += '<div class="question">' + tpOb.question + "</div>";

            htmlStmt += "</div>";
          }

          // =================================================
          // OPTIONS / WORDS
          // =================================================
          htmlStmt += '<div class="picks_grp">';

          if (tpOb.options != undefined && tpOb.options.length > 0) {
            for (var opt = 0; opt < tpOb.options.length; opt++) {
              var optionObj = tpOb.options[opt];

              // -----------------------------------------
              // أول عنصر = رقم السؤال فقط
              // لا يكون selectable
              // -----------------------------------------
              if (opt === 0) {
                htmlStmt += '<div class="sentence-number">';

                htmlStmt += '<div class="txt">' + optionObj.text + "</div>";

                htmlStmt += "</div>";
              }

              // -----------------------------------------
              // باقي الكلمات selectable
              // -----------------------------------------
              else {
                htmlStmt +=
                  '<div id="pick_' + currQueNum + "_" + opt + '" class="pick">';

                htmlStmt +=
                  '<div class="txt background_audio">' +
                  optionObj.text +
                  "</div>";

                htmlStmt += "</div>";
              }
            }
          }

          htmlStmt += "</div>";

          // =================================================
          // TICK / CROSS
          // =================================================
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
      }

      htmlStmt += "</div>";
    }

    // =========================================================
    // IMAGE
    // =========================================================
    if (aObj.image != "no" && aObj.image != "") {
      htmlStmt +=
        '<div class="img_space">' + '<img src="' + aObj.image + '">' + "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> mcq Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
