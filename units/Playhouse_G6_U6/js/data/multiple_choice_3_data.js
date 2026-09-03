var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(0, 183, 206)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/p89/2.mp3',
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
    "mainTitle": "../images/pages/sb-icons/reading.png",
    "mainTitleIcon": "../images/pages/sb-icons/phonics_3_icon.png",
    "mainTitleIconPos": {"right": "80px"},
    "mainTitleAudio"        : "../audios/p52/READING.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>3</span> Answer it!",
    "subTitleTextRight"     : "Answer the questions.",
    "subTitleIcons"         :  [],
    "subTitleAudio"         : "../audios/new/p52answer.mp3", 
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "number",
    "numberstartfrom"       :  1, 
    "numberofcolumns"       :  1,
    "questions"             : [
        {
            "question"              : "In line 11, what does ‘it’ refer to?",
            "image"                 : "",
            "answer"                : [2],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"          : "<b>a</b> &nbsp; a printer",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>b</b> &nbsp; getting information",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>c</b> &nbsp; a mouse",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
            ]
        },
        {
            "question"              : "In the article, what does it say we do when we need directions now?",
            "image"                 : "",
            "answer"                : [3],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"          : "<b>a</b> &nbsp; ask at a petrol station",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>b</b> &nbsp; call someone who knows the way",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>c</b> &nbsp; look at our GPS",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
            ]
        }
    ]
}