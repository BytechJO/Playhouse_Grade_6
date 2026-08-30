function buildFillInBody(aObj) {
    var htmlStmt = '';

    if (aObj != undefined && aObj != null) {
        var layOut = parseInt(aObj.layout);

        if (layOut == 4) {

            htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
            htmlStmt += '<a href="">';
            htmlStmt += '<img src="../images/icons/back_btn.png" />';
            htmlStmt += '</a>';
            htmlStmt += '</div>';

            htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
            htmlStmt += '<a href="">';
            htmlStmt += '<img src="../images/icons/next_btn.png" />';
            htmlStmt += '</a>';
            htmlStmt += '</div>';

            htmlStmt += '<div class="d-flex flex-column w-100">';

            // =========================================================
            // HEADING
            // =========================================================

            htmlStmt += '<div class="act_head_group justify-content-center">';

            htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
            htmlStmt += '<div class="q-type-img-container">';
            htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';

            if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
                htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + '">';
            }

            htmlStmt += '</div>';
            htmlStmt += '</div>';

            htmlStmt += '<div class="activityHeading">';

            htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';

            htmlStmt += "<div class='page_sub_title d-flex'>";

            htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";

            for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
                htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
            }

            htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";

            htmlStmt += "</div>";

            htmlStmt += '</div>';
            htmlStmt += '</div>';

            htmlStmt += '</div>';



            // =========================================================
            // FIRST BUILD
            // CLUSTER + OUTLINE
            // =========================================================

            htmlStmt += '<div class="options" style="width:85%; margin:auto">';

            htmlStmt += '<div class="my-container">';


            // ================= CLUSTER =================

            htmlStmt += '<div class="left-section" style="border-right: 1px solid aqua;">';

            htmlStmt += '<div class="header-text">';
            htmlStmt += '<h3> Cluster </h3>';
            htmlStmt += '</div>';

            htmlStmt += '<div style="height:89%;text-align:center">';

            htmlStmt += '<img src="../images/pages/activities/WB_U1_Q7_1.png" style="height: 90%;">';

            htmlStmt += '</div>';

            htmlStmt += '</div>';


            // ================= OUTLINE =================

            htmlStmt += '<div class="left-section">';

            htmlStmt += '<div class="header-text">';

            htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.activityheading_audio + '" >';

            htmlStmt += '<h3> Outline </h3>';

            htmlStmt += '</div>';

            htmlStmt += '</div>';


            htmlStmt += '<div style="height:89%;margin-left:20px">';

            htmlStmt += '<div class="outline">';


            htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.activityheading_audio + '" >';
            htmlStmt += '<p>Title</p>';
            htmlStmt += '</div>';


            htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.activityheading_audio + '" >';
            htmlStmt += '<p>I. Main Idea One</p>';
            htmlStmt += '</div>';


            htmlStmt += '<ul>';

            htmlStmt += '<li>';

            htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.activityheading_audio + '" >';
            htmlStmt += '<p>A. Subtopic</p>';
            htmlStmt += '</div>';

            htmlStmt += '<ul>';


            htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.activityheading_audio + '" >';
            htmlStmt += '<li><p>1. Detail</p></li>';
            htmlStmt += '</div>';


            htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.activityheading_audio + '" >';
            htmlStmt += '<li><p>2. Detail</p></li>';
            htmlStmt += '</div>';


            htmlStmt += '</ul>';

            htmlStmt += '</li>';


            htmlStmt += '<li>';

            htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.activityheading_audio + '" >';

            htmlStmt += '<p>B. Subtopic</p>';

            htmlStmt += '</div>';

            htmlStmt += '</li>';

            htmlStmt += '</ul>';



            htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.activityheading_audio + '" >';

            htmlStmt += '<p>II. Main Idea Two</p>';

            htmlStmt += '</div>';



            htmlStmt += '<ul>';

            htmlStmt += '<li>';

            htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.activityheading_audio + '" >';

            htmlStmt += '<p>A. Subtopic</p>';

            htmlStmt += '</div>';


            htmlStmt += '<ul>';


            htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.activityheading_audio + '" >';

            htmlStmt += '<li><p>1. Detail</p></li>';

            htmlStmt += '</div>';


            htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.activityheading_audio + '" >';

            htmlStmt += '<li><p>2. Detail</p></li>';

            htmlStmt += '</div>';


            htmlStmt += '</ul>';

            htmlStmt += '</li>';


            htmlStmt += '<li>';


            htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.activityheading_audio + '" >';

            htmlStmt += '<p>B. Subtopic</p>';

            htmlStmt += '</div>';


            htmlStmt += '</li>';

            htmlStmt += '</ul>';

            htmlStmt += '</div>';

            htmlStmt += '</div>';

            htmlStmt += '</div>';


            htmlStmt += '</div>';

            htmlStmt += '</div>';



            // =========================================================
            // SECOND BUILD
            // PLOT MAP + PLAY OUTLINE
            // =========================================================

            htmlStmt += '<div class="options" style="width:85%; margin:auto">';

            htmlStmt += '<div class="my-container">';


            // ================= PLOT MAP =================

            htmlStmt += '<div class="left-section" style="border-right: 1px solid aqua;">';

            htmlStmt += '<div class="header-text">';

            htmlStmt += '<h3> Plot Map </h3>';

            htmlStmt += '</div>';


            htmlStmt += '<div style="height:88%;text-align:center">';

            htmlStmt += '<img src="../images/pages/activities/WB_U1_Q7_3.png" style="height: 50%;">';

            htmlStmt += '</div>';

            htmlStmt += '</div>';



            // ================= PLAY OUTLINE =================

            htmlStmt += '<div class="left-section">';

            htmlStmt += '<div class="header-text">';

            htmlStmt += '<h3> Play Outline </h3>';

            htmlStmt += '</div>';


            htmlStmt += '<div style="height:80%;margin-left:20px;font-size: 20px;border: 1px solid cyan;">';


            htmlStmt += '<div class="container" style="display: flex;justify-content: space-between;border-bottom: 1px solid cyan;">';


            // Characters

            htmlStmt += '<div class="left-column" style="width: 35%;border-right: 1px solid aqua;">';

            htmlStmt += '<h2>Characters</h2>';

            htmlStmt += '<p>(name and description)</p>';

            htmlStmt += '</div>';



            // Settings

            htmlStmt += '<div class="right-column" style="width: 55%;">';

            htmlStmt += '<h2>Setting(s)</h2>';

            htmlStmt += '<p>(describe how the set will look and decide how many different scenes there are)</p>';

            htmlStmt += '</div>';


            htmlStmt += '</div>';



            // Plot Events

            htmlStmt += '<div class="">';

            htmlStmt += '<div class="column" style="text-align: center;">';

            htmlStmt += '<h2>Plot Events</h2>';

            htmlStmt += '</div>';


            htmlStmt += '<div class="column">';

            htmlStmt += '<ol class="numbered-list">';

            htmlStmt += '<li><input type="text" id="myInput" name="myInput"></li>';

            htmlStmt += '<li><input type="text" id="myInput" name="myInput"></li>';

            htmlStmt += '<li><input type="text" id="myInput" name="myInput"></li>';

            htmlStmt += '<li><input type="text" id="myInput" name="myInput"></li>';

            htmlStmt += '</ol>';

            htmlStmt += '</div>';

            htmlStmt += '</div>';


            htmlStmt += '</div>';

            htmlStmt += '</div>';


            htmlStmt += '</div>';

            htmlStmt += '</div>';



            // =========================================================

            htmlStmt += '</div>';

        }
    }


    console.log('htmlStmt >> fillin Built');

    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}