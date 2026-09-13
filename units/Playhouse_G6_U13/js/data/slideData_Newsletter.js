var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(0, 183, 206)",
  playListData: [
    {
      audiourl: "../audios/p123/demo.mp3",
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
  mainTitleAudio: "../audios/p123/under.mp3",
  subTitleTextLeft: "PLAYHOUSE NEWSLETTER",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/p123/PLAYHOUSE_NEWSLETTER.mp3",
  slides: [
    {
      // "layout": "adventure_images_with_text",
      parent_class_name: "",

      mainImage: "../images/pages/news-letter/1-news-title.png",
      questionImage: "../images/pages/news-letter/1-conv-img.png",
      starImage: "../images/pages/news-letter/2-img-2-title.png",
      convImage: "../images/pages/news-letter/3-img-title.png",

      titleAudio: "../audios/P123/Are_You_Addicted_to_Facebook.mp3",
      starTitleAudio: "../audios/P123/Star_Student.mp3",

      listen: {
        text: [
          "Ms. Moore‘s sixth grade social studies class noticed that they were spending more and more time on social media sites" +
            "than they were with each other. Mandy Hall was afraid they might be right. It became clear when she planned an online" +
            "party instead of inviting her friends over to her house. ‘Can you believe I wanted to have a party with all my friends," +
            "but I made it online when I should have invited them to my house?‘ Mandy told this to Lilly." +
            "That‘s when Mandy decided she needed to spend less time online. When trying to organise activities and events, Mandy" +
            "saw that her friends were spending quite a bit of time online, too. So Mandy visited a psychologist for advice. He said" +
            "that Mandy and her friends are what doctors call ‘internet addicted‘. He gave her some quick tips on how to get away from" +
            "spending too much time online." +
            "Mandy took a survey to see how many of her friends were internet addicted. She was surprised. Are you ‘addicted‘? Take" +
            "the quiz and see for yourself! <br>" +
            "1 Do you spend more time online and on social media sites per day than" +
            "with family or friends? <br>" +
            "2 Do you sometimes skip meals or activities to spend time chatting online?  <br>" +
            "3 Do you have more online friends than ‘real‘ friends? <br>" +
            "If you can answer ‘yes‘ or ‘sometimes‘ to any of these questions, you may be internet addicted. Talk to your parents and" +
            "find ways to work together as a family to get off the internet. Go out and do more things with friends and family!",
        ],
        audio: ["../audios/p123/Are_You_Addicted_to_Facebook.mp3"],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/1-news-title.png"], //
        second_image: ["../images/pages/news-letter/1-news-img.png"],
      },
      ///////////////////////////////////////////////////////////////////////////////////////////////////////// 2 //
      listen2: {
        text: [
          "This month we don‘t just have a star student, we have a star family!" +
            "Meet Jack and his parents. Jack and his family were honoured this year at the Waritsat" +
            "Community Centre for their role in helping to build 15 new houses in a hurricane damaged neighbourhood downtown." +
            "They learnt about the damaged homes while chatting with friends on Facebook. They took action and spent the next" +
            "three months helping families rebuild their broken homes." +
            "Thanks, Jack and family, for being heroes in our eyes!<br>" +
            "<span style='text-align: right; display:block'>by Jenny <br> Photo by Yoshi</span>",
        ],
        audio: ["../audios/p123/Star_Student.mp3"],
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
        audio: ["../audios/p123/Pg4_1.2_Adult_Lady.mp3"],
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

            text: "1. notifications [_]",

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

            text: "2. timeline [_]",

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

            text: "3. post [_]",

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

            text: "4. comment [_]",

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

            text: "5. status [_]",

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
