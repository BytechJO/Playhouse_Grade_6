var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(0, 183, 206)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/demo.mp3",
    },
    { url: "" },
    { url: "" },
    { url: "" },
  ],
};

var fillin_data = {
  layout: 1,

  // 4 questions
  numinrow: [[1, 1, 1, 1]],

  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/p64/READING.mp3",
  mainTitleIconPos: { right: "92px" },

  subTitleTextLeft: '<span class="title-order">2</span> Answer it!',
  subTitleTextRight: "Answer the following questions about the blog.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p64answer.mp3",

  defaultAnswer: -1,
  image: "",
  numbering: "",
  helpPopup: {
    title: "Read it!",

    image: "",

    paragraphs: [
      `
      Meet Guy Laliberté, space tourist and owner of Cirque du Soleil. He is definitely not a typical astronaut!
      Guy Laliberté grew up in Canada and became interested in theatre and performing arts when he was a young boy.
      He started his career as a street performer, playing accordion and walking on stilts.
      He opened Cirque du Soleil in 1984, and it is a circus that has been seen by over 90 million people around the world.
      <br><br>

      He has also done many things to help street children and to help get water for everyone around the world.
      Guy's biggest concern is the water shortage that is happening around the world.
      In the future Guy wants to give everyone the water they need and hopes to save water in many ways.
      He wants his organisation, One Drop Foundation, to help many people all over the world.
    `,

      `
      In 2009, Guy took a space flight to the International Space Station.
      He paid $35 million USD for this 'holiday', and he stayed in space for 10 days, 21 hours and 17 minutes.
      While he was on board the Soyuz TMA-16 spacecraft, he broadcast a new programme about the importance of taking care of Earth's water.
      Guy enjoyed his space adventure very much.
      Perhaps, when Russian Space Agency begins its tourist flights again, he can go a second time.
      <br><br>

      Guy Laliberté has won several awards, some for his successful business practices and some for his work to help Earth and its people.
      In 2006, he was named Entrepreneur (businessperson) of the Year, and in 2004, Time Magazine named him as one of the 100 most influential people.
      Each year he helps to develop the Cirque du Soleil performance, and he continues to work on his other projects.
      One word you could not use to describe Guy's life is 'boring'.
    `,
    ],
  },
  questions: [
    // ==================================================
    // Question 1
    // ==================================================
    {
      textfront: "What is the name of Guy's circus?",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["Cirque du Soleil"],

      alternateanswer: [
        "The name of Guy's circus is Cirque du Soleil",
        "Guy's circus is Cirque du Soleil",
        "His circus is Cirque du Soleil",
        "It is Cirque du Soleil",
        "It's Cirque du Soleil",
      ],

      strictcase: "no",
      type: "text",
    },

    // ==================================================
    // Question 2
    // ==================================================
    {
      textfront: "Where did Guy Laliberté grow up?",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["Canada"],

      alternateanswer: [
        "He grew up in Canada",
        "Guy grew up in Canada",
        "Guy Laliberté grew up in Canada",
        "He grew up in Canada.",
        "Guy Laliberté grew up in Canada.",
      ],

      strictcase: "no",
      type: "text",
    },

    // ==================================================
    // Question 3
    // ==================================================
    {
      textfront: "What does the One Drop Foundation do?",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["It helps people all over the world"],

      alternateanswer: [
        "The One Drop Foundation helps people all over the world",
        "It helps people get water",
        "It helps people to get water",
        "The One Drop Foundation helps people get water",
        "The One Drop Foundation helps people to get water",
        "It gives people the water they need",
        "The One Drop Foundation gives people the water they need",
        "It helps people who need water",
        "It helps people around the world get water",
        "It helps many people all over the world",
      ],

      strictcase: "no",
      type: "text",
    },

    // ==================================================
    // Question 4 - Opinion / STAR
    // ==================================================
    {
      textfront:
        "What do you think Guy Laliberté is planning for next year? Write your idea and why.",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: [],
      alternateanswer: [],

      // open-ended question — don't validate
      ignorecheck: true,

      strictcase: "no",
      type: "text",
    },
  ],
};
