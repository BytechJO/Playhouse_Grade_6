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
  mainTitleAudio: "../audios/p72/READING.mp3",
  mainTitleIconPos: { right: "80px" },
  subTitleTextLeft: '<span class="title-order">2</span> Answer it!',
  subTitleTextRight:
    "Answer '<span class='red_text'>true</span>' or '<span class='red_text'>false</span>'.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p72answer.mp3",
  select: "single", // single (or) multiple
  shape: "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
  bgcolor: "none",
  numbering: "number",
  numberstartfrom: 1,
  numberofcolumns: 1,
  image: "",
  imageposition: "back",
  helpPopup: {
    title: "Read about Mark Beaumont",

    image: "../images/pages/activities/6.jpg",

    paragraphs: [
      `
      Meet Mark Beaumont, adventurer, cyclist and world traveller!
      Mark has been cycling and going on adventures for many years.
      Just recently he decided to try something that would challenge him
      beyond his usual workout. He had been training for a while, so he
      decided to try and cycle around the world!

      In August 2007, after he had been planning the trip for many months,
      Mark started his journey. It took him 194 days and 17 hours to cycle
      29,445 kilometres through 20 countries. He beat the previous
      circumnavigation record by 81 days! Mark was featured in a four-part
      BBC television series, and he wrote a book about his journey.
    `,

      `
      Vin Cox broke Mark's record in 2010, but Mark continues to go on
      adventures and write books. He likes to do many challenging activities
      to help raise money for charity, and he enjoys challenging himself.

      Mark has been going on adventures since he was a child. After he
      completed his circumnavigation trip and got some rest, he started
      planning his next adventure with the help of his mum and trainer.

      His next adventure would combine a cycling journey and mountain
      climbing trip. Mark started in Alaska in June 2009, and he finished
      his journey at the tip of South America in February 2010. He rode
      through the Rocky and Andes Mountains, and he climbed some of the
      highest mountains in North and South America.
    `,
    ],
  },
  questions: [
    {
      question:
        "<b>1</b> &nbsp;  Mark Beaumont is an adventurer, cyclist and world traveller.",
      options: ["True", "False"],
      answer: [1],
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
    },
    {
      question:
        "<b>2</b> &nbsp; Mark started going on adventures when he was 25.",
      options: ["True", "False"],
      answer: [2],
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
    },
    {
      question:
        "<b>3</b> &nbsp; In February 2010, Mark started his trip from Alaska to South America.",
      options: ["True", "False"],
      answer: [2],
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
    },
    {
      question:
        "<b>4</b> &nbsp; Mark’s mum and trainer helped him prepare for his new adventure.",
      options: ["True", "False"],
      answer: [1],
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
    },
    {
      question: "<b>&#9733;</b> &nbsp; Mark Beaumont likes adventures.",
      options: ["True", "False"],
      answer: [1],
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
    },
  ],
};
