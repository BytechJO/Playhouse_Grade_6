//textFront means content before text box, textBack means content after text box.--->Li:14,15
//27-06-2020

var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p5/2.mp3",
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
  mainTitle: "../images/pages/sb-icons/CONVERSATION.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/p5/CONVERSATION.mp3",
  subTitleTextLeft:
    "<strong>2 Answer it! </strong><span style='font-weight: lighter;'>After reading the conversation, see if you can answer the questions below.</span>",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/p5/2_Answer_it!_After_reading_the_conversation_see_if_you_can_answer_the_questions_below.mp3",
  ///////////////////////////
  // "activityheading": '<strong>Answer it! </strong><span style="font-weight: lighter;">After reading the conversation, see if you can answer the questions below.</span>',
  // "activityheading_audio" : "../audios/p5/CONVERSATION.mp3",
  // "main_activityheading":"../images/pages/activities/conversation.jpg",
  // "main_activityheading_audio" : "../audios/p5/2_Answer_it!_After_reading_the_conversation_see_if_you_can_answer_the_questions_below.mp3",
  // "activityicon": "../images/icons/key_icon.png",
  image: "",
  imageposition: "back", // "front" (or) "back"
  numbering: "alphabet", // "alphabet" (or) "number"
  numberstartfrom: "a",
  options: [],
  questions: [
    {
      textfronttt: "",
      textbackkk: "1 &nbsp; Where are the students? ",
      audio: "../audios/p5/under.mp3",
      audioenable: "default",
      image: "",
      answer: ["they are at a studio"],
      alternateanswer: [
        [
          "the students are at a studio",
          "they are in a studio",
          "the students are in a studio",
          "at a studio",
          "in a studio",
        ],
      ],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },

    {
      textfronttt: "",
      textbackkk: "2 &nbsp; What will they see in a few minutes? ",
      audio: "../audios/p5/between.mp3",
      audioenable: "default",
      image: "../images/pages/activities/AGW_U15_P147_I2.png",
      answer: ["they are going to see a live broadcast"],
      alternateanswer: [
        [
          "they will see a live broadcast",
          "a live broadcast",
          "they are going to see the live broadcast",
          "they will see the broadcast",
        ],
      ],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },

    {
      textfronttt: "",
      textbackkk: "3 &nbsp; What kind of programme is the anchor going to do? ",
      audio: "../audios/p5/between.mp3",
      audioenable: "default",
      image: "../images/pages/activities/AGW_U15_P147_I3.png",
      answer: [
        "the anchor is going to do a programme about solving environmental problems in their city",
      ],
      alternateanswer: [
        [
          "a programme about solving environmental problems in their city",
          "a programme about environmental problems",
          "a programme about solving environmental problems",
          "the anchor is going to talk about solving environmental problems in their city",
          "solving environmental problems in their city",
        ],
      ],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 250,
      type: "text",
    },

    {
      textfronttt: "",
      textbackkk:
        "4 &nbsp; Name three things the students will be able to do or see on their school trip. ",
      audio: "../audios/p5/under.mp3",
      audioenable: "default",
      image: "../images/pages/activities/AGW_U15_P147_I4.png",
      answer: [
        "see a live broadcast meet a sound engineer and meet a camera operator",
      ],
      alternateanswer: [
        [
          "see a live broadcast, meet a sound engineer, and meet a camera operator",
          "see a live broadcast and meet a sound engineer and a camera operator",
          "watch a live broadcast meet a sound engineer and meet a camera operator",
          "watch a live broadcast and meet a sound engineer and a camera operator",
        ],
      ],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },
  ],
};
