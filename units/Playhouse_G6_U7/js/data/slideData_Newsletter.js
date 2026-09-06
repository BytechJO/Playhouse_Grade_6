var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(0, 183, 206)",
  playListData: [
    {
      audiourl: "../audios/p67/demo.mp3",
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
  mainTitleAudio: "../audios/p67/under.mp3",
  subTitleTextLeft: "PLAYHOUSE NEWSLETTER",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/p67/PLAYHOUSE_NEWSLETTER.mp3",
  slides: [
    {
      // "layout": "adventure_images_with_text",
      parent_class_name: "",

      mainImage: "../images/pages/news-letter/1-news-title.png",
      questionImage: "../images/pages/news-letter/1-conv-img.png",
      starImage: "../images/pages/news-letter/2-img-2-title.png",
      convImage: "../images/pages/news-letter/3-img-title.png",

      titleAudio: "../audios/P67/Thats_a_Cool_Monkey.mp3",
      starTitleAudio: "../audios/P67/Star_Student.mp3",

      listen: {
        text: [
          "Did you know that people aren't the only living things that have been sent into space? Since the sixth grade is" +
            "studying space right now, we talked to the science teachers to see what they knew about space travel. We" +
            "found out that several animals have actually travelled to space! There are some interesting stories about" +
            "creatures in space. The first creatures in space were fruit ﬂies sent in a U.S. V2 rocket in " +
            "1947. Shortly after that, Rhesus monkeys were sent into space on 'Albert' ﬂights in the 1950s and 1960s." +
            "Sadly, most of the monkeys died because of parachute failure and other problems. Russia began sending dogs" +
            "into space in 1951. The first one to make it back alive was Laika in 1957. Two years later, two monkeys" +
            "named Able and Baker became the first monkeys to successfully return from space travel. In 1959, the first " +
            "rabbit was sent into space. In 1970, NASA sent two bullfrogs into outer space to measure motion sickness," +
            "and in 1972, they sent pocket mice, the first fish and the first spider to space. All of these animals" +
            "survived and helped NASA to collect lots of information about how people and animals live in space." +
            "When these animals survived, scientists started sending people to space instead!",
        ],
        audio: ["../audios/p67/Thats_a_Cool_Monkey.mp3"],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/1-news-title.png"], //
        second_image: ["../images/pages/news-letter/1-news-img.png"],
      },
      ///////////////////////////////////////////////////////////////////////////////////////////////////////// 2 //
      listen2: {
        text: [
          "How did we get all of this information about animals in space?" +
            "From this month's star student, Chris Baker. Mr. Baker, Chris Baker's father, works for NASA! Chris" +
            "tells us that his dad works as a veterinarian here in town, but he also works for NASA." +
            "Mammals are not sent into space much anymore. Instead, mostly insects and worms are sent for" +
            "experimentation. Many scientists hope to use insects to find about the long-term eﬀects of staying in " +
            "outer space. Mr. Baker enjoys his work with NASA. He says that he thinks using animals to help scientists is okay" +
            "as long as the animals aren't hurt. He thinks that scientists should be careful to make the trip into space" +
            "safe and comfortable for the animals. What do you think?" +
            "<br> by Jenny <br> Photo by Yoshi",
        ],
        audio: ["../audios/p67/Star_Student.mp3"],
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
        audio: ["../audios/p67/Pg4_1.2_Adult_Lady.mp3"],
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
          // =====================================================
          // 1. tablet PC
          // =====================================================

          {
            singleword: false,

            text: "1. planet [_]",

            textEnd: "",

            textaudios: [],

            audio: "",

            audioenable: "default",

            image: "",

            answer: ["a portable computer with a touchscreen"],

            alternateanswer: [
              [
                "a portable computer",
                "a touchscreen computer",
                "a small portable computer",
                "a computer with a touchscreen",
                "a portable touchscreen computer",
                "a mobile computer with a touchscreen",
                "tablet",
                "tablet computer",
              ],
            ],

            strictcase: "no",

            strictorder: "yes",

            maxlength: 150,

            type: "text",
          },

          // =====================================================
          // 2. webcam
          // =====================================================

          {
            singleword: false,

            text: "2. astronaut [_]",

            textEnd: "",

            textaudios: [],

            audio: "",

            audioenable: "default",

            image: "",

            answer: ["a camera used with a computer"],

            alternateanswer: [
              [
                "a computer camera",
                "a camera connected to a computer",
                "a camera for a computer",
                "a camera used on the internet",
                "an internet camera",
                "a camera used for video calls",
                "a camera for video calls",
                "web camera",
              ],
            ],

            strictcase: "no",

            strictorder: "yes",

            maxlength: 150,

            type: "text",
          },

          // =====================================================
          // 3. speakers
          // =====================================================

          {
            singleword: false,

            text: "3. spacesuit [_]",

            textEnd: "",

            textaudios: [],

            audio: "",

            audioenable: "default",

            image: "",

            answer: ["devices that produce sound"],

            alternateanswer: [
              [
                "devices used to produce sound",
                "devices that play sound",
                "devices for playing sound",
                "devices that make sound",
                "equipment that produces sound",
                "sound devices",
                "audio devices",
                "loudspeakers",
              ],
            ],

            strictcase: "no",

            strictorder: "yes",

            maxlength: 150,

            type: "text",
          },

          // =====================================================
          // 4. flash drive
          // =====================================================

          {
            singleword: false,

            text: "4. radar [_]",

            textEnd: "",

            textaudios: [],

            audio: "",

            audioenable: "default",

            image: "",

            answer: ["a small device used to store computer files"],

            alternateanswer: [
              [
                "a device used to store files",
                "a small device for storing files",
                "a device for storing computer files",
                "a portable storage device",
                "a small storage device",
                "a portable device used to store data",
                "a device used to store data",
                "USB drive",
                "USB flash drive",
                "memory stick",
              ],
            ],

            strictcase: "no",

            strictorder: "yes",

            maxlength: 150,

            type: "text",
          },

          // =====================================================
          // 5. scanner
          // =====================================================

          {
            singleword: false,

            text: "5. rocket [_]",

            textEnd: "",

            textaudios: [],

            audio: "",

            audioenable: "default",

            image: "",

            answer: [
              "a device that copies pictures or documents into a computer",
            ],

            alternateanswer: [
              [
                "a device that scans documents",
                "a device used to scan documents",
                "a device that scans pictures",
                "a device used to scan pictures",
                "a device for scanning documents",
                "a device for scanning pictures",
                "a device that copies documents to a computer",
                "a device that copies pictures to a computer",
                "a machine that scans documents",
                "a scanning device",
              ],
            ],

            strictcase: "no",

            strictorder: "yes",

            maxlength: 150,

            type: "text",
          },
        ],
      },
    },
  ],
};
