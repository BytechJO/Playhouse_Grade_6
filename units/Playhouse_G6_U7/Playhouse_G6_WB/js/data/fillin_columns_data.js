var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p35/3.mp3",
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
  mainTitleAudio: "../audios/p35/CONVERSATION.mp3",
  subTitleTextLeft:
    '<span class="blue_text">3</span> Answer it! Answer the questions about the first conversation.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/p35/3_Answer_it!_Answer_the_questions_about_the_first_conversation.mp3",
  defaultAnswer: -1,
  leftList: "",
  image: "",
  helpPopup: {
    title: "1 Read it and say it!",

    image: "",

    paragraphs: [
      `
      <b>Warren:</b> Did you hear? They’re going to do a spacewalk on Mars!
      <br><br>

      <b>Susan:</b> Hasn’t a rocket already been to Mars?
      <br><br>

      <b>Warren:</b> They’ve sent rockets there before, but no people have been there yet.
      <br><br>

      <b>Susan:</b> Mars is a little cold, isn’t it?
      <br><br>

      <b>Warren:</b> Well, everywhere in space is either too hot or too cold for people. Earth is the only planet that we can live on easily. But yes, Mars is very cold.
      <br><br>

      <b>Susan:</b> The spacesuits the astronauts wear must give them lots of protection.
    `,

      `
      <b>Warren:</b> Yes, when they go to Mars, they depend a lot on their spacesuits and supplies.
      <br><br>

      <b>Susan:</b> Why are they going to Mars?
      <br><br>

      <b>Warren:</b> They hope to set up a space station there and study the planet.
      <br><br>

      <b>Susan:</b> Are they going to travel in a special rocket?
      <br><br>

      <b>Warren:</b> Yes. It will blast off and travel through outer space to get there. I am going to watch it on TV. I get so excited hearing them do the countdown before the rocket blasts off.
      <br><br>

      <b>Susan:</b> Oh, I’m going to see if I can watch it as well. How do they travel around stars and satellites?
    `,

      `
      <b>Warren:</b> They use radars when they travel in outer space. They can detect things that are very far off.
      <br><br>

      <b>Susan:</b> Wow, they’re going to have a sleepover on Mars! I had to talk my parents into letting me go to camp because it was out of town!
      <br><br>

      <b>Warren:</b> Yeah, can you imagine sleeping in a space station in outer space!
      <br><br>

      <b>Susan:</b> That would be a strange way to sleep. Astronauts have a lot of new things to get used to.
      <br><br>

      <b>Warren:</b> Yes, but I think it would be worth it. What an adventure!
    `,
    ],
  },
  questions: [
    {
      textfront: "Where are the astronauts going?",
      audio: "../audios/p35/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["The astronauts are going to Mars"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "What is the temperature like on Mars?",
      audio: "../audios/p35/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["The temperature on Mars is very cold"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "Why are radars important for space travel?",
      audio: "../audios/p35/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [
        "Radars are important for space travel because they can detect things very far off",
      ],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront:
        "Do you think the life of an astronaut is adventurous? Why or why not?",
      audio: "../audios/p35/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
      noAnswer: true,
    },
  ],
};
