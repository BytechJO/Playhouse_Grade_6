var stereo_data = {
  "audio":"",
  "exist":false,
  "bgColor_rgb":"rgb(0, 183, 206)",
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
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/P43/G_GRAMMAR_PRACTICE.mp3",
    "mainTitleIconPos"      : {"right": "100px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> Write it!',
    "subTitleTextRight"     : "Read each sentence below. If the sentence is complete, write a ‘<span class='red_text'>C</span>’ in the blank. If the sentence is incomplete, write an ‘<span class='red_text'>I</span>’ in the blank. Then make each incomplete sentence into a complete sentence.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p43write.mp3",
    "image"                 : "",
    "imageposition"         : "back",// "front" (or) "back"
    "numbering"       : "number", // "alphabet" (or) "number"
    "numberstartfrom" : 1,
    "options"         : [],
    "questions"       :
     [
        {
          "singleword": false,
          "text": "[_] Yoshi was very happy to win the game. [_]",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["C"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "text", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]came to visit us.[_]",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["I"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "text", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]pizza with lots of cheese.[_]",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["I"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "text", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]Lilly can read Braille.[_]",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["C"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "text", // text (or) number
        },
      ]
    }