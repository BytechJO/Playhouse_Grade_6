//textFront means content before text box, textBack means content after text box.--->Li:14,15
//27-06-2020

var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p6/1.mp3",
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
  numinrow: [[1], [1], [1], [1], [1]],
  mainTitle: "../images/pages/sb-icons/grammer_main_title.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/p6/GRAMMAR.mp3",
  subTitleTextLeft:
    "1 Put it back together!&nbsp;The sentences have the wrong prepositions or adverbs of time<br>in them. Find them and correct them. Some have several possible answers.",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/p6/1_Put_it_back_together!_The_sentences_have_the_wrong_prepositions_or_adverbs_of_time_in_them_Find.mp3",
  ///////////////////////////
  // "activityheading": 'Put it back together!&nbsp;The sentences have the wrong prepositions or adverbs of time<br>in them. Find them and correct them. Some have several possible answers.',
  // "activityheading_audio": "../audios/p6/GRAMMAR.mp3",
  // "main_activityheading": "../images/pages/activities/GRAMMAR.jpg",
  // "main_activityheading_audio": "../audios/p6/1_Put_it_back_together!_The_sentences_have_the_wrong_prepositions_or_adverbs_of_time_in_them_Find.mp3",
  // "activityicon": "../images/icons/key_icon.png",
  image: "../images/pages/activities/ASP_3_SB_U14_P84_I1.png",
  imageposition: "back", // "front" (or) "back"
  numbering: "alphabet", // "alphabet" (or) "number"
  numberstartfrom: "a",
  options: [],
  sentences: [
    "1 &nbsp; We should go skiing at the afternoon.",
    "2 &nbsp; I will come to your house on 2:00.",
    "3 &nbsp; We can go swimming on it starts raining.",
    "4 &nbsp; I have a test in Thursday.",
    "5 &nbsp; The programme will last before 8:30 pm.",
    "6 &nbsp; Let’s wake up after 6:00 am and get to school first.",
  ],
  sentences_audio: [
    "../audios/p6/under.mp3",
    "../audios/p6/under.mp3",
    "../audios/p6/under.mp3",
    "../audios/p6/under.mp3",
    "../audios/p6/under.mp3",
    "../audios/p6/under.mp3",
  ],
  questions: [
    {
      textfronttt: "",
      textbackkk: "",
      audio: "../audios/p6/under.mp3",
      audioenable: "default",
      image: "",
      answer: ["We should go skiing in the afternoon"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },

    {
      textfronttt: "",
      textbackkk: "",
      audio: "../audios/p6/under.mp3",
      audioenable: "default",
      image: "",
      answer: ["I will come to your house at 2:00"],
      alternateanswer: [
        [
          "I will come to your house around 2:00",
          "I will come to your house before 2:00",
          "I will come to your house after 2:00",
        ],
      ],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },

    {
      textfronttt: "",
      textbackkk: "",
      audio: "../audios/p6/under.mp3",
      audioenable: "default",
      image: "",
      answer: ["We can go swimming before it starts raining"],
      alternateanswer: [
        [
          "We can go swimming until it starts raining",
          "We can go swimming after it starts raining",
        ],
      ],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },

    {
      textfronttt: "",
      textbackkk: "",
      audio: "../audios/p6/under.mp3",
      audioenable: "default",
      image: "",
      answer: ["I have a test on Thursday"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },

    {
      textfronttt: "",
      textbackkk: "",
      audio: "../audios/p6/under.mp3",
      audioenable: "default",
      image: "",
      answer: ["The programme will last until 8:30 pm"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },

    {
      textfronttt: "",
      textbackkk: "",
      audio: "../audios/p6/under.mp3",
      audioenable: "default",
      image: "",
      answer: ["Let’s wake up before 6:00 am and get to school first"],
      alternateanswer: [
        [
          "Let’s wake up at 6:00 am and get to school first",
          "Let’s wake up around 6:00 am and get to school first",
        ],
      ],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },
  ],
};
