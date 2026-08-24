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
var mcq_data = {    
    "layout"                : 1,
    "numinrow"              : [[1]],
    "mainTitle"             : "../images/pages/sb-icons/language-building.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "100px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>2</span> Choose it!",
    "subTitleTextRight"     : "Complete each sentence by choosing the correct preference (<span class='red_text'>prefer / would rather</span>).",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p101choose.mp3",
    "activityicon"          : "../images/icons/hand_icon.png",    
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "number",
    "numberstartfrom"       : 1, 
    "numberofcolumns"       :  1,
    "image"                 : "no",
    "imageposition"         :"back",
    "questions"             : [
        {
            "question"              : "Kyle [_]  jogging to swimming.",
            "options"               : [["prefer","would rather"]],          
            "answer"                : [1],
			      "inputbox"				      :"yes",
			      "image"					        : '../images/pages/activities/7-img-1.png',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : "I[_]eat a salad than cake.",
            "options"               : [["prefer","would rather"]],
            "answer"                : [2],
            "inputbox"				      : "yes",
            "image"					        : '../images/pages/activities/7-img-2.png',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        },
        {
            "question"              : "Do you[_]the red shirt?",
            "options"               : [["prefer","would rather"]],          
            "answer"                : [1],
            "inputbox"				      :"yes",
            "image"					        : '../images/pages/activities/7-img-3.png',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        },
      
    ]
}