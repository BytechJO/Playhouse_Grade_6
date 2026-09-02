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
    "mainTitle"             : "../images/pages/sb-icons/reading.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_3_icon.png",
    "mainTitleAudio"        : "../audios/p44/READING.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : '<span class="title-order">3</span> You do it!',
    "subTitleTextRight"     : "Look at the sign language word in the box. Do you know what it says? Use the American Sign Language alphabet below to help you. Can you ‘say’ your name in sign language? Practise with your friends.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "image"                 : "",
    "images"                : ["../images/pages/activities/2-img-1.png","../images/pages/activities/2-img-2.png","../images/pages/activities/2-img-3.png"],
    "imageposition"         : "back",// "front" (or) "back"
"numbering"       : "none",
    "numberstartfrom"       : 1,
    "options"               : [],
    "optionsAudios"         : [],
    "parent_class_name"     : "full_fillin",
    "questions"             :
     [
        {
          "singleword": false,
          "text": "[_]",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/2-img-0.png",
          "answer": ["I love you"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        
      ]
    }