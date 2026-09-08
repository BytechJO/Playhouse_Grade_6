function buildActItOutBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj == null) {
    return;
  }

  // =====================================================
  // NAVIGATION
  // =====================================================

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

  // =====================================================
  // OPTIONS
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto act_out_options">';

  // =====================================================
  // MAIN CONTENT
  // =====================================================

  htmlStmt += '<div class="all_cont act_out_all_cont">';

  // =====================================================
  // TITLE
  // =====================================================

  htmlStmt += '<div class="act_out_title_box">';
  htmlStmt += '<div class="act_out_title">' + aObj.title + "</div>";
  htmlStmt += "</div>";

  // =====================================================
  // INTRO
  // =====================================================

  htmlStmt += '<div class="travel_intro">';
  htmlStmt += aObj.intro;
  htmlStmt += "</div>";

  htmlStmt += '<div class="travel_description">';
  htmlStmt += aObj.description;
  htmlStmt += "</div>";

  // =====================================================
  // SIDE ONE
  // =====================================================

  htmlStmt += '<div class="travel_section">';

  htmlStmt +=
    '<div class="travel_section_title">' + aObj.sideOneTitle + "</div>";

  htmlStmt += '<div class="travel_cards">';

  for (var i = 0; i < aObj.sideOne.length; i++) {
    htmlStmt += '<div class="travel_card">';

    htmlStmt += '<div class="travel_image_wrap">';
    htmlStmt +=
      '<img class="travel_image" src="' + aObj.sideOne[i].image + '" />';
    htmlStmt += "</div>";

    htmlStmt += '<ul class="travel_bullets">';

    for (var j = 0; j < aObj.sideOne[i].bullets.length; j++) {
      htmlStmt += "<li>" + aObj.sideOne[i].bullets[j] + "</li>";
    }

    htmlStmt += "</ul>";
    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =====================================================
  // SIDE TWO
  // =====================================================

  htmlStmt += '<div class="travel_section">';

  htmlStmt +=
    '<div class="travel_section_title">' + aObj.sideTwoTitle + "</div>";

  htmlStmt += '<div class="travel_cards">';

  for (var k = 0; k < aObj.sideTwo.length; k++) {
    htmlStmt += '<div class="travel_card">';

    htmlStmt += '<div class="travel_image_wrap">';
    htmlStmt +=
      '<img class="travel_image" src="' + aObj.sideTwo[k].image + '" />';
    htmlStmt += "</div>";

    htmlStmt += '<ul class="travel_bullets">';

    for (var l = 0; l < aObj.sideTwo[k].bullets.length; l++) {
      htmlStmt += "<li>" + aObj.sideTwo[k].bullets[l] + "</li>";
    }

    htmlStmt += "</ul>";
    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =====================================================
  // CLOSE
  // =====================================================

  htmlStmt += "</div>"; // all_cont
  htmlStmt += "</div>"; // options

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
