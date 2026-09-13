var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p65/2.mp3",
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
  mainTitleAudio: "../audios/p65/CONVERSATION.mp3",
  subTitleTextLeft:
    '<span class="blue_text">2</span> Answer it! Answer the questions about the conversation.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/p65/2_Answer_it!_Answer_the_questions_about_the_conversation.mp3",
  defaultAnswer: -1,
  leftList: "",
  image: "",
  helpPopup: {
    title: "1 Read it and say it!",

    image: "",

    paragraphs: [
      `
      <b>Robin:</b>
      Do you think that Dad and Mum will take us to the beach tomorrow?
      If they take us, I will take photos and upload them.
      Dad and Mum always let me upload photos of special times.
      <br><br>

      <b>Joshua:</b>
      Yes, I think that we are going to go.
      Will you please tag me if you take any photos of me?
      <br><br>

      <b>Robin:</b>
      Sure. I will add them to my family album.
      My friends love to see my photos that I take of my holidays and special times.
      If I upload photos, my friends will always like them.
      <br><br>

      <b>Joshua:</b>
      My friends do, too.
      I shared the photos you took of the picnic, and everybody liked them.
      If I share photos, they will always make great comments.
    `,

      `
      <b>Robin:</b>
      I checked newsfeed yesterday, and Sharon posted on her timeline that she is going to be at her grandmother’s during the summer holidays.
      <br><br>

      <b>Joshua:</b>
      I bet she will have fun if she goes to her grandmother’s.
      Her grandmother lives right by the lake.
      <br><br>

      <b>Robin:</b>
      Yes, I think she will.
      I sent Lea a friend request.
      I miss her since she moved away to another city.
      <br><br>

      <b>Joshua:</b>
      At least you can chat with her over the Internet.
      I chat with Doug even though he lives two hours away now.
      If Doug gets online soon, I will chat with him.
    `,

      `
      <b>Robin:</b>
      I really love being able to chat with family and friends over the internet.
      It is fun to share things and photos with them.
      <br><br>

      <b>Joshua:</b>
      It is a great way to communicate with family and friends.
      <br><br>

      <b>Robin:</b>
      Terry is online.
      I will say hello to her.
      I will tell her that we are going to the beach tomorrow.
      Maybe she will come with us if she is not busy!
    `,
    ],
  },
  questions: [
    {
      textfront:
        "Do Robin and Joshua use the internet to tell others about things that happen to them? What makes you think that?",
      audio: "../audios/p65/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "Is Robin online now? What makes you think that?",
      audio: "../audios/p65/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront:
        "Do you think that social media is a good way to communicate with family and friends?",
      audio: "../audios/p65/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
  ],
};
