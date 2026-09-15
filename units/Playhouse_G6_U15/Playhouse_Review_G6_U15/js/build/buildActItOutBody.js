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

  htmlStmt += '<div class="options cont_ht_sf mx-auto game_time_options">';

  // =====================================================
  // PAGE
  // =====================================================

  htmlStmt += '<div class="all_cont game_time_page">';

  // =====================================================
  // TITLE
  // =====================================================

  htmlStmt += '<div class="game_time_title">' + aObj.title + "</div>";

  // =====================================================
  // INTRO
  // =====================================================

  htmlStmt += '<div class="game_time_intro">' + aObj.intro + "</div>";

  // =====================================================
  // GAMES
  // =====================================================

  htmlStmt += '<div class="game_time_games">';

  for (var i = 0; i < aObj.games.length; i++) {
    var game = aObj.games[i];

    var positionClass =
      game.imagePosition === "left" ? "image_left" : "image_right";

    htmlStmt += '<div class="game_box ' + positionClass + '">';

    // ===================================================
    // GAME TITLE
    // ===================================================

    htmlStmt += '<div class="game_box_title">' + game.title + "</div>";

    // ===================================================
    // CONTENT
    // ===================================================

    htmlStmt += '<div class="game_box_content">';

    // LEFT IMAGE
    if (game.imagePosition === "left" && game.image) {
      htmlStmt +=
        '<div class="game_box_image">' +
        '<img src="' +
        game.image +
        '">' +
        "</div>";
    }

    // TEXT
    htmlStmt += '<div class="game_box_text">' + game.text + "</div>";

    // RIGHT IMAGE
    if (game.imagePosition !== "left" && game.image) {
      htmlStmt +=
        '<div class="game_box_image">' +
        '<img src="' +
        game.image +
        '">' +
        "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
