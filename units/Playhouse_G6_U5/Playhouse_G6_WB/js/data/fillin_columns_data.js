var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p25/2.mp3',
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
    "numinrow"              : [[1,1,1]],
    "mainTitle"             : "../images/pages/sb-icons/CONVERSATION.jpg",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/p25/CONVERSATION.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">2</span> Answer it! Answer the questions about the conversation.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p25/2_Answer_it!_Answer_the_questions_about_the_conversation.mp3",
    "defaultAnswer"         : -1,
    "image"                 :"",
    "questions": [
      {
            "textfront": "Why do you think Person A thought that sign language was strange?",
            "audio": "../audios/p25/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Person A thought that sign language was strange because they haven't seen someone talking with their hands before"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
            "hasAnswer": true
        },
        {
            "textfront": "What helps Person A to change their thinking? ",
            "audio": "../audios/p25/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": [""],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
            "hasAnswer": false
        },
        {
            "textfront": "Think of a time when learning about a subject helped you understand it better and like it more. Tell about that time here: ",
            "audio": "../audios/p25/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": [""],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
            "hasAnswer": false
        },
    ]
}