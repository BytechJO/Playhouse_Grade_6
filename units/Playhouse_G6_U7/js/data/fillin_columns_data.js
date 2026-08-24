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
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/under.mp3",
    "mainTitleIconPos"      : {"right": "92px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> Talk about it!',
    "subTitleTextRight"     : "In pairs, ask and answer the questions on the lines. Share answers with the class.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p63talk.mp3",
    "defaultAnswer"         : -1,
    "image"                 :"",
    "numbering"             : "none",
    "questions": [{
            "textfront": "<span class='blue_text'>Q1:</span> &nbsp; When were you born?",
            "pre_text":"<span class='red_text'>A:</span>",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": [""],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "<span class='blue_text'>Q2:</span> &nbsp; What will you do tomorrow?",
            "pre_text":"<span class='red_text'>A:</span>",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": [""],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "<span class='blue_text'>Q3:</span> &nbsp; What do you do every day after school?",
            "pre_text":"<span class='red_text'>A:</span>",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": [""],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
       
    ]
}