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

var mcq_data = {
  mainTitle: "../images/pages/sb-icons/reading.png",

  mainTitleIcon: "../images/pages/sb-icons/phonics_3_icon.png",

  mainTitleIconPos: {
    right: "80px",
  },

  mainTitleAudio: "../audios/p92/READING.mp3",

  subTitleTextLeft: "<span class='title-order'>2</span> You do it!",

  subTitleTextRight: "Choose or write the correct answer.",

  subTitleIcons: [],

  subTitleAudio: "../audios/new/p92doit.mp3",

  select: "single",

  shape: "roundrect",

  bgcolor: "none",

  showicon: "true",

  image: "",

  // =========================================================
  // READING POPUP
  // =========================================================
  helpPopup: {
    title: "",

    image: "",

    paragraphs: [],

    array_text: [
      "<div class='reading_only_image'>" +
        "<img src='../images/pages/activities/reading.png'>" +
        "</div>",
    ],
  },

  numbering: "number",

  numberstartfrom: 1,

  questions: [
    // =========================================================
    // 1
    // =========================================================
    {
      question: "What does ‘disposable’ mean?",

      answer: [2],

      audio: "",

      audioenable: "default",

      fillinanswer: "",

      options: [
        {
          text: "<span class='option_letter'>a</span> an item that we can use again",

          image: "",

          audio: "no",

          audioenable: "default",

          needspaceafter: "no",
        },

        {
          text: "<span class='option_letter'>b</span> an item that is used once and then thrown away",

          image: "",

          audio: "no",

          audioenable: "default",

          needspaceafter: "no",
        },

        {
          text: "<span class='option_letter'>c</span> an item that is recycled",

          image: "",

          audio: "no",

          audioenable: "default",

          needspaceafter: "no",
        },
      ],
    },

    // =========================================================
    // 2
    // =========================================================
    {
      question: "Plastic benches can last longer than wooden ones because",

      answer: [2],

      audio: "",

      audioenable: "default",

      fillinanswer: "",

      options: [
        {
          text: "<span class='option_letter'>a</span> plastic doesn’t burn like wood.",

          image: "",

          audio: "no",

          audioenable: "default",

          needspaceafter: "no",
        },

        {
          text: "<span class='option_letter'>b</span> plastic doesn’t rot like wood.",

          image: "",

          audio: "no",

          audioenable: "default",

          needspaceafter: "no",
        },

        {
          text: "<span class='option_letter'>c</span> plastic doesn’t melt like wood.",

          image: "",

          audio: "no",

          audioenable: "default",

          needspaceafter: "no",
        },

        {
          text: "<span class='option_letter'>d</span> plastic doesn’t smell like wood.",

          image: "",

          audio: "no",

          audioenable: "default",

          needspaceafter: "no",
        },
      ],
    },

    // =========================================================
    // 3
    // =========================================================
    {
      question: "What is a landfill?",

      answer: [1],

      audio: "",

      audioenable: "default",

      fillinanswer: "",

      options: [
        {
          text: "<span class='option_letter'>a</span> a place for rubbish",

          image: "",

          audio: "no",

          audioenable: "default",

          needspaceafter: "no",
        },

        {
          text: "<span class='option_letter'>b</span> a factory",

          image: "",

          audio: "no",

          audioenable: "default",

          needspaceafter: "no",
        },

        {
          text: "<span class='option_letter'>c</span> a recycling centre",

          image: "",

          audio: "no",

          audioenable: "default",

          needspaceafter: "no",
        },

        {
          text: "<span class='option_letter'>d</span> a farm",

          image: "",

          audio: "no",

          audioenable: "default",

          needspaceafter: "no",
        },
      ],
    },

    // =========================================================
    // 4
    // NORMAL FILL IN - VALIDATED
    // =========================================================
    {
      question: "What does ‘it’ mean in line 19?",

      answer: [],

      audio: "",
      audioenable: "default",

      fillinanswer: ["paper", "the paper"],

      options: [],
    },

    // =========================================================
    // 5
    // FREE WRITING - NO VALIDATION
    // =========================================================
    {
      question:
        "Should there be a law that says that people must recycle? Why or why not? Explain.",

      answer: [],

      audio: "",

      audioenable: "default",

      fillinanswer: "",

      options: [],

      freeWriting: true,

      lines: 2,
    },
  ],
};
