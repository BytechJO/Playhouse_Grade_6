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
  numinrow: [[1], [1], [1], [1], [1]],
  mainTitle: "../images/pages/sb-icons/conv_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/conv_main_title_icon.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/p33/CONVERSATION.mp3",
  subTitleTextLeft: '<span class="title-order">2</span> Answer it!',
  subTitleTextRight: "Answer the questions about the conversation.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p33answer.mp3",
  image: "",
  imageposition: "back", // "front" (or) "back"
  numbering: "number", // "alphabet" (or) "number"
  numberstartfrom: 1,
  options: [],
  parentClassName: "",
  questions: [
    {
      singleword: false,
      text: "Where is the family travelling to? [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["Estonia"],

      alternateanswer: [
        [
          "to Estonia",
          "They are travelling to Estonia",
          "They are traveling to Estonia",
          "The family is travelling to Estonia",
          "The family is traveling to Estonia",
          "They are going to Estonia",
          "The family is going to Estonia",
        ],
      ],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "What time does their flight leave? [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["2:15"],

      alternateanswer: [
        [
          "2.15",
          "2 15",
          "2:15 pm",
          "2:15 p.m.",
          "at 2:15",
          "at 2.15",
          "The flight leaves at 2:15",
          "Their flight leaves at 2:15",
          "It leaves at 2:15",
        ],
      ],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },
  ],
};
