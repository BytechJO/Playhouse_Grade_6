function initActivity(activity) {
  // =========================================================
  // OPTIONS
  // =========================================================
  drag_drop_options = '<div class="drag_drop_options sticky-top center_item">';

  jQuery.each(activity.options, function (key, value) {
    drag_drop_options +=
      '<div class="draggable_div" ' +
      'data-value="' +
      value +
      '" ' +
      'style="background-color: transparent;">' +
      value +
      "</div>";
  });

  drag_drop_options += "</div>";

  // =========================================================
  // QUESTIONS
  // =========================================================
  drag_drop_questions = '<div class="drag_drop_questions center_item"><ul>';

  jQuery.each(activity.questions, function (key, values) {
    drag_drop_questions += '<li><ul class="d-flex flex-wrap">';

    if (typeof values == "string") {
      var has_single_text = "";

      if ((values[0] == "_") == true) {
        has_single_text = "has_single_text";
      }

      drag_drop_questions +=
        '<li class="' +
        has_single_text +
        '">' +
        '<div class="droppable_label">' +
        values.replace(
          /___/g,
          '<input readonly type="text" class="droppable_div" />' +
            '</div><div class="droppable_label">',
        ) +
        "</div>" +
        "</li>";
    } else {
      jQuery.each(values, function (k, v) {
        var v = v + "";

        drag_drop_questions +=
          '<li class="drag_drop_multiple" style="margin: 0px 20px">' +
          v.replace(
            "___",
            ' <input readonly type="text" class="droppable_div" />',
          ) +
          "</li>";
      });
    }

    drag_drop_questions += "</ul></li>";
  });

  drag_drop_questions += "</ul></div>";

  // =========================================================
  // BUILD HTML
  // =========================================================
  var html = "";

  html += "<div>";

  html += drag_drop_options + drag_drop_questions;

  // =========================================================
  // BACKGROUND IMAGE
  // =========================================================
  if (
    typeof activity.background_image != "undefined" &&
    activity.background_image != ""
  ) {
    html += '<div class="image_container">';
    html +=
      '<img src="../images/pages/activities/' +
      activity.background_image +
      '" />';
    html += "</div>";
  }

  // =========================================================
  // IMAGE
  // =========================================================
  if (activity.image != undefined && activity.image != "") {
    html += '<div class="image_container">';
    html += '<img src="' + activity.image + '" />';
    html += "</div>";
  }

  html += "</div>";

  // =========================================================
  // WRITE HTML
  // =========================================================
  writeHtml(activity, html);

  setDefaultAnswerDragDrop(activity);

  // =========================================================
  // MOBILE
  // =========================================================
  if (window.outerWidth <= 600) {
    // jQuery('.drag_drop_options').css(
    // 	'top',
    // 	(jQuery('.activity-heading').offset().top +
    // 	jQuery('.activity-heading').height()) + 20
    // );
  }

  // =========================================================
  // FUNCTION: MAKE OPTION DRAGGABLE
  // =========================================================
  function makeDraggable(element) {
    jQuery(element).draggable({
      container: jQuery(".activity-content"),

      revert: true,

      placeholder: true,

      // أي input يظل droppable
      droptarget: ".drag_drop_questions input",

      drop: function (evt, droptarget) {
        var $dragged = jQuery(this);

        var $target = jQuery(droptarget);

        // =============================================
        // NEW VALUE
        // =============================================
        var newValue = $dragged.attr("data-value");

        if (newValue == undefined || newValue == null || newValue == "") {
          newValue = $dragged.text().trim();
        }

        // =============================================
        // OLD VALUE
        // =============================================
        var oldValue = $target.val().trim();

        // =============================================
        // إذا الفراغ فيه كلمة من قبل
        // رجع القديمة للـ options
        // =============================================
        if (oldValue !== "") {
          var $oldOption = jQuery(
            '<div class="draggable_div" ' +
              'data-value="' +
              oldValue +
              '" ' +
              'style="background-color: transparent;">' +
              oldValue +
              "</div>",
          );

          jQuery(".drag_drop_options").append($oldOption);

          // خلي القديمة draggable من جديد
          makeDraggable($oldOption);
        }

        // =============================================
        // ضع الكلمة الجديدة
        // =============================================
        $target.val(newValue);

        // خلي الفراغ يظل droppable
        $target.addClass("droppable_div");

        // =============================================
        // احذف الكلمة الجديدة من options
        // =============================================
        $dragged.remove();

        // =============================================
        // CHECK DRAG END
        // =============================================
        detectDragend();
      },
    });
  }

  // =========================================================
  // INITIAL DRAGGABLE OPTIONS
  // =========================================================
  jQuery(".drag_drop_options div.draggable_div").each(function () {
    makeDraggable(this);
  });

  // =========================================================
  // CLICK ON FILLED INPUT
  // RETURN WORD TO OPTIONS
  // =========================================================
  jQuery(".drag_drop_questions")
    .off("click.returnWord")
    .on("click.returnWord", "input", function () {
      var $input = jQuery(this);

      var value = $input.val().trim();

      // إذا فاضي ما تعمل إشي
      if (value === "") {
        return;
      }

      // =============================================
      // رجع الكلمة للخيارات
      // =============================================
      var $option = jQuery(
        '<div class="draggable_div" ' +
          'data-value="' +
          value +
          '" ' +
          'style="background-color: transparent;">' +
          value +
          "</div>",
      );

      jQuery(".drag_drop_options").append($option);

      // =============================================
      // خلي الكلمة draggable من جديد
      // =============================================
      makeDraggable($option);

      // =============================================
      // فضّي الفراغ
      // =============================================
      $input.val("");

      $input.addClass("droppable_div");

      // =============================================
      // تحديث حالة النشاط
      // =============================================
      detectDragend();
    });

  // =========================================================
  // OPTIONAL SCROLL CODE
  // =========================================================

  // jQuery('.content_wrap').scroll(function(){
  // 	console.log(jQuery(this).scrollTop());

  // 	if(jQuery(this).scrollTop() > 72){

  // 		jQuery('.drag_drop_options')
  // 			.addClass('drag_drop_options_fixed');

  // 	} else {

  // 		jQuery('.drag_drop_options')
  // 			.removeClass('drag_drop_options_fixed');
  // 	}

  // });

  // disableBtns();
}
