var fillin_data = {
  layout: 1,
  numinrow: [[1], [1], [1], [1], [1]],
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    "<span class='green_text'>2</span> Choose it! <span class='blue_text'>Pick either '<span class='red_text'>wish</span>' or '<span class='red_text'>hope</span>' to fill in the blank in each sentence.</span>",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/under.mp3",
  image: "",
  imageposition: "back", // "front" (or) "back"
  defaultAnswer: 1,
  numbering: "none", // "alphabet" (or) "number"
  numberstartfrom: 1,
  options: [],
  optionsAudios: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  questions: [
    {
      singleword: false,
      text: "<span class='bold_text'>1</span> I [_] it wasn’t so far to your house.",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["wish"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: "<span class='bold_text'>2</span> Now they [_] they had stayed instead of moved.",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["wish"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: "<span class='bold_text'>3</span> We [_] you get better soon.",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["hope"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: "<span class='bold_text'>4</span> I just [_] she doesn’t learn about her surprise party.",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["hope"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: "<span class='bold_text'>5</span> When you blow out the candles, what are you going to [_] for?",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["wish"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
  ],
};
