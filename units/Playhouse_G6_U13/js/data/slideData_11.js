var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(0, 183, 206)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/P102/1.mp3",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
  ],
};
var reading_data = {
  mainTitle: "../images/pages/sb-icons/writing.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_3_icon.png",
  mainTitleIconPos: { right: "100px" },
  mainTitleAudio: "../audios/P122/WRITING.mp3",
  subTitleTextLeft: "<span class='title-order'>2</span> Write about it!",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/P122/2_Write_about_it!.mp3",
  slides: [
    {
      layout: "grid_columns",

      mainImage: [""],
      parent_class_name: "full_grid_with_background_image slide-11",
      group_styles: "",
      audio: [
        "../audios/P102/Pg6_2.1_Stella.mp3",
        "../audios/P102/dough.mp3",
        "../audios/P102/sauce.mp3",
        "../audios/P102/sprinkle.mp3",
        "../audios/P102/cheese.mp3",
        "../audios/P102/add.mp3",
        "../audios/P102/pepperoni.mp3",
        "../audios/P102/slice.mp3",
      ],
      word: [
        "<div class='top-text' style=''>Choose ONE topic and write some tips about it. Remember to do some research! You can use" +
          "the Reading section on page 120 as an example. Make sure you give your readers at least" +
          "four rules or tips about your topic." +
          "<div class='inner-text d-flex justify-content-between' style=''><p>• Holiday tips<br/>" +
          "&nbsp;&nbsp;&nbsp;for kids</p>" +
          "<p>• Internet safety<br/>" +
          "&nbsp;&nbsp;&nbsp;for kids</p>" +
          "<p>• Health tips<br/>" +
          "&nbsp;&nbsp;&nbsp;for kids</p>" +
          "<p>• Study tips<br/>" +
          "&nbsp;&nbsp;&nbsp;for kids</p></div></div>",

        '<div class="textarea-container"><textarea id="paper-textarea" rows="10" cols="50" maxlength="400"></textarea></div>',
      ],
      imagePlacePos: [
        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },
        //  {"colWidth": [12], "colData": [1] },
        //  {"colWidth": [12], "colData": [1] },
        //  {"colWidth": [12], "colData": [1] },
        //  {"colWidth": [12], "colData": [1] },
        //  {"colWidth": [12], "colData": [1] },
        //  {"colWidth": [12], "colData": [1] },
      ],
    },
  ],
};
