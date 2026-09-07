var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(0, 183, 206)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/demo.mp3",
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
var fillin_data = {
  layout: 1,
  numinrow: [[1, 1, 1]],

  mainTitle: "../images/pages/sb-icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/p70/GRAMMAR.mp3",
  mainTitleIconPos: { right: "72px" },

  subTitleTextLeft: '<span class="title-order">3</span> Fix it!',
  subTitleTextRight:
    "There are three sentences in Exercise 2 that are not written in the present perfect continuous tense. Rewrite them in the present perfect continuous tense.",

  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  defaultAnswer: -1,
  image: "",

  helpPopup: {
    title: "Exercise 2",

    sentences: [
      "1. Don has been waiting a long time.",
      "2. Teresa skydives because she is a daredevil.",
      "3. Emily has been going on adventures with her father.",
      "4. Have they done their homework?",
      "5. She has been parachuting since she was a kid.",
      "6. It hasn’t rained this week.",
    ],

    image: "../images/pages/activities/1-img-1.png",
  },

  // الإجابات الثلاث الصحيحة - بأي ترتيب
  answers: [
    "Teresa has been skydiving because she is a daredevil.",
    "Have they been doing their homework?",
    "It hasn't been raining this week.",
  ],

  questions: [
    {
      textfront: "",
      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",
      answer: [],
      strictcase: "no",
      type: "text",
    },

    {
      textfront: "",
      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",
      answer: [],
      strictcase: "no",
      type: "text",
    },

    {
      textfront: "",
      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",
      answer: [],
      strictcase: "no",
      type: "text",
    },
  ],
};
