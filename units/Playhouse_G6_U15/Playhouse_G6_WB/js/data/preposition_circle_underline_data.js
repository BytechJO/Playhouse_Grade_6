var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/P76/1.mp3",
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

var prep_circle_underline_data = {
  mainTitle: "../images/pages/sb-icons/grammer_main_title.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/P76/GRAMMAR.mp3",
  subTitleTextLeft:
    "<span class='title-order'>1</span> You do it! Below are past perfect sentences. Underline the part that happened earlier and circle the part that",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/P76/1_You_do_it!_Below_are_past_perfect_sentences_Underline_the_part_that_happened_earlier_and_circle_the.mp3",

  // =====================================================
  // DEFAULT TOOL
  // =====================================================

  toolDefault: "underline",

  // =====================================================
  // SIDE IMAGE
  // حطي مسار صورة البنت هون إذا موجودة عندك
  // =====================================================

  sideImages: ["../images/pages/activities/0.jpg"],

  // =====================================================
  // QUESTIONS
  // underline = happened earlier
  // circle    = happened later
  // =====================================================

  questions: [
    // ===================================================
    // 1
    // ===================================================

    {
      speaker: "1",

      sentences: [
        {
          text: "Jill had finished her homework",
          role: "underline",
        },
        {
          text: "before she played tennis.",
          role: "circle",
        },
      ],
    },

    // ===================================================
    // 2
    // ===================================================

    {
      speaker: "2",

      sentences: [
        {
          text: "When we arrived home,",
          role: "circle",
        },
        {
          text: "Tina had made lunch for everyone.",
          role: "underline",
        },
      ],
    },

    // ===================================================
    // 3
    // ===================================================

    {
      speaker: "3",

      sentences: [
        {
          text: "We had already put the tent up",
          role: "underline",
        },
        {
          text: "when he found the torch.",
          role: "circle",
        },
      ],
    },

    // ===================================================
    // 4
    // ===================================================

    {
      speaker: "4",

      sentences: [
        {
          text: "Jake had studied French",
          role: "underline",
        },
        {
          text: "before he moved to Paris.",
          role: "circle",
        },
      ],
    },

    // ===================================================
    // 5
    // ===================================================

    {
      speaker: "5",

      sentences: [
        {
          text: "Lucy liked the film",
          role: "circle",
        },
        {
          text: "although she had read the book.",
          role: "underline",
        },
      ],
    },

    // ===================================================
    // 6
    // ===================================================

    {
      speaker: "6",

      sentences: [
        {
          text: "I had never seen a more beautiful mural",
          role: "underline",
        },
        {
          text: "before I saw this one.",
          role: "circle",
        },
      ],
    },

    // ===================================================
    // 7
    // ===================================================

    {
      speaker: "7",

      sentences: [
        {
          text: "I had written the e-mail",
          role: "underline",
        },
        {
          text: "before Grandfather came over.",
          role: "circle",
        },
      ],
    },

    // ===================================================
    // 8
    // ===================================================

    {
      speaker: "8",

      sentences: [
        {
          text: "He had fixed his bike",
          role: "underline",
        },
        {
          text: "before the TV programme began.",
          role: "circle",
        },
      ],
    },
  ],
};
