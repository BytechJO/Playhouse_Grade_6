function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.questions.length;
    var numberofCols = parseInt(aObj.numberofcolumns);
    var numOfQinCol = Math.round(numOfQuestions / numberofCols);
    var currQueNum = 0;

    // =========================================================
    // NAVIGATION
    // =========================================================
    htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/back_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';
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

    // =========================================================
    // CONTENT
    // =========================================================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

    // =========================================================
    // MAIN IMAGE - OPTIONAL
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
    // QUESTIONS
    // =========================================================
    for (var x = 0; x < numberofCols; x++) {
      htmlStmt += '<div class="tick_group d-flex flex-column">';

      for (var y = 0; y < numOfQinCol; y++) {
        currQueNum++;

        var tpOb = aObj.questions[currQueNum - 1];

        if (typeof tpOb != undefined && tpOb != null) {
          // =================================================
          // QUESTION BOX
          // =================================================
          htmlStmt +=
            '<div class="que d-flex flex-wrap background_audio" ' +
            'id="que_' +
            currQueNum +
            '" ' +
            'data-qno="' +
            currQueNum +
            '">';

          // =================================================
          // QUESTION PART
          // =================================================
          htmlStmt += '<div class="d-flex q_part">';

          // Question numbering if needed
          /*
					if(aObj.numbering != 'none'){

						htmlStmt += '<div class="q_num_space">';

						if(aObj.numbering == 'alphabet'){

							xx =
								(currQueNum == 1)
								? aObj.numberstartfrom
								: nextChar(xx);

						}else if(aObj.numbering == 'number'){

							xx =
								currQueNum +
								parseInt(aObj.numberstartfrom) -
								1;
						}

						htmlStmt += xx + '.';

						htmlStmt += '</div>';
					}
					*/

          // Question text if needed
          if (tpOb.question != undefined && tpOb.question != "") {
            htmlStmt += '<div class="question">' + tpOb.question + "</div>";
          }

          htmlStmt += "</div>"; // q_part

          // =================================================
          // QUESTION CONTENT WRAPPER
          // =================================================
          htmlStmt += '<div class="mcq_box_content">';

          // =================================================
          // LEFT SIDE - OPTIONS
          // =================================================
          htmlStmt += '<div class="d-flex flex-wrap picks_grp">';

          if (tpOb.options != undefined && tpOb.options.length > 0) {
            for (var opt = 0; opt < tpOb.options.length; opt++) {
              htmlStmt +=
                "<div " +
                'id="pick_' +
                currQueNum +
                "_" +
                (opt + 1) +
                '" ' +
                'class="pick">';

              htmlStmt +=
                '<div class="txt">' + tpOb.options[opt].text + "</div>";

              htmlStmt += "</div>";
            }
          }

          htmlStmt += "</div>"; // picks_grp

          // =================================================
          // RIGHT SIDE - QUESTION IMAGE
          // =================================================
          if (
            tpOb.image != undefined &&
            tpOb.image != "" &&
            tpOb.image != "no"
          ) {
            htmlStmt += '<div class="mcq_question_image">';

            htmlStmt += '<img src="' + tpOb.image + '" alt="">';

            htmlStmt += "</div>";
          }

          htmlStmt += "</div>"; // mcq_box_content

          // =================================================
          // CHECK / CROSS
          // =================================================
          htmlStmt += '<div class="icon_wrap p-2">';

          htmlStmt +=
            '<div class="tick">' +
            '<img src="../images/icons/check_btn.png">' +
            "</div>";

          htmlStmt +=
            '<div class="cross">' +
            '<img src="../images/icons/cross_btn.png">' +
            "</div>";

          htmlStmt += "</div>";

          htmlStmt += "</div>"; // que
        }
      }

      htmlStmt += "</div>"; // tick_group
    }

    // =========================================================
    // EXTRA IMAGE CONTAINER
    // =========================================================
    htmlStmt += '<div class="image-container">';
    htmlStmt += "</div>";

    // =========================================================
    // END WRAPPERS
    // =========================================================
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
