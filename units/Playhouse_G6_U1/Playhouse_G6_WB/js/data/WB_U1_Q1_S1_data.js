var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p4/1.mp3',
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
        [1, 1, 1, 1,1, 1],
    ],
    "mainTitle"             : "../images/pages/sb-icons/word_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/word_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/p4/WORD_POWER.mp3",
    "subTitleTextLeft"      : "<strong>1 Match it!</strong> Match the Word Power word to its definition.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p4/1_Match_it!_Match_the_Word_Power_word_to_its_definition.mp3",
    ///////////////////////////
    // "activityheading": "<strong>Match it!</strong> Match the Word Power word to its definition.",
    // "activityheading_audio" : "../audios/p4/WORD_POWER.mp3",
    // "main_activityheading":"../images/pages/activities/WORD_POWER.jpg",
    // "main_activityheading_audio" : "../audios/p4/1_Match_it!_Match_the_Word_Power_word_to_its_definition.mp3",
    // "activityicon": "../images/icons/key_icon.png",
    "defaultAnswer": '',
    "leftList": '<ol type="1" class="words-list"> <li>live broadcast</li> <li>channel</li> <li>on air</li> <li>studio</li> <li>teleprompter</li> <li>camera operator</li> <li>anchor</li> <li>reporter</li> <li>sound engineer</li> <li>microphone</li> <li>breaking news</li> <li>programme</li> </ol>',
    "questions": [{
            "textfront": "",
            "textback": "&nbsp; 1 &nbsp; live broadcast",
            "textend": "a special room where television or radio </br> programmes or music recordings are made",
            "audio": "../audios/p4/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "no",
            "answer": ["4"],
            "strictcase": "yes", // yes (or) no              
            "type": "number", // text (or) number
            "audio" : "../audios/p4/over.mp3"
        },
        {
            "textfront": "",
            "textback": "&nbsp; 2 &nbsp; channel",
            "textend": "a person who uses a camera when films </br> or television programmes are being made",
            "audio": "../audios/p4/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "no",
            "answer": ["6"],
            "strictcase": "yes", // yes (or) no 
            "type": "number", // text (or) number
            "audio" : "../audios/p4/over.mp3"
        },
        {
            "textfront": "",
            "textback": "&nbsp; 3 &nbsp; on air",
            "textend": "a person whose job is to find out information on news events and describe them for TV, magazines or radio",
            "audio": "../audios/p4/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "no",
            "answer": ["8"],
            "strictcase": "yes", // yes (or) no
            "type": "number", // text (or) number
            "audio" : "../audios/p4/over.mp3"
        },
        {
            "textfront": "",
            "textback": "&nbsp; 4 &nbsp; studio",
            "textend": "to send out a programme on television or radio while it is happening",
            "audio": "../audios/p4/under.mp3",
            "audioenable": "no", // correct (or) default
            "image": "no",
            "answer": ["1"],
            "strictcase": "yes", // yes (or) no
            "type": "number", // text (or) number
            "audio" : "../audios/p4/over.mp3"
        },
        {
            "textfront": "",
            "textback": "&nbsp; 5 &nbsp; teleprompter",
            "textend": "a person who operates and takes care of the equipment used for recording and broadcasting for TV, film or live broadcasts",
            "audio": "../audios/p4/under.mp3",
            "audioenable": "no", // correct (or) default
            "image": "yes",
            "answer": ["9"],
            "strictcase": "yes", // yes (or) no
            "type": "number", // text (or) number
            "audio" : "../audios/p4/over.mp3"
        },
        {
            "textfront": "",
            "textback": "&nbsp; 6 &nbsp; camera operator",
            "textend": "something someone speaks into to make their voice louder or to record a person’s voice",
            "audio": "../audios/p4/under.mp3",
            "audioenable": "", // correct (or) default
            "image": "no",
            "answer": ["10"],
            "strictcase": "yes", // yes (or) no
            "type": "number", // text (or) number
            "audio" : "../audios/p4/over.mp3"
        },
        // {
        //     "textfront": "",
        //     "textback": "&nbsp; 7 &nbsp; anchor",
        //     "textend": "an electronic device that makes it possible for a person talking on a TV programme to read text while looking into the camera",
        //     "audio": "../audios/p4/under.mp3",
        //     "audioenable": "", // correct (or) default
        //     "image": "no",
        //     "answer": ["7"],
        //     "strictcase": "yes", // yes (or) no
        //     "type": "number", // text (or) number
        // },
        // {
        //     "textfront": "",
        //     "textback": "&nbsp; 8 &nbsp; reporter",
        //     "textend": " a person who is the main newsreader on a TV or radio news programme ",
        //     "audio": "../audios/p4/under.mp3",
        //     "audioenable": "no", // correct (or) default
        //     "image": "no",
        //     "answer": ["8"],
        //     "strictcase": "yes", // yes (or) no
        //     "type": "number", // text (or) number


        // },
        // {
        //     "textfront": "",
        //     "textback": "&nbsp; 9 &nbsp; sound engineer",
        //     "textend": " when a programme or person is being broadcast on television or radio",
        //     "audio": "../audios/p4/under.mp3",
        //     "audioenable": "no", // correct (or) default
        //     "image": "no",
        //     "answer": ["9"],
        //     "strictcase": "yes", // yes (or) no
        //     "type": "number", // text (or) number
        // },
        // {
        //     "textfront": "",
        //     "textback": "&nbsp; 10 &nbsp;  microphone",
        //     "textend": " a broadcast on TV or radio",
        //     "audio": "../audios/p4/under.mp3",
        //     "audioenable": "default", // correct (or) default
        //     "image": "no",
        //     "answer": ["10"],
        //     "strictcase": "yes", // yes (or) no              
        //     "type": "number", // text (or) number

        // },
        // {
        //     "textfront": "",
        //     "textback": "&nbsp; 11 &nbsp; breaking news",
        //     "textend": " a sudden news event that is reported by interrupting a programme to tell others about it",
        //     "audio": "../audios/p4/under.mp3",
        //     "audioenable": "default", // correct (or) default
        //     "image": "no",
        //     "answer": ["11"],
        //     "strictcase": "yes", // yes (or) no 
        //     "type": "number", // text (or) number


        // },
        // {
        //     "textfront": "",
        //     "textback": "&nbsp; 12 &nbsp; programme",
        //     "textend": " a television station that airs programmes",
        //     "audio": "../audios/p4/under.mp3",
        //     "audioenable": "default", // correct (or) default
        //     "image": "no",
        //     "answer": ["12"],
        //     "strictcase": "yes", // yes (or) no
        //     "type": "number", // text (or) number


        // }
    ]
}