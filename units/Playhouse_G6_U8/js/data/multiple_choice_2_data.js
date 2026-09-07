var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(0, 183, 206)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/demo.mp3",
    },
    { url: "" },
    { url: "" },
    { url: "" },
  ],
};

var mcq_data = {
  layout: 1,
  numinrow: [[1]],

  mainTitle: "../images/pages/sb-icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/p70/GRAMMAR.mp3",

  subTitleTextLeft: '<span class="title-order">2</span> Circle it!',

  subTitleTextRight:
    "Read the sentences and circle the ones written in the present perfect continuous tense.",

  subTitleIcons: [],
  subTitleAudio: "../audios/new/p70circle.mp3",

  select: "multiple",
  shape: "roundrect",
  bgcolor: "none",

  numbering: "none",
  numberstartfrom: 1,

  numberofcolumns: 1,

  images: ["../images/pages/activities/1-img-1.png"],

  questions: [
    {
      question: "",
      image: "",

      // 1, 3, 5 are present perfect continuous
      answer: [1, 3, 5],

      audio: "no",
      audioenable: "default",

      options: [
        {
          text: "Don has been waiting a long time.",
          image: "",
          audio: "no",
          audioenable: "default",
        },

        {
          text: "Teresa skydives because she is a daredevil.",
          image: "",
          audio: "no",
          audioenable: "default",
        },

        {
          text: "Emily has been going on adventures with her father.",
          image: "",
          audio: "no",
          audioenable: "default",
        },

        {
          text: "Have they done their homework?",
          image: "",
          audio: "no",
          audioenable: "default",
        },

        {
          text: "She has been parachuting since she was a kid.",
          image: "",
          audio: "no",
          audioenable: "default",
        },

        {
          text: "It hasn’t rained this week.",
          image: "",
          audio: "no",
          audioenable: "default",
        },
      ],
    },
  ],
};
