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
    "mainTitleAudio"        : "../audios/P51/G_GRAMMAR_PRACTICE.mp3",
    "mainTitleIconPos"      : {"right": "100px"},
    "subTitleTextLeft"      : '<span class="title-order">1</span> Answer it!',
    "subTitleTextRight"     : "Read each question and answer it using simple present or present continuous.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p51answer.mp3",
    "defaultAnswer"         : -1,
    "image"                 :"",
    "questions": [
        {
            "textfront": "Does Dorothy ride a bike to school?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/1-img-1.png",
            "answer": ["Dorothy likes riding a bike"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "What is he doing?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/1-img-2.png",
            "answer": ["He is writing a letter"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "Where does he sit when he sends an e-mail?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/1-img-3.png",
            "answer": ["He sits at his desk when he sends an e-mail"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
        {
            "textfront": "What is Johnny practising?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/1-img-4.png",
            "answer": ["Johnny is practising the piano"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
    ]
}