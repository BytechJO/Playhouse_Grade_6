var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p21/1.mp3",
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
  numinrow: [[1, 1, 1, 1, 1, 1, 1, 1, 1]],
  mainTitle: "../images/pages/sb-icons/grammer_main_title.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/p21/GRAMMAR.mp3",
  subTitleTextLeft:
    '<span class="blue_text">1</span> Change it! Change the direct quote into a sentence with ‘<b>said</b>‘ or ‘<b>told</b>‘',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/p21/1_Change_it!_Change_the_direct_quote_into_a_sentence_with_‘said‘_or_‘told‘.mp3",
  defaultAnswer: -1,
  leftList: "",
  image: "",
  questions: [
    {
      textfront:
        "‘Alice, write your name on your paper first,’ said the teacher.",
      audio: "../audios/p21/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["the teacher told alice to write her name on her paper first"],

      alternateanswer: [
        [
          "the teacher told alice to write her name on her paper",
          "the teacher told alice to write her name on the paper first",
          "the teacher told alice to write her name on the paper",
        ],
      ],

      strictcase: "no",
      type: "text",
    },

    {
      textfront:
        "Lisa said, ‘Call me as soon as you finish dinner with your family.’",
      audio: "../audios/p21/under.mp3",
      audioenable: "default",
      image: "",

      answer: [
        "lisa told me to call her as soon as i finished dinner with my family",
      ],

      alternateanswer: [
        [
          "lisa told me to call her as soon as i finish dinner with my family",
          "lisa told me to call her when i finished dinner with my family",
          "lisa told me to call her when i finish dinner with my family",
        ],
      ],

      strictcase: "no",
      type: "text",
    },

    {
      textfront:
        "My sister said, ‘Steven, remember to wash the dishes before you go.’",
      audio: "../audios/p21/under.mp3",
      audioenable: "default",
      image: "",

      answer: [
        "my sister told steven to remember to wash the dishes before he went",
      ],

      alternateanswer: [
        [
          "my sister told steven to remember to wash the dishes before he goes",
          "my sister told steven to wash the dishes before he went",
          "my sister told steven to wash the dishes before he goes",
        ],
      ],

      strictcase: "no",
      type: "text",
    },

    {
      textfront: "‘The team practises many hours each day,’ said Greg.",
      audio: "../audios/p21/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["greg said that the team practised many hours each day"],
      alternateanswer: [
        [
          "greg said the team practised many hours each day",
          "greg said that the team practises many hours each day",
          "greg said the team practises many hours each day",
          "greg said that the team practiced many hours each day",
          "greg said the team practiced many hours each day",
        ],
      ],

      strictcase: "no",
      type: "text",
    },

    {
      textfront: "The teacher said, ‘I’d like to meet our new student.’",
      audio: "../audios/p21/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["the teacher said that she would like to meet our new student"],

      alternateanswer: [
        [
          "the teacher said she would like to meet our new student",
          "the teacher said that she'd like to meet our new student",
          "the teacher said she'd like to meet our new student",
          "the teacher said that she would like to meet the new student",
          "the teacher said she would like to meet the new student",
          "the teacher said that she'd like to meet the new student",
          "the teacher said she'd like to meet the new student",

          "the teacher said that she would like to meet their new student",
          "the teacher said she would like to meet their new student",
        ],
      ],

      strictcase: "no",
      type: "text",
    },

    {
      textfront:
        "The captain said, ‘Chris, I’d like to ask you a few questions.’",
      audio: "../audios/p21/under.mp3",
      audioenable: "default",
      image: "",

      answer: [
        "the captain told chris that he would like to ask him a few questions",
      ],

      alternateanswer: [
        [
          "the captain told chris he would like to ask him a few questions",
          "the captain told chris that he'd like to ask him a few questions",
          "the captain told chris he'd like to ask him a few questions",
        ],
      ],

      strictcase: "no",
      type: "text",
    },

    {
      textfront: "I said, ‘Please come to our house at 5:00 for dinner.’",
      audio: "../audios/p21/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["i told them to come to our house at 5:00 for dinner"],

      alternateanswer: [
        [
          "i told them to come to our house at 5 for dinner",
          "i told them to please come to our house at 5:00 for dinner",
          "i asked them to come to our house at 5:00 for dinner",
        ],
      ],

      strictcase: "no",
      type: "text",
    },

    {
      textfront:
        "‘Paul, clean your room first, and then maybe we can go to the park,’ Dad said.",
      audio: "../audios/p21/under.mp3",
      audioenable: "default",
      image: "",

      answer: [
        "dad told paul to clean his room first and then maybe they could go to the park",
      ],

      alternateanswer: [
        [
          "dad told paul to clean his room first and then maybe they could go to the park",
          "dad told paul to clean his room first and then maybe they can go to the park",
          "dad told paul to clean his room first then maybe they could go to the park",
          "dad told paul to clean his room first then maybe they can go to the park",

          "dad told paul to clean his room first and then said that maybe they could go to the park",
          "dad told paul to clean his room first and said that maybe they could go to the park",
        ],
      ],

      strictcase: "no",
      type: "text",
    },

    {
      textfront:
        "‘It will be cloudy with a chance of snow,’ the weather reporter said.",
      audio: "../audios/p21/under.mp3",
      audioenable: "default",
      image: "",

      answer: [
        "the weather reporter said that it would be cloudy with a chance of snow",
      ],

      alternateanswer: [
        [
          "the weather reporter said it would be cloudy with a chance of snow",
          "the weather reporter said that it will be cloudy with a chance of snow",
          "the weather reporter said it will be cloudy with a chance of snow",
        ],
      ],

      strictcase: "no",
      type: "text",
    },
  ],
};
