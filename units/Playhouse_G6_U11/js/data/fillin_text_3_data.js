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

  mainTitle: "../images/pages/sb-icons/gram_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",

  mainTitleAudio: "../audios/p98/GRAMMAR.mp3",

  mainTitleIconPos: {
    right: "80px",
  },

  subTitleTextLeft: '<span class="title-order">3</span> Finish it!',

  subTitleTextRight:
    "Fill in the conversation using simple past or present perfect for the verb in brackets.",

  subTitleIcons: [],

  subTitleAudio: "../audios/new/p98finish.mp3",

  image: "",

  images: ["../images/pages/activities/3-img-1.png"],

  imageposition: "front",

  numbering: "number",

  numberstartfrom: 1,

  options: [],

  questions: [
    // =========================================
    // 1
    // =========================================
    {
      singleword: false,

      text: "Sister: &nbsp; I want to work out. [_] (<span class='red_text'>you</span> / <span class='red_text'>work out</span>) today?",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["Have you worked out"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "",
    },

    // =========================================
    // 2
    // =========================================
    {
      singleword: false,

      text: "Brother: &nbsp; I [_] (<span class='red_text'>work out</span>) yesterday, but I [_] (<span class='red_text'>not exercise</span>) today.",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["worked out", "haven't exercised"],

      alternateanswer: [[], ["have not exercised", "havent exercised"]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "",
    },

    // =========================================
    // 3
    // =========================================
    {
      singleword: false,

      text: "Sister: &nbsp; I already [_] (<span class='red_text'>do</span>) my homework, so I have time.",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["have done"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "",
    },

    // =========================================
    // 4
    // =========================================
    {
      singleword: false,

      text: "Brother: &nbsp; I [_] (<span class='red_text'>do</span>) my homework earlier.",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["did"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "",
    },

    // =========================================
    // 5
    // =========================================
    {
      singleword: false,

      text: "Sister: &nbsp; [_] (<span class='red_text'>you</span> / <span class='red_text'>clean</span>) your room yet?",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["Have you cleaned"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "",
    },

    // =========================================
    // 6
    // =========================================
    {
      singleword: false,

      text: "Brother: &nbsp; Yes, I [_] (<span class='red_text'>clean</span>) it.",

      textEnd: "Sister: &nbsp; Good. Mum and Dad will be happy.",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["have cleaned"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "",
    },
  ],
};
