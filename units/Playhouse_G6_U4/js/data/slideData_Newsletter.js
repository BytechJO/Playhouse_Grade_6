var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(0, 183, 206)",
  playListData: [
    {
      audiourl: "../audios/p39/demo.mp3",
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
  mainTitleAudio: "../audios/p39/under.mp3",
  subTitleTextLeft: "PLAYHOUSE NEWSLETTER",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/p39/PLAYHOUSE_NEWSLETTER.mp3",
  slides: [
    {
      // "layout": "adventure_images_with_text",
      parent_class_name: "",

      mainImage: "../images/pages/news-letter/1-news-title.png",
      questionImage: "../images/pages/news-letter/1-conv-img.png",
      starImage: "../images/pages/news-letter/2-img-2-title.png",
      convImage: "../images/pages/news-letter/3-img-title.png",

      titleAudio: "../audios/P39/Around_the_World!.mp3",
      starTitleAudio: "../audios/P39/Star_Student.mp3",

      listen: {
        text: [
          "Remember Andy Cook? Why haven't we seen him around? That’s because he" +
            "has spent the last year travelling around the world!" +
            "Andy and his parents left on June 20th this year. They" +
            "started their trip by flying to Germany. Then they unpacked their bags and bicycles, got on their bikes and started riding." +
            "Andy says in his letters that they have ridden over 600 kilometres so far." +
            "They’ve been to Germany, Austria and Italy. Andy says that next month they'll be riding their bikes to Slovenia and Croatia!" +
            "Here is a picture Andy’s mum took of him and his dad in Austria. It looks like they are having a good time!" +
            "Andy has been writing a blog and says that he’s having a good time. He misses his friends at Waritsat School, but he says" +
            "it's been a trip of a lifetime. Andy said that the best part of the trip is that he doesn't have to go through airports." +
            "He doesn’t have to worry about hand luggage and checked luggage," +
            "and he doesn't have to keep track of e-tickets and boarding cards." +
            "On this kind of trip, all they need is a passport, enough clothes for a few days packed in their bike bag and a charged " +
            "camera battery. They also need to be ready for fun and adventure!" +
            "We hope that you are having a great time, Andy. We miss you," +
            "and we can't wait to hear all of your amazing stories!",
        ],
        audio: ["../audios/p39/Around_the_World!.mp3"],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/1-news-title.png"], //
        second_image: ["../images/pages/news-letter/1-news-img.png"],
      },
      ///////////////////////////////////////////////////////////////////////////////////////////////////////// 2 //
      listen2: {
        text: [
          "<br> This month’s star student is Brian Mathers. He's in the" +
            "Junior Pilot Programme at the Community Centre. Brian hopes to be a pilot one day, so he’s learning all he can now." +
            "The Junior Pilot Programme lasts three months, and it teaches kids about working with airlines. Brian has learnt a lot about" +
            "the airline industry. He says that he has watched ticket agents checking in passengers, security oficers checking for dangerous" +
            "items and pilots getting ready to fly." +
            "When we asked Brian what his favourite part was, he said it was meeting the pilot because he wants to fly a plane when he grows" +
            " up. Good luck with your dreams, Brian! See you on the runway!",
        ],
        audio: ["../audios/p39/Star_Student.mp3"],
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
        audio: ["../audios/p39/Pg4_1.2_Adult_Lady.mp3"],
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

            text: "1. check-in [_]",

            textEnd: "",

            textaudios: [],

            audio: "",

            audioenable: "default",

            image: "",

            answer: ["the process of registering for a flight"],

            alternateanswer: [
              [
                "registering for a flight",
                "the process of registering at the airport",
                "registering at the airport",
                "the process of checking in",
                "checking in",
                "flight registration",
                "airport registration",
              ],
            ],

            strictcase: "no",

            strictorder: "yes",

            maxlength: 100,

            type: "text",
          },

          {
            singleword: false,

            text: "2. agent [_]",

            textEnd: "",

            textaudios: [],

            audio: "",

            audioenable: "default",

            image: "",

            answer: ["a person who helps customers"],

            alternateanswer: [
              [
                "a person who helps passengers",
                "a person who assists customers",
                "a person who assists passengers",
                "a representative",
                "a customer service representative",
                "someone who helps customers",
                "someone who helps passengers",
                "representative",
              ],
            ],

            strictcase: "no",

            strictorder: "yes",

            maxlength: 100,

            type: "text",
          },

          {
            singleword: false,

            text: "3. passport [_]",

            textEnd: "",

            textaudios: [],

            audio: "",

            audioenable: "default",

            image: "",

            answer: ["an official document used for international travel"],

            alternateanswer: [
              [
                "a document used for international travel",
                "an official travel document",
                "a travel document",
                "a document that identifies a traveller",
                "a document that identifies a traveler",
                "identification for international travel",
                "official travel identification",
              ],
            ],

            strictcase: "no",

            strictorder: "yes",

            maxlength: 100,

            type: "text",
          },

          {
            singleword: false,

            text: "4. boarding card [_]",

            textEnd: "",

            textaudios: [],

            audio: "",

            audioenable: "default",

            image: "",

            answer: ["a document that allows a passenger to board a plane"],

            alternateanswer: [
              [
                "a card that allows you to board a plane",
                "a card used to board a plane",
                "a document used to board a plane",
                "a pass for boarding a plane",
                "a boarding pass",
                "boarding pass",
                "a card needed to get on a plane",
                "a ticket used to board a plane",
              ],
            ],

            strictcase: "no",

            strictorder: "yes",

            maxlength: 100,

            type: "text",
          },

          {
            singleword: false,

            text: "5. e-ticket [_]",

            textEnd: "",

            textaudios: [],

            audio: "",

            audioenable: "default",

            image: "",

            answer: ["an electronic ticket"],

            alternateanswer: [
              [
                "electronic ticket",
                "a digital ticket",
                "digital ticket",
                "a ticket stored electronically",
                "a ticket sent electronically",
                "an online ticket",
                "online ticket",
                "a flight ticket stored electronically",
              ],
            ],

            strictcase: "no",

            strictorder: "yes",

            maxlength: 100,

            type: "text",
          },
        ],
      },
    },
  ],
};
