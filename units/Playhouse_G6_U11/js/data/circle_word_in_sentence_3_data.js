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
    "numberstartfrom"       : 4, 
    "numberofcolumns"       :  1,
    "image"                 : "no",
    "imageposition"         :"back",
    "questions"             : 
    [
        
      {
        "question"        : "I[_]play piano than sing.",
        "options"         : [["prefer","would rather"]],
        "answer"          : [2],
			  "inputbox"				: "yes",
			  "image"					  : '../images/pages/activities/7-img-4.png',
        "audio"           : "",
        "audioenable"     : "correct", // correct (or) default
            
      }, 
      {
        "question"        : "Do you [_]  cats or dogs?",
        "options"         : [["prefer","would rather"]],
        "answer"          : [1],
		  	"inputbox"				: "yes",
			  "image"					  : '../images/pages/activities/7-img-5.png',
        "audio"           : "",
        "audioenable"     : "correct", // correct (or) default        
      }, 
      {
        "question"        : "I[_]eating cake to eating pie.",
        "options"         : [["prefer","would rather"]],
        "answer"          : [1],
			  "inputbox"				: "yes",
			  "image"					  : '../images/pages/activities/7-img-6.png',
        "audio"           : "",
        "audioenable"     : "correct", // correct (or) default    
      }, 
    ]
}