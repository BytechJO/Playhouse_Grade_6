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
  mainTitle: "../images/pages/sb-icons/gramprac_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/P79/G_GRAMMAR_PRACTICE.mp3",
  mainTitleIconPos: { right: "80px" },
  subTitleTextLeft: '<span class="title-order">1</span> Write it!',
  subTitleTextRight:
    "Read each sentence and fill in the correct future tense of the verb in the brackets.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p79write.mp3",
  image: "../images/pages/activities/3-img-1.png",
  imageposition: "back", // "front" (or) "back"
  numbering: "number", // "alphabet" (or) "number"
  numberstartfrom: 1,
  options: [],
  questions: [
    {
      singleword: false,
      text: "By the time she gets there, the office [_] (<span class='red_text'>close</span>).",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["will have closed"],
      alternateanswer: [["is going to have closed"]],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "I [_] (<span class='red_text'>see</span>) you tomorrow at 3:00 pm.",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["will see"],
      alternateanswer: [["am going to see"]],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "I [_] (<span class='red_text'>finish</span>) my chores before Amy gets here.",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["will have finished"],
      alternateanswer: [["am going to have finished"]],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "They [_] (<span class='red_text'>go</span>) to Spain three times by the end of the year.",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["will have gone"],
      alternateanswer: [["are going to have gone"]],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },
  ],
};
