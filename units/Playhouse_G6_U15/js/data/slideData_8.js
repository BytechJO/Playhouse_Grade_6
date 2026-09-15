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

var reading_data = {
  mainTitle: "../images/pages/sb-icons/language-building.png",

  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",

  mainTitleIconPos: {
    right: "100px",
  },

  mainTitleAudio: "../audios/p137/LANGUAGE_BUILDING.mp3",

  subTitleTextLeft: "<span class='title-order'>1</span> Read about it!",

  subTitleTextRight: "",

  subTitleIcons: [""],

  subTitleAudio: "../audios/p137/1_Read_about_it!.mp3",

  slides: [
    {
      layout: "past_participle_card",

      parent_class_name: "past_participle_slide",

      audio: [
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
      ],

      title: "Past Participle",

      description:
        "We use a <span class='pp-blue'>past participle</span> verb to speak about something that happened in the past. " +
        "<span class='pp-blue'>Past participles</span> usually end in <span class='pp-blue'>'-ed'</span> for regular verbs, but are different for irregular verbs.",

      regularTitle: "Regular Verbs",

      regularVerbs: [
        {
          past: "brushed",
          participle: "brushed",
        },
        {
          past: "closed",
          participle: "closed",
        },
        {
          past: "looked",
          participle: "looked",
        },
        {
          past: "travelled",
          participle: "travelled",
        },
      ],

      irregularTitle: "Irregular Verbs",

      irregularVerbs: [
        {
          past: "thought",
          participle: "thought",
        },
        {
          past: "gave",
          participle: "given",
        },
        {
          past: "broke",
          participle: "broken",
        },
        {
          past: "was",
          participle: "been",
        },
      ],
    },
  ],
};
