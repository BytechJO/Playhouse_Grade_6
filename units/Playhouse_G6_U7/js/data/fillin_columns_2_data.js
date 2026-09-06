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

var fillin_data = {
  layout: 1,

  // 4 questions
  numinrow: [[1, 1, 1, 1]],

  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/p64/READING.mp3",
  mainTitleIconPos: { right: "92px" },

  subTitleTextLeft: '<span class="title-order">2</span> Answer it!',
  subTitleTextRight: "Answer the following questions about the blog.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p64answer.mp3",

  defaultAnswer: -1,
  image: "",
  numbering: "",

  questions: [
    // ==================================================
    // Question 1
    // ==================================================
    {
      textfront: "What is the name of Guy's circus?",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["Cirque du Soleil"],

      alternateanswer: [
        "The name of Guy's circus is Cirque du Soleil",
        "Guy's circus is Cirque du Soleil",
        "His circus is Cirque du Soleil",
        "It is Cirque du Soleil",
        "It's Cirque du Soleil",
      ],

      strictcase: "no",
      type: "text",
    },

    // ==================================================
    // Question 2
    // ==================================================
    {
      textfront: "Where did Guy Laliberté grow up?",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["Canada"],

      alternateanswer: [
        "He grew up in Canada",
        "Guy grew up in Canada",
        "Guy Laliberté grew up in Canada",
        "He grew up in Canada.",
        "Guy Laliberté grew up in Canada.",
      ],

      strictcase: "no",
      type: "text",
    },

    // ==================================================
    // Question 3
    // ==================================================
    {
      textfront: "What does the One Drop Foundation do?",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["It helps people all over the world"],

      alternateanswer: [
        "The One Drop Foundation helps people all over the world",
        "It helps people get water",
        "It helps people to get water",
        "The One Drop Foundation helps people get water",
        "The One Drop Foundation helps people to get water",
        "It gives people the water they need",
        "The One Drop Foundation gives people the water they need",
        "It helps people who need water",
        "It helps people around the world get water",
        "It helps many people all over the world",
      ],

      strictcase: "no",
      type: "text",
    },

    // ==================================================
    // Question 4 - Opinion / STAR
    // ==================================================
    {
      textfront:
        "What do you think Guy Laliberté is planning for next year? Write your idea and why.",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: [],
      alternateanswer: [],

      // open-ended question — don't validate
      ignorecheck: true,

      strictcase: "no",
      type: "text",
    },
  ],
};
