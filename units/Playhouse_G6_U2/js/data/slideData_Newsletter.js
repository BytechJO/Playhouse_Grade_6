var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(0, 183, 206)",
  playListData: [
    {
      audiourl: "../audios/p19/demo.mp3",
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
var reading_data = {
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "100px" },
  mainTitleAudio: "../audios/p19/under.mp3",
  subTitleTextLeft: "PLAYHOUSE NEWSLETTER",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/p19/PLAYHOUSE_NEWSLETTER.mp3",
  slides: [
    {
      // "layout": "adventure_images_with_text",
      parent_class_name: "",

      mainImage: "../images/pages/news-letter/1-news-title.png",
      questionImage: "../images/pages/news-letter/1-conv-img.png",
      starImage: "../images/pages/news-letter/2-img-2-title.png",
      convImage: "../images/pages/news-letter/3-img-title.png",

      titleAudio: "../audios/P19/Want_to_Watch_a_Film_Being_Made.mp3",
      starTitleAudio: "../audios/P19/Star_Student.mp3",

      listen: {
        text: [
          "Do you love films? Do you want to be in a film? Do" +
            "you want to know how a film is made? Guess what?" +
            "Film companies make films all over the world, not" +
            "just on a set. It’s easy to ﬁnd out if a film crew is coming to your" +
            "neighbourhood. Here are a few tips on how to ﬁnd filming locations." +
            "Tip #1: Search the internet." +
            "There are plenty of websites that give you daily filming locations. Use the search words, ‘ﬁlming locations’. This will give you the exact info you need. You will quickly find out what is being filmed in your country or area. If you don’t live close to a big city, it might be a little harder." +
            "Tip#2: Check out street closings." +
            "If the film requires that streets be closed for filming, a street closing schedule will be released in your local newspapers. Plan a trip to the street on the day they are closing it. Get as close as you can. Maybe they will use you as an extra in the film!" +
            "Tip #3: Network." +
            "If you have a smartphone and are on Twitter, it’s very likely that you can find others’ status updates to clue you in to star sightings, best viewing spots or cool action scenes. Look on your city’s social media site. Usually their websites promote area activity. Check out their website or make a call to your local film office and ask for a schedule." +
            "Tip #4: Be prepared!" +
            "Bring a camera with a good zoom lens because you never know how many are just like you. You may not be able to stand close to the film set, but a camera with a good zoom lens will get you a fantastic picture that looks like you were up close." +
            "Bring plenty of snacks and water; you don’t know where you will end up getting the best view of things." +
            "Bring something to autograph! If you do get lucky, you don’t want to have to scramble around in your bag for a piece of paper! Just keep it small and simple; you will probably only have 30 seconds or so with your favourite star." +
            "Be flexible; sometimes the best scenes to watch are shot at night. They are also less crowded with spectators.",
        ],
        audio: ["../audios/p19/Want_to_Watch_a_Film_Being_Made.mp3"],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/1-news-title.png"], //
        second_image: ["../images/pages/news-letter/1-news-img.png"],
      },
      ///////////////////////////////////////////////////////////////////////////////////////////////////////// 2 //
      listen2: {
        text: [
          "<br> This month’s star student is Brad Allan. Brad’s father is the manager of Waritsat Golf Course. " +
            "Last month a large film company ﬁlmed a golf scene at Brad’s dad’s golf course. Brad was so " +
            "excited. His father let him go to the location and meet the stars of the film. You can see Brad in " +
            "the picture above getting an autograph from the famous actor Tim Miller. " +
            "Brad says that Mr. Miller was very nice and signed his hat. It said, ‘Brad, you’re a good kid. " +
            "Thanks for being a fan.’ " +
            "How exciting, Brad! Thanks for sharing your story with us! ",
        ],
        audio: ["../audios/p19/Star_Student.mp3"],
        titlesAudio: [""],
        titleTexts: ["Start Student"],
        top_image: ["../images/pages/news-letter/2-img-title.png"],
        second_image: ["../images/pages/news-letter/2-img.png"],
      },
      ///////////////////////////////////////////////////////////////////////////////////////////////////////// 3 //
      listen3: {
        text: [
          "Look at the picture.",
          "What doyou think they are saying?",
          "With a friend, act out the conversation! ",
        ],
        audio: ["../audios/p19/Pg4_1.2_Adult_Lady.mp3"],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/3-img.png"],
        second_image: ["../images/pages/news-letter/3-img-title.png"],
      },
      ///////////////////////////////////////////////////////////////////////////////////////////////////////// 4 //
      listen4: {
        title: "Can You Define Each or Find Its Synonym?",

        instruction:
          "A dictionary is used to look up the meaning of words or to find synonyms. A synonym is a word that means the same. Define or write a synonym for each Word Power word below.",

        top_image: [""],

        popupAudio: "",

        questions: [
          {
            singleword: false,

            text: "1. director [_]",

            textEnd: "",

            textaudios: [],

            audio: "",

            audioenable: "default",

            image: "",

            answer: ["film director"],

            alternateanswer: [
              ["movie director", "filmmaker", "person who directs a film"],
            ],

            strictcase: "no",

            strictorder: "yes",

            maxlength: 50,

            type: "text",
          },

          {
            singleword: false,

            text: "2. script [_]",

            textEnd: "",

            textaudios: [],

            audio: "",

            audioenable: "default",

            image: "",

            answer: ["screenplay"],

            alternateanswer: [
              ["written dialogue", "written text", "film script"],
            ],

            strictcase: "no",

            strictorder: "yes",

            maxlength: 50,

            type: "text",
          },

          {
            singleword: false,

            text: "3. producer [_]",

            textEnd: "",

            textaudios: [],

            audio: "",

            audioenable: "default",

            image: "",

            answer: ["film producer"],

            alternateanswer: [["movie producer", "person who produces a film"]],

            strictcase: "no",

            strictorder: "yes",

            maxlength: 50,

            type: "text",
          },

          {
            singleword: false,

            text: "4. action film [_]",

            textEnd: "",

            textaudios: [],

            audio: "",

            audioenable: "default",

            image: "",

            answer: ["action movie"],

            alternateanswer: [["adventure film", "action-packed film"]],

            strictcase: "no",

            strictorder: "yes",

            maxlength: 50,

            type: "text",
          },

          {
            singleword: false,

            text: "5. documentary [_]",

            textEnd: "",

            textaudios: [],

            audio: "",

            audioenable: "default",

            image: "",

            answer: ["non-fiction film"],

            alternateanswer: [
              ["factual film", "informational film", "film about real events"],
            ],

            strictcase: "no",

            strictorder: "yes",

            maxlength: 50,

            type: "text",
          },
        ],
      },
    },
  ],
};
