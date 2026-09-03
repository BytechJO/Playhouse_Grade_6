var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(0, 183, 206)",
  playListData: [
    {
      audiourl: "../audios/demo.mp3",
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
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft: "PLAYHOUSE NEWSLETTER",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/under.mp3",
  slides: [
    {
      // "layout": "adventure_images_with_text",
      parent_class_name: "",

      mainImage: "../images/pages/news-letter/1-news-title.png",
      questionImage: "../images/pages/news-letter/1-conv-img.png",
      starImage: "../images/pages/news-letter/2-img-2-title.png",
      convImage: "../images/pages/news-letter/3-img-title.png",

      titleAudio: "../audios/Pg6_2.1_Stella.mp3",
      starTitleAudio: "../audios/P47/Star_Student.mp3",

      listen: {
        text: [
          "Thanks to the parent of one of our students, Waritsat School may become so famous! Mr. Warner, " +
            "the father of Betty Warner, recently helped the science department put an IMAX theatre system in its" +
            "large classroom. Mr. Warner hopes that the theatre system will" +
            "be quite helpful to the science department. They will be able to view biology films and examples of " +
            "science experiments. Mr. Warner is an inventor who specialises in technology." +
            "He knows so much about how IMAX works. He thinks that technology can be so helpful in education, " +
            "and he hopes to help Waritsat School get wonderful technology!  Mr. Warner is quite busy with his career," +
            "so he has to wait until his next break at work to complete another project at the school. That break will " +
            "be next year, and he hopes to put in a surround sound system for the music and drama department. He thinks" +
            "this system will make such a big diﬀerence to the students. He says that hearing high quality sound from" +
            "all areas of the room can be such a help in training students' ears. Certainly hearing a concert played " +
            "with surround sound would please the audience a lot!" +
            "Mr. Warner is hopeful that with the help of many professionals giving their time to schools, these schools" +
            "will soon be able to benefit from the many things that technology can oﬀer. He thinks that students should" +
            "be some of the first people to use modern inventions because they are the ones who will be the world's future" +
            "inventors!" +
            "<br>by Lilly Photo by Yoshi",
        ],
        audio: ["../audios/.mp3"],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/1-news-title.png"], //
        second_image: ["../images/pages/news-letter/1-news-img.png"],
      },
      ///////////////////////////////////////////////////////////////////////////////////////////////////////// 2 //
      listen2: {
        text: [
          "<br>This edition's star student is actually a star team! That's right, the Compu-thletes are our star students" +
            "this month. Here is a picture that Yoshi took of the computer athletes getting ready for a competition." +
            " Alberto says that the competitions are so hard and the other teams are pretty smart. They have to really " +
            "practise and prepare for their matches. Alberto and his other teammates enter into matches that test their computer kills." +
            "There are keyboarding competitions, which Becky is quite good at. There are webquests and search engine races." +
            "not so easy, but our compu-thletes are pretty good. We expect great things from them ... and a trophy!" +
            "<br>by Jenny Photo <br> by Yoshi",
        ],
        audio: ["../audios/.mp3"],
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
        audio: ["../audios/.mp3"],
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

            text: "1. tablet PC [_]",

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

            text: "2. webcam [_]",

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

            text: "3. speakers [_]",

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

            text: "4. flash drive [_]",

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

            text: "5. scanner [_]",

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
