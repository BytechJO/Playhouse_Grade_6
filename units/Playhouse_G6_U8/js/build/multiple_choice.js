function buildMcqBody(aObj) {

    var htmlStmt = '';

    if (typeof aObj != undefined && aObj != null) {

        var numOfQuestions = aObj.questions.length;
        var currQueNum = 0;


        // =====================================================
        // BACK
        // =====================================================

        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
        htmlStmt += '<a href="">';
        htmlStmt += '<img src="../images/icons/back_btn.png" />';
        htmlStmt += '</a>';
        htmlStmt += '</div>';


        // =====================================================
        // NEXT
        // =====================================================

        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
        htmlStmt += '<a href="">';
        htmlStmt += '<img src="../images/icons/next_btn.png" />';
        htmlStmt += '</a>';
        htmlStmt += '</div>';



        // =====================================================
        // HEADING
        // =====================================================

        htmlStmt += '<div class="act_head_group justify-content-center">';

        htmlStmt += '<div class="audioIcon off contant" ';
        htmlStmt += 'data-slideNum="1" ';
        htmlStmt += 'data-audio="' + aObj.mainTitleAudio + '">';

        htmlStmt += '<div class="q-type-img-container">';

        htmlStmt += '<img class="mainTitle" src="' +
            aObj.mainTitle +
            '">';


        if (
            aObj.mainTitleIcon != undefined &&
            aObj.mainTitleIcon != ''
        ) {

            htmlStmt += '<img class="mainTitleIcon" ';
            htmlStmt += 'src="' + aObj.mainTitleIcon + '" ';
            htmlStmt += 'style="right:' +
                aObj.mainTitleIconPos.right +
                ';">';
        }


        htmlStmt += '</div>';
        htmlStmt += '</div>';



        // =====================================================
        // SUB TITLE
        // =====================================================

        htmlStmt += '<div class="activityHeading">';

        htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" ';
        htmlStmt += 'data-slideNum="1" ';
        htmlStmt += 'data-audio="' + aObj.subTitleAudio + '">';


        htmlStmt += '<div class="page_sub_title">';

        htmlStmt += '<p>' +
            aObj.subTitleTextLeft +
            '</p>';


        for (
            var sicons = 0;
            sicons < aObj.subTitleIcons.length;
            sicons++
        ) {

            htmlStmt += '<img src="' +
                aObj.subTitleIcons[sicons] +
                '"/>';
        }


        htmlStmt += '<br>';

        htmlStmt += '<p class="subTitleTextRight">' +
            aObj.subTitleTextRight +
            '</p>';


        htmlStmt += '</div>';

        htmlStmt += '</div>';

        htmlStmt += '</div>';

        htmlStmt += '</div>';



        // =====================================================
        // CONTENT
        // =====================================================

        htmlStmt += '<div class="options cont_ht_sf mx-auto">';

        htmlStmt += '<div class="all_cont">';

        htmlStmt += '<div class="group_elm">';



        // =====================================================
        // QUESTIONS
        // =====================================================

        for (var q = 0; q < numOfQuestions; q++) {

            currQueNum++;

            var tpOb = aObj.questions[q];


            htmlStmt += '<div class="que" ';
            htmlStmt += 'id="que_' + currQueNum + '" ';
            htmlStmt += 'data-qno="' + currQueNum + '">';



            // question if exists
            if (
                tpOb.question != undefined &&
                tpOb.question != ""
            ) {

                htmlStmt += '<div class="question">';
                htmlStmt += tpOb.question;
                htmlStmt += '</div>';
            }



            // =================================================
            // OPTIONS AREA
            // =================================================

            htmlStmt += '<div class="picks_grp">';



            // =================================================
            // LEFT COLUMN 1 - 3
            // =================================================

            htmlStmt += '<div class="options_column left_column">';


            for (
                var opt = 0;
                opt < 3 && opt < tpOb.options.length;
                opt++
            ) {

                htmlStmt += '<div ';
                htmlStmt += 'id="pick_' +
                    currQueNum +
                    '_' +
                    (opt + 1) +
                    '" ';

                htmlStmt += 'class="pick">';


                htmlStmt += '<div class="option_number">';
                htmlStmt += (opt + 1);
                htmlStmt += '</div>';


                htmlStmt += '<div class="txt">';
                htmlStmt += tpOb.options[opt].text;
                htmlStmt += '</div>';


                htmlStmt += '</div>';
            }


            htmlStmt += '</div>';



            // =================================================
            // CENTER IMAGE
            // =================================================

            if (
                aObj.images != undefined &&
                aObj.images.length > 0
            ) {

                htmlStmt += '<div class="img_container">';

                for (
                    var imgIndex = 0;
                    imgIndex < aObj.images.length;
                    imgIndex++
                ) {

                    htmlStmt += '<img src="' +
                        aObj.images[imgIndex] +
                        '">';
                }

                htmlStmt += '</div>';
            }



            // =================================================
            // RIGHT COLUMN 4 - 6
            // =================================================

            htmlStmt += '<div class="options_column right_column">';


            for (
                var opt = 3;
                opt < tpOb.options.length;
                opt++
            ) {

                htmlStmt += '<div ';
                htmlStmt += 'id="pick_' +
                    currQueNum +
                    '_' +
                    (opt + 1) +
                    '" ';

                htmlStmt += 'class="pick">';


                htmlStmt += '<div class="option_number">';
                htmlStmt += (opt + 1);
                htmlStmt += '</div>';


                htmlStmt += '<div class="txt">';
                htmlStmt += tpOb.options[opt].text;
                htmlStmt += '</div>';


                htmlStmt += '</div>';
            }


            htmlStmt += '</div>';



            htmlStmt += '</div>';
            // picks_grp



            // =================================================
            // TICK / CROSS
            // =================================================

            htmlStmt += '<div class="icon_wrap">';

            htmlStmt += '<div class="tick">';
            htmlStmt += '<img src="../images/icons/check_btn.png">';
            htmlStmt += '</div>';

            htmlStmt += '<div class="cross">';
            htmlStmt += '<img src="../images/icons/cross_btn.png">';
            htmlStmt += '</div>';

            htmlStmt += '</div>';



            htmlStmt += '</div>';
            // que

        }



        htmlStmt += '</div>';
        // group_elm

        htmlStmt += '</div>';
        // all_cont

        htmlStmt += '</div>';
        // options
    }


    console.log('htmlStmt >> MCQ Built');

    $(".activity_area").append(htmlStmt);

    setLoadedStatus(
        getCurrFileOrDirectory('file')
    );
}


function nextChar(c) {
    return String.fromCharCode(
        c.charCodeAt(0) + 1
    );
}