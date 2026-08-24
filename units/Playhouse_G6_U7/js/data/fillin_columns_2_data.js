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
    "numinrow"              : [[1,1,1]],
    "mainTitle"             : "../images/pages/sb-icons/reading.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/p64/READING.mp3",
    "mainTitleIconPos"      : {"right": "92px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> Answer it!',
    "subTitleTextRight"     : "Answer the following questions about the blog.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p64answer.mp3",
    "defaultAnswer"         : -1,
    "image"                 : "",
    "numbering"             : "",
    "questions": [{
            "textfront": "What is the name of Guy's circus?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["The name of Guy's circus is Cirque du Soleil"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "Where did Guy Laliberté grow up?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Guy Laliberté grew up in Canada"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "What does the One Drop Foundation do?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["The One Drop Foundation gives people the water they need"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
       
    ]
}