function initActivity(activity) {
  var html = "";

  /*
	    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr;
}
	*/
  var classOption =
    activity.class === "grid" ? "grid-table" : "d-flex  align-items-center";
  var styleOption = activity.style === "table" ? "table" : "";
  var styleListOption = activity.style === "table" ? "grid-table-list" : "";
  var styleInputOption =
    activity.style === "table" ? "grid-table-list-input" : "";
  //audios/AnchorAudioPhrases-143.mp3
  html += `<div class="drag_drop_questions" style=" display: flex;flex-direction: column">`;
  html += `<table class="flex-row" style=" display: flex;flex-direction: row;flex-wrap:wrap; justify-content: center">`;
  fieldIndex = 0;
  for (let x = 0; x < activity.numOfRow; x++) {
    html += `<tr>`;
    for (let y = 0; y < activity.numOfCol; y++) {
      html += `<td>`;
      // jQuery.each(activity.questions, function(key, values){

      // 	if(typeof(values)=="string"){

      var category = "";

      // أول مجموعة
      if (fieldIndex >= 3 && fieldIndex <= 17) {
        var col = fieldIndex % 3;

        if (col === 0) {
          category = "braille";
        } else if (col === 1) {
          category = "satellite";
        } else if (col === 2) {
          category = "gestures";
        }
      }

      // ثاني مجموعة
      else if (fieldIndex >= 21 && fieldIndex <= 35) {
        var col = fieldIndex % 3;

        if (col === 0) {
          category = "chinese";
        } else if (col === 1) {
          category = "esperanto";
        } else if (col === 2) {
          category = "sports";
        }
      }

      var inputHtml = ` <input readonly
        type="text"
        data-category="${category}"
        class="droppable_div ${styleInputOption}"
      />`;

      html += `
    <div class="flex-cell"
         style="flex:1;border:none;text-align:center;min-width:25%;">
        ${activity.questions[fieldIndex].replace(/___/g, inputHtml)}
    </div>
`;
      // 		} else {
      // 			jQuery.each(values, function(k, v){

      // 				var v = v+"";
      // 				html += '<li>'+ v.replace('___', ' <input readonly type="text" class="droppable_div" />') +'</li>';

      // 			});
      // 		}
      // 	});
      fieldIndex++;
      html += `</td>`;
    }
    html += `</tr>`;
  }

  html += "</table></div>";

  html += "<div>";
  html += '<div class="drag_drop_options">';
  jQuery.each(activity.options, function (key, value) {
    html +=
      '<div class="draggable_div" data-value="' +
      value +
      '">' +
      value +
      "</div>";
  });
  html += "</div>";

  html += "</div>";
  writeHtml(activity, html);
  setDefaultAnswerDragDrop(activity);

  //for mobile view
  if (window.outerWidth <= 600) {
    jQuery(".drag_drop_options").css(
      "top",
      jQuery(".activity-heading").offset().top +
        jQuery(".activity-heading").height() +
        20,
    );
  }

  makeDraggable();

  jQuery(".drag_drop_questions").on(
    "click",
    "input.droppable_div",
    function () {
      var $input = jQuery(this);
      var value = jQuery.trim($input.val());

      if (value === "") {
        return;
      }

      addOptionBack(value);

      $input.val("");
      $input.removeAttr("data-value");

      $input.next(".activity_result").remove();

      makeDraggable();

      detectDragend();
    },
  );
}
function addOptionBack(value) {
  var exists = false;

  jQuery(".drag_drop_options .draggable_div").each(function () {
    if (jQuery.trim(jQuery(this).attr("data-value")) === jQuery.trim(value)) {
      exists = true;
    }
  });

  if (exists) {
    return;
  }

  var $option = jQuery(
    '<div class="draggable_div" data-value="' + value + '">' + value + "</div>",
  );

  jQuery(".drag_drop_options").append($option);
}
function makeDraggable() {
  var $items = jQuery(".drag_drop_options .draggable_div");

  $items.each(function () {
    var $item = jQuery(this);

    if ($item.hasClass("draggable")) {
      $item.draggable("destroy");
    }

    $item.draggable({
      container: jQuery(".activity-content"),
      revert: true,
      placeholder: true,
      droptarget: ".drag_drop_questions input.droppable_div",

      drop: function (evt, droptarget) {
        var $target = jQuery(droptarget);

        var newValue = jQuery(this).attr("data-value") || jQuery(this).text();

        var oldValue = jQuery.trim($target.val());

        // إذا الخانة فيها كلمة قديمة، رجعها للخيارات
        if (oldValue !== "") {
          addOptionBack(oldValue);
        }

        // حط الجديدة
        $target.val(newValue);
        $target.attr("data-value", newValue);

        // احذف الجديدة من options
        jQuery(this).remove();

        makeDraggable();

        detectDragend();
      },
    });
  });
}
