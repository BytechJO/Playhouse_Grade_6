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
    "mainTitleIconPos"      : {"right": "100px"},
    "subTitleTextLeft"      : '<span class="title-order">1</span> Write about it',
    "subTitleTextRight"     : "Look at each picture and write a sentence about it in the present perfect continuous tense.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p71write.mp3",
    "defaultAnswer"         : -1,
    "image"                 :"",
    "questions": [{
            "textfront": "(children + discover + many new things + forest)",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/2-img-1.png",
            "answer": ["the children have been discovering many new things in the forest"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "(family + trek + through the mountains + for + one week)",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/2-img-2.png",
            "answer": ["the family has been trekking through the mountains for one week"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "(Dad + work + for the railway + for the last + 20 years)",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/2-img-3.png",
            "answer": ["dad has been working for the railway for the last 20 years"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
        {
          "textfront": "(Vince + boat + since + he was 10)",
          "audio": "../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/2-img-4.png",
          "answer": ["vince has been boating since he was 10"],
          "strictcase": "no", // yes (or) no
          "type": "text", // text (or) number
        },
    ]
}