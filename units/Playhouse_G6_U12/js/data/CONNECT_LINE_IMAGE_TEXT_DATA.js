var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(210, 35, 42)",
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
var linedraw_data = {    
    "layout"                : 1,
    "mainTitle": "../images/pages/sb-icons/language-building.png",
    "mainTitleIcon": "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio": "../audios/under.mp3",
    "mainTitleIconPos"      : {"right": "100px"},
    "subTitleTextLeft"      : "<span class='title-order'>2</span> Match it!",
    "subTitleTextRight"     : "Match each ‘-less' words to its meaning.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p109match.mp3",
    "activitysubheading"    : "",
    "activityicon"          : "",
    "connect"               : "single", // single (or) multiple
    "linecolor"             : "#00b7ce",
    "path"                  : "line",
    "strokewidth"           : "4",
    "nodecolor"             : "#00b7ce",
    "nodeselectioncolor"    : '#0584ceff',
	"ontextaudioplay": '',
    "onimgaudioplay": '',
    "questions"             : {
        "drags"             : [
            {
                "text"          : "painless",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "armless",
				"image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            },
            {
                "text"          : "lawless",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "childless",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "legless",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            }
        ],
        "drops"                 : [
            {
                "text"          : "someone or something without arms",
                "image"         : "no",
                "answer"        : [2],
                "audio"         : "",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "without pain",
                "image"         : "no",
                "answer"        : [1],
                "audio"         : "",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "someone or something without legs",
                "image"         : "no",
                "answer"        : [5],
                "audio"         : "",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "a place without law",
                "image"         : "no",
                "answer"        : [3],
                "audio"         : "",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "a couple without children",
                "image"         : "no",
                "answer"        : [4],
                "audio"         : "",
                "audioenable"   : "default", // correct (or) default
            }
        ],
    }
}               