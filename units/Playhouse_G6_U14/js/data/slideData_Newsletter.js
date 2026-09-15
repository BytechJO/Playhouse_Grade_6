var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(0, 183, 206)",
  playListData: [
    {
      audiourl: "../audios/P131/demo.mp3",
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
  mainTitleAudio: "../audios/P131/under.mp3",
  subTitleTextLeft: "PLAYHOUSE NEWSLETTER",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/P131/PLAYHOUSE_NEWSLETTER.mp3",
  slides: [
    {
      // "layout": "adventure_images_with_text",
      parent_class_name: "",

      mainImage: "../images/pages/news-letter/1-news-title.png",
      questionImage: "../images/pages/news-letter/1-conv-img.png",
      starImage: "../images/pages/news-letter/2-img-2-title.png",
      convImage: "../images/pages/news-letter/3-img-title.png",

      titleAudio: "../audios/P131/Family_Day.mp3",
      starTitleAudio: "../audios/P131/Star_Student.mp3",

      listen: {
        text: [
          "Bring your parents and siblings this Friday to a wonderful day of fun and learning at Waritsat School! <br>" +
            "Students have been preparing activities and displays to show their families what they have been learning. Family Day" +
            "started this year to promote family togetherness and family involvement in the students' lives at school. <br>" +
            "The headmistress has talked to many business owners in the area, and they told her that they will agree to give the" +
            "working parents time off on Friday. Your immediate and extended family can come anytime between 10:00 am and 1:00 pm." +
            "They can take part in the many activities. The day will start with a parade on Main Street, and then there will be activities" +
            "in the school gym. Some students will be walking around the school, pretending to be famous people from history. You might be" +
            "able to meet Abraham Lincoln, Plato, Saladin and Genghis Khan!" +
            "At 12:00 pm, all students will have lunch with their families. Grades K-3 will eat lunch on their playground and grades 4-6" +
            "will eat lunch on the football pitch. If your family has students from both grade groups, they can choose where to eat. We " +
            "hope you and your families enjoy a wonderful day on Friday!",
        ],
        audio: ["../audios/P131/Family_Day.mp3"],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/1-news-title.png"], //
        second_image: ["../images/pages/news-letter/1-news-img.png"],
      },
      ///////////////////////////////////////////////////////////////////////////////////////////////////////// 2 //
      listen2: {
        text: [
          "A big thank you to Ryan and Bryan Reese, our star students for this edition. Ryan and his twin brother, Bryan, helped to" +
            "organise Friday's Family Day.<br>" +
            "Ryan said that he and his brother have been working on the project for two months. They worked with teachers and business" +
            "owners to plan the day. They even contacted the radio and television stations to get the word out about the fun-filled day" +
            "at school. Bryan said that he hopes the day will be a success." +
            "We're sure it will be a great success! Thanks, Bryan and Ryan, for a great family day and all your hard work!<br>" +
            "<span style='text-align: right; display:block'>by Jenny <br> Photo by Yoshi</span>",
        ],
        audio: ["../audios/P131/Star_Student.mp3"],
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
        audio: ["../audios/P131/Pg4_1.2_Adult_Lady.mp3"],
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

            text: "1. siblings [_]",

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

            text: "2. close-knit [_]",

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

            text: "3. extended family [_]",

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

            text: "4. fiancée/fiancé [_]",

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

            text: "5. engaged [_]",

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
