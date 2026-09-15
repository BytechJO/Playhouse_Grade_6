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
  mainTitleAudio: "../audios/P128/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>2</span> Answer it!",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p128answer.mp3",
  select: "single", // single (or) multiple
  shape: "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
  bgcolor: "none",
  numbering: "number",
  numberstartfrom: 1,
  numberofcolumns: 1,
  helpPopup: {
    title: "<span class='blue_text'>The Very Special Package</span>",

    image: "../images/pages/activities/6.jpg",

    paragraphs: [
      `
      My mum told me that it wouldn't be long! I must be patient. But I just couldn't wait!
      I kept pulling back the living room curtains and peeking out to see if the deliveryman had arrived.
      I thought about the very special package that Uncle Allan said was coming.

      <br><br>

      Uncle Allan told me that this very special package would be big, but not heavy.
      He said it could only be used once.
      He also said that it was made of paper, but could lift me off the ground.

      <br><br>

      When I asked my mum about it, she just smiled and said that I would have to wait until it got here.
      Waiting was killing me!

      <br><br>

      I called Aunt Lynn and asked her what the package was.
      Not knowing was driving me crazy.
    `,

      `
      She only explained that it was a very special present that I wouldn't forget.
      I trust Aunt Lynn. She's my favourite relative.

      <br><br>

      Aunt Lynn is married to my dad's brother.
      Our family is very close-knit.
      She told me that when my mum married my dad, our two families became one big family.

      <br><br>

      Aunt Lynn's kids are twins, and their names are Barney and Becky.
      They're like my siblings, but they're really my cousins.
      My mum calls her mother-in-law ‘Mum', even though she's really my dad's mum.

      <br><br>

      A delivery truck pulled up in front of our house.
      Could this be what I was waiting for?

      <br><br>

      I asked myself if the man in the uniform could be delivering the package from Uncle Allan.
      I watched the deliveryman walk around to the back of his van.

      <br><br>

      I thought that it must be a very big package if the deliveryman had to take it out of his van from the back.
      I imagined just how big it was.

      <br><br>

      The deliveryman seemed to be working very hard in the back of the van.
      He was jumping in and out and moving around as if he was trying to make space for a huge box.

      <br><br>

      My sister's fiancé does the same thing when he's unloading the car when we go on holiday.
      I just couldn't wait any longer.
    `,

      `
      I threw open the door and ran outside.
      I asked excitedly if there was a package for me.

      <br><br>

      He asked me if my name was Nolan.
      I could barely get the words out, but I told him yes.

      <br><br>

      Then he reached in to the van.
      He stretched his arm so far that his right leg came off the ground.

      <br><br>

      The deliveryman grunted as he pulled out what I thought would be a giant package.
      Then slowly, slowly, he pulled out … an envelope.

      <br><br>

      An envelope?
      He must be joking.
      This isn't what Uncle Allan had described!

      <br><br>

      I grabbed the envelope quickly from the deliveryman's hands and ran back inside the house.
      I tore open the envelope as my mum watched with a smile on her face.

      <br><br>

      I ripped out the small piece of paper from inside and turned it around so that I could read it.
      It was an aeroplane ticket!

      <br><br>

      A ticket to Italy to spend the summer with Uncle Allan, his new bride and his stepson and stepdaughter.
      What a great surprise!

      <br><br>

      I was so happy that I couldn't even speak.
      It was a very special package!
    `,
    ],
  },
  questions: [
    {
      question: "What is Nolan waiting for?",
      image: "",
      answer: [2],
      audio: "no",
      audioenable: "default", // correct (or) default
      numbering: "none", // alphabet (or) number (or) none
      numberstartfrom: "a",
      options: [
        {
          text: "<b>a</b> &nbsp; a delivery truck",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>b</b> &nbsp; a very special package",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
      ],
    },
    {
      question: "How did Nolan feel when he saw the special package?",
      image: "",
      answer: [1],
      audio: "no",
      audioenable: "default", // correct (or) default
      numbering: "none", // alphabet (or) number (or) none
      numberstartfrom: "a",
      options: [
        {
          text: "<b>a</b> &nbsp; He was excited.",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>b</b> &nbsp; He was upset because it was small.",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
      ],
    },
  ],
};
