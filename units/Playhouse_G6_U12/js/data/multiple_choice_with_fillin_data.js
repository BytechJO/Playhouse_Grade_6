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
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/P108/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>2</span> Answer it!",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p108answer.mp3",

  select: "single",
  shape: "roundrect",
  bgcolor: "none",
  showicon: "true",

  image: "",

  numbering: "number",
  numberstartfrom: 1,
  helpPopup: {
    title: "Being Prepared",

    image: "../images/pages/activities/5-img-1.png",

    paragraphs: [
      `
    You cut your finger. Your friend is stung by a bee. Life is full of cuts, bites and scrapes.
    Do you need to go to the hospital? Probably not, but if you see someone who is hurt,
    what's the first thing you should do?

    <br><br>

    These are questions we should all ask and find out the answers to, but sometimes
    people don't think about first aid until an accident happens . . . and that's too late.

    <br><br>

    It's good to know that most minor injuries can be taken care of with a little first aid.
    `,

      `
    Just about anyone can give basic first aid. You don't need any formal training.
    Just follow some important steps.

    <br><br>

    • First, keep a first aid kit in your home, work or school and car.
    It should have bandages, antiseptic, plasters and tweezers, just to name a few.
    If you use something from it, replace it right away.

    <br><br>

    • For a bee sting, first, remove the stinger.
    Scrape it with your fingernail or the edge of a credit card.
    Don't pull it out with tweezers. This will cause it to release more venom.
    Wash with soap and water and apply an ice pack.

    <br><br>

    • For small cuts and scratches, clean with soap and warm water.
    Wash away all dirt. Apply pressure to the wound until the bleeding stops.
    Put a sterile bandage on the wound.
    If you can't get the bleeding to stop, get to a doctor as quickly as possible.
    `,

      `
    • For nosebleeds, have the person sit down and lean forward a little.
    This will keep the blood from running down his throat.
    Pinch the nostril (or nostrils) for about 10 minutes.
    You can also place wet, cold cloths on the nose to help stop the bleeding.
    If the bleeding doesn't stop within 20 minutes, have the person see a doctor.

    <br><br>

    • Know the emergency numbers for your area.
    In many places you can dial 911 or 999 and receive help.
    Know where you are so that you can tell the emergency services where you are.

    <br><br>

    You have to keep yourself safe.
    Always look out for danger and send for help as soon as possible.
    Just being there for your friend will make them feel better,
    and you will be able to say what has happened when an adult or the ambulance comes along ...
    and that will be very helpful for everyone.
    `,
    ],
  },
  questions: [
    // =========================================================
    // 1
    // =========================================================
    {
      question: "What should you always have in your home, car and school?",

      answer: [2],

      audio: "",
      audioenable: "default",

      fillinanswer: "",

      options: [
        {
          text: "<span class='bold_text'>a</span> emergency numbers",
          image: "",
          audio: "no",
          audioenable: "default",
          needspaceafter: "no",
        },
        {
          text: "<span class='bold_text'>b</span> a first aid kit",
          image: "",
          audio: "no",
          audioenable: "default",
          needspaceafter: "no",
        },
        {
          text: "<span class='bold_text'>c</span> another person to help",
          image: "",
          audio: "no",
          audioenable: "default",
          needspaceafter: "no",
        },
        {
          text: "<span class='bold_text'>d</span> special training",
          image: "",
          audio: "no",
          audioenable: "default",
          needspaceafter: "no",
        },
      ],
    },

    // =========================================================
    // 2
    // =========================================================
    {
      question:
        "A person with a nosebleed should lean their head forward a little.",

      answer: [1],

      audio: "",
      audioenable: "default",

      fillinanswer: "",

      options: [
        {
          text: "<span class='bold_text'>a</span> True",
          image: "",
          audio: "no",
          audioenable: "default",
          needspaceafter: "no",
        },
        {
          text: "<span class='bold_text'>b</span> False",
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
        "If your friend falls off her bike and cuts her leg, what should you do?",

      answer: [1],

      audio: "",
      audioenable: "default",

      fillinanswer: "",

      options: [
        {
          text: "<span class='bold_text'>a</span> Wash the area with soap and water.",
          image: "",
          audio: "no",
          audioenable: "default",
          needspaceafter: "no",
        },
        {
          text: "<span class='bold_text'>b</span> Pinch the nostrils until the bleeding stops.",
          image: "",
          audio: "no",
          audioenable: "default",
          needspaceafter: "no",
        },
      ],
    },

    // =========================================================
    // 4
    // =========================================================
    {
      question: "If you have an emergency, what number do you dial?",

      answer: [],

      audio: "",
      audioenable: "default",

      fillinanswer: ["911", "999", "911 or 999", "999 or 911"],

      options: [],
    },
  ],
};
