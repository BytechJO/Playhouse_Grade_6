var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(0, 183, 206)",
  type: "slider",
  playListData: [
    {
      audiourl: "../audios/p24/1.mp3",
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
var reading_data = {
  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/adv_icon_1.png",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/p24/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>1</span> Read about it!",
  subTitleTextRight: "Read the informational text below.",
  subTitleIcons: [""],
  subTitleAudio: "../audios/p24/1_Read_about_it!.mp3",
  numberofcolumns: 1,
  slides: [
    {
      parent_class_name: "",
      mainImage: "../images/pages/news-letter/2-img-1.png",

      slide_images: [
        "../images/pages/activities/1.png",
        "../images/pages/activities/10.png",
      ],

      slide_image_positions: ["top-left", "bottom-right"],

      listen: {
        // ...
      },

      title: "",

      array_text: [
        "<br> As of this year, the International Family Sports Festival will have held sports" +
          "contests for students for 18 years. The competition was started for students who " +
          "perform at a high level in order to encourage them to develop their talents." +
          "This year, the IFSF will have worked in cooperation with Youthfest for nine years." +
          "Youthfest is an international organisation that wants" +
          "to celebrate the achievements of youth." +
          "Students between the ages of 8 and 17 can send an application to IFSF to enter the festival." +
          "Usually the entry deadline is in the month of November, and the awards ceremony is in March " +
          "of the next year. The contestants can compete in team sports, individual sports, outdoor events," +
          "indoor events or strategy sports.",

        "<br> There is an entry fee of about €25 per person. For sports that are not well known, " +
          "contestants should have submitted their rules to the IFSF by November. These rules " +
          "should be no more than 45 pages long, and students aged 13 and younger will have gotten " +
          "their parents‘ approval and signatures before the festival‘s entry deadline." +
          "Up until now, the IFSF has been a leader in developing talent in the sports industry." +
          "Many other local organisations are also starting to encourage young people to" +
          "play sports. If you are interested, check with your school and city about which opportunities " +
          "might be near you. There may be a lot available for you!",
      ],
    },
  ],
};

var mcq_data = {
  layout: 1,
  numinrow: [[1]],
  mainTitle: "../images/pages/sb-icons/conv_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/conv_main_title_icon.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/p24/under.mp3",
  subTitleTextLeft: "",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/p24/under.mp3",
  subTitleAudio: "../audios/p24/under.mp3",
  select: "single", // single (or) multiple
  shape: "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
  bgcolor: "none",
  image: "",
  numbering: "number",
  numberstartfrom: 1,
  numberofcolumns: 1,
  title: "What is the main idea of this text?",
  questions: [
    {
      question: "",
      image: "",
      answer: [1],
      audio: "no",
      audioenable: "default", // correct (or) default
      options: [
        {
          text: "<b>a</b> &nbsp; Eric’s job as an anchorman",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>b</b> &nbsp; Eric only works on weekdays.",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>c</b> &nbsp; All the people who work with Eric.",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
      ],
    },
  ],
};
