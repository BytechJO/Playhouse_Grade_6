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
  "numinrow"              : [[1,1,1,1]],
  "mainTitle"             : "../images/pages/sb-icons/language-building.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
  "mainTitleIconPos"      : {"right": "60px"},
  "mainTitleAudio"        : "../audios/under.mp3",
  "subTitleTextLeft"      : "<span class='title-order'>3</span> Find it and fix it!",
  "subTitleTextRight"     : "Look at each picture and then look at its sentence. Underline the adjective that is wrong and rewrite the sentence with a better adjective.",
  "subTitleIcons"         : ["../images/pages/sb-icons/conv_2_icon.png"],
  "subTitleAudio"         : "../audios/new/p37find.mp3",
  "image"                 : "",
  "imageposition"         : "back",// "front" (or) "back"
  "numbering"             : "alphabet", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  // "defaultAnswer": [],
  "options": [],
  "optionsAudios":[],
  "questions":
    [
      {
        "singleword": false,
        "text": "They checked in seven bags. [_]",
        "textFront":"",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/37-img-1.png",
        "answer": ["They checked in six bags"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "The small aeroplane was on its way to Brazil. [_]",
        "textFront":"",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/37-img-2.png",
        "answer": ["The large aeroplane was on its way to Brazil."],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "My mum’s sandwich is sharp. [_]",
        "textFront":"",
        "textaudios": [""],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/37-img-3.png",
        "answer": ["My mum's sandwich is delicious"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "Sharon has got a blue horse on her farm. [_]",
        "textFront":"",
        "textaudios": [""],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/37-img-4.png",
        "answer": ["Sharon has got a brown horse on her farm"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      }
    ]
  }