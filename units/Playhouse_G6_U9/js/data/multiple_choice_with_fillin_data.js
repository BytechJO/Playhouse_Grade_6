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
  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_3_icon.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/p80/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>2</span> Answer it!",
  subTitleTextRight: "Answer the questions.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p80answer.mp3",
  select: "single",
  shape: "roundrect",
  bgcolor: "none",
  showicon: "true",

  image: "",
  helpPopup: {
    title: "Read about the weather",

    image: "../images/pages/activities/5-img-1.png",

    paragraphs: [
      `
      Do you know that you can forecast the weather on your own?
      You don't need any fancy meterological equipment.
      You only need your senses. It's easy!

      <br><br>

      Use your sense of sight as you look up into the sky.
      What colour is it? Is it blue or grey? Is it clear?
      What kind of clouds do you see?

      <br><br>

      Clouds can tell you a lot about the weather.
      Thin, cirrus clouds point in the direction the wind is blowing.
      They predict good and fair weather for now.
      Another fair weather cloud is cumulus cloud.
      These cloud look like cotton wool balls in the air.

      <br><br>

      Maybe you see altocumulus clouds that look like sheep's wool.
      If you do, you can predict that there will be lower temperatures
      or a storm on its way.

      <br><br>

      If the sky is full of low, grey, nimbostratus clouds,
      you can count or light, but steady, drizzle.
      Cumulonimbus clouds are tall and dark.
      They bring storms. You should be prepared for thunder,
      lightning or severe weather.
    `,

      `
      You can't see the wind, but you can use your sense of sight
      to tell you how strongly it is blowing.

      <br><br>

      Look at the trees. Are the tops standing straight
      or are they bent way over?
      The stronger the wind, the more movement there will be.

      <br><br>

      What direction is it coming from?
      If it is coming from the south, it may bring warmer weather.
      If it comes from the north, the weather may turn cold.

      <br><br>

      Your sense of touch is also important in observing the weather.
      You don't need a thermometer because you can just ask yourself,
      'Does the air feel warm or cold on my skin?'

      <br><br>

      With a heatwave, you may feel the sun on your skin
      and with a cold spell, you may feel cooler
      as the clouds block the sun for a minute.

      <br><br>

      Using your senses is called observation.
      Meteorologists make observations to help them forecast the weather.

      <br><br>

      Now you know how your senses can help you observe
      what's happening right now.
      These observations can help you predict the weather.

      <br><br>

      Try it! You'll feel like you're on cloud nine
      if you predict it correctly.
    `,
    ],
  },
  numbering: "number",
  numberstartfrom: 1,

  questions: [
    // =========================================================
    // 1
    // =========================================================
    {
      question: "Name two kinds of fair weather clouds.",
      answer: [],
      audio: "",
      audioenable: "default",

      fillinanswer: [
        "cirrus and cumulus",
        "cumulus and cirrus",

        "cirrus cumulus",
        "cumulus cirrus",

        "cirrus, cumulus",
        "cumulus, cirrus",

        "cirrus clouds and cumulus clouds",
        "cumulus clouds and cirrus clouds",

        "cirrus cloud and cumulus cloud",
        "cumulus cloud and cirrus cloud",

        "cirrus clouds cumulus clouds",
        "cumulus clouds cirrus clouds",
      ],

      options: [],
    },

    // =========================================================
    // 2
    // =========================================================
    {
      question: "Using your senses is called",
      answer: [2],
      audio: "",
      audioenable: "default",

      fillinanswer: "",

      options: [
        {
          text: "a prediction.",
          image: "",
          audio: "no",
          audioenable: "default",
          needspaceafter: "no",
        },
        {
          text: "b observation.",
          image: "",
          audio: "no",
          audioenable: "default",
          needspaceafter: "no",
        },
        {
          text: "c direction.",
          image: "",
          audio: "no",
          audioenable: "default",
          needspaceafter: "no",
        },
      ],
    },

    // =========================================================
    // 3
    // =========================================================
    {
      question:
        "If the wind is coming from the south, what kind of weather will it bring?",
      answer: [],
      audio: "",
      audioenable: "default",

      fillinanswer: [
        "warmer weather",
        "warm weather",

        "it may bring warmer weather",
        "it will bring warmer weather",

        "it may bring warm weather",
        "it will bring warm weather",

        "the weather may get warmer",
        "the weather will get warmer",

        "warmer",
        "warm",
      ],

      options: [],
    },

    // =========================================================
    // 4
    // =========================================================
    {
      question:
        "These clouds look like sheep’s wool and tell that a storm may be on its way.",
      answer: [3],
      audio: "",
      audioenable: "default",

      fillinanswer: "",

      options: [
        {
          text: "a cumulus",
          image: "",
          audio: "no",
          audioenable: "default",
          needspaceafter: "no",
        },
        {
          text: "b nimbostratus",
          image: "",
          audio: "no",
          audioenable: "default",
          needspaceafter: "no",
        },
        {
          text: "c altocumulus",
          image: "",
          audio: "no",
          audioenable: "default",
          needspaceafter: "no",
        },
      ],
    },
  ],
};
