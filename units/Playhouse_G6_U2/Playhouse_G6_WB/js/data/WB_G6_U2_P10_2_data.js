var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p10/2.mp3",
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
  numinrow: [[1, 1, 1, 1]],
  mainTitle: "../images/pages/sb-icons/CONVERSATION.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/p10/CONVERSATION.mp3",
  subTitleTextLeft:
    '<span class="blue_text">2</span> Answer it! Answer the questions about the conversation.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/p10/2_Answer_it!_Answer_the_questions_about_the_conversation.mp3",
  activityheading: "",
  activityheading_audio: "../audios/p10/under.mp3",
  activityicon: "../images/icons/key_icon.png",
  main_activityheading: "../images/pages/activities/WORD_POWER.jpg",
  main_activityheading_audio: "../audios/p10/under.mp3",
  defaultAnswer: -1,
  leftList:
    '<ol type="1" class="words-list"> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li>  </ol>',
  image: "",
  helpPopup: {
    title: "Read it and say it!",

    image: "",

    paragraphs: [
      `
      <b>Tour Guide:</b>
      This is our studio, where all the news is filmed.
      <br>

      <b>Student:</b>
      Wow, are they doing a broadcast right now?
      <br>

      <b>Tour Guide:</b>
      No, we won’t go on air until 10:30. But you can hear the breaking news now.
      <br>

      <b>Student:</b>
      Can we hear the breaking news and then see more things in the studio, Mrs. Nelson?
      <br>

      <b>Student:</b>
      I always wanted to see a reporter’s teleprompter and a camera operator’s equipment.
    `,

      `
      <b>Teacher:</b>
      Yes, we will see the broadcast in a few minutes. But remember that they’re doing
      the news live, so we’ll need to be quiet and careful.
      <br>

      <b>Student:</b>
      This is great! I’ve always wondered how TV shows were done. Now we get to see it!
      Is the one who is speaking into the microphone the reporter?
      <br>

      <b>Tour Guide:</b>
      Yes, she is. There are many things to observe here at the network offices.
      Right now we’re going to meet some of the people who do the lights, the sound
      and the camera work. You are going to meet a sound engineer and even the anchor
      of the news!
    `,

      `
      <b>Teacher:</b>
      What kind of programme is the anchor going to do?
      <br>

      <b>Tour Guide:</b>
      At 12:00, the anchor is going to talk about solving environmental problems
      in our city. Okay, I know you’re all excited to learn everything about our
      network. When your teacher is ready, we can go so we won’t be late for
      the live broadcast.
      <br>

      <b>Teacher:</b>
      Let’s go. I think we’re all here now.
    `,
    ],
  },
  questions: [
    {
      textfront: "What doesn’t Actor 1 want to do?",

      audio: "../audios/p10/under.mp3",
      audioenable: "default",

      image: "",

      answer: ["Actor 1 doesn't want to do another take of a scene"],

      alternateanswer: [
        [
          "Actor 1 does not want to do another take of a scene",
          "Actor 1 doesn't want to do another take",
          "Actor 1 does not want to do another take",
          "He doesn't want to do another take of a scene",
          "He does not want to do another take of a scene",
          "He doesn't want to do another take",
          "He does not want to do another take",
          "He doesn't want another take",
          "He does not want another take",
          "another take of a scene",
          "another take",
          "do another take",
          "do another take of a scene",
        ],
      ],

      strictcase: "no",
      type: "text",
    },

    {
      textfront: "What does Actor 1 ask the director?",

      audio: "../audios/p10/under.mp3",
      audioenable: "default",

      image: "",

      answer: ["Actor 1 asks the director for a short break"],

      alternateanswer: [
        [
          "Actor 1 asks for a short break",
          "He asks the director for a short break",
          "He asks for a short break",
          "Actor 1 asks to take a short break",
          "He asks to take a short break",
          "Actor 1 wants a short break",
          "He wants a short break",
          "a short break",
          "short break",
        ],
      ],

      strictcase: "no",
      type: "text",
    },

    {
      textfront: "Does the director say yes or no to what Actor 1 asks? Why?",

      audio: "../audios/p10/under.mp3",
      audioenable: "default",

      image: "",

      answer: [
        "The director says yes because the director wants to talk to the producer for a minute",
      ],

      alternateanswer: [
        [
          "The director says yes to what Actor 1 asks because the director wants to talk to the producer for a minute",
          "The director says yes because he wants to talk to the producer for a minute",
          "He says yes because he wants to talk to the producer for a minute",
          "Yes because the director wants to talk to the producer for a minute",
          "Yes because he wants to talk to the producer for a minute",
          "Yes, because the director wants to talk to the producer for a minute",
          "Yes, because he wants to talk to the producer for a minute",
          "yes because he needs to talk to the producer",
          "yes because he wants to speak to the producer",
          "yes because the director wants to speak to the producer",
        ],
      ],

      strictcase: "no",
      type: "text",
    },

    {
      textfront:
        "How are action films and science fiction films different for the actors?",

      audio: "../audios/p10/under.mp3",
      audioenable: "default",

      image: "",

      answer: [
        "Action films need many takes whereas science fiction films don't need as many",
      ],

      alternateanswer: [
        [
          "Action films and science fiction films are different for the actors because action films need many takes whereas science fiction films don't need as many",
          "Action films need more takes than science fiction films",
          "Action films require more takes than science fiction films",
          "Action films have more takes than science fiction films",
          "Science fiction films don't need as many takes as action films",
          "Science fiction films do not need as many takes as action films",
          "Actors do more takes in action films",
          "Actors need more takes in action films than in science fiction films",
          "There are more takes in action films than in science fiction films",
          "Action films need many takes but science fiction films don't",
          "Action films need many takes but science fiction films do not",
        ],
      ],

      strictcase: "no",
      type: "text",
    },
  ],
};
