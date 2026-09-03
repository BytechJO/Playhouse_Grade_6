var _templateData = {};
var _templatePath = "";
var _assetsPath = "./images/icons/";

function buildHtmlTitle(aObj) {
  if (!aObj || typeof aObj !== "object") {
    return;
  }

  if (
    typeof aObj.grade !== "undefined" &&
    aObj.grade != "" &&
    typeof aObj.unit !== "undefined" &&
    aObj.unit != ""
  ) {
    $("head").find("title").html("");
    $("head")
      .find("title")
      .html(aObj.grade + " - " + aObj.unit);
  }
}

/* =========================================================
   HEADER
========================================================= */

function buildHeader(aObj) {
  if (!aObj || typeof aObj !== "object") {
    console.warn("buildHeader: header data is missing");
    return;
  }

  var fStmt = "";

  if (typeof aObj.bgcolor !== "undefined" && aObj.bgcolor != null) {
    $("header").css("background", aObj.bgcolor);
  } else {
    $("header").css("background-color", "#cccccc");
  }

  fStmt += "<div class='container header_wrap'>";
  fStmt += "<div class='d-flex justify-content-between header_wrap'>";

  fStmt += "<div class='col-1 col-xs-1 col-md-3'>";

  /* Unit Icon */
  if (
    typeof aObj.icon !== "undefined" &&
    aObj.icon != null &&
    aObj.icon != ""
  ) {
    fStmt += "<div class='unitIcon my-auto'>";

    fStmt += "<img src='" + _templatePath + aObj.icon + "'>";

    fStmt += "</div>";
  }

  fStmt += "</div>";

  /* =======================================================
     TITLE
  ======================================================= */

  if (aObj.title && typeof aObj.title === "object" && aObj.title.text != null) {
    fStmt +=
      "<div class='unitTitle d-flex align-items-center justify-content-center mx-2'>";

    /* With Audio */
    if (
      typeof aObj.audio !== "undefined" &&
      aObj.audio != null &&
      aObj.audio != ""
    ) {
      fStmt +=
        "<div class='audioIcon off my-auto' " +
        "data-audio='" +
        _templatePath +
        aObj.audio +
        "'>";

      fStmt +=
        "<div class='unitTitleText' " +
        "rel='tooltip' " +
        "data-placement='bottom' " +
        "title='' " +
        "data-original-title='" +
        aObj.title.text +
        "'>" +
        aObj.title.text +
        "</div>";

      fStmt += "</div>";
    } else {

    /* Without Audio */
      fStmt +=
        "<div class='unitTitleText' " +
        "rel='tooltip' " +
        "data-placement='bottom' " +
        "title='' " +
        "data-original-title='" +
        aObj.title.text +
        "'>" +
        aObj.title.text +
        "</div>";
    }

    fStmt += "</div>";
  }

  /* =======================================================
     FULL SCREEN
  ======================================================= */

  if (isMobile()) {
    fStmt += "<div class='full_screen hideInSmall my-auto'>";

    fStmt += "<img src='" + _templatePath + _assetsPath + "fullscreen.png'>";

    fStmt += "</div>";
  } else {
    fStmt += "<div class='full_screen my-auto'>";

    fStmt += "<img src='" + _templatePath + _assetsPath + "fullscreen.png'>";

    fStmt += "</div>";
  }

  fStmt += "</div>";
  fStmt += "</div>";
  fStmt += "</div>";

  $("header").append(fStmt);

  /* =======================================================
     TITLE STYLE
  ======================================================= */

  if (aObj.title && typeof aObj.title === "object") {
    var fCss = ".unitTitle {";

    $.each(aObj.title, function (key, value) {
      if (key != "text") {
        fCss += key + ": " + value + ";";
      }
    });

    fCss += "}";

    $("#ui_style").append(fCss);
  }
}

/* =========================================================
   MENU
========================================================= */

function showSlideDown() {
  $(".menu-content").slideToggle(1000);
}

/* =========================================================
   MOBILE CHECK
========================================================= */

function isMobile() {
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      navigator.userAgent,
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v)|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent,
    )
  );
}

/* =========================================================
   FOOTER
========================================================= */

