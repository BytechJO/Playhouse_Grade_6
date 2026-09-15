var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/P70/2.mp3",
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
  mainTitle: "../images/pages/sb-icons/CONVERSATION.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/P70/CONVERSATION.mp3",
  subTitleTextLeft:
    "<span class='red_text'>2</span> Complete it! From the conversation, fill in the family tree for Brad and Liz's family.",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/P70/2_Complete_it!_From_the_conversation_fill_in_the_family_tree_for_Brad_and_Liz's_family.mp3",
  image: "",
  imageposition: "back", // "front" (or) "back"
  defaultAnswer: 1,
  numbering: "none", // "alphabet" (or) "number"
  numberstartfrom: 1,
  options: [],
  optionsAudios: [],
  helpPopup: {
    title: "",

    image: "",

    paragraphs: [
      `
      <b>Brad:</b>
      Hey, Uncle Eric and Aunt Sharon are coming today!
      <br><br>

      <b>Liz:</b>
      Yes! That means I can play with Sarah and Lindsay!
      <br><br>

      <b>Brad:</b>
      Yes, and Michael, Jason and I are going to go fishing.
      They told me that they want to go fishing today.
      <br><br>

      <b>Liz:</b>
      Mum will be happy to see her sister again.
      Mum said that she misses her so much.
      I love it when our extended family gets together.
      <br><br>

      <b>Brad:</b>
      Especially when our cousins come over.
      It’s fun to play with kids our age.
      Even Michael said, ‘I think that I have the best family because there are great kids my age.’
    `,

      `
      <b>Liz:</b>
      Is Mum cooking a special dinner?
      <br><br>

      <b>Brad:</b>
      Yes, tacos! Plus we’ll have apple pie for dessert.
      Dad asked Mum to make apple pie.
      <br><br>

      <b>Liz:</b>
      It sure sounds delicious.
      Maybe we can get teams together after dinner and play football.
      <br><br>

      <b>Brad:</b>
      Yeah, if we had our other siblings Matt and Janet, our cousins and some children from the neighbourhood, we could have two good teams.
      <br><br>

      <b>Liz:</b>
      My team will beat your team!
      <br><br>

      <b>Brad:</b>
      That we’ll have to wait and see about.
      Who do you want on your team?
      Matt explained to me that he likes playing on my team.
    `,

      `
      <b>Liz:</b>
      The whole group decides how we pick teams.
      Maybe we can have the neighbourhood versus everyone who is related to us.
      <br><br>

      <b>Brad:</b>
      I’m sure glad we have such a close-knit family.
      It’s fun to be able to do lots of things together.
    `,
    ],
  },
  questions: [
    {
      singleword: false,
      text: " &nbsp; Father: [_]",
      textaudios: ["../audios/P74/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: " &nbsp; Mother: [_]",
      textaudios: ["../audios/P74/under.mp3", "../audios/P74/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: " &nbsp; Uncle: [_]",
      textaudios: ["../audios/P74/under.mp3", "../audios/P74/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Eric"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: " &nbsp; Aunt: [_]",
      textaudios: ["../audios/P74/under.mp3", "../audios/P74/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Sharon"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: " &nbsp; child 1:[_]",
      textaudios: ["../audios/P74/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Brad"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: " &nbsp; child 2:[_]",
      textaudios: ["../audios/P74/under.mp3", "../audios/P74/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Liz"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: " &nbsp; child 3:[_]",
      textaudios: ["../audios/P74/under.mp3", "../audios/P74/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Matt"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: " &nbsp; child 4:[_]",
      textaudios: ["../audios/P74/under.mp3", "../audios/P74/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Janet"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: " &nbsp; child 1:[_]",
      textaudios: ["../audios/P74/under.mp3", "../audios/P74/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Sarah"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: " &nbsp; child 2:[_]",
      textaudios: ["../audios/P74/under.mp3", "../audios/P74/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Lindsay"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: " &nbsp; child 3:[_]",
      textaudios: ["../audios/P74/under.mp3", "../audios/P74/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Michael"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
    {
      singleword: false,
      text: " &nbsp; child 4:[_]",
      textaudios: ["../audios/P74/under.mp3", "../audios/P74/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Jason"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
  ],
};
