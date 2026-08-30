var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(0, 183, 206)",
  playListData: [
    {
      audiourl: "../audios/p11/demo.mp3",
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
  mainTitleAudio: "../audios/p11/under.mp3",
  subTitleTextLeft: "PLAYHOUSE NEWSLETTER",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/p11/PLAYHOUSE_NEWSLETTER.mp3",
  slides: [
    {
      // "layout": "adventure_images_with_text",
      parent_class_name: "",

      mainImage: "../images/pages/news-letter/1-news-title.png",
      questionImage: "../images/pages/news-letter/1-conv-img.png",
      starImage: "../images/pages/news-letter/2-img-2-title.png",
      convImage: "../images/pages/news-letter/3-img-title.png",

      titleAudio: "../audios/P11/Let’s_Roll!.mp3",
      starTitleAudio: "../audios/P11/Star_Student.mp3",
      listen: {
        text: [
          "Kyle Rollins’s mother hears these words every " +
            "day because she does the ZYX daily news " +
            "broadcast. Why don’t we know her face well " +
            "since we watch TV every night? We don’t because she works behind the camera " +
            "for the programme as a teleprompter operator. " +
            "Without Mrs. Rollins, the ZYX news announcer would probably make lots of " +
            "mistakes! It is her job to put the announcer’s lines into the machine that shows " +
            "them their lines. This may sound easy, but she has to put the lines in at exactly " +
            "the right time, so the announcer can read the news at an easy speed. If the lines " +
            "show up too fast or too slow, the announcer cannot read them very well. The " +
            "news is broadcast live, so mistakes would show up on the programme! The news " +
            "announcer is very thankful for the careful job that Mrs. Rollins does each day. " +
            "Mrs. Rollins says there are many people like her who work ‘behind the scenes’ to " +
            "make the TV programmes excellent. There are sound mixers and vision mixers who " +
            "work with the sound and pictures to make them very high quality. The camera " +
            "operators work hard to get the angle, focus and range of the picture just right. " +
            "There are often several cameras, so that the programme can be shown from " +
            "different angles. The floor manager makes sure that all equipment is safe, working " +
            "well and in the right place. There are people who choose the announcer’s clothes " +
            "and do their makeup. There are people who plan and run the lights, and others " +
            "who plan and make the set (the stage). " +
            "Working in a TV studio is a team job!",
        ],
        audio: ["../audios/p11/Let’s_Roll!.mp3"],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/1-news-title.png"], //
        second_image: ["../images/pages/news-letter/1-news-img.png"],
      },
      ///////////////////////////////////////////////////////////////////////////////////////////////////////// 2 //
      listen2: {
        text: [
          "<br/> We are very proud of this edition’s Star Student, Yoshi " +
            "Takamatsu! " +
            "Everyone knows that Yoshi loves to take photographs. " +
            "But did you know that Waritsat News Channel asked " +
            "Yoshi to be their junior reporter? On Saturdays, Yoshi goes to the studio at " +
            "9:00 am, drives around with a reporter and takes photos for interesting news " +
            "stories. If he is lucky, some of the photographs will be on air. He never knows " +
            "if they will use his photos or not, so Yoshi and his family always finish their " +
            "dinner and chores before the 7:00 pm news. " +
            "Good job, Yoshi! See your photos on the news!",
        ],
        audio: ["../audios/p11/Star_Student.mp3"],
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
        audio: ["../audios/p11/Pg4_1.2_Adult_Lady.mp3"],
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
            text: "1. studio [_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default",
            image: "",
            answer: ["broadcast room"],
            alternateanswer: [
              [
                "workplace",
                "recording studio",
                "TV studio",
                "television studio",
              ],
            ],
            strictcase: "no",
            strictorder: "yes",
            maxlength: 50,
            type: "text",
          },

          {
            singleword: false,
            text: "2. camera operator [_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default",
            image: "",
            answer: ["cameraperson"],
            alternateanswer: [
              ["camera person", "cameraman", "camera woman", "camera operator"],
            ],
            strictcase: "no",
            strictorder: "yes",
            maxlength: 50,
            type: "text",
          },

          {
            singleword: false,
            text: "3. sound engineer [_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default",
            image: "",
            answer: ["audio engineer"],
            alternateanswer: [["sound technician", "audio technician"]],
            strictcase: "no",
            strictorder: "yes",
            maxlength: 50,
            type: "text",
          },

          {
            singleword: false,
            text: "4. anchor [_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default",
            image: "",
            answer: ["news presenter"],
            alternateanswer: [
              ["news anchor", "anchorman", "news announcer", "presenter"],
            ],
            strictcase: "no",
            strictorder: "yes",
            maxlength: 50,
            type: "text",
          },

          {
            singleword: false,
            text: "5. live broadcast [_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default",
            image: "",
            answer: ["live transmission"],
            alternateanswer: [
              ["live programme", "live program", "broadcast in real time"],
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
