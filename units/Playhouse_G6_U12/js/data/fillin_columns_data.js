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
var fillin_data = {
  layout: 1,
  numinrow: [[1, 1, 1]],

  mainTitle: "../images/pages/sb-icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/p106/GRAMMAR.mp3",
  mainTitleIconPos: { right: "80px" },

  subTitleTextLeft: '<span class="title-order">3</span> Write it! ',

  subTitleTextRight:
    "Look at each sentences and add the <span class='red_text'>‘if</span>' to make it a zero conditional sentence.",

  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  defaultAnswer: -1,
  leftList: "",
  image: "",

  questions: [
    {
      textfront: "You are going to the party. Pick me up on the way.",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["If you are going to the party, pick me up on the way"],

      alternateanswer: [
        [
          "Pick me up on the way if you are going to the party",
          "If you are going to the party pick me up on the way",
          "Pick me up on the way, if you are going to the party",
        ],
      ],

      strictcase: "no",
      type: "text",
    },

    {
      textfront: "Pinch your nostrils. Your nose bleeds.",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["If your nose bleeds, pinch your nostrils"],

      alternateanswer: [
        [
          "Pinch your nostrils if your nose bleeds",
          "If your nose bleeds pinch your nostrils",
          "Pinch your nostrils, if your nose bleeds",
        ],
      ],

      strictcase: "no",
      type: "text",
    },

    {
      textfront: "In my city we call 999. There is an emergency.",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["If there is an emergency, in my city we call 999"],

      alternateanswer: [
        [
          "In my city we call 999 if there is an emergency",
          "If there is an emergency in my city we call 999",
          "In my city we call 999, if there is an emergency",
        ],
      ],

      strictcase: "no",
      type: "text",
    },
  ],
};
