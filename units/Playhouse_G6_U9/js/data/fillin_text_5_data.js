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
    "mainTitle"             : "../images/pages/sb-icons/language-building.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "100px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="title-order">2</span> Match it!',
    "subTitleTextRight"     : "Match each idiom to its example. Write the letter below the example.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p81match.mp3",
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
          "topText": "<b>under the weather</b> <br/>meaning: feeling sick",
          "singleword": false,
          "text": "Middle school is <br/>a big step from <br/>elementary school.[_]",
          "textaudios": ["../audios/p74/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/imgq1.png",
          "answer": ["c"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "topText": "<b>hanging out</b> <br/>meaning: spending time <br/>with someone",
          "singleword": false,
          "text": "When his team <br/>won, Sam was on <br/>top of the world. [_]",
          "textaudios": ["../audios/p74/under.mp3","../audios/p74/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/imgq2.png",
          "answer": ["d"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "topText": "<b>a big step</b> <br/>meaning: a big change",
          "singleword": false,
          "text": "Jess and I will be <br/>hanging out at the <br/>park after school. [_]",
          "textaudios": ["../audios/p74/under.mp3","../audios/p74/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/imgq3.png",
          "answer": ["b"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "topText": "<b>on top of the world</b> <br/>meaning: feeling great",
          "singleword": false,
          "text": "Megan is feeling <br/>under the weather. [_]",
          "textaudios": ["../audios/p74/under.mp3","../audios/p74/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/imgq4.png",
          "answer": ["a"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        } 
      ]
    }