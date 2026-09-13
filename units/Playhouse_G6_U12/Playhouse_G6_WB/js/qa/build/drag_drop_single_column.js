function initActivity(activity) {
  // =====================================================
  // OPTIONS
  // =====================================================
  var drag_drop_options =
    '<div class="drag_drop_options sticky-top center_item">';

  jQuery.each(activity.options, function (key, value) {
    drag_drop_options +=
      '<div class="draggable_div" ' +
      'data-value="' +
      value +
      '" ' +
      'data-option-id="option_' +
      key +
      '" ' +
      'style="background-color: transparent;">' +
      value +
      "</div>";
  });

  drag_drop_options += "</div>";

  // =====================================================
  // QUESTIONS
  // =====================================================
  var drag_drop_questions =
    '<div class="drag_drop_questions center_item">' +
    '<ul class="d-flex flex-wrap">';

  jQuery.each(activity.questions, function (key, values) {
    drag_drop_questions += '<li><ul class="d-flex flex-wrap">';

    if (typeof values == "string") {
      var has_single_text = "";

      if (values[0] == "_") {
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
            "</div>" +
            '<div class="droppable_label">',
        ) +
        "</div>" +
        "</li>";
    } else {
      jQuery.each(values, function (k, v) {
        v = v + "";

        drag_drop_questions +=
          '<li class="drag_drop_multiple" style="margin:4px 20px">' +
          v.replace(
            "___",
            '<input readonly type="text" class="droppable_div" />',
          ) +
          "</li>";
      });
    }

    drag_drop_questions += "</ul></li>";
  });

  drag_drop_questions += "</ul></div>";

  // =====================================================
  // BUILD HTML
  // =====================================================
  var html = "";

  html += "<div>";

  html += drag_drop_options + drag_drop_questions;

  // =====================================================
  // BACKGROUND IMAGE
  // =====================================================
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

  // =====================================================
  // IMAGE
  // =====================================================
  if (activity.image != undefined && activity.image != "") {
    html += '<div class="image_container">';

    html += '<img src="' + activity.image + '" />';

    html += "</div>";
  }

  html += "</div>";

  writeHtml(activity, html);

  setDefaultAnswerDragDrop(activity);

  // =====================================================
  // DRAG
  // =====================================================
  jQuery(".drag_drop_options .draggable_div").draggable({
    container: jQuery(".activity-content"),

    revert: true,

    placeholder: true,

    droptarget: ".drag_drop_questions input.droppable_div",

    drop: function (evt, droptarget) {
      var $dragged = jQuery(this);

      var $target = jQuery(droptarget);

      var newValue = $dragged.attr("data-value");

      var newOptionId = $dragged.attr("data-option-id");

      // =================================================
      // IF INPUT ALREADY HAS WORD
      // RETURN OLD WORD
      // =================================================
      var oldOptionId = $target.attr("data-option-id");

      if (oldOptionId != undefined && oldOptionId != "") {
        jQuery(
          '.drag_drop_options .draggable_div[data-option-id="' +
            oldOptionId +
            '"]',
        ).show();
      }

      // =================================================
      // PUT NEW WORD
      // =================================================
      $target.val(newValue);

      $target.attr("data-option-id", newOptionId);

      // keep input droppable
      $target.addClass("droppable_div");

      // =================================================
      // HIDE USED WORD
      // =================================================
      $dragged.hide();

      // =================================================
      // ACTIVATE BUTTONS
      // =================================================
      detectDragend();
    },
  });

  // =====================================================
  // CLICK INPUT => RETURN WORD TO TOP
  // =====================================================
  jQuery(document)
    .off("click.dragDropReturn", ".drag_drop_questions input.droppable_div")
    .on(
      "click.dragDropReturn",
      ".drag_drop_questions input.droppable_div",

      function () {
        var $input = jQuery(this);

        var optionId = $input.attr("data-option-id");

        // if empty
        if (optionId == undefined || optionId == "") {
          return;
        }

        // =================================================
        // RETURN WORD
        // =================================================
        jQuery(
          '.drag_drop_options .draggable_div[data-option-id="' +
            optionId +
            '"]',
        ).show();

        // =================================================
        // CLEAR INPUT
        // =================================================
        $input.val("");

        $input.removeAttr("data-option-id");

        $input.addClass("droppable_div");

        detectDragend();
      },
    );
}
