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
  numinrow: [[1], [1], [1]],

  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_3_icon.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/p36/READING.mp3",

  subTitleTextLeft: '<span class="title-order">2</span> You do it! ',
  subTitleTextRight: "Answer the following questions about the blog.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p36doit.mp3",

  defaultAnswer: -1,
  leftList: "",
  image: "",

  questions: [
    // =========================================
    // Question 1
    // =========================================
    {
      textfront: "What is Travis writing about?",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["His first time travelling out of the country on an aeroplane"],

      alternateanswer: [
        "His first time travelling out of the country",
        "His first time travelling on an aeroplane",
        "His first time traveling out of the country on an airplane",
        "His first time traveling out of the country",
        "His first time traveling on an airplane",
        "Travelling out of the country for the first time",
        "Traveling out of the country for the first time",
        "Travelling on an aeroplane for the first time",
        "Traveling on an airplane for the first time",
        "His first trip out of the country",
        "His first flight out of the country",
        "His travel experience",
        "Travelling",
        "Traveling",
      ],

      strictcase: "no",
      type: "text",
    },

    // =========================================
    // Question 2
    // =========================================
    {
      textfront:
        "Where does Travis’s dad keep the passports when they are at the airport?",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["In his front pocket"],

      alternateanswer: [
        "His front pocket",
        "In the front pocket",
        "In his pocket",
        "His pocket",
        "Travis's dad keeps the passports in his front pocket",
        "He keeps them in his front pocket",
        "He puts them in his front pocket",
        "In dad's front pocket",
        "In his dad's front pocket",
      ],

      strictcase: "no",
      type: "text",
    },

    // =========================================
    // Question 3 - Open Answer
    // =========================================
    {
      textfront:
        "What do you think is the best advice Travis gave about travelling? Why? Share your answers with the class.",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: [],
      alternateanswer: [],

      ignorecheck: true,

      strictcase: "no",
      type: "text",
    },
  ],
};
