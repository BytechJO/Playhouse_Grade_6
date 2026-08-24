var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p20/2.mp3',
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
    "mainTitleAudio"        : "../audios/p20/CONVERSATION.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">2</span> Answer it! Answer the questions below about the family‘s conversation about their flight.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p20/2_Answer_it!_Answer_the_questions_below_about_the_family‘s_conversation_about_their_flight.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 :"",
    "questions": [{
            "textfront": "Do Joe and Randy like cricket? How can you tell?",
            "audio": "../audios/p20/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["The three things that Dad made sure that everybody had before they boarded their flight were e tickets passports and hand luggage"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "Name one thing that the family must do before their flight departs?",
            "audio": "../audios/p20/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": [""],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
            "noAnswer": 1
        },
        {
            "textfront": "Why does the sister want to become an airline agent?",
            "audio": "../audios/p20/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["The sister wants to become an airline agent because she likes to make people happy"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
       
    ]
}