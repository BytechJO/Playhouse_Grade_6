var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p5/1.mp3',
      },
      {
        'url': '',
      },
      {
        'url': '',
      },
      {
        'url': '',
      }
  ],
}
var fillin_data = {
    "layout": 3,
    "numinrow": [
        [1, 1],
    ],
    "mainTitle"             : "../images/pages/sb-icons/CONVERSATION.jpg",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/p5/CONVERSATION.mp3",
    "subTitleTextLeft"      : "1 Read it and say it!",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p5/1_Read_it_and_say_it!.mp3",
    ///////////////////////////
    // "activityheading": "Read it and say it!",
    // "activityheading_audio" : "../audios/p5/CONVERSATION.mp3",
    // "main_activityheading":"../images/pages/activities/CONVERSATION.jpg",
    // "main_activityheading_audio" : "../audios/p5/1_Read_it_and_say_it!.mp3",
    // "activityicon": "../images/icons/key_icon.png",
    "defaultAnswer": 1,
    "questions": [
        {
            "textfront": "Yes, she is. There are many things to observe here at the network offices. Right now we’re going to meet some of the people who do the lights, the sound and the camera work. You are going to meet a sound engineer and even the anchor of the news!",
            "textback": "Tour Guide: ",
            "audio": "../audios/p5/under.mp3",
            "audioenable": "", // correct (or) default
            "image": "no",
            // "answer": ["g"],
            "strictcase": "yes", // yes (or) no
            "type": "text", // text (or) number
        },
        {
            "textfront": "What kind of programme is the anchor going to do?",
            "textback": "Teacher: ",
            "audio": "../audios/p5/under.mp3",
            "audioenable": "no", // correct (or) default
            "image": "no",
            // "answer": ["H"],
            "strictcase": "yes", // yes (or) no
            "type": "text", // text (or) number


        },
        {
            "textfront": "At 12:00, the anchor is going to talk about solving environmental problems in our city. Okay, I know you’re all excited to learn everything about our network. When your teacher is ready, we can go so we won’t be late for the live broadcast.",
            "textback": "Tour Guide: ",
            "audio": "../audios/p5/under.mp3",
            "audioenable": "no", // correct (or) default
            "image": "no",
            // "answer": ["I"],
            "strictcase": "yes", // yes (or) no
            "type": "text", // text (or) number
        },
        {
            "textfront": "Let’s go. I think we’re all here now.",
            "textback": "Teacher: ",
            "audio": "../audios/p5/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "no",
            // "answer": ["J"],
            "strictcase": "yes", // yes (or) no              
            "type": "text", // text (or) number

        }
       
    ]
}