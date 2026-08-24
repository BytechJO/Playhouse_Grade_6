var stereo_data = {
  "audio":"",
  "exist":false,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p74/demo.mp3',
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
    "layout"               : 1,
    "numinrow"              : [[1], [1], [1], [1], [1]],
    "mainTitle"             : "../images/pages/sb-icons/conv_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/conv_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "90px"},
    "mainTitleAudio"        : "../audios/p69/CONVERSATION.mp3",
    "subTitleTextLeft"      : '<span class="title-order">3</span> Talk about it!',
    "subTitleTextRight"     : "Put this conversation together. Then practise it.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p69talk.mp3",
    "image"                 : "",
    "imageposition"         : "back",// "front" (or) "back"
    "defaultAnswer"         : 1,
    "numbering"             : "none", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "optionsAudios":[],
    "questions"             :
     [
        {
          "singleword": false,
          "text": "We've been travelling to my aunt's house by car for years. No, travelling that way is more like a journey.[_][_]",
          "textaudios": ["../audios/p74/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/imgl1.png",
          "answer": ["Have you ever travelled by railway?","So how do you get to your aunt's house every year?"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "Have you ever travelled by railway? So, how do you get to your aunt's house every year?[_][_]",
          "textaudios": ["../audios/p74/under.mp3","../audios/p74/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/imgl2.png",
          "answer": ["No travelling that way is more like a journey","We've been travelling to my aunt's house by car for years"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        }  
      ]
    }