/*$(function () {
    var myData = {};  */
    function buildFillInBody(aObj) {
        var htmlStmt = '';
        if (aObj != undefined && aObj != null) {
            var layOut = parseInt(aObj.layout);
           
            if (layOut == 4) {
               	// ============== ****  **** ==============
               
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

		htmlStmt += '<div class="act_head_group justify-content-center">';
			htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
				htmlStmt += '<div class="q-type-img-container">';
				htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
				if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
					htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + '">';
				}
				htmlStmt += '</div>';
			htmlStmt += '</div>';

			htmlStmt += '<div class="activityHeading">'
				htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
				htmlStmt += "<div class='page_sub_title d-flex'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
						htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					}
					htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';
    // ============== ****  **** ==============  

                htmlStmt += '<div class="options">';
                
				htmlStmt += '<div class="top_text"><p>You have learnt several fun idioms in this unit. Be creative and try to describe a holiday, your best';
				htmlStmt += 'day, your worst day or any topic. Is there a place where you could use one of the idioms? Try to';
				htmlStmt += 'work one into your story. Check the definition to be sure you are using it correctly.</p>';
				htmlStmt += '<p>Example: I woke up that morning and jumped out of bed as fast as greased lightning! Little did I';
				htmlStmt += 'know that the day was going to go pe</p></div>';

                htmlStmt += '<div class="textarea-container">';
                    htmlStmt += ' <textarea id="paper-textarea" rows="10" cols="50" maxlength="400"></textarea>';
                htmlStmt += '</div>';
                
                htmlStmt += '</div>';
            }
            
        }
    
        console.log('htmlStmt >> fillin Built');
        $(".activity_area").append(htmlStmt);
    
        setLoadedStatus(getCurrFileOrDirectory('file'));
    }
    /*if (fillin_data != undefined && fillin_data != null) {	
            myData = fillin_data;			
            buildFillInBody(myData);
         }
    });*/