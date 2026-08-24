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
    "layout"               : 1,
    "numinrow"              : [[1], [1], [1], [1], [1]],
    "mainTitle"             : "../images/pages/sb-icons/conv_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/conv_main_title_icon.png",
    "mainTitleAudio"        : "../audios/p97/CONVERSATION.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> Answer it!',
    "subTitleTextRight"     : "Help Jenny make a fitness plan on the note below.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p97answer.mp3",
    "image"                 : "../images/pages/activities/1-img-1.png",
    "imageposition"         : "back",// "front" (or) "back"
    "numbering"             : "none", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "text"                  :"Fitness Plan",
    "options"               : [],
    "optionsAudios"         : [],
    "questions"             :
     [
        {
          "singleword": false,
          "textFront":"",
          "text": "[_]every morning ",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Exercise"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "textFront":"",
          "text": "Stretch,[_], [_] before school.",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["do sit-ups","go jogging"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "textFront":"",
          "text": "Eat a [_] of fruits, vegetables and grains. ",
          "textEnd":"Enjoy and keep going!",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["balanced diet"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        
      ]
    }