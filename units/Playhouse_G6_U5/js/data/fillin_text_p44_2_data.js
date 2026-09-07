var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(0, 183, 206)",
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
var fillin_data = {
  layout: 1,
  numinrow: [[1], [1], [1], [1], [1]],
  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_3_icon.png",
  mainTitleAudio: "../audios/p44/READING.mp3",
  mainTitleIconPos: { right: "80px" },
  subTitleTextLeft: '<span class="title-order">2</span> Order it!',
  subTitleTextRight:
    "Write the correct number in each blank to put the events in order.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p44order.mp3",
  image: "",
  imageposition: "back", // "front" (or) "back"
  numbering: "number", // "alphabet" (or) "number"
  numberstartfrom: 1,
  options: [],
  helpPopup: {
    title: "Read the text",

    image: "../images/pages/activities/11.png",

    paragraphs: [
      `
      If you'd never heard talking before, how would you learn to talk?
      How can a deaf person communicate ideas to others?

      Before any official sign language was developed, many deaf people had their own ways of communicating.
      They made gestures and other ‘hand' signs. They could make some sounds, but most deaf people were mute.

      There was no official system of communication, so a deaf person could usually only communicate
      with close family and friends. A deaf person in one town would be using one system of gestures
      while someone in a nearby town used another.
    `,

      `
      In the 1700s, schools for the blind and deaf were organised.
      It was at one of these schools that Abbé de l'Épée developed a sign language
      that could be used by the deaf people of France.

      Thomas Gallaudet was starting a sign language system in America and travelled
      to the school that was opened by Épée.
      Mr. Gallaudet was taught the sign language that Épée developed.
    `,

      `
      Then he went back to America and taught sign language to the deaf people in America.
      Gallaudet, a major college for the deaf in America, is named after Mr. Gallaudet.

      Before the development of these sign language systems, many deaf people were forced
      to talk or just didn't get an education. With these two systems, the deaf finally had
      an organised system of communication.

      Today, many schools teach deaf students both talking and manual communication.
      Some deaf students go to classes at hearing schools with the help of an interpreter.

      Sign language is now used by hearing people also. Some parents will teach simple signs
      to their small children, so they can ask for things before they can talk.

      Signing songs is a useful way to communicate music to the deaf.
      Sign language is now accepted as a second language study in schools and universities.
    `,
    ],
  },
  questions: [
    {
      singleword: false,
      text: "[_]Abbé de l'Épée developed a manual language in France.",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["3"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: "[_]Deaf people only used gestures and home signs to communicate.",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["2"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: "[_]Thomas Gallaudet developed American Sign Language.",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["4"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: "[_]Deaf people were forced to talk or they did not receive any education.",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["1"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
  ],
};
