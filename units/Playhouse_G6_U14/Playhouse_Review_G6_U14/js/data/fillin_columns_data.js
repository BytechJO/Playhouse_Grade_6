var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/P72/1.mp3",
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

  numinrow: [[1], [1], [1], [1], [1], [1], [1], [1]],

  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-20px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    '<span class="green_text">3</span> Change it! <span class="blue_text">Change each direct speech into reported speech.</span>',
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/under.mp3",

  image: "",

  imageposition: "back",

  defaultAnswer: 0,

  numbering: "number",

  numberstartfrom: 1,

  options: [],

  questions: [
    {
      singleword: false,
      text: "‘Clean your room,’ said Dad. [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["Dad told me to clean my room"],

      alternateanswer: [
        ["Dad ordered me to clean my room", "Dad asked me to clean my room"],
      ],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "‘Where is the police station?’ asked the tourist. [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["The tourist asked where the police station was"],

      alternateanswer: [
        [
          "The tourist wanted to know where the police station was",
          "The tourist wondered where the police station was",
        ],
      ],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "‘I am going to the shop,’ said Sarah to her mum. [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["Sarah told her mum that she was going to the shop"],

      alternateanswer: [
        [
          "Sarah said to her mum that she was going to the shop",
          "Sarah told her mum she was going to the shop",
          "Sarah said that she was going to the shop",
        ],
      ],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "‘What time will Mum be home?’ wondered Darren. [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["Darren wondered what time Mum would be home"],

      alternateanswer: [
        [
          "Darren asked what time Mum would be home",
          "Darren wanted to know what time Mum would be home",
        ],
      ],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "‘Strawberry ice cream is my favourite,’ said Uncle Gary. [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["Uncle Gary said that strawberry ice cream was his favourite"],

      alternateanswer: [
        [
          "Uncle Gary said strawberry ice cream was his favourite",
          "Uncle Gary explained that strawberry ice cream was his favourite",
        ],
      ],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },
  ],
};
