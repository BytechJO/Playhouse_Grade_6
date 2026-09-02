var stereo_data = {
  audio: "",

  exist: false,

  bgColor_rgb: "rgb(0, 183, 206)",

  type: "text",

  playListData: [],
};

var sentence_colour_data = {
  // =====================================================
  // HEADER
  // =====================================================
  mainTitle: "../images/pages/sb-icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/p42/GRAMMAR.mp3",
  mainTitleIconPos: { right: "80px" },
  subTitleTextLeft: "<span class='title-order'>3</span> Colour it! ",
  subTitleTextRight:
    "Read each sentence and colour the box that describes what type of sentence it is.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p42colour.mp3",

  // =====================================================
  // CHOICES
  // =====================================================

  choices: [
    {
      value: "complete",
      label: "Complete Sentence",
    },

    {
      value: "incomplete",
      label: "Incomplete Sentence",
    },
  ],

  // =====================================================
  // QUESTIONS
  // =====================================================

  questions: [
    {
      sentence: "a funny noise",

      answer: "incomplete",
    },

    {
      sentence: "Her two friends walked to the store.",

      answer: "complete",
    },

    {
      sentence: "the Braille book",

      answer: "incomplete",
    },

    {
      sentence: "Sign language is used by deaf people.",

      answer: "complete",
    },

    {
      sentence: "three white canes in the room",

      answer: "incomplete",
    },
  ],
};
