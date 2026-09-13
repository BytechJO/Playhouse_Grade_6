var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(0, 183, 206)",
  type: "text",
  playListData: [],
};

var first_conditional_data = {
  mainTitle: "../images/pages/sb-icons/gramprac_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/P119/G_GRAMMAR_PRACTICE.mp3",
  subTitleTextLeft: "<span class='title-order'>1</span> <b>You do it.</b>",

  subTitleTextRight:
    "Read these first conditional sentences. If the sentence is correct, put a <span class='fc_red_check'>✓</span> next to it.<br>If it’s incorrect, fix it and rewrite it on the line.",

  subTitleIcons: [],

  subTitleAudio: "../audios/new/p119doit.mp3",
  sideImage: "../images/pages/activities/11.jpg",
  questions: [
    // =====================================================
    // 1 - CORRECT
    // =====================================================

    {
      number: 1,

      sentence: "If I go out tonight, I will go to the cinema.",

      type: "correct",

      answer: "",
    },

    // =====================================================
    // 2 - INCORRECT
    // =====================================================

    {
      number: 2,

      sentence: "If I win a million euros, I will buy the moon.",

      type: "correct",

      answer: "",
    },

    // =====================================================
    // 3 - INCORRECT
    // =====================================================

    {
      number: 3,

      sentence: "They will went to the party if they are invited.",

      type: "rewrite",

      answer: "They will go to the party if they are invited.",
    },

    // =====================================================
    // 4 - CORRECT
    // =====================================================

    {
      number: 4,

      sentence:
        "I will spend a few hours on my laptop if I finish my homework.",

      type: "correct",

      answer: "",
    },
  ],
};
