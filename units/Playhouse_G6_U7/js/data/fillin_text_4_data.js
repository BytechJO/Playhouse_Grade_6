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
    "mainTitle"             : "../images/pages/sb-icons/gram_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/p62/GRAMMAR.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : '<span class="title-order">3</span> You do it!',
    "subTitleTextRight"     : "Read each sentence. Then rewrite it using a different tense.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p62doit.mp3",
    "image"                 : "../images/pages/activities/3-img-1.png",
    "imageposition"         : "front",// "front" (or) "back"
    "numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "questions"             :
     [
        {
          "singleword": false,
          "text": "After breakfast I visited my grandparents. [_](<span class='red_text'>simple future</span>)",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["After breakfast I will visit my grandparents"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "They don’t go to the zoo. [_](<span class='red_text'>simple past</span>)",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["They didn't go to the zoo"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "She will not play volleyball. [_](<span class='red_text'>simple present</span>)",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["She does not play volleyball"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
       
      ]
    }