var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(0, 183, 206)",
  type: "text",
  playListData: [],
};

var preference_choose_data = {
  mainTitle: "../images/pages/sb-icons/language-building.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleIconPos: { right: "100px" },
  mainTitleAudio: "../audios/p101/LANGUAGE_BUILDING.mp3",
  subTitleTextLeft: "<span class='title-order'>2</span> Choose it!",
  subTitleTextRight:
    "Complete each sentence by choosing the correct preference (<span class='red_text'>prefer / would rather</span>).",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p101choose.mp3",

  questions: [
    {
      number: 1,
      before: "Kyle",
      after: "jogging to swimming.",
      image: "../images/pages/activities/7-img-1.png",
      options: [
        {
          value: "prefers",
          label: "prefers",
        },
        {
          value: "would rather",
          label: "would rather",
        },
      ],
      answer: "prefers",
    },

    {
      number: 2,
      before: "I",
      after: "eat a salad than cake.",
      image: "../images/pages/activities/7-img-4.png",
      options: [
        {
          value: "prefer",
          label: "prefer",
        },
        {
          value: "would rather",
          label: "would rather",
        },
      ],
      answer: "would rather",
    },

    {
      number: 3,
      before: "Do you",
      after: "the red shirt?",
      image: "../images/pages/activities/7-img-2.png",
      options: [
        {
          value: "prefer",
          label: "prefer",
        },
        {
          value: "would rather",
          label: "would rather",
        },
      ],
      answer: "prefer",
    },

    {
      number: 4,
      before: "I",
      after: "play piano than sing.",
      image: "../images/pages/activities/7-img-5.png",
      options: [
        {
          value: "prefer",
          label: "prefer",
        },
        {
          value: "would rather",
          label: "would rather",
        },
      ],
      answer: "would rather",
    },

    {
      number: 5,
      before: "Do you",
      after: "cats or dogs?",
      image: "../images/pages/activities/7-img-3.png",
      options: [
        {
          value: "prefer",
          label: "prefer",
        },
        {
          value: "would rather",
          label: "would rather",
        },
      ],
      answer: "prefer",
    },

    {
      number: 6,
      before: "I",
      after: "eating cake to eating pie.",
      image: "../images/pages/activities/7-img-6.png",
      options: [
        {
          value: "prefer",
          label: "prefer",
        },
        {
          value: "would rather",
          label: "would rather",
        },
      ],
      answer: "prefer",
    },
  ],
};
