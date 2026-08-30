function buildFillInBody(aObj) {
  var htmlStmt = '';
  if (aObj != undefined && aObj != null) {
    var numOfQuestions = (aObj.questions).length;

    htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
		htmlStmt +=  '<a href="">'
		htmlStmt +=  '<img src="../images/icons/back_btn.png" />'
		htmlStmt +=  '</a>'
		htmlStmt +=  '</div>'
		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
		htmlStmt +=  '<a href="">'
		htmlStmt +=  '<img src="../images/icons/next_btn.png" />'
		htmlStmt +=  '</a>'
		htmlStmt +=  '</div>'

		// ===================================================================== heading =====================
		htmlStmt += '<div class="act_head_group justify-content-center">';
		htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
			htmlStmt += '<div class="q-type-img-container">';
			htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
			if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
				htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + ';">';
			}
			htmlStmt += '</div>';
		htmlStmt += '</div>';

		htmlStmt += '<div class="activityHeading">'
			htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
			htmlStmt += "<div class='page_sub_title'>";
				htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
				for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
					htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
				}
				htmlStmt += "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
			htmlStmt += "</div>";
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';
		// ===================================================================== all_cont =====================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt += '<div class="all_cont justify-content-start">';
    htmlStmt += '<div class="screen_elements w-100 h-100  d-flex flex-wrap">';
    htmlStmt += '<div class="group_elm h-100 d-flex flex-wrap">';
        for(let i=0; i<aObj.images.length; i++){ 
  htmlStmt += '<div>'; 
  htmlStmt += '<div class="image_space"><img src="' + aObj.images[i] + '"></div>'; 
  htmlStmt += '</div>'; 
}
    htmlStmt += '</div>';
    htmlStmt += '</div></div>';// - end - all_cont			
    htmlStmt += '</div>';// - end - options			
  }
  console.log('htmlStmt >> fillin Built');
  $(".activity_area").append(htmlStmt);
  setLoadedStatus(getCurrFileOrDirectory('file'));
}
function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
