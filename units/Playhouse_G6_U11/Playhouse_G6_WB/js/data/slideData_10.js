var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p58/2.mp3",
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
  mainTitle: "../images/pages/sb-icons/writing.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: {
    right: "100px",
  },

  mainTitleAudio: "../audios/p58/WRITING.mp3",

  subTitleTextLeft:
    "<span class='blue_text'>2</span> " +
    "<b>You try it!</b> " +
    "Make a plan for yourself for something you need to get organised about. " +
    "Use one or two ‘stairs’ to organise your list. Using a different set of bullets " +
    "at each stair is helpful. You can use a separate sheet of paper or your notebook " +
    "if this form does not provide enough space.",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio:
    "../audios/P58/2_You_try_it!_Make_a_plan_for_yourself_for_something_you_need_to_get_organised_about_Use_one_or.mp3",

  slides: [
    {
      layout: "grid_columns",

      mainImage: [],

      /*
        أعطيناه class مختلفة
        حتى نتحكم بهذا السؤال لحاله
      */
      parent_class_name: "grid_with_border slide-read slide-try-it",

      group_styles: "",

      audio: ["", "", "", "", "", "", "", "", "", "", "", ""],

      word: [
        // 1
        "<div class='try_title'>" +
          "<b>Title:</b>" +
          "<input class='try_title_input' type='text' maxlength='100'>" +
          "</div>",

        // 2
        "<div class='try_step try_level_1'>" +
          "<span class='try_bullet bullet-circle'>•</span>" +
          "<input class='try_input' type='text'>" +
          "</div>",

        // 3
        "<div class='try_step try_level_2'>" +
          "<span class='try_bullet bullet-diamond'>◊</span>" +
          "<input class='try_input' type='text'>" +
          "</div>",

        // 4
        "<div class='try_step try_level_2'>" +
          "<span class='try_bullet bullet-diamond'>◊</span>" +
          "<input class='try_input' type='text'>" +
          "</div>",

        // 5
        "<div class='try_step try_level_2'>" +
          "<span class='try_bullet bullet-diamond'>◊</span>" +
          "<input class='try_input' type='text'>" +
          "</div>",

        // 6
        "<div class='try_step try_level_3'>" +
          "<span class='try_bullet bullet-star'>*</span>" +
          "<input class='try_input' type='text'>" +
          "</div>",

        // 7
        "<div class='try_step try_level_3'>" +
          "<span class='try_bullet bullet-star'>*</span>" +
          "<input class='try_input' type='text'>" +
          "</div>",

        // 8
        "<div class='try_step try_level_1'>" +
          "<span class='try_bullet bullet-circle'>•</span>" +
          "<input class='try_input' type='text'>" +
          "</div>",

        // 9
        "<div class='try_step try_level_1'>" +
          "<span class='try_bullet bullet-circle'>•</span>" +
          "<input class='try_input' type='text'>" +
          "</div>",

        // 10
        "<div class='try_step try_level_2'>" +
          "<span class='try_bullet bullet-diamond'>◊</span>" +
          "<input class='try_input' type='text'>" +
          "</div>",

        // 11
        "<div class='try_step try_level_2'>" +
          "<span class='try_bullet bullet-diamond'>◊</span>" +
          "<input class='try_input' type='text'>" +
          "</div>",

        // 12
        "<div class='try_step try_level_2'>" +
          "<span class='try_bullet bullet-diamond'>◊</span>" +
          "<input class='try_input' type='text'>" +
          "</div>",

        // 13
        "<div class='try_step try_level_3'>" +
          "<span class='try_bullet bullet-star'>*</span>" +
          "<input class='try_input' type='text'>" +
          "</div>",

        // 14
        "<div class='try_step try_level_3'>" +
          "<span class='try_bullet bullet-star'>*</span>" +
          "<input class='try_input' type='text'>" +
          "</div>",
      ],

      imagePlacePos: [
        { colWidth: [12], colData: [1] },

        { colWidth: [12], colData: [1] },

        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },

        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },

        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },

        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },

        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },
      ],
    },
  ],
};
