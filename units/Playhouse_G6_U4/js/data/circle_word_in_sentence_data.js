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
    "mainTitle"             : "../images/pages/sb-icons/gram_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "90px"},
    "mainTitleAudio"        : "../audios/p34/GRAMMAR.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>3</span> Circle it! ",
    "subTitleTextRight"     : "Read each sentence and circle the correct word to fill in the blank.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p34circle.mp3",
    "activityicon"          : "../images/icons/hand_icon.png",    
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "number",
    "numberstartfrom"       : 1, 
    "numberofcolumns"       :  1,
    "image"                 : "../images/pages/activities/34-img.png",
    "imageposition"         :"back",
    "questions"             : [
        {
            "question"              : "The ticket agent [_] us to go to Gate 4B.",
            "options"               : [["say","tell","told","said"]],          
            "answer"                : [3],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : "The brochure [_] that the best time to travel is in May.",
            "options"               : [["tells","told","says","say"]],
            "answer"                : [3],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        }, 
        {
            "question"              : "‘Please check your luggage in here,’ [_] the ticket agent.",
            "options"               : [["told","said","say","tells"]],
            "answer"                : [2],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        }, 
        {
            "question"              : "The security officer [_] us to open our bags.",
            "options"               : [["told","say","tell","said"]],
            "answer"                : [1],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        }, 
    ]
}