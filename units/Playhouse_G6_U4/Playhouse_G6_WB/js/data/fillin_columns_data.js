var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p20/2.mp3",
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
  mainTitleAudio: "../audios/p20/CONVERSATION.mp3",
  subTitleTextLeft:
    '<span class="blue_text">2</span> Answer it! Answer the questions below about the family‘s conversation about their flight.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/p20/2_Answer_it!_Answer_the_questions_below_about_the_family‘s_conversation_about_their_flight.mp3",
  defaultAnswer: -1,
  leftList: "",
  image: "",
  helpPopup: {
    title: "1 Read it and say it!",

    image: "",

    paragraphs: [
      `
      <b>Dad:</b>
      Are you ready for this holiday! Does everybody have their e-ticket, passport and hand luggage?
      <br><br>

      <b>Sister:</b>
      Yes, Dad. Do you know which flight is ours?
      <br><br>

      <b>Dad:</b>
      Yes, I do. Just remember that before we depart we must pass through security,
      and then they will tell us which gate number is ours.
      <br><br>

      <b>Mum:</b>
      I have the boarding cards that we got at check-in.
      We need these to board our flight.
      I am glad I did not forget them at the check-in counter!
      <br><br>

      <b>Brother:</b>
      May I sit by the window? I love to look out the window when the aeroplane takes off and lands.
    `,

      `
      <b>Sister:</b>
      Sure, the flight attendant said that you can sit by the window.
      I want to work on crossword puzzles and word searches from this activity book during the flight.
      <br><br>

      <b>Dad:</b>
      It looks like we are about to board the aeroplane.
      <br><br>

      <b>Sister:</b>
      How long will it take before the aeroplane departs?
      <br><br>

      <b>Mum:</b>
      As soon as everybody is on the aeroplane and we have put on our seat belts,
      the flight attendants will tell us when the aeroplane will take off.
      <br><br>

      <b>Sister:</b>
      The agent for the airlines was very nice.
      I think that I would like to be an agent for an airline because people are so happy
      when they go on holiday. I like to make people happy.
    `,

      `
      <b>Brother:</b>
      I just can’t wait until we get there.
      <br><br>

      <b>Sister:</b>
      This will be exciting! Did you say that we will be there in five hours?
      <br><br>

      <b>Dad:</b>
      We must hurry. They told us that our flight will be departing soon.
      This will be fun! I hope all of you are ready.
    `,
    ],
  },
  questions: [
    {
      textfront:
        "What three things did Dad make sure that everybody had before they boarded their flight?",

      audio: "../audios/p20/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["e-ticket passport and hand luggage"],

      alternateanswer: [
        [
          "e-ticket, passport and hand luggage",
          "e-ticket, passport, and hand luggage",
          "an e-ticket passport and hand luggage",
          "an e-ticket, passport and hand luggage",
          "e ticket passport and hand luggage",
          "e tickets passports and hand luggage",
          "e-ticket passports and hand luggage",
        ],
      ],

      strictcase: "no",
      type: "text",
    },
    {
      textfront:
        "Name one thing that the family must do before their flight departs?",

      audio: "../audios/p20/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["pass through security"],

      alternateanswer: [
        [
          "go through security",
          "pass through security",
          "go through the security",
          "pass through the security",
          "go to the gate",
          "go to their gate",
          "board the aeroplane",
          "board the airplane",
        ],
      ],

      strictcase: "no",
      type: "text",
    },
    {
      textfront: "Why does the sister want to become an airline agent?",

      audio: "../audios/p20/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["because she likes to make people happy"],

      alternateanswer: [
        [
          "she likes to make people happy",
          "because she likes making people happy",
          "she likes making people happy",
          "because people are so happy when they go on holiday",
          "people are happy when they go on holiday",
          "because she wants to make people happy",
          "because people are so happy when they go on holiday",
        ],
      ],

      strictcase: "no",
      type: "text",
    },
  ],
};
