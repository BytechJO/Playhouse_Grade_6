function validateActivity() {
  var activity_type = jQuery(".activity_container").data("activity_type");

  if (typeof activity_type == "undefined") {
    return;
  }

  var err = 0;
  var filledCount = 0;

  jQuery("." + activity_type + "_activity .activity_result").remove();

  jQuery("." + activity_type + '_activity input[type="text"]').each(
    function (k, v) {
      var input = jQuery(this);
      var value = jQuery.trim(input.val());
      var category = input.data("category");

      // ==========================================
      // الخانات الفاضية لا نفحصها
      // ==========================================
      if (value === "") {
        return;
      }

      filledCount++;

      var correctAnswers = _activity_json.answerGroups[category] || [];

      // ==========================================
      // فحص إذا الكلمة موجودة في التصنيف الصحيح
      // ==========================================
      if (correctAnswers.indexOf(value) !== -1) {
        jQuery(
          '<span class="activity_result">' +
            '<img src="../images/icons/check_btn.png" />' +
            "</span>",
        ).insertAfter(input);
      } else {
        jQuery(
          '<span class="activity_result">' +
            '<img src="../images/icons/cross_btn.png" />' +
            "</span>",
        ).insertAfter(input);

        err++;
      }
    },
  );

  // ==========================================
  // لازم الطالب يستخدم كل الـ24 كلمة
  // ==========================================
  if (filledCount < _activity_json.options.length) {
    err++;
  }

  if (err > 0) {
    tryagain();
  } else {
    goodjob();
  }
}
