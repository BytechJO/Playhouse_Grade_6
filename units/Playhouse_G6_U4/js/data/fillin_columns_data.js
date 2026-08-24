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
    "numinrow"              : [[1,1]],
    "mainTitle"             : "../images/pages/sb-icons/reading.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_3_icon.png",
    "mainTitleIconPos"      : {"right": "90px"},
    "mainTitleAudio"        : "../audios/p36/READING.mp3",
    "subTitleTextLeft"      : '<span class="title-order">2</span> You do it! ',
    "subTitleTextRight"     : "Answer the following questions about the blog.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p36doit.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 : "",
    "questions": [{
            "textfront": "What is Travis writing about?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "", 
            "answer": ["Travis is writing about travelling outside of the country on an aeroplane."],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "Where does Travis’s dad keep the passports when they are at the airport?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Travis's dad keeps the passports in his front pocket"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
       
    ]
}