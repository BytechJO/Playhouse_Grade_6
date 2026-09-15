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
  mainTitleAudio: "../audios/P134/GRAMMAR.mp3",
  mainTitleIconPos: { right: "80px" },
  subTitleTextLeft: '<span class="title-order">3</span> Write it',
  subTitleTextRight:
    "Read each past perfect sentence. Then write what happened at the earlier time on the first line and write what happened at the later time on the second line.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p134write.mp3",
  image: "",
  imageposition: "front", // "front" (or) "back"
  numbering: "number", // "alphabet" (or) "number"
  numberstartfrom: 1,
  options: [],
  questions: [
    {
      example: true,

      singleword: false,
      textFront: "Janie had been unfriendly until she met Donna.",
      text: "earlier  [_] later [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["Janie had been unfriendly", "until she met Donna"],

      alternateanswer: [
        ["Janie had been unfriendly.", "Janie had been unfriendly "],
        ["until she met Donna.", "until she met Donna "],
      ],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },
    {
      singleword: false,
      textFront: "They had studied English before they moved to Canada.",
      text: "earlier  [_] later [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["They had studied English", "before they moved to Canada"],

      alternateanswer: [[], ["they moved to Canada"]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      textFront: "Ken had owned his car for six years before he sold it.",
      text: "earlier  [_] later [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Ken had owned his car for six years", "before he sold it"],
      alternateanswer: [[], ["he sold it"]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      textFront: "We enjoyed the film because we had read the book.",
      text: "earlier  [_] later [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["because we had read the book", "We enjoyed the film"],

      alternateanswer: [["we had read the book"], []],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      textFront: "I lost the key that he had given me.",
      text: "earlier  [_] later [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["that he had given me", "I lost the key"],
      alternateanswer: [["he had given me"], []],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
  ],
};
