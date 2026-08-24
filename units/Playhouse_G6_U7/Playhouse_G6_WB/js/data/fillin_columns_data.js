var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p35/3.mp3',
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
    "numinrow"              : [[1,1,1,1]],
    "mainTitle"             : "../images/pages/sb-icons/CONVERSATION.jpg",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/p35/CONVERSATION.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">3</span> Answer it! Answer the questions about the first conversation.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p35/3_Answer_it!_Answer_the_questions_about_the_first_conversation.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 :"",
    "questions": [{
            "textfront": "Where are the astronauts going?",
            "audio": "../audios/p35/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["The astronauts are going to Mars"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "What is the temperature like on Mars?",
            "audio": "../audios/p35/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["The temperature on Mars is very cold"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "Why are radars important for space travel?",
            "audio": "../audios/p35/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Radars are important for space travel because they can detect things very far off"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number     
        },
        {
            "textfront": "Do you think the life of an astronaut is adventurous? Why or why not?",
            "audio": "../audios/p35/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": [""],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
            "noAnswer": true
        },   
    ]
}