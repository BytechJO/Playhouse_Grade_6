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
var mcq_data = {
  layout: 1,
  numinrow: [[1]],
  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_3_icon.png",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/p100/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>2</span> Choose it!",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p100choose.mp3",
  select: "single", // single (or) multiple
  shape: "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
  bgcolor: "none",
  numbering: "number",
  numberstartfrom: 1,
  numberofcolumns: 1,
  helpPopup: {
    title: "",

    image: "../images/pages/activities/6-img-1.png",

    paragraphs: [
      `
    Do you prefer to grab a quick snack from the market rather than waiting and making a healthy snack at home? 
    Do you exercise when it's easy, but when it's not, you prefer to lie on the sofa and watch TV? 
    Do you read the price tag but not the list of ingredients when buying food?

    <br><br>

    A few years ago, Jared Robins would have answered yes to all these questions. 
    His parents were health conscious, so he ate a somewhat healthy diet, 
    but he didn‘t have any real goals or a plan for getting in shape. 
    He mostly ate store-bought snacks and rarely exercised. 
    He did not have a balanced diet.

    <br><br>

    But then Jared began to get sick. 
    At first he thought it was just the flu, but his illness didn‘t go away. 
    He lost a lot of weight and kept getting sicker. 
    The doctors said that without changes in his life, 
    he would eventually have to use a wheelchair and might need surgery.
    `,

      `
    Then Jared found a plan for a balanced diet. 
    His dad was a nutritionist, so he knew a lot about planning healthy meals and staying fit, 
    but Jared wanted something different. 
    He preferred having a health plan that worked on all his health. 
    He came to understand that his health was not just physical, 
    but mental and emotional as well. 
    So Jared found a plan that would help him become completely healthy.

    <br><br>

    Jared's plan worked! 
    It happened slowly, but Jared got better. 
    He continued his health plan every day. 
    He was careful about his nutrition, 
    but he was also careful about the water, soap and lotion that he used.

    <br><br>

    He got plenty of physical exercise, 
    but he also stretched his muscles and exercised his brain. 
    He made sure he made time for his friends, 
    so he would be emotionally healthy.

    <br><br>

    Today, Jared is healthy and happy. 
    He has written a book to help others become the same way. 
    His health plan is really a life plan! 
    He's glad he found it before it was too late.
    `,
    ],
  },
  questions: [
    {
      question: "What does ‘nutritionist’ mean?",
      image: "",
      answer: [2],
      audio: "no",
      audioenable: "default", // correct (or) default
      numbering: "none", // alphabet (or) number (or) none
      numberstartfrom: "a",
      options: [
        {
          text: "<b>a</b> &nbsp; a person who cooks healthy meals",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>b</b> &nbsp; a person who plans healthy meals",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
      ],
    },
    {
      question:
        "If Jared didn't make changes in his life, he would  eventually have to be in a wheelchair.",
      image: "",
      answer: [1],
      audio: "no",
      audioenable: "default", // correct (or) default
      numbering: "none", // alphabet (or) number (or) none
      numberstartfrom: "a",
      options: [
        {
          text: "<b>a</b> &nbsp; True",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>b</b> &nbsp; False",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
      ],
    },
    {
      question:
        "What are good ways that Jared can improve his emotional health?",
      image: "",
      answer: [2],
      audio: "no",
      audioenable: "default", // correct (or) default
      numbering: "none", // alphabet (or) number (or) none
      numberstartfrom: "a",
      options: [
        {
          text: "<b>a</b> &nbsp; watch scary films",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>c</b> &nbsp; spend time with good friends",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>b</b> &nbsp; exercise his brain",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>d</b> &nbsp; be careful about water, soap and lotion",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
      ],
    },
  ],
};