function buildFooter(aObj) {
  if (!aObj || typeof aObj !== "object") {
    console.warn("buildFooter: footer data is missing");
    return;
  }

  var fStmt = "";

  if (typeof aObj.bgcolor !== "undefined" && aObj.bgcolor != null) {
    $("footer").css("background", aObj.bgcolor);
  } else {
    $("footer").css("background-color", "#cccccc");
  }

  /*
    إذا ما في buttons أو filetoload
    ما نبني Footer حتى ما يعمل Error
  */

  if (
    typeof aObj.buttons === "undefined" ||
    aObj.buttons == null ||
    typeof aObj.filetoload === "undefined" ||
    aObj.filetoload == null
  ) {
    return;
  }

  fStmt += "<div class='container footer_wrap'>";

  fStmt += "<div class='d-flex justify-content-between mt-2'>";

  fStmt +=
    "<div class='d-flex col-10 col-xs-10 col-md-10 flex-wrap align-items-center' style='gap:10px'>";

  /* =======================================================
     WORKBOOK MENU
  ======================================================= */

  fStmt +=
    '<div class="workBookPagesToggle hamburgerBtn" id="workBookPagesToggle">';

  fStmt += "<span></span>";
  fStmt += "<span></span>";
  fStmt += "<span></span>";

  fStmt += "</div>";

  /* =======================================================
     STUDENT BOOK
  ======================================================= */

  if (
    aObj.booksbutton &&
    aObj.booksbutton.studentbook &&
    aObj.booksbutton.studentbook.link &&
    aObj.booksbutton.studentbook.icon
  ) {
    fStmt += '<a href="' + aObj.booksbutton.studentbook.link + '">';

    fStmt += '<img src="' + aObj.booksbutton.studentbook.icon + '">';

    fStmt += "</a>";
  }

  /* =======================================================
     WORKBOOK
  ======================================================= */

  if (
    aObj.booksbutton &&
    aObj.booksbutton.workbook &&
    aObj.booksbutton.workbook.link &&
    aObj.booksbutton.workbook.icon
  ) {
    fStmt += '<a href="' + aObj.booksbutton.workbook.link + '">';

    fStmt += '<img src="' + aObj.booksbutton.workbook.icon + '">';

    fStmt += "</a>";
  }

  fStmt += "</div>";

  /* =======================================================
     HOME BUTTON
  ======================================================= */

  fStmt +=
    "<div class='d-flex col-2 col-xs-2 col-md-2 flex-wrap justify-content-end'>";

  fStmt += "<div class='homeBtn my-auto'>";

  fStmt += "<a href='../../../../../../main.html'>";

  fStmt +=
    "<img class='pt-1' src='" + _templatePath + _assetsPath + "home_btn.png'>";

  fStmt += "</a>";

  fStmt += "</div>";

  fStmt += "</div>";

  fStmt += "</div>";

  fStmt += "</div>";

  $("footer").append(fStmt);
}

/* =========================================================
   BODY
========================================================= */

function buildBody(aObj) {
  if (!aObj || typeof aObj !== "object") {
    return;
  }

  $.each(aObj, function (key, value) {
    $("body").css(key, value);
  });
}

/* =========================================================
   SUB FOOTER
========================================================= */

function buildSubFooter(aObj, aVal) {
  if (!aObj || typeof aObj !== "object") {
    console.warn("buildSubFooter: subfooter data is missing");
    return;
  }

  var thisFile = getCurrFileOrDirectory("file");

  if (thisFile) {
    thisFile = thisFile.toLowerCase();
  } else {
    thisFile = "";
  }

  var thisFolder = getCurrFileOrDirectory("directory");

  if (thisFolder) {
    thisFolder = thisFolder.toLowerCase();
  } else {
    thisFolder = "";
  }

  var thisisActivity = true;

  var fStmt = "";
  var fStmt1 = "";

  aVal = typeof aVal !== "undefined" && aVal != null ? aVal : "no";

  if (thisisActivity && thisFolder == "views") {
    var tsubBtn = "";

    fStmt += '<div class="d-flex justify-content-between sub_footer_buttons">';

    fStmt +=
      '<div class="col-12 p-0 d-flex justify-content-end align-self-end">';

    fStmt += '<div class="d-flex func_ctrls">';

    var functionButtons = Array.isArray(aObj.functionbuttons)
      ? aObj.functionbuttons
      : [];

    for (var ff = 0; ff < functionButtons.length; ff++) {
      tsubBtn = String(functionButtons[ff] || "").toLowerCase();

      if (!tsubBtn) {
        continue;
      }

      fStmt += '<div class="sub_footer_icon ' + tsubBtn + 'Btn">';

      fStmt +=
        '<img src="' +
        _templatePath +
        _assetsPath +
        (tsubBtn == "check" ? "click" : tsubBtn) +
        '_btn.png"/>';

      fStmt += "</div>";
    }

    fStmt += "</div>";
    fStmt += "</div>";
    fStmt += "</div>";

    $(".sub_footer_buttons_wrap").append(fStmt);

    $(".activityCtrlPanel").find(".ctrlIcon").append(fStmt1);
  }
}

