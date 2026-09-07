var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p15/2.mp3",
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
  mainTitleAudio: "../audios/p15/CONVERSATION.mp3",
  subTitleTextLeft:
    '<span class="blue_text">2</span> Answer it! Answer the following questions.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/p15/2_Answer_it!_Answer_the_following_questions.mp3",
  activityheading: "",
  activityheading_audio: "../audios/p15/under.mp3",
  activityicon: "../images/icons/key_icon.png",
  main_activityheading: "../images/pages/activities/WORD_POWER.jpg",
  main_activityheading_audio: "../audios/p15/under.mp3",
  defaultAnswer: -1,
  leftList:
    '<ol type="1" class="words-list"> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li>  </ol>',
  image: "",
  helpPopup: {
    title: "1 Read it and say it!",

    image: "",

    paragraphs: [
      `
      <b>Joe:</b>
      I can’t believe how exciting this cricket match is!
      <br><br>

      <b>Randy:</b>
      Yes, this is my first match. It is just as exciting as ice hockey.
      <br><br>

      <b>Joe:</b>
      It must take a lot of training to become a good cricket player.
      It takes a lot of endurance to play for so many hours.
      <br><br>

      <b>Randy:</b>
      Yes, to get a run in cricket takes a lot of skill and strength.
      <br><br>

      <b>Joe:</b>
      Oh, look over there at the cricket pitch.
      It looks like he is going to get a run. It’s a run!
      <br><br>

      <b>Randy:</b>
      Yes! That’s great! Have you ever played ice hockey before?
      <br><br>

      <b>Joe:</b>
      No. Is it fun?
    `,

      `
      <b>Randy:</b>
      Why don’t you come to the ice rink with me some day.
      I go three times a week. By the time we leave,
      you’ll know how to hit a puck into the net!
      <br><br>

      <b>Joe:</b>
      That sounds like fun. Do you know how to play golf?
      I love to play. By the end of this year,
      I will have played 50 times.
      <br><br>

      <b>Randy:</b>
      I never have tried. I have always wanted to hit
      a hole in one and hear others shout, ‘Hole in one!’
      <br><br>

      <b>Joe:</b>
      Yes, I’ve hit a hole in one before.
      My dad and I were so surprised and happy!
      <br><br>

      <b>Randy:</b>
      Look! They may make another run. It’s a run!
      <br><br>

      <b>Joe:</b>
      They made one! I can’t wait to see more cricket
      matches in the future.
    `,
    ],
  },
  questions: [
    {
      textfront: "Do Joe and Randy like cricket? How can you tell?",
      audio: "../audios/p15/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Actor 1 doesn't want to do another take of a scene"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront:
        "What sport does Randy play? Do you think he is good at it? What makes you think this?",
      audio: "../audios/p15/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Actor 1 asks the director for a short break"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "Why does Randy want to learn how to play golf?",
      audio: "../audios/p15/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [
        "The director says yes to what Actor 1 asks because the director wants to talk to the producer for a minute",
      ],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
  ],
};
