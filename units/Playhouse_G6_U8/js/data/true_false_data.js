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
    "mainTitle"             : "../images/pages/sb-icons/reading.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_3_icon.png",
    "mainTitleAudio"        : "../audios/p72/READING.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> Answer it!',
    "subTitleTextRight"     : "Answer '<span class='red_text'>true</span>' or '<span class='red_text'>false</span>'.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p72answer.mp3", 
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "number",
    "numberstartfrom"       :  1, 
    "numberofcolumns"       :  1,
    "image"                 : "",
    "imageposition"         :"back",
    "questions"             : [
        {
            "question"              : "<b>1</b> &nbsp;  Mark Beaumont is an adventurer, cyclist and world traveller.",
            "options"               : ["True","False"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default 
        },
        {
            "question"              : "<b>2</b> &nbsp; Mark started going on adventures when he was 25.",
            "options"               : ["True","False"],
            "answer"                : [2],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
        },
        {
            "question"              : "<b>3</b> &nbsp; In February 2010, Mark started his trip from Alaska to South America.",
            "options"               :  ["True","False"],
            "answer"                : [2],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
        },
        {
            "question"              : "<b>4</b> &nbsp; Mark’s mum and trainer helped him prepare for his new adventure.",
            "options"               :  ["True","False"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
        },
        {
            "question"              : "<b>&#9733;</b> &nbsp; Mark Beaumont likes adventures.",
            "options"               :  ["True","False"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
        }
    ]
}