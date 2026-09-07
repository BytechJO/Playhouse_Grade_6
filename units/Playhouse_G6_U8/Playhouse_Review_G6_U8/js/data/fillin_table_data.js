var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(0, 183, 206)",
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

  numinrow: [[1], [1], [1], [1], [1], [1], [1]],

  mainTitle: "",
  mainTitleIcon: "",
  mainTitleAudio: "../audios/under.mp3",
  mainTitleIconPos: { right: "80px" },

  subTitleTextLeft:
    '<span class="green_text">3</span> Complete it! <span class="blue_text">Complete the irregular verb chart.</span>',

  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p49think.mp3",

  image: "",
  imageposition: "back",

  numbering: "alphabet",
  numberstartfrom: "a",

  headings: ["PRESENT", "PAST", "PERFECT (have/has/had)"],

  headingsAudio: [
    "../audios/under.mp3",
    "../audios/under.mp3",
    "../audios/under.mp3",
  ],

  numOfColumns: 3,
  numOfRow: 7,

  options: [],
  optionsAudios: [],

  defaultAnswer: [1, 2, 3, 4, 8, 12, 13, 17, 21],

  questions: [
    // =========================================
    // ROW 1
    // become - became - become
    // =========================================

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["become"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["became"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["become"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    // =========================================
    // ROW 2
    // begin - began - begun
    // =========================================

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["begin"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["began"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["begun"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    // =========================================
    // ROW 3
    // drive - drove - driven
    // =========================================

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["drive"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["drove"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["driven"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    // =========================================
    // ROW 4
    // fly - flew - flown
    // =========================================

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["fly"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["flew"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["flown"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    // =========================================
    // ROW 5
    // know - knew - known
    // =========================================

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["know"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["knew"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["known"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    // =========================================
    // ROW 6
    // learn - learnt - learnt
    // =========================================

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["learn"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["learnt"],
      alternateanswer: [["learned"]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["learnt"],
      alternateanswer: [["learned"]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    // =========================================
    // ROW 7
    // take - took - taken
    // =========================================

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["take"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["took"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["taken"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },
  ],
};
