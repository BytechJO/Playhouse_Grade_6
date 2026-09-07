var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(0, 183, 206)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/demo.mp3",
    },
    { url: "" },
    { url: "" },
    { url: "" },
  ],
};

var fillin_data = {
  layout: 1,
  numinrow: [[1], [1], [1]],

  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_3_icon.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/p36/READING.mp3",

  subTitleTextLeft: '<span class="title-order">2</span> You do it! ',
  subTitleTextRight: "Answer the following questions about the blog.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p36doit.mp3",

  defaultAnswer: -1,
  leftList: "",
  image: "",
  helpPopup: {
    title: "Read the text",

    image: "../images/pages/activities/7.png",

    paragraphs: [
      `
      I'm Travis. This is my first time travelling out of the country
      on an aeroplane. I was nervous at first, but my parents travel a lot for their jobs,
      and they told me what to expect. This helped me so much.

      I hope that if I share my experience with you on this blog,
      you too will not be nervous and enjoy your holiday.

      Yesterday, my father told me that our flight will leave at 6:00pm.
      He said that if we want to have a smooth check-in, then we should be there
      at least two hours before our flight leaves. That was a good idea.
      Our check-in was so easy.
    `,

      `
      This year we are travelling with my little brother, Dean.
      He is only eight months old. My mum says that travelling with a baby isn't hard
      as long as you have got a good plan. This is what she says we should do:

      <br><b>1</b>
      <span class='under_line'>Keep your passports close by!</span>
      My dad puts all of our passports in his front pocket.
      This way he can get to everything quickly,
      and he can put them back quickly as well.

      <br><b>2</b>
      <span class='under_line'>Keep snacks and drinks at the top of your luggage!</span>
      My mum says that she always packs Dean's formula and snacks for me
      at the top of her hand luggage, so she can open the bag and get it out easily.
      That works out well for me too.

      Plus, Mum says that if Dean gets hungry, she can feed him quickly
      because his formula is easy to get to.
    `,

      `
      <br><b>3</b>
      <span class='under_line'>Bring everything you need and more!</span>

      My mum told us that when she and Dad travelled last time,
      they had some disasters. Everything went wrong!

      So this time, my mum says she is bringing more than enough.
      She packed extra wipes, extra snacks, some extra clothes for Dean
      and an extra T-shirt for me.

      Make sure that when YOU pack your bag,
      you put in lots of things that will keep you busy during the flight.

      I packed my HeeBeeJeeBee game and some extra batteries.
    `,

      `
      <br><b>4</b>
      <span class='under_line'>Keep it all together!</span>

      This is funny because my dad says that this means more than what you think!

      First, after you arrive at the check-in counter and they give you your boarding card,
      your e-ticket and your passport, make sure you keep them all in one place.

      After you pass security and go to your gate,
      everything will be right where you want it.

      My dad also says be ready for anything,
      so ‘Keep it all together!’ also means that you shouldn't get angry
      or upset when something goes wrong.

      Just breathe, relax and have a good time!
    `,
    ],
  },
  questions: [
    // =========================================
    // Question 1
    // =========================================
    {
      textfront: "What is Travis writing about?",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["His first time travelling out of the country on an aeroplane"],

      alternateanswer: [
        "His first time travelling out of the country",
        "His first time travelling on an aeroplane",
        "His first time traveling out of the country on an airplane",
        "His first time traveling out of the country",
        "His first time traveling on an airplane",
        "Travelling out of the country for the first time",
        "Traveling out of the country for the first time",
        "Travelling on an aeroplane for the first time",
        "Traveling on an airplane for the first time",
        "His first trip out of the country",
        "His first flight out of the country",
        "His travel experience",
        "Travelling",
        "Traveling",
      ],

      strictcase: "no",
      type: "text",
    },

    // =========================================
    // Question 2
    // =========================================
    {
      textfront:
        "Where does Travis’s dad keep the passports when they are at the airport?",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["In his front pocket"],

      alternateanswer: [
        "His front pocket",
        "In the front pocket",
        "In his pocket",
        "His pocket",
        "Travis's dad keeps the passports in his front pocket",
        "He keeps them in his front pocket",
        "He puts them in his front pocket",
        "In dad's front pocket",
        "In his dad's front pocket",
      ],

      strictcase: "no",
      type: "text",
    },

    // =========================================
    // Question 3 - Open Answer
    // =========================================
    {
      textfront:
        "What do you think is the best advice Travis gave about travelling? Why? Share your answers with the class.",

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
