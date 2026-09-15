var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/P75/2.mp3",
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
  numinrow: [[1, 1, 1, 1]],
  mainTitle: "../images/pages/sb-icons/CONVERSATION.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/P75/CONVERSATION.mp3",
  subTitleTextLeft:
    '<span class="blue_text">2</span> Answer it! Answer the questions about the conversation.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/P75/2_Answer_it!_Answer_the_questions_about_the_conversation.mp3",
  defaultAnswer: -1,
  leftList: "",
  image: "",
  helpPopup: {
    title: "",

    image: "",

    paragraphs: [
      `
      <b>Ed:</b>
      It looks like you're kind of lost. Are you trying to find your next class?
      <br><br>

      <b>Bryan:</b>
      Yes, this is my first day of school here, and I don't remember where the B Hall is.
      I had seen it on my first trip to check out this school.
      <br><br>

      <b>Ed:</b>
      Oh, I have to go by there. It's where the science classes are.
      <br><br>

      <b>Bryan:</b>
      Great. I don't want to be late on my first day!
      <br><br>

      <b>Ed:</b>
      Yes, and it's a pretty big school.
      It's hard to know where everything is when you're not used to it.
      <br><br>

      <b>Bryan:</b>
      Yes, and I'm used to a small school in the country.
      I had lived in the country.
    `,

      `
      <b>Ed:</b>
      Take a left here. We're going to have to walk pretty fast.
      <br><br>

      <b>Bryan:</b>
      That's okay. I don't mind. By the way, my name's Bryan.
      <br><br>

      <b>Ed:</b>
      I'm Ed. Nice to meet you.
      Do you play any sports?
      The cricket team's having tryouts tomorrow.
      <br><br>

      <b>Bryan:</b>
      I had not played cricket at my old school, but I'm pretty good at football.
      I had played football at my old school.
      <br><br>

      <b>Ed:</b>
      Oh, we have a football team here, too.
      You might get used to cricket, though, if you play football well.
    `,

      `
      <b>Bryan:</b>
      Sure, I'll think about it.
      I'd be kind of nervous, though, since I'm not that good.
      <br><br>

      <b>Ed:</b>
      Well, I'll be there and can introduce you to the other guys.
      There will be players of all abilities there since it's just the tryouts.
      Many had played cricket for a few years.
      <br><br>

      <b>Bryan:</b>
      Thanks, I just might try it.
      Oh, is this the B Hall?
      <br><br>

      <b>Ed:</b>
      Yes, it is. Your class is to the right over there.
      <br><br>

      <b>Bryan:</b>
      Thanks very much. See ya around.
    `,
    ],
  },
  questions: [
    {
      textfront: "Do you think Ed is friendly? Why or why not?",
      audio: "../audios/P75/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "Do you think Bryan is friendly? Why or why not?",
      audio: "../audios/P75/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "Do you think Ed is polite? Why or why not?",
      audio: "../audios/P75/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "Do you think Bryan is polite? Why or why not?",
      audio: "../audios/P75/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
  ],
};
