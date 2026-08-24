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
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "100px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>2</span> Circle it!",
    "subTitleTextRight"     : "Circle the correct verb or verbs to make each sentence correct.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p51circle.mp3",
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "none",
    "numberstartfrom"       : 1, 
    "numberofcolumns"       :  1,
    "image"                 : "",
    "imageposition"         :"back",
    "questions"             : [
        {
            "question"              : "1 Since it is the summer holidays, Callie ([_]) with her uncle",
            "options"               : [["stays","is staying"]],          
            "answer"                : [2],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : "&nbsp;&nbsp; who ([_]) in the country.",
            "options"               : [["lives","is living"]],
            "answer"                : [1],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        },
        {
            "question"              : "2 She usually ([_]) cereal in the morning, ",
            "options"               : [["eats","is eating"]],          
            "answer"                : [1],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : "&nbsp;&nbsp; but since she ([_]) for a race,",
            "options"               : [["trains","is training"]],
            "answer"                : [2],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        }, 
        {
            "question"              : "&nbsp;&nbsp; she ([_]) fruits and vegetables instead.",
            "options"               : [["eats","is eating"]],
            "answer"                : [1],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        }, 
        {
            "question"              : "3 Her bus ([_]) now, ",
            "options"               : [["leaves","is leaving"]],
            "answer"                : [2],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        }, 
        {
            "question"              : "&nbsp;&nbsp; but it ([_]) at 10:00.",
            "options"               : [["returns","is returning"]],
            "answer"                : [1],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        },
    ]
}