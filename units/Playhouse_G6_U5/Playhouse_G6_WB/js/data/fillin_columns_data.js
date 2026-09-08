var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p25/2.mp3",
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
  numinrow: [[1, 1, 1]],
  mainTitle: "../images/pages/sb-icons/CONVERSATION.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/p25/CONVERSATION.mp3",
  subTitleTextLeft:
    '<span class="blue_text">2</span> Answer it! Answer the questions about the conversation.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/p25/2_Answer_it!_Answer_the_questions_about_the_conversation.mp3",
  defaultAnswer: -1,
  image: "",
  helpPopup: {
    title: "1 Read it and say it!",

    image: "",

    paragraphs: [
      `
      <b>Greg:</b>
      Did you see Dad’s new tablet PC?
      <br><br>

      <b>Stacy:</b>
      Yes. I can’t wait to use it. I hope he shows us how to use it soon.
      <br><br>

      <b>Greg:</b>
      Dad will mainly be using it for work.
      <br><br>

      <b>Stacy:</b>
      That reminds me. I have a school report that I need to scan and print.
      <br><br>

      <b>Greg:</b>
      I can do that for you. I will scan it using the scanner and have the printer print it for you.
    `,

      `
      <b>Stacy:</b>
      Thanks, Greg. It is right next to the desktop PC.
      <br><br>

      <b>Greg:</b>
      Do you know where the headphones are? I want to listen to something on the desktop PC in a little while.
      <br><br>

      <b>Stacy:</b>
      Yes, they’re right here by the mouse and keyboard on the desk.
      <br><br>

      <b>Greg:</b>
      Thanks. I got this new webcam so that I can see and talk to Aunt Sally on the internet.
      She should be online later.
    `,

      `
      <b>Stacy:</b>
      Oh, that’s great. I love all of this technology. It makes it so easy to keep up with family
      and friends and do school work.
      <br><br>

      <b>Greg:</b>
      Yes. Just think, Mum and Dad did not have all this technology when they were at school.
      <br><br>

      <b>Stacy:</b>
      I have that new science fiction film on my flash drive. Would you like to watch it with me?
      <br><br>

      <b>Greg:</b>
      Yes. I’ll turn on the speakers so that we can watch it together.
      <br><br>

      <b>Stacy:</b>
      Sounds like fun!
    `,
    ],
  },
  questions: [
    {
      textfront:
        "Why do you think Person A thought that sign language was strange?",
      audio: "../audios/p25/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [
        "Person A thought that sign language was strange because they haven't seen someone talking with their hands before",
      ],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
      hasAnswer: true,
    },
    {
      textfront: "What helps Person A to change their thinking? ",
      audio: "../audios/p25/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
      hasAnswer: false,
    },
    {
      textfront:
        "Think of a time when learning about a subject helped you understand it better and like it more. Tell about that time here: ",
      audio: "../audios/p25/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
      hasAnswer: false,
    },
  ],
};
