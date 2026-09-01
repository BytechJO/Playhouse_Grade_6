var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p20/2.mp3",
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
  mainTitle: "../images/pages/sb-icons/CONVERSATION.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/p20/CONVERSATION.mp3",
  subTitleTextLeft:
    '<span class="blue_text">2</span> Answer it! Answer the questions below about the family‘s conversation about their flight.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/p20/2_Answer_it!_Answer_the_questions_below_about_the_family‘s_conversation_about_their_flight.mp3",
  defaultAnswer: -1,
  leftList: "",
  image: "",
  questions: [
    {
      textfront:
        "What three things did Dad make sure that everybody had before they boarded their flight?",

      audio: "../audios/p20/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["e-ticket passport and hand luggage"],

      alternateanswer: [
        [
          "e-ticket, passport and hand luggage",
          "e-ticket, passport, and hand luggage",
          "an e-ticket passport and hand luggage",
          "an e-ticket, passport and hand luggage",
          "e ticket passport and hand luggage",
          "e tickets passports and hand luggage",
          "e-ticket passports and hand luggage",
        ],
      ],

      strictcase: "no",
      type: "text",
    },
    {
      textfront:
        "Name one thing that the family must do before their flight departs?",

      audio: "../audios/p20/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["pass through security"],

      alternateanswer: [
        [
          "go through security",
          "pass through security",
          "go through the security",
          "pass through the security",
          "go to the gate",
          "go to their gate",
          "board the aeroplane",
          "board the airplane",
        ],
      ],

      strictcase: "no",
      type: "text",
    },
    {
      textfront: "Why does the sister want to become an airline agent?",

      audio: "../audios/p20/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["because she likes to make people happy"],

      alternateanswer: [
        [
          "she likes to make people happy",
          "because she likes making people happy",
          "she likes making people happy",
          "because people are so happy when they go on holiday",
          "people are happy when they go on holiday",
          "because she wants to make people happy",
          "because people are so happy when they go on holiday",
        ],
      ],

      strictcase: "no",
      type: "text",
    },
  ],
};
