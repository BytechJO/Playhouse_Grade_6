function buildWordPuzzleBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;
    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;
    var numOfRow = aObj.numOfRow;

    // =========================================================
    // BACK BUTTON
    // =========================================================
    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/back_btn.png" />';

    htmlStmt += "</a>";

    htmlStmt += "</div>";

    // =========================================================
    // NEXT BUTTON
    // =========================================================
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

    if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
      htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
    }

    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        aObj.mainTitleIconPos.right +
        '">';
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

    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      if (aObj.subTitleIcons[sicons] != "") {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }
    }

    htmlStmt += "<p>" + aObj.subTitleTextRight + "</p>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // OPTIONS
    // =========================================================
    htmlStmt += '<div class="options flex-wrap">';

    // =========================================================
    // WORD OPTIONS
    // =========================================================
    if (
      aObj.options != undefined &&
      aObj.options != null &&
      aObj.options.length > 0
    ) {
      htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';

      htmlStmt +=
        '<div class="word_options d-flex flex-wrap justify-content-around">';

      jQuery.each(aObj.options, function (key, value) {
        htmlStmt +=
          '<div class="audioIcon textEnd off d-flex contant" ' +
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
    // CLUES OBJECT
    // =========================================================
    var cluesObj = aObj.questions[0].clues;

    // =========================================================
    // MAIN AREA
    // ACROSS | GRID | DOWN
    // =========================================================
    htmlStmt += '<div class="puzzle_main_holder">';

    /*
            Keep puzzleclues here because validation searches
            inside this element for clue_row_* and clue_col_*.
        */
    htmlStmt += '<div class="puzzle_layout puzzleclues">';

    // =========================================================
    // LEFT - ACROSS
    // =========================================================
    htmlStmt += '<div class="puzzle_side puzzle_across_side">';

    if (cluesObj.across != undefined && cluesObj.across.length > 0) {
      htmlStmt += '<div class="clue_box clue_box_across">';

      htmlStmt +=
        '<div class="clue_title clue_title_across">' +
        "<span>ACROSS</span>" +
        "</div>";

      htmlStmt += '<div class="clue_box_inner">';

      for (var cc = 0; cc < cluesObj.across.length; cc++) {
        var acrossClue = cluesObj.across[cc];

        htmlStmt += '<div class="clue clue_row_' + acrossClue.wordnum + '">';

        // =============================================
        // NUMBER
        // =============================================
        htmlStmt += '<div class="clue_number">' + acrossClue.wordnum + "</div>";

        // =============================================
        // TEXT
        // =============================================
        htmlStmt +=
          '<div class="clueText">' +
          acrossClue.text.replace(
            new RegExp("^" + acrossClue.wordnum + "\\s*"),
            "",
          ) +
          "</div>";

        // =============================================
        // RESULT ICON
        // =============================================
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

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =========================================================
    // CENTER - GRID
    // =========================================================
    htmlStmt += '<div class="puzzle_center">';

    htmlStmt += '<div class="puzzle_container">';

    htmlStmt += '<div class="puzzlematrix"></div>';

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // RIGHT - DOWN
    // =========================================================
    htmlStmt += '<div class="puzzle_side puzzle_down_side">';

    if (cluesObj.down != undefined && cluesObj.down.length > 0) {
      htmlStmt += '<div class="clue_box clue_box_down">';

      htmlStmt +=
        '<div class="clue_title clue_title_down">' +
        "<span>DOWN</span>" +
        "</div>";

      htmlStmt += '<div class="clue_box_inner">';

      for (var dd = 0; dd < cluesObj.down.length; dd++) {
        var downClue = cluesObj.down[dd];

        htmlStmt += '<div class="clue clue_col_' + downClue.wordnum + '">';

        // =============================================
        // NUMBER
        // =============================================
        htmlStmt += '<div class="clue_number">' + downClue.wordnum + "</div>";

        // =============================================
        // TEXT
        // =============================================
        htmlStmt +=
          '<div class="clueText">' +
          downClue.text.replace(
            new RegExp("^" + downClue.wordnum + "\\s*"),
            "",
          ) +
          "</div>";

        // =============================================
        // RESULT ICON
        // =============================================
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

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =========================================================
    // END LAYOUT
    // =========================================================
    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> word puzzle Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
