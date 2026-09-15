function initActivity(activity) {
  var html = "";

  var classOption =
    activity.class === "grid" ? "grid-table" : "d-flex align-items-center";

  var styleOption = activity.style === "table" ? "table" : "";

  var styleListOption = activity.style === "table" ? "grid-table-list" : "";

  var styleInputOption =
    activity.style === "table" ? "grid-table-list-input" : "";

  // =========================================================
  // QUESTIONS
  // =========================================================

  html += `
        <div class="drag_drop_questions"
             style="display:flex; flex-direction:column;">
    `;

  html += `
        <table class="flex-row"
               style="
                    display:flex;
                    flex-direction:row;
                    flex-wrap:wrap;
                    justify-content:center;
               ">
    `;

  fieldIndex = 0;

  for (let x = 0; x < activity.numOfRow; x++) {
    html += `<tr>`;

    for (let y = 0; y < activity.numOfCol; y++) {
      html += `<td>`;

      html += `
                <div class="flex-cell"
                     style="
                        flex:1;
                        border:none;
                        text-align:center;
                        min-width:25%;
                     ">
            `;

      html += activity.questions[fieldIndex].replace(
        /___/g,
        `
                <input
                    readonly
                    type="text"
                    class="droppable_div ${styleInputOption}"
                />
                `,
      );

      html += `</div>`;

      fieldIndex++;

      html += `</td>`;
    }

    html += `</tr>`;
  }

  html += `</table>`;
  html += `</div>`;

  // =========================================================
  // OPTIONS
  // =========================================================

  html += `<div>`;

  html += `<div class="drag_drop_options">`;

  jQuery.each(activity.options, function (key, value) {
    html += `
            <div
                class="draggable_div"
                data-value="${value}"
                data-drag-id="drag_${key}"
            >
                ${value}
            </div>
        `;
  });

  html += `</div>`;
  html += `</div>`;

  // =========================================================
  // WRITE HTML
  // =========================================================

  writeHtml(activity, html);

  setDefaultAnswerDragDrop(activity);

  // =========================================================
  // MOBILE
  // =========================================================

  if (window.outerWidth <= 600) {
    jQuery(".drag_drop_options").css(
      "top",
      jQuery(".activity-heading").offset().top +
        jQuery(".activity-heading").height() +
        20,
    );
  }

  // =========================================================
  // DRAG
  // =========================================================

  jQuery(".drag_drop_options div.draggable_div").draggable({
    container: jQuery(".activity-content"),

    revert: true,

    placeholder: true,

    droptarget: ".drag_drop_questions input.droppable_div",

    // =====================================================
    // DROP
    // =====================================================

    drop: function (evt, droptarget) {
      var $dragItem = jQuery(this);

      var value = $dragItem.attr("data-value");

      var dragId = $dragItem.attr("data-drag-id");

      var $input = jQuery(droptarget);

      // حط الكلمة داخل الـ input
      $input.val(value);

      // احفظ مين هو العنصر الأصلي
      $input.attr("data-source-id", dragId);

      // input صار مستخدم
      $input.removeClass("droppable_div").addClass("filled_drop");

      // ===============================================
      // لا نحذف الكلمة
      // نخفيها فقط
      // ===============================================

      $dragItem.hide();

      detectDragend();
    },
  });

  // =========================================================
  // CLICK ON ANSWER
  // يرجع الكلمة لمكانها
  // =========================================================

  jQuery(document)
    .off("click.returnDragWord", ".drag_drop_questions input.filled_drop")
    .on(
      "click.returnDragWord",
      ".drag_drop_questions input.filled_drop",
      function () {
        var $input = jQuery(this);

        // العنصر الأصلي
        var sourceId = $input.attr("data-source-id");

        if (sourceId != undefined && sourceId != "") {
          // رجع الكلمة لمكانها الأصلي
          jQuery(
            ".drag_drop_options " + '[data-drag-id="' + sourceId + '"]',
          ).show();
        }

        // فضّي الـ input
        $input.val("");

        // امسح الربط
        $input.removeAttr("data-source-id");

        // خليه قابل للـ drop مرة ثانية
        $input.removeClass("filled_drop").addClass("droppable_div");

        detectDragend();
      },
    );
}
