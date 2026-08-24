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
    "mainTitle": "../images/pages/sb-icons/conv_main_title.png",
    "mainTitleIcon": "../images/pages/sb-icons/conv_main_title_icon.png",
    "mainTitleIconPos": {"right": "90px"},
    "mainTitleAudio"        : "../audios/p117/CONVERSATION.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>2</span> Answer it!",
    "subTitleTextRight"     : "Read each question and choose the best answer.",
    "subTitleIcons"         :  [],
    "subTitleAudio"         : "../audios/new/p120answer.mp3", 
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "number",
    "numberstartfrom"       :  1, 
    "numberofcolumns"       :  1,
    "questions"             : [
        {
            "question"              : "Who used to live next door to Max?",
            "image"                 : "",
            "answer"                : [2],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"          : "<b>a</b> &nbsp; a Max Evans ",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>b</b> &nbsp; b Evan Lewis ",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>b</b> &nbsp; c Lewis Evans",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
            ]
        },
        {
            "question"              : "The boy says, ‘Having a ball at my new school!’ What does this mean?",
            "image"                 : "",
            "answer"                : [1],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"          : "<b>a</b> &nbsp; a He is having a good time. ",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>b</b> &nbsp; b He plays football at school.",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                
            ]
        },
        {
            "question"              : "In line 9, who does ‘him’ refer to?",
            "image"                 : "",
            "answer"                : [4],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"          : "<b>a</b> &nbsp; a Max ",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>b</b> &nbsp; b Yoshi ",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>b</b> &nbsp; c Lilly ",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>b</b> &nbsp; d Evan",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                
            ]
        },
      
    ]
}