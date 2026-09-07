var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(0, 183, 206)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_36/demo.mp3",
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
  numinrow: [[1], [1], [1]],
  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/adv_icon_1.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/p8/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>2</span> <b>You do it!</b>",
  subTitleTextRight:
    "<span class='blue_text'>Answer the following questions about the article.</span>",
  subTitleIcons: [""],
  subTitleAudio: "../audios/new/doit.mp3",
  activityheading: "",
  activityheading_audio: "",
  main_activityheading: "../images/pages/activities/conversation.jpg",
  main_activityheading_audio: "../audios/under.mp3",
  activitysubheading: "",
  activityicon: "../images/icons/key_icon.png",
  image: "",
  imageposition: "back", // "front" (or) "back"
  numbering: "alphabet", // "alphabet" (or) "number"
  numberstartfrom: "a",
  options: [],
  helpPopup: {
    title: "Read about Eric",

    image: "../images/pages/activities/Group 1 (2).png",

    paragraphs: [
      `
      Meet Eric. He is one of the people you see on TV each evening.
      He is an anchor. He tells you the news.
      Each day Eric comes to the studio at eight o’clock in the morning.
      The TV programme won’t air until six o’clock in the evening.
      Why does Eric come so early?
      It’s because there are many things to do to get ready!
    `,

      `
      First, Eric must learn about the news for the day.
      <span class='underline-text'>Some of it will change quickly</span>, but he must learn as much
      as he can about the news that has already happened.
      Sometimes there is breaking news that he must read
      as soon as possible.

      You might think the news depends on Eric because he is the only one
      you see reporting on TV. However, there are many people who help
      put the programme together. Eric must talk with these people,
      so he knows what is planned for him.
    `,

      `
      He must sit down and wait for the hair and makeup artist to do
      his hair and makeup, so he will look good on camera.

      The teleprompter operator will be giving Eric his lines,
      so this person must know how slowly or quickly Eric wants
      his lines shown.

      The programme editor will make changes often, so Eric talks with
      him early in the day and again before the programme begins.

      The programme is broadcast live, so Eric must know all the news
      well before the camera starts. He has an important job to give
      the news to the people of the town.
    `,

      `
      Eric does not work at the weekend, so there is another reporter
      who does the programmes on Saturdays and Sundays.

      Eric is glad because he likes his job, but he needs a break sometimes!

      He is very grateful to the sound engineer, the microphone holder,
      called the grip, the floor manager, the camera operator,
      the videotape operator and all the other people who work together
      on the news programme.
    `,
    ],
  },
  images: ["../images/pages/activities/p7_3.png"],
  questions: [
    {
      textfront: "What is Travis writing about?",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["He is an anchor"],
      alternateanswer: [
        "He is an anchorman",
        "Eric is an anchor",
        "Eric is an anchorman",
        "an anchor",
        "anchorman",
      ],

      strictcase: "no",
      type: "text",
    },
    // =========================================
    // Question 2
    // =========================================
    {
      textfront: "What does ‘it’ refer to on line 5?",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",
      answer: ["the news"],
      alternateanswer: ["news", "the day's news", "the news for the day"],
      strictcase: "no",
      type: "text",
    },
    {
      textfront:
        "Do you think Eric’s job is easy or hard? Talk about it with your class.",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: [],
      alternateanswer: [],

      ignorecheck: true,

      strictcase: "no",
      type: "text",
    },
  ],
};
