var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p7/1.mp3',
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
        [1, 1, 1, 1,1],
    ],
    "mainTitle"             : "../images/pages/sb-icons/LANGUAGE_BUILDING.jpg",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/p7/LANGUAGE_BUILDING.mp3",
    "subTitleTextLeft"      : "<b>1 Talk about it!</b> <span>For each of the pictures, tell the salesperson what you would like.<span>",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p7/1_Talk_about_it!_For_each_of_the_pictures_tell_the_salesperson_what_you_would_like.mp3",
    ///////////////////////////
    // "activityheading": "<b>Talk about it!</b> <span>For each of the pictures, tell the salesperson what you would like.<span>",
    // "activityheading_audio" : "../audios/p7/1_Talk_about_it!_For_each_of_the_pictures_tell_the_salesperson_what_you_would_like.mp3",
    // "main_activityheading":"../images/pages/activities/LANGUAGE_BUILDING.jpg",
    // "main_activityheading_audio" : "../audios/p7/LANGUAGE_BUILDING.mp3",
    // "activityicon": "../images/icons/key_icon.png",
    "defaultAnswer": 1,
    "leftList": '<ol type="1" class="words-list"> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li> <li><img style="max-width:31%" src="../images/pages/activities/AGW_U15_P146_I6.png"></li>  </ol>',
    "questions": [{
            "textfront": "I’d like to buy",
            "textback": "&nbsp; ring today, please.",
            "textend": "(one of several)",
            "audio": "../audios/p7/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/WB_U1_Q6_1.jpg",
            "answer": ["a"],
            "strictcase": "yes", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "I’d like to buy",
            "textback": "&nbsp; purple watch, please.",
            "textend": " (one of several)",
            "audio": "../audios/p7/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/WB_U1_Q6_2.png",
            "answer": ["the"],
            "strictcase": "yes", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "I’d like to buy",
            "textback": "&nbsp; banana over there, please.",
            "textend": "(a specific one)",
            "audio": "../audios/p7/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/WB_U1_Q6_3.jpg",
            "answer": ["the"],
            "strictcase": "yes", // yes (or) no
            "type": "text", // text (or) number
        },
        {
            "textfront": "May I have",
            "textback": "&nbsp; chocolate cake, please?",
            "textend": "(a specific one)",
            "audio": "../audios/p7/under.mp3",
            "audioenable": "no", // correct (or) default
            "image": "../images/pages/activities/WB_U1_Q6_4.jpg",
            "answer": ["the"],
            "strictcase": "yes", // yes (or) no
            "type": "text", // text (or) number
        },
        {
            "textfront": "I’d like to buy",
            "textback": "&nbsp; table, please.",
            "textend": "(one of several)",
            "audio": "../audios/p7/under.mp3",
            "audioenable": "no", // correct (or) default
            "image": "../images/pages/activities/WB_U1_Q6_5.jpg",
            "answer": ["a"],
            "strictcase": "yes", // yes (or) no
            "type": "text", // text (or) number
        }
        
    ]
}