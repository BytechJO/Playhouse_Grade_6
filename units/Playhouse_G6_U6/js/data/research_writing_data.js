var stereo_data = {
  audio: "",

  exist: false,

  bgColor_rgb: "rgb(0, 183, 206)",

  type: "text",

  playListData: [],
};

var research_writing_data = {
  mainTitle: "../images/pages/sb-icons/writing.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_3_icon.png",
  mainTitleIconPos: { right: "100px" },
  mainTitleAudio: "../audios/P54/WRITING.mp3",
  subTitleTextLeft: "<span class='title-order'>2</span> Write about it!",
  subTitleTextRight:
    "Using keywords, research to find the answers to the questions below. Try to answer as many of the five Wh- and How questions as you can. These questions start with ‘<span class='red_text'>Who</span>’, ‘<span class='red_text'>What</span>’, ‘<span class='red_text'>When</span>’, ‘<span class='red_text'>Where</span>’, ‘<span class='red_text'>Why</span>’ and ‘<span class='red_text'>How</span>’. ",
  subTitleIcons: [],
  subTitleAudio: "../audios/p102/!.mp3",

  // =====================================================
  // QUESTIONS
  // =====================================================

  questions: [
    {
      number: 1,

      question: "Who invented fireworks?",

      defaultKeywords: "fireworks, firecrackers, pyrotechnics",

      defaultAnswer:
        "Today we use pyrotechnics for amazing firework displays. A computer program can time the firecrackers and can even decide where they go in the sky. Did you know that the Chinese first invented fireworks in the form of firecrackers about 1,000 years ago? They were used during their New Year celebrations to chase away bad spirits. It is believed that they were invented in Liu Yang City. There is a story that a cook mixed some ingredients together, and they started burning. He put it in a bamboo tube, and the first firecracker exploded!",
    },

    {
      number: 2,

      question: "Who invented the laptop?",

      defaultKeywords: "",

      defaultAnswer: "",
    },

    {
      number: 3,

      question: "Who started YouTube™?",

      defaultKeywords: "",

      defaultAnswer: "",
    },

    {
      number: 4,

      question: "What are apps on a mobile phone?",

      defaultKeywords: "",

      defaultAnswer: "",
    },
  ],
};
