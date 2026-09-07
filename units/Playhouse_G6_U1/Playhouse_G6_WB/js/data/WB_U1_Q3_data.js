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
  helpPopup: {
    title: "1 Read it and say it!",

    image: "",

    paragraphs: [
      `
      <b>Tour Guide:</b>
      This is our studio, where all the news is filmed.
      <br><br>

      <b>Student:</b>
      Wow, are they doing a broadcast right now?
      <br><br>

      <b>Tour Guide:</b>
      No, we won’t go on air until 10:30. But you can hear the breaking news now.
      <br><br>

      <b>Student:</b>
      Can we hear the breaking news and then see more things in the studio, Mrs. Nelson?
      <br><br>

      <b>Student:</b>
      I always wanted to see a reporter’s teleprompter and a camera operator’s equipment.
    `,

      `
      <b>Teacher:</b>
      Yes, we will see the broadcast in a few minutes. But remember that they’re doing
      the news live, so we’ll need to be quiet and careful.
      <br><br>

      <b>Student:</b>
      This is great! I’ve always wondered how TV shows were done. Now we get to see it!
      Is the one who is speaking into the microphone the reporter?
      <br><br>

      <b>Tour Guide:</b>
      Yes, she is. There are many things to observe here at the network offices.
      Right now we’re going to meet some of the people who do the lights,
      the sound and the camera work. You are going to meet a sound engineer
      and even the anchor of the news!
    `,

      `
      <b>Teacher:</b>
      What kind of programme is the anchor going to do?
      <br><br>

      <b>Tour Guide:</b>
      At 12:00, the anchor is going to talk about solving environmental problems
      in our city. Okay, I know you’re all excited to learn everything about our
      network. When your teacher is ready, we can go so we won’t be late for
      the live broadcast.
      <br><br>

      <b>Teacher:</b>
      Let’s go. I think we’re all here now.
    `,
    ],
  },
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
