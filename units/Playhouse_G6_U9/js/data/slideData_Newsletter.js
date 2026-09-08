var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(0, 183, 206)",
  playListData: [
    {
      audiourl: "../audios/p83/demo.mp3",
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
  mainTitleAudio: "../audios/p83/under.mp3",
  subTitleTextLeft: "PLAYHOUSE NEWSLETTER",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/p83/PLAYHOUSE_NEWSLETTER.mp3",
  slides: [
    {
      // "layout": "adventure_images_with_text",
      parent_class_name: "",

      mainImage: "../images/pages/news-letter/1-news-title.png",
      questionImage: "../images/pages/news-letter/1-conv-img.png",
      starImage: "../images/pages/news-letter/2-img-2-title.png",
      convImage: "../images/pages/news-letter/3-img-title.png",

      titleAudio: "../audios/P83/Weather_Safety.mp3",
      starTitleAudio: "../audios/P83/Star_Student.mp3",

      listen: {
        text: [
          "During this time of year, there are a lots of storms in our town. Do you know how to stay safe in bad weather? Calie Gold, from Ms. Jay's sixth grade class, is the president of the Waritsat Junior Weather Club. She has shared some advice with us on how to prepare for bad wheather. <br>" +
            "<b>Make a storm safety kit!</b> <br>" +
            "The best way to stay safe during a storm is to have an emergency safety kit in place ahead of time." +
            "To get started, you'll need a big plastic box - one with a lid is best. Use a marker to write 'SAFETY KIT' on a big" +
            "piece of tape and stick it on the box. Find a good place to keep the box, so you can find it" +
            "quickly when a storm hits. Now, you're ready to fill up your box. Here are some very important items you should put in your safety kit:<br>" +
            "<span class='list_text d-flex flex-wrap'><span class='item_text'>• ﬂashlights</span> <span class='item_text'>• a battery-operated radio</span>  <span class='item_text'>• extra batteries</span>  <span class='item_text'>• first aid supplies like bandages</span>" +
            "<span class='item_text'>• blankets</span>  <span class='item_text'>• a few bottles of water</span> <span class='item_text'>• snacks like granola and fruit roll-ups</span></span>" +
            "If you have room, you can add things to play like colouring books, crayons, puzzles and board games. If there's a baby in your house, keep extra diapers, wipes and baby food in the safety kit too." +
            "<br><b>Make a list and check it twice!</b><br>" +
            "Another good thing to keep in your safety kit is a list of important information such as the following: <br>" +
            "• emergency telephone numbers, like the electric company, neighbours and relatives.<br>" +
            "• medicines that someone in your family might need.",
        ],
        audio: ["../audios/p83/Weather_Safety.mp3"],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/1-news-title.png"], //
        second_image: ["../images/pages/news-letter/1-news-img.png"],
      },
      ///////////////////////////////////////////////////////////////////////////////////////////////////////// 2 //
      listen2: {
        text: [
          "<br> This month's star student is Zoe Moore. Zoe is part of the Waritsat Weather Club, run by Mr. Clark, the geography" +
            "teacher. They meet weekly after school and take part in a whole range of weather-related activities. They conduct" +
            "weather experiments, make models, measure the weather and do many other things. This month Zoe invited the Channel " +
            "13 weather forecaster, Sam Morgan, to visit our school and host a weather workshop. Zoe also raised money to buy the" +
            "club their own automated weather station that collects data and publishes it live to the internet." +
            "Thanks, Zoe! Now we can find out the weather in our town at any time! <br>" +
            "<span class='right-text'>by Jenny <br> Photo by Yoshi </span>",
        ],
        audio: ["../audios/p83/Star_Student.mp3"],
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
        audio: ["../audios/p83/Pg4_1.2_Adult_Lady.mp3"],
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

            text: "1. drizzle [_]",

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

            text: "2. lightning [_]",

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

            text: "3. heatwave [_]",

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

            text: "4. meteorologist [_]",

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

            text: "5. thermometer [_]",

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
