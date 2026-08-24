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
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/under.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : '<span class="title-order">1</span> Write it! ',
    "subTitleTextRight"     : "Write a simple past (<span class='red_text'>SP</span>) or present perfect (<span class='red_text'>PP</span>) sentence for the words given . ",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 :"",
    "questions": [{
            "textfront": "Tom / give (<span class='red_text'>SP</span>)",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/4-img-1.png",
            "answer": [""],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "Tina / write (<span class='red_text'>PP</span>)",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/4-img-2.png",
            "answer": [""],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "George / jog (<span class='red_text'>SP</span>) ",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/4-img-3.png",
            "answer": [""],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number  
        },
        {
          "textfront": "Jane / buy (<span class='red_text'>PP</span>)",
          "audio": "../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/4-img-4.png",
          "answer": [""],
          "strictcase": "no", // yes (or) no 
          "type": "text", // text (or) number  
      },
    ]
}