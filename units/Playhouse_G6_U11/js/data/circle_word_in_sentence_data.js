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
    "mainTitleAudio"        : "../audios/under.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : "<span class='title-order'>3</span> Circle it! ",
    "subTitleTextRight"     : "Read the sentences. Circle the correct verb tense (<span class='red_text'>simple past or present perfect</span>) to make the sentence correct.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p99circle.mp3",
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "none",
    "numberstartfrom"       : 1, 
    "numberofcolumns"       : 1,
    "image"                 : "../images/pages/activities/5-img-1.png",
    "imageposition"         :"back",
    "questions"             : [
        {
            "question"              : "<b>1</b> &nbsp;  Yesterday I  ([_]) busy. I ([_]) at the gym twice this week.",
            "options"               : [["was","have been"],["was","have been"]],          
            "answer"                : [1,1],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : "<b>2</b> &nbsp; On Tuesday Ann ([_]) her best friend Carrie and ([_]) her that she ([_]) home from her holiday.",
            "options"               : [["called","has called"],["told","has told"],["got"," has gotten"]],          
            "answer"                : [1,1,2],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : "<b>3</b> &nbsp; So far Mum ([_]) three kilometres around the park. <br> In 2010, she ([_]) only two kilometres.",
            "options"               : [["walked","has walked"],["walked","has walked"]],
            "answer"                : [2,1],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        },
        {
            "question"              : "<b>4</b> &nbsp;  Already, Lyle ([_]) on his computer for three hours. <br> Yesterday, Lyle ([_]) for three hours.",
            "options"               : [["worked","has worked"], ["worked","has worked"]],
            "answer"                : [2,1],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        },
        {
            "question"              : "<b>5</b>  &nbsp; Curtis ([_]) from the neighbourhood in 2006. <br> Curtis ([_]) two times so far. ",
            "options"               : [["moved","has moved"], ["moved","has moved"]],          
            "answer"                : [1,2],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        
    ]
}