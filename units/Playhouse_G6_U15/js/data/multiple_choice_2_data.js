var stereo_data = {
    "audio":"",
    "exist":true,
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
    "mainTitle"             : "../images/pages/sb-icons/reading.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_3_icon.png",
    "mainTitleIconPos"      : {"right": "80px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>2</span> Answer it!",
    "subTitleTextRight"     : "",
    "subTitleIcons"         :  [],
    "subTitleAudio"         : "../audios/under.mp3", 
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "number",
    "numberstartfrom"       :  1, 
    "numberofcolumns"       :  1,
    "questions"             : [
        {
            "question"              : "What is Nolan waiting for?",
            "image"                 : "",
            "answer"                : [2],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"          : "<b>a</b> &nbsp; a delivery truck",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>b</b> &nbsp; a very special package",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
            ]
        },
        {
            "question"              : "How did Nolan feel when he saw the special package?",
            "image"                 : "",
            "answer"                : [1],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"          : "<b>a</b> &nbsp; He was excited.",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>b</b> &nbsp; He was upset because it was small.",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                
            ]
        },
        
    ]
}