//textFront means content before text box, textBack means content after text box.--->Li:14,15
//27-06-2020

var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p5/2.mp3',
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
    "mainTitle"             : "../images/pages/sb-icons/CONVERSATION.jpg",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/p5/CONVERSATION.mp3",
    "subTitleTextLeft"      : "<strong>2 Answer it! </strong><span style='font-weight: lighter;'>After reading the conversation, see if you can answer the questions below.</span>",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p5/2_Answer_it!_After_reading_the_conversation_see_if_you_can_answer_the_questions_below.mp3",
    ///////////////////////////
    // "activityheading": '<strong>Answer it! </strong><span style="font-weight: lighter;">After reading the conversation, see if you can answer the questions below.</span>',
    // "activityheading_audio" : "../audios/p5/CONVERSATION.mp3",
    // "main_activityheading":"../images/pages/activities/conversation.jpg",
    // "main_activityheading_audio" : "../audios/p5/2_Answer_it!_After_reading_the_conversation_see_if_you_can_answer_the_questions_below.mp3",
    // "activityicon": "../images/icons/key_icon.png",
    "image": "",
    "imageposition": "back",// "front" (or) "back"
    "numbering": "alphabet", // "alphabet" (or) "number"
    "numberstartfrom": "a",
    "options": [],
    "questions": [
      {
        "textfronttt": "",
        "textbackkk": "1 &nbsp; Where are the students? ",
        "audio": "../audios/p5/under.mp3",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["the students were at a studio"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 200,
        "type": "text", // text (or) number
      },
      {
        "textfronttt": "",
        "textbackkk": "2 &nbsp; What will they see in a few minutes? ",
        "audio": "../audios/p5/between.mp3",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/AGW_U15_P147_I2.png",
        "answer": ["they are going to see a live broadcast"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 200,
        "type": "text", // text (or) number
      },
      {
        "textfronttt": "",
        "textbackkk": "3 &nbsp; What kind of programme is the anchor going to do? ",
        "audio": "../audios/p5/between.mp3",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/AGW_U15_P147_I3.png",
        "answer": ["the anchor is going to do a programme about how to solve environmental problems in their city"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 200,
        "type": "text", // text (or) number
      },      
      {
        "textfronttt": "",
        "textbackkk": "4 &nbsp; Name three things the students will be able to do or see on their school trip. ",
        "audio": "../audios/p5/under.mp3",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/AGW_U15_P147_I4.png",
        "answer": ["could see a live broadcast meet a sound engineer and meet a camera operator"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 200,
        "type": "text", // text (or) number
      }
  
    ]
  }