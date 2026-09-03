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
  // TOP DECORATION
  // =====================================================

  htmlStmt += '<div class="act_out_top_shape"></div>';

  // =====================================================
  // TITLE
  // =====================================================

  htmlStmt += '<div class="act_out_title_box">';

  htmlStmt += '<div class="act_out_title">' + aObj.title + "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // INTRO
  // =====================================================

  htmlStmt += '<div class="act_out_intro">' + aObj.intro + "</div>";

  // =====================================================
  // MAIN IMAGE
  // =====================================================

  htmlStmt += '<div class="sign_main_image_wrap">';

  htmlStmt += '<img class="sign_main_image" src="' + aObj.mainImage + '" />';

  htmlStmt += "</div>";

  // =====================================================
  // BOTTOM INSTRUCTION BOX
  // =====================================================

  htmlStmt += '<div class="sign_bottom_box">';

  htmlStmt += '<div class="sign_bottom_text">' + aObj.bottomText + "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // CLOSE
  // =====================================================

  htmlStmt += "</div>"; // all_cont
  htmlStmt += "</div>"; // options

  // =====================================================
  // APPEND
  // =====================================================

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
