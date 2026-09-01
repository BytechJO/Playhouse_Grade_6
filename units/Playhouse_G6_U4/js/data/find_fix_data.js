var stereo_data = {
  audio: "",

  exist: false,

  bgColor_rgb: "rgb(0, 183, 206)",

  type: "text",

  playListData: [],
};

var find_fix_data = {
  mainTitle: "../images/pages/sb-icons/language-building.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleIconPos: { right: "60px" },
  mainTitleAudio: "../audios/p37/LANGUAGE_BUILDING.mp3",
  subTitleTextLeft: "<span class='title-order'>3</span> Find it and fix it!",
  subTitleTextRight:
    "Look at each picture and then look at its sentence. Underline the adjective that is wrong and rewrite the sentence with a better adjective.",
  subTitleIcons: ["../images/pages/sb-icons/conv_2_icon.png"],
  subTitleAudio: "../audios/new/p37find.mp3",

  questions: [
    // =================================================
    // 1
    // =================================================

    {
      image: "../images/pages/activities/37-img-1.png",

      sentence: "They checked in seven bags.",

      wrongWord: "seven",

      answers: ["They checked in six bags."],
    },

    // =================================================
    // 2
    // =================================================

    {
      image: "../images/pages/activities/37-img-2.png",

      sentence: "The small aeroplane was on its way to Brazil.",

      wrongWord: "small",

      answers: [
        "The large aeroplane was on its way to Brazil.",

        "The big aeroplane was on its way to Brazil.",
      ],
    },

    // =================================================
    // 3
    // =================================================

    {
      image: "../images/pages/activities/37-img-3.png",

      sentence: "My mum’s sandwich is sharp.",

      wrongWord: "sharp",

      answers: [
        "My mum’s sandwich is delicious.",

        "My mum’s sandwich is tasty.",

        "My mum’s sandwich is yummy.",

        "My mum’s sandwich is good.",
      ],
    },

    // =================================================
    // 4
    // =================================================

    {
      image: "../images/pages/activities/37-img-4.png",

      sentence: "Sharon has got a blue horse on her farm.",

      wrongWord: "blue",

      answers: [
        "Sharon has got a brown horse on her farm.",

        "Sharon has got a dark brown horse on her farm.",
      ],
    },
  ],
};
