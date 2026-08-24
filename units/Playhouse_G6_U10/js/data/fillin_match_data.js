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
    "layout": 3,
    "numinrow": [
        [1, 1, 1, 1],
    ],
    "mainTitle"             : "../images/pages/sb-icons/gram_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/p90/GRAMMAR.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : '<span class="title-order">3</span> Match it!',
    "subTitleTextRight"     : "Read each sentence and match it to the correct <span class='red_text'>hope</span> or <span class='red_text'>wish</span>.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p90match.mp3",
    "defaultAnswer"         : "",
    "image"                 :"../images/pages/activities/WB_G6_U1_Q8.jpg",
    "questions": [{
            "textfront": "",
            "textback": "&nbsp; 1 &nbsp; We have read all the books in our library.",
            "textend": "<b>a.</b> &nbsp; I wish it was closer so we could walk there.",
            "textback_audio": "../audios/under.mp3",
            "textend_audio": "../audios/under.mp3",
            "audio": "",
            "audioenable": "no", // correct (or) default
            "image": "",
            "answer": ["c"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": " ",
            "textback": "&nbsp; 2 &nbsp; The park is so far. I have to ask my dad to drive me there.",
            "textend": "<b>b.</b> &nbsp; I hope they find a way to stop the pollution.",
            "textback_audio": "../audios/under.mp3",
            "textend_audio": "../audios/under.mp3",
            "audio": "",
            "audioenable": "no", // correct (or) default
            "image": "",
            "answer": ["a"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "",
            "textback": "&nbsp; 3 &nbsp; The factory makes a lot of smog.",
            "textend": "<b>c.</b> &nbsp; We wish there were more new books.",
            "textback_audio": "../audios/under.mp3",
            "textend_audio": "../audios/under.mp3",
            "audio": "",
            "audioenable": "no", // correct (or) default
            "image": "",
            "answer": ["b"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
        {
            "textfront": "",
            "textback": "&nbsp; 4 &nbsp; Andy put the wrong items in the recycle bin.",
            "textend": "<b>d.</b> &nbsp; I hope he remembers to sort them better next time.",
            "textback_audio": "../audios/under.mp3",
            "textend_audio": "../audios/under.mp3",
            "audio": "",
            "audioenable": "no", // correct (or) default
            "image": "",
            "answer": ["d"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        }
    ]
  }