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
  // BODY
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto act_out_options">';

  htmlStmt += '<div class="all_cont act_out_all_cont">';

  htmlStmt += '<div class="act_out_page">';

  // =====================================================
  // TOP DECORATION
  // =====================================================

  htmlStmt += '<div class="act_out_top_shape"></div>';

  // =====================================================
  // TITLE
  // =====================================================

  htmlStmt += '<div class="act_out_title_wrap">';

  htmlStmt += '<div class="act_out_title">' + aObj.title + "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // INTRO
  // =====================================================

  htmlStmt += '<div class="act_out_intro">' + aObj.intro + "</div>";

  // =====================================================
  // CARDS GRID
  // =====================================================

  htmlStmt += '<div class="act_out_grid">';

  for (var i = 0; i < aObj.cards.length; i++) {
    var card = aObj.cards[i];

    htmlStmt += '<div class="act_out_card">';

    // =================================================
    // CARD PINS
    // =================================================

    htmlStmt += '<div class="act_out_pins">';

    for (var p = 0; p < 6; p++) {
      htmlStmt += '<span class="act_out_pin"></span>';
    }

    htmlStmt += "</div>";

    // =================================================
    // CARD INNER
    // =================================================

    htmlStmt += '<div class="act_out_card_inner">';

    // title
    htmlStmt += '<div class="act_out_card_title">' + card.title + "</div>";

    // text
    htmlStmt += '<div class="act_out_card_text">' + card.text + "</div>";

    // =================================================
    // SINGLE IMAGE
    // =================================================

    if (card.imageType == "single") {
      htmlStmt += '<div class="act_out_single_img">';

      htmlStmt += '<img src="' + card.image + '" />';

      htmlStmt += "</div>";
    }

    // =================================================
    // GRID IMAGES
    // =================================================
    else if (card.imageType == "grid") {
      htmlStmt += '<div class="act_out_props_grid">';

      for (var img = 0; img < card.images.length; img++) {
        htmlStmt += '<div class="act_out_prop_img">';

        htmlStmt += '<img src="' + card.images[img] + '" />';

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>"; // card inner

    htmlStmt += "</div>"; // card
  }

  htmlStmt += "</div>"; // grid

  htmlStmt += "</div>"; // page

  htmlStmt += "</div>"; // all_cont

  htmlStmt += "</div>"; // options

  // =====================================================
  // APPEND
  // =====================================================

  $(".activity_area").append(htmlStmt);

  // =====================================================
  // LOADED
  // =====================================================

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
