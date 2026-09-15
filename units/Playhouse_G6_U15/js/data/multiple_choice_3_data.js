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
  mainTitleAudio: "../audios/P136/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>2</span> Answer it!",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p136answer.mp3",
  select: "single", // single (or) multiple
  shape: "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
  bgcolor: "none",
  numbering: "number",
  numberstartfrom: 1,
  numberofcolumns: 1,
  helpPopup: {
    title: "",

    image: "../images/pages/activities/5-img-1.png",

    paragraphs: [
      `
      I am Nancy Forrest. I am 51 years old, and I'd like to write about a very special friendship.
      How many friendships do you know that have lasted for a long time without the people ever meeting each other?
      That's how things were between my French pen friend Michele and me.
      We started writing to each other as teenagers, but it was 36 years before we met face-to-face.

      <br><br>

      Growing up, I looked for pen friends as I didn't have a sister or a brother to talk to.
      I remember the day my father brought me the envelope that had a letter and a picture of Michele inside it.
      It had been sent two weeks earlier.
      I was so excited!
      I had waited for this day for months.
    `,

      `
      Over the years, we exchanged photos, birthday cards and souvenirs.
      I began to know Michele better than any of my friends.

      <br><br>

      Michele is honest and friendly, and I like that in a friend.
      It made me feel good that I could tell her my secrets and dreams.
      She said she loved that I was talkative and polite.

      <br><br>

      It's funny how well we came to know each other because in all those years, we never met face-to-face.

      <br><br>

      In 1998, my husband gave me a wonderful birthday present.
      He gave me an aeroplane ticket to France to see Michele.
      He had already bought the ticket before he surprised me with the news.
      I shouted with joy.

      <br><br>

      Finally, I would get to see Michele in person after 36 years!
    `,

      `
      Michele, in person, is exactly how she is on paper;
      she is friendly, and not selfish or impatient.
      She is my best friend in the world!

      <br><br>

      We still write to each other every week, but now we are e-friends and not pen friends.
      We use the internet and social media sites to keep up with each other's lives.

      <br><br>

      I had known Michele before I got my first job, got married and had kids.

      <br><br>

      She is a true friend.
      I am lucky to have such a great friend.
    `,
    ],
  },
  questions: [
    {
      question: "What is the best title for this story?",
      image: "",
      answer: [2],
      audio: "no",
      audioenable: "default", // correct (or) default
      numbering: "none", // alphabet (or) number (or) none
      numberstartfrom: "a",
      options: [
        {
          text: "<b>a</b> &nbsp; a The End of a Friendship",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>b</b> &nbsp; b An Unforgettable Friendship",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>b</b> &nbsp; c The Beginning of a Friendship ",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
      ],
    },
  ],
};
