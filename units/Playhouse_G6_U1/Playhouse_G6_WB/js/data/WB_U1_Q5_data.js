
//textFront means content before text box, textBack means content after text box.--->Li:14,15
//27-06-2020

var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p6/2.mp3',
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
  "layout": 1,
  "numinrow": [[1], [1], [1], [1], [1]],
  "mainTitle"             : "../images/pages/sb-icons/grammer_main_title.png",
  "mainTitleIcon"         : "",
  "mainTitleIconPos"      : {"right": "-18px"},
  "mainTitleAudio"        : "../audios/p6/GRAMMAR.mp3",
  "subTitleTextLeft"      : "2 Answer it! Answer the questions using prepositions or adverbs of time.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : [],
  "subTitleAudio"         : "../audios/p6/2_Answer_it!_Answer_the_questions_using_prepositions_or_adverbs_of_time.mp3",
  ///////////////////////////
  // "activityheading": 'Answer it! Answer the questions using prepositions or adverbs of time.',
  // "activityheading_audio": "../audios/p6/GRAMMAR.mp3",
  // "main_activityheading": "../images/pages/activities/GRAMMAR.jpg",
  // "main_activityheading_audio": "../audios/p6/2_Answer_it!_Answer_the_questions_using_prepositions_or_adverbs_of_time.mp3",
  // "activityicon": "../images/icons/key_icon.png",
  "image": "../images/pages/activities/ASP_3_SB_U14_P84_I1.png",
  "imageposition": "back",// "front" (or) "back"
  "numbering": "alphabet", // "alphabet" (or) "number"
  "numberstartfrom": "a",
  "options": [],
  "questions": [
    {
      "textfronttt": "",
      "textbackkk": "1 &nbsp; When do you want to go to the new mall? ",
      "audio": "../audios/p6/under.mp3",
      "audioenable": "default", // correct (or) default
      "image": "../images/pages/activities/AGW_U15_P147_I1.png",
      "answer": ["I want to go after school"],
      "alternateanswer": [[]],
      "strictcase": "yes", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    },
    {
      "textfronttt": "",
      "textbackkk": "2 &nbsp; When is it hottest here? ",
      "audio": "../audios/p6/under.mp3",
      "audioenable": "default", // correct (or) default
      "image": "../images/pages/activities/AGW_U15_P147_I2.png",
      "answer": ["in"],
      "alternateanswer": [[]],
      "strictcase": "yes", // yes (or) no     
      "strictorder": "yes", // yes (or) no             
      "maxlength": 300,
      "type": "text", // text (or) number
    },
    {
      "textfronttt": "",
      "textbackkk": "3 &nbsp; When do you usually wake up? ",
      "audio": "../audios/p6/under.mp3",
      "audioenable": "default", // correct (or) default
      "image": "../images/pages/activities/AGW_U15_P147_I3.png",
      "answer": ["under"],
      "alternateanswer": [[]],
      "strictcase": "yes", // yes (or) no     
      "strictorder": "yes", // yes (or) no             
      "maxlength": 600,
      "type": "text", // text (or) number
    },      
    {
      "textfronttt": "",
      "textbackkk": "4 &nbsp; What time should I come?  ",
      "audio": "../audios/p6/under.mp3",
      "audioenable": "default", // correct (or) default
      "image": "../images/pages/activities/AGW_U15_P147_I4.png",
      "answer": ["behind"],
      "alternateanswer": [[]],
      "strictcase": "yes", // yes (or) no     
      "strictorder": "yes", // yes (or) no             
      "maxlength": 700,
      "type": "text", // text (or) number
    }

  ]
}