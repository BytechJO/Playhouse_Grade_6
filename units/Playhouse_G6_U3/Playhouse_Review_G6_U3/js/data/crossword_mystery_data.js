var crossword_mystery_data = {
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    '<span class="green_text">1</span> Solve it! <span class="blue_text">Use the words below to fill in the puzzle. Then write the mystery word below.</span>',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",
  wordBank: [
    "wicket",
    "puck",
    "cricket",
    "cricket pitch",
    "ice hockey",
    "golf club",
    "golf",
  ],
  words: [
    // =====================================================
    // 1 - GOLF
    // أفقي، وليس عامودي
    // أول خانة هي mystery = G
    // F الأخيرة جاهزة
    // =====================================================
    {
      number: 1,

      answer: "GOLF",

      displayAnswer: "golf",

      direction: "across",

      row: 1,
      col: 6,

      redPositions: [0],

      prefill: {
        3: "F",
      },
    },

    // =====================================================
    // 2 - GOLF CLUB
    // الحرف السادس L هو mystery
    // =====================================================
    {
      number: 2,

      answer: "GOLFCLUB",

      displayAnswer: "golf club",

      direction: "across",

      row: 3,
      col: 1,

      redPositions: [5],

      prefill: {},
    },

    // =====================================================
    // 3 - CRICKET
    // أول حرف C mystery
    // =====================================================
    {
      number: 3,

      answer: "CRICKET",

      displayAnswer: "cricket",

      direction: "across",

      row: 5,
      col: 6,

      redPositions: [0],

      prefill: {},
    },

    // =====================================================
    // 4 - ICE HOCKEY
    // H جاهزة
    // الحرف الخامس O mystery
    // =====================================================
    {
      number: 4,

      answer: "ICEHOCKEY",

      displayAnswer: "ice hockey",

      direction: "across",

      row: 6,
      col: 2,

      redPositions: [4],

      prefill: {
        3: "H",
      },
    },

    // =====================================================
    // 5 - PUCK
    // U mystery
    // K جاهزة
    // =====================================================
    {
      number: 5,

      answer: "PUCK",

      displayAnswer: "puck",

      direction: "across",

      row: 7,
      col: 5,

      redPositions: [1],

      prefill: {
        3: "K",
      },
    },

    // =====================================================
    // 6 - CRICKET PITCH
    // R mystery
    // P جاهزة
    // =====================================================
    {
      number: 6,

      answer: "CRICKETPITCH",

      displayAnswer: "cricket pitch",

      direction: "across",

      row: 8,
      col: 5,

      redPositions: [1],

      prefill: {
        7: "P",
      },
    },

    // =====================================================
    // 7 - WICKET
    // E mystery
    // =====================================================
    {
      number: 7,

      answer: "WICKET",

      displayAnswer: "wicket",

      direction: "across",

      row: 10,
      col: 2,

      redPositions: [4],

      prefill: {},
    },
  ],

  // =====================================================
  // الخانات المستقلة من Mystery Word
  //
  // O بعد السؤال 1
  // F بعد السؤال 2
  // S قبل السؤال 7
  // =====================================================

  extraMysteryCells: [
    {
      row: 2,
      col: 6,
      letter: "O",
    },

    {
      row: 4,
      col: 6,
      letter: "F",
    },

    {
      row: 9,
      col: 6,
      letter: "S",
    },
  ],

  mysteryAnswer: "GOLF COURSE",
};
