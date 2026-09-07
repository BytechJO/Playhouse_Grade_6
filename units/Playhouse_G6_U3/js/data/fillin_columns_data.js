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
  numinrow: [[1, 1, 1]],
  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/adv_icon_1.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/p24/READING.mp3",
  subTitleTextLeft: '<span class="title-order">2</span> Answer it! ',
  subTitleTextRight: "Answer the questions about the article.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p24answer.mp3",
  activityheading: "",
  activityheading_audio: "../audios/under.mp3",
  activityicon: "../images/icons/key_icon.png",
  main_activityheading: "../images/pages/activities/WORD_POWER.jpg",
  main_activityheading_audio: "../audios/under.mp3",
  defaultAnswer: -1,
  leftList:
    '<ol type="1" class="words-list"> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li>  </ol>',
  image: "",
  helpPopup: {
    title: "Read the text",

    image: "",

    paragraphs: [
      `
      As of this year, the International Family Sports Festival will have held sports
      contests for students for 18 years. The competition was started for students who
      perform at a high level in order to encourage them to develop their talents.
      This year, the IFSF will have worked in cooperation with Youthfest for nine years.
      Youthfest is an international organisation that wants
      to celebrate the achievements of youth.
      Students between the ages of 8 and 17 can send an application to IFSF to enter the festival.
      Usually the entry deadline is in the month of November, and the awards ceremony is in March
      of the next year. The contestants can compete in team sports, individual sports, outdoor events,
      indoor events or strategy sports.
    `,

      `
      There is an entry fee of about €25 per person. For sports that are not well known,
      contestants should have submitted their rules to the IFSF by November. These rules
      should be no more than 45 pages long, and students aged 13 and younger will have gotten
      their parents‘ approval and signatures before the festival‘s entry deadline.
      Up until now, the IFSF has been a leader in developing talent in the sports industry.
      Many other local organisations are also starting to encourage young people to
      play sports. If you are interested, check with your school and city about which opportunities
      might be near you. There may be a lot available for you!
    `,
    ],
  },
  questions: [
    {
      textfront:
        "As of this year, how long will the contest have been going on for?",
      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["The contest will have been going on for 18 years"],

      alternateanswer: [
        "It will have been going on for 18 years",
        "The contest will have been going on for eighteen years",
        "It will have been going on for eighteen years",
        "The contest will have been held for 18 years",
        "It will have been held for 18 years",
        "The contest has been going on for 18 years",
        "It has been going on for 18 years",
        "For 18 years",
        "18 years",
        "For eighteen years",
        "eighteen years",
      ],

      strictcase: "no",
      type: "text",
    },

    {
      textfront: "Why does the IFSF have this competition each year?",
      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: [
        "The IFSF has this competition each year to encourage students to develop their talents",
      ],

      alternateanswer: [
        "To encourage students to develop their talents",
        "It is to encourage students to develop their talents",
        "It is held to encourage students to develop their talents",
        "The competition is held to encourage students to develop their talents",
        "The IFSF holds the competition to encourage students to develop their talents",
        "The IFSF has the competition to encourage students to develop their talents",
        "Because it encourages students to develop their talents",
        "Because the IFSF wants to encourage students to develop their talents",
        "To encourage them to develop their talents",
        "To help students develop their talents",
        "To help them develop their talents",
      ],

      strictcase: "no",
      type: "text",
    },

    {
      textfront:
        "Would you be interested in entering an IFSF contest? Why or why not?",
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
