var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p17/1.mp3",
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
  layout: 1,

  mainTitle: "../images/pages/sb-icons/LANGUAGE_BUILDING.jpg",
  mainTitleIcon: "../images/pages/sb-icons/readwrite_main_title_icon.png",
  mainTitleIconPos: { right: "-43px" },
  mainTitleAudio: "../audios/p17/LANGUAGE_BUILDING.mp3",

  subTitleTextLeft:
    "<span class='title-order'>2</span> You do it! Below is a conversation. Underline the simple future sentences and circle the future perfect sentences.",

  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/p17/1.mp3",

  toolDefault: "underline",

  sideImages: [],

  questions: [
    {
      speaker: "Brother:",
      sentences: [
        {
          text: "Mum will go to the mall today.",
          role: "underline",
        },
        {
          text: "By the time she leaves, she will have bought all our clothes for our holiday.",
          role: "circle",
        },
      ],
    },

    {
      speaker: "Sister:",
      sentences: [
        {
          text: "I hope we will go at the weekend.",
          role: "underline",
        },
        {
          text: "It will rain this weekend.",
          role: "underline",
        },
        {
          text: "The meteorologist said this today.",
          role: "normal",
        },
      ],
    },

    {
      speaker: "Brother:",
      sentences: [
        {
          text: "It will have rained five days this week!",
          role: "circle",
        },
        {
          text: "That’s a lot.",
          role: "normal",
        },
      ],
    },

    {
      speaker: "Sister:",
      sentences: [
        {
          text: "Will you take puzzles and crosswords with you?",
          role: "underline",
        },
      ],
    },

    {
      speaker: "Brother:",
      sentences: [
        {
          text: "Yes, I will have packed the puzzles and crosswords by tonight.",
          role: "circle",
        },
      ],
    },

    {
      speaker: "Sister:",
      sentences: [
        {
          text: "I will pack my luggage tonight.",
          role: "underline",
        },
      ],
    },

    {
      speaker: "Brother:",
      sentences: [
        {
          text: "I won’t hold my breath.",
          role: "underline",
        },
        {
          text: "By the time you finish packing, we will have finished our holiday.",
          role: "circle",
        },
      ],
    },
  ],
};
