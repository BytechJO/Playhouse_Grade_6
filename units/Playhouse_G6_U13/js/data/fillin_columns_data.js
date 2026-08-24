var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(0, 183, 206)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/demo.mp3',
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
    "layout"                : 1,
    "numinrow"              : [[1,1,1,1,1,1,1]],
    "mainTitle": "../images/pages/sb-icons/language-building.png",
    "mainTitleIcon": "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos": {"right": "100px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="title-order">3</span> Change it!',
    "subTitleTextRight"     : "Read each sentence. Then write the antonym of the underlined word on the line. Remember to use ‘<span class='red_text'>un-</span>‘.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p121change.mp3",
    "defaultAnswer"         : -1,
    "image"                 :"",
    "questions": [{
            "textfront": "Shh! You’re dad is going to be &nbsp; <u>happy</u> &nbsp; if you wake him up!",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["unhappy"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "The river next to our house is full of litter. It is so &nbsp; <u>clean</u>!",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["unclean"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "I think it’s &nbsp;<u>fair</u> &nbsp; when my mum gives my brother three biscuits and she only gives me one.",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["unfair"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
        {
          "textfront": "When I take all the things out of the car, I &nbsp;<u>load</u>&nbsp; it.",
          "audio": "../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["unload"],
          "strictcase": "no", // yes (or) no
          "type": "text", // text (or) number
      },
      {
        "textfront": "It is &nbsp;<u>safe</u>&nbsp; to ride a bike without wearing a helmet.",
        "audio": "../audios/under.mp3",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["unsafe"],
        "strictcase": "no", // yes (or) no
        "type": "text", // text (or) number
    },
    {
      "textfront": "When a road is bumpy, we say that it is &nbsp; <u>even</u>.",
      "audio": "../audios/under.mp3",
      "audioenable": "default", // correct (or) default
      "image": "",
      "answer": ["uneven"],
      "strictcase": "no", // yes (or) no
      "type": "text", // text (or) number
  },
  {
    "textfront": "They were &nbsp; <u>kind</u> &nbsp; because they didn’t share their toys.",
    "audio": "../audios/under.mp3",
    "audioenable": "default", // correct (or) default
    "image": "",
    "answer": ["unkind"],
    "strictcase": "no", // yes (or) no
    "type": "text", // text (or) number
  },
    ]
}