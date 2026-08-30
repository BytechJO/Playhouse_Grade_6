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
  numinrow: [[1], [1], [1], [1], [1]],
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
  images: ["../images/pages/activities/p7_3.png"],
  questions: [
    {
      singleword: false,
      text: "<b>1</b> &nbsp;&nbsp; What is Eric’s job?[_]",
      textEnd: "",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["He is an anchor"],
      alternateanswer: [
        [
          "He is an anchorman",
          "Eric is an anchor",
          "Eric is an anchorman",
          "an anchor",
          "anchorman",
        ],
      ],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 500,
      type: "text",
    },

    {
      singleword: false,
      text: "<b>2</b> &nbsp;&nbsp; What does ‘it’ refer to on line 5?[_]",
      textEnd: "",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["the news"],
      alternateanswer: [["news", "the day's news", "the news for the day"]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 500,
      type: "text",
    },
  ],
};
