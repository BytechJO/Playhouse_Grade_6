var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(0, 183, 206)",
  type: "text",
  playListData: [],
};

var reported_tick_underline_data = {
  mainTitle: "../images/pages/sb-icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/P126/GRAMMAR.mp3",
  mainTitleIconPos: { right: "80px" },
  subTitleTextLeft: "<span class='title-order'>2</span> You do it!",
  subTitleTextRight:
    "Read each sentence and tick <span class='red'>✓</span> one that is reported speech. Then underline the reported speech verb.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p126doit.mp3",

  sideImage: "../images/pages/activities/reported_speech_boy.jpg",

  questions: [
    {
      number: 1,

      correctChoice: "a",

      correctVerb: "told",

      choices: [
        {
          key: "a",
          text: "Lilly told her mother that she was going to visit Jenny.",
        },

        {
          key: "b",
          text: "I'm going to visit Jenny, said Lilly.",
        },
      ],
    },

    {
      number: 2,

      correctChoice: "b",

      correctVerb: "said",

      choices: [
        {
          key: "a",
          text: "This package is for you.",
        },

        {
          key: "b",
          text: "She said that the package was for me.",
        },
      ],
    },

    {
      number: 3,

      correctChoice: "a",

      correctVerb: "asked",

      choices: [
        {
          key: "a",
          text: "She asked if Julie was sleeping.",
        },

        {
          key: "b",
          text: "Is Julie sleeping? she asked.",
        },
      ],
    },
  ],
};
