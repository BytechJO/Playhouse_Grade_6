function buildReadingHTML(aObj) {
    var slide = '';
    var slideHtml = "";

    slideHtml = "<div class='container content_wrap reading_container'>";

    slideHtml += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1"><a href=""><img src="../images/icons/back_btn.png"></a></div>';
    slideHtml += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1"><a href=""><img src="../images/icons/next_btn.png"></a></div>';

    slideHtml += '<div class="act_head_group justify-content-center">';

    for (var slideIndex = 0; slideIndex < aObj.slides.length; slideIndex++) {
        slide = aObj.slides[slideIndex];

        slideHtml += "<div class='image_container " + slide.parent_class_name + "'>";
        slideHtml += "</div>";
    }

    slideHtml += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';

        slideHtml += '<div class="q-type-img-container">';

            slideHtml += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

            if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
                slideHtml += '<img class="mainTitleIcon" src="' + aObj.mainTitleIcon + '" style="right: ' + aObj.mainTitleIconPos.right + ';">';
            }

        slideHtml += '</div>';

    slideHtml += '</div>';

    slideHtml += '<div class="activityHeading">';

        slideHtml += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';

            slideHtml += "<div class='page_sub_title'>";

                slideHtml += "<p> " + aObj.subTitleTextLeft + " </p>";

                for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
                    slideHtml += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
                }

                slideHtml += "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";

            slideHtml += "</div>";

        slideHtml += '</div>';

    slideHtml += '</div>';

    slideHtml += '</div>';

    // =======================================================================
    // all-Cont
    // =======================================================================

    slideHtml += "<div class='options cont_ht_sf mx-auto'>";

        slideHtml += "<div class='all_cont d-flex justify-content-center align-items-center'>";

            slideHtml += '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

                slideHtml += '<div class="group_white_border">';

                    slideHtml += '<div class="header_cam"></div>';

                    slideHtml += '<div class="header_bar">';

                        slideHtml += '<div class="icons">';

                            slideHtml += '<div class="icons_left">';

                                slideHtml += '<i class="icon fa fa-reply"></i>';
                                slideHtml += '<i class="icon fa fa-home"></i>';
                                slideHtml += '<i class="icon fa fa-clone"></i>';

                            slideHtml += '</div>';

                            slideHtml += '<div class="icons_right">';

                                slideHtml += '<i class="icon fa fa-paper-plane"></i>';
                                slideHtml += '<i class="icon fa fa-envelope"></i>';
                                slideHtml += '<i class="icon battery fa fa-battery-half"></i>';
                                slideHtml += '<i class="icon fa fa-signal"></i>';

                            slideHtml += '</div>';

                        slideHtml += '</div>';

                    slideHtml += '</div>';

                    if (
                        typeof aObj !== undefined &&
                        aObj.slides.length != 0 &&
                        aObj != null
                    ) {

                        for (var slideIndex = 0; slideIndex < aObj.slides.length; slideIndex++) {

                            slide = aObj.slides[slideIndex];

                            slideHtml += '<div class="title">' + slide.title + '</div>';

                            slideHtml += '<div id="carouselContainer" class="carousel slide" data-interval="false">';

                                slideHtml += '<div class="carousel-inner">';

                                    for (
                                        var textIndex = 0;
                                        textIndex < slide.array_text.length;
                                        textIndex++
                                    ) {

                                        let isActive = textIndex == 0 ? "active" : "";

                                        let currentItem = slide.array_text[textIndex];

                                        let hasImage =
                                            typeof currentItem === "object" &&
                                            currentItem.image != undefined &&
                                            currentItem.image != null &&
                                            currentItem.image != "";

                                        let currentText =
                                            typeof currentItem === "object"
                                                ? currentItem.text
                                                : currentItem;

                                        slideHtml += '<div class="carousel-item ' + isActive + '">';

                                            slideHtml +=
                                                "<div class='slide-container " +
                                                (hasImage ? "has-image" : "no-image") +
                                                "'>";

                                                slideHtml += '<div class="slide-text">';

                                                    slideHtml += currentText;

                                                slideHtml += '</div>';

                                                if (hasImage) {

                                                    slideHtml += '<div class="slide-image">';

                                                        slideHtml +=
                                                            '<img src="' +
                                                            currentItem.image +
                                                            '" alt="">';

                                                    slideHtml += '</div>';
                                                }

                                            slideHtml += "</div>";

                                        slideHtml += '</div>';
                                    }

                                slideHtml += '</div>';

                                slideHtml += '<a class="carousel-control-prev" href="#carouselContainer" role="button" data-slide="prev">';

                                    slideHtml += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';

                                    slideHtml += '<span class="sr-only">Previous</span>';

                                slideHtml += '</a>';

                                slideHtml += '<a class="carousel-control-next" href="#carouselContainer" role="button" data-slide="next">';

                                    slideHtml += '<span class="carousel-control-next-icon" aria-hidden="true"></span>';

                                    slideHtml += '<span class="sr-only">Next</span>';

                                slideHtml += '</a>';

                            slideHtml += '</div>';
                        }
                    }

                    slideHtml += '<div class="home_Btn" onclick="returnFirstSlide()"></div>';

                slideHtml += '</div>';

            slideHtml += '</div>';

        slideHtml += "</div>";

    slideHtml += '</div>';

    slideHtml += '</div>';

    $(".mainContent").append(slideHtml);
    $(".activity_area").append(slideHtml);

    shakeImage();

    setLoadedStatus(getCurrFileOrDirectory('file'));
}

function findTimeRange(timeToCheck, targetTime) {
    for (let i = 0; i < targetTime.length; i++) {
        let [startTime, endTime] = targetTime[i];

        if (timeToCheck >= startTime && timeToCheck <= endTime) {
            return i;
        }
    }
}

function returnFirstSlide() {
    $('.carousel').carousel(0);
}

function shakeImage() {

    $(".shakingImage").css("width", "400px");

    setTimeout(function () {

        $(".shakingImage").css("width", "420px");

        setTimeout(function () {

            $(".shakingImage").css("width", "400px");

            setTimeout(shakeImage, 600);

        }, 600);

    }, 600);
}