/* =========================================================
   WORKBOOK SIDEBAR
========================================================= */

function buildWorkBookPagesSidebar() {
  if (
    typeof _activityData === "undefined" ||
    !_activityData ||
    !Array.isArray(_activityData.list)
  ) {
    console.warn("_activityData.list is not available");

    return;
  }

  /* يمنع تكرار القائمة */

  $("#workBookPagesSidebar").remove();

  $("#workBookPagesSidebarOverlay").remove();

  var currentFile = getCurrFileOrDirectory("file");

  currentFile = currentFile ? currentFile.toLowerCase() : "";

  var sStmt = '<div class="workBookPagesSidebar" id="workBookPagesSidebar">';

  sStmt += '<div class="workBookPagesSidebarHeader">';

  sStmt += "<span>Workbook Pages</span>";

  sStmt +=
    '<span class="workBookPagesSidebarClose" id="workBookPagesSidebarClose">&times;</span>';

  sStmt += "</div>";

  sStmt += '<div class="workBookPagesSidebarList">';

  $.each(_activityData.list, function (index, page) {
    if (page && page.build === "yes" && page.file) {
      var pageLabel = page.title || page.label || "Page " + (index + 1);

      var activeClass =
        String(page.file).toLowerCase() === currentFile ? "active" : "";

      sStmt +=
        '<a class="workBookPagesSidebarItem ' +
        activeClass +
        '" href="' +
        page.file +
        '">';

      sStmt += pageLabel;

      sStmt += "</a>";
    }
  });

  sStmt += "</div>";

  sStmt += "</div>";

  sStmt +=
    '<div class="workBookPagesSidebarOverlay" id="workBookPagesSidebarOverlay"></div>';

  $("body").append(sStmt);

  /* =======================================================
     OPEN
  ======================================================= */

  $(document)
    .off("click.workbookMenu", "#workBookPagesToggle")
    .on("click.workbookMenu", "#workBookPagesToggle", function (event) {
      event.preventDefault();

      event.stopPropagation();

      $("#workBookPagesSidebar").addClass("open");

      $("#workBookPagesSidebarOverlay").addClass("show");
    });

  /* =======================================================
     CLOSE
  ======================================================= */

  $(document)
    .off(
      "click.workbookMenuClose",
      "#workBookPagesSidebarClose, #workBookPagesSidebarOverlay",
    )
    .on(
      "click.workbookMenuClose",
      "#workBookPagesSidebarClose, #workBookPagesSidebarOverlay",
      function () {
        $("#workBookPagesSidebar").removeClass("open");

        $("#workBookPagesSidebarOverlay").removeClass("show");
      },
    );

  /* =======================================================
     ESCAPE
  ======================================================= */

  $(document)
    .off("keydown.workbookMenu")
    .on("keydown.workbookMenu", function (event) {
      if (event.key === "Escape") {
        $("#workBookPagesSidebar").removeClass("open");

        $("#workBookPagesSidebarOverlay").removeClass("show");
      }
    });
}

/* =========================================================
   CORE FRAME
========================================================= */

function buildCoreFrame(ob) {
  /*
    buildTemplatePath إذا مش موجودة
    ما نخلي الصفحة توقع
  */

  if (typeof buildTemplatePath === "function") {
    _templatePath = buildTemplatePath();
  } else {
    _templatePath = "";
  }

  /*
    إذا ob مش موجود
  */

  if (!ob) {
    console.warn("buildCoreFrame: object is missing");

    return;
  }

  /*
    أهم حماية:
    إذا _data مش موجود
    ما نحاول نقرأ منه title/header/footer...
  */

  if (typeof _data === "undefined" || !_data || typeof _data !== "object") {
    console.warn("buildCoreFrame: _data is missing");

    if (typeof setLoadedStatus === "function") {
      setLoadedStatus("coreFrame");
    }

    return;
  }

  _templateData = _data;

  /* Title */

  if (_templateData.title) {
    buildHtmlTitle(_templateData.title);
  }

  /* Header */

  if (_templateData.header) {
    buildHeader(_templateData.header);
  }

  /* Footer */

  if (_templateData.footer) {
    buildFooter(_templateData.footer);
  }

  /* Body */

  if (_templateData.body) {
    buildBody(_templateData.body);
  }

  /* Workbook Sidebar */

  if (
    typeof _activityData !== "undefined" &&
    _activityData &&
    Array.isArray(_activityData.list)
  ) {
    buildWorkBookPagesSidebar();
  }

  /* Loaded */

  if (typeof setLoadedStatus === "function") {
    setLoadedStatus("coreFrame");
  }
}
