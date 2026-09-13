var stereo_data = {
  audio: "",
  exist: false,

  bgColor_rgb: "rgb(38, 184, 86)",

  type: "text",

  playListData: [],
};

var conversation_board_data = {
  layout: 1,

  /* =========================================
     TITLE
  ========================================= */

  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",

  subTitleTextLeft:
    "Conversation: Play and Talk!",

  subTitleTextRight: "Using a coin, play the game with your friends. Take turns flipping the coin. If it is heads, move forward one space. If it is tails, move forward two spaces. When you land on an ‘ask‘ box, ask your friend the question and have them answer you. Did they answer correctly?",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  titleNumber: "1",

  title: "Conversation:",
  titleGreen: "Play and Talk!",

  /* =========================================
     INSTRUCTION
  ========================================= */

  instruction:
    "Using a coin, play the game with your friends. Take turns flipping the coin. " +
    "If it is heads, move forward one space. If it is tails, move forward two spaces. " +
    "When you land on an ‘ask’ box, ask your friend the question and have them answer you. " +
    "Did they answer correctly?",

  /* =========================================
     BOARD IMAGES
     عدلي المسارات حسب أسماء الصور عندك
  ========================================= */

  images: {
    exercise: "../images/pages/activities/1.png",
    skip: "../images/pages/activities/107.png",
    salad: "../images/pages/activities/108.png",
    coin: "../images/pages/activities/2.png",
    car: "../images/pages/activities/109.jpg",

    recycle: "../images/pages/activities/rec.png",

    water: "../images/pages/activities/106.png",
    game: "../images/pages/activities/0.jpg",
    balancedDiet: "../images/pages/activities/14.png",

    bandage: "../images/pages/activities/bandage.png",
    moon: "../images/pages/activities/105.jpg",
    burn: "../images/pages/activities/3.png",
    right: "../images/pages/activities/right.png",
    down: "../images/pages/activities/down.png",
  },

  /* =========================================
     BOARD CELLS
     6 COLUMNS × 5 ROWS
  ========================================= */

  cells: [
    /* ================= ROW 1 ================= */

    {
      type: "yellow",
      image: "exercise",
      text: "Do you hope to start exercising soon?",
    },

    {
      type: "gray1",
      image: "skip",
      text: "Skip a turn.",
    },

    {
      type: "gray",
      image: "salad",
      text: "Do you prefer salad to corn?",
    },

    {
      type: "beige",
      image: "right",
      text: "Move ahead two spaces!",
    },

    {
      type: "yellow",
      image: "car",
      text: "Go back one space!",
    },

    {
      type: "blue",
      text: "Start",
    },

    /* ================= ROW 2 ================= */

    {
      type: "pink",
      image: "recycle",
      text: "T or F: If you recycle, you’re helping the environment.",
    },

    {
      type: "empty",
    },

    {
      type: "empty",
    },

    {
      type: "empty",
    },

    {
      type: "empty",
    },

    {
      type: "empty",
    },

    /* ================= ROW 3 ================= */

    {
      type: "beige",
      image: "coin",
      text: "Flip the coin again!",
    },

    {
      type: "gray",
      image: "water",
      text: "T or F: There is plenty of water to meet people’s needs.",
    },

    {
      type: "pink",
      image: "game",
      text: "Would you rather play a computer game or a board game?",
    },

    {
      type: "yellow",
      image: "car",
      text: "Go back one space!",
    },

    {
      type: "pink",
      image: "balancedDiet",
      text: "Do you usually eat a balanced diet?",
    },

    {
      type: "yellow",
      image: "down",
      text: "Move ahead one space!",
    },

    /* ================= ROW 4 ================= */

    {
      type: "empty",
    },

    {
      type: "empty",
    },

    {
      type: "empty",
    },

    {
      type: "empty",
    },

    {
      type: "empty",
    },

    {
      type: "beige",
      image: "skip",
      text: "Skip a turn.",
    },

    /* ================= ROW 5 ================= */

    {
      type: "gray1",
      text: "The End!",
    },

    {
      type: "purple",
      image: "bandage",
      text: "If someone is hurt, what’s the first thing you do?",
    },

    {
      type: "yellow",
      image: "coin",
      text: "Flip the coin again!",
    },

    {
      type: "gray1",
      image: "moon",
      text: "Do you think we can live on the moon?",
    },

    {
      type: "pink",
      image: "car",
      text: "Go back one space!",
    },

    {
      type: "gray1",
      image: "burn",
      text: "What should you do if someone is burnt?",
    },
  ],
};
