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
    "mainTitleIconPos": {"right": "90px"},
    "mainTitleAudio"        : "../audios/p80/READING.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>2</span> Answer it!",
    "subTitleTextRight"     : "Answer the questions.",
    "subTitleIcons"         :  [],
    "subTitleAudio"         : "../audios/new/p80answer.mp3", 
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "number",
    "numberstartfrom"       :  1, 
    "numberofcolumns"       :  1,
    "questions"             : [
        {
            "question"              : "Using your senses is called",
            "image"                 : "",
            "answer"                : [2],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"          : "<b>a</b> &nbsp; prediction.",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>b</b> &nbsp; observation.",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>d</b> &nbsp; direction.",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
            ]
        },
        {
            "question"              : "These clouds look like sheep’s wool and tell that a storm may be on its way.",
            "image"                 : "",
            "answer"                : [3],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"          : "<b>a</b> &nbsp; cumulus",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>b</b> &nbsp; nimbostratus",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>c</b> &nbsp; altocumulus",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
            ]
        }
    ]
}