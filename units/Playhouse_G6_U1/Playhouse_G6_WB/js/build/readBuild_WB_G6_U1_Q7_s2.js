/*$(function () {
    var myData = {};  */
    function buildFillInBody(aObj) {
        var htmlStmt = '';
        if (aObj != undefined && aObj != null) {
            var layOut = parseInt(aObj.layout);
    
            if (layOut == 4) {
                htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
                htmlStmt += '<a href="">'
                htmlStmt += '<img src="../images/icons/back_btn.png" />'
                htmlStmt += '</a>'
                htmlStmt += '</div>'
                htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
                htmlStmt += '<a href="">'
                htmlStmt += '<img src="../images/icons/next_btn.png" />'
                htmlStmt += '</a>'
                htmlStmt += '</div>'
    
                htmlStmt += '<div class="d-flex flex-column w-100">'
    
                htmlStmt += '<div class="d-flex flex-column w-100">'
    
                // htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.activityheading_audio + '" style="margin-top:35px">';
                // htmlStmt += '<div class="q-type-img-container">';
                // htmlStmt += '<img class="" src=' + aObj.main_activityheading + ' style="height:65%">';
                // htmlStmt += '</div>';
                // htmlStmt += '</div>';
                // htmlStmt += '<div class="act_head_group d-flex justify-content-center">';
                // // htmlStmt += '<div class="keyIcon"><img src="' + aObj.activityicon + '"/></div>';
    
                // htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-audio="' + aObj.main_activityheading_audio + '">';
                // htmlStmt += '<div class="activityHeading">' + aObj.activityheading + '</div>';
                // htmlStmt += '</div>';
    
                // htmlStmt += '</div>';
                // ===================================================================== heading =====================
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
    
                htmlStmt += '<div class="options" style="width:85%; margin:auto">';
    
                htmlStmt += '<div class="my-container">';
                
                    htmlStmt += ' <div class="left-section" style="border-right: 1px solid aqua;">';
                        htmlStmt += ' <div class="header-text">';    
                            htmlStmt += ' <h3> Plot Map </h3>';
                        htmlStmt += ' </div>';
                        htmlStmt += ' <div style="height:88%;text-align:center">';
                            htmlStmt += ' <img src="../images/pages/activities/WB_U1_Q7_3.png" style="height: 50%;">';
                        htmlStmt += ' </div>';
                    htmlStmt += ' </div>';

                     htmlStmt += ' <div class="left-section">';
                        htmlStmt += ' <div class="header-text">';    
                            htmlStmt += ' <h3> Play Outline </h3>';
                        htmlStmt += ' </div>';
                        htmlStmt += ' <div style="height:80%;margin-left:20px;font-size: 20px;border: 1px solid cyan;">';
                            htmlStmt +='<div class="container" style="display: flex;justify-content: space-between;border-bottom: 1px solid cyan;">';
                                htmlStmt +='<div class="left-column" style="width: 35%;border-right: 1px solid aqua;">';
                                    htmlStmt +='<h2>Characters</h2>';
                                    htmlStmt +='<p>(name and description)</p>';
                                htmlStmt +='</div>';
                                htmlStmt +='<div class="right-column" style="width: 55%;">';
                                    htmlStmt +='<h2>Setting(s)</h2>';
                                    htmlStmt +='<p>(describe how the set will look and decide how many different scenes there are)</p>';
                                htmlStmt +='</div>';
                            htmlStmt +='</div>';
                        htmlStmt +='<div class="">';
                            htmlStmt +='<div class="column" style="text-align: center;">';
                                htmlStmt +='<h2>Plot Events</h2>';
                            htmlStmt +='</div>';
                            htmlStmt +='<div class="column">';
                            htmlStmt +='<ol class="numbered-list">';
                                htmlStmt +='<li><input type="text" id="myInput" name="myInput"></li>';
                                htmlStmt +='<li><input type="text" id="myInput" name="myInput"></li>';
                                htmlStmt +='<li><input type="text" id="myInput" name="myInput"></li>';
                                htmlStmt +='<li><input type="text" id="myInput" name="myInput"></li>';
                            htmlStmt +='</ol>';
                        htmlStmt +='</div>';
                    htmlStmt +='</div>';
                        htmlStmt += ' </div>';
                    htmlStmt += ' </div>';
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
    
                // // Get the textarea element by its id
                // var textarea = document.getElementById("paper-textarea");
    
                // // Store the initial text
                // var initialText = "Dear Diary,";
    
                // // Set the initial text as the default value
                // textarea.value = initialText;
    
                // // Add an event listener to prevent the initial text from being deleted
                // textarea.addEventListener("input", function () {
                //     if (textarea.value !== initialText) {
                //         textarea.value = initialText;
                //     }
                // });