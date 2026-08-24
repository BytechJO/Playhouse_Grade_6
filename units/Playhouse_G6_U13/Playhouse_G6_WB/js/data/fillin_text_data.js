var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p64/1.mp3',
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
var fillin_data = {
    "layout"               : 1,
    "numinrow"              : [[1], [1], [1], [1], [1]],
    "mainTitle"             : "../images/pages/sb-icons/word_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/p64/WORD_POWER.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">1</span> Solve it! Every other letter in the Word Power words has been left out. Fill in the missing letters, and then write the whole word in the blank.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p64/1_Solve_it!_Every_other_letter_in_the_Word_Power_words_has_been_left_out_Fill_in_the_missing.mp3",
    "image"                 : "../images/pages/activities/0-img-1.png",
    "imageposition"         : "back",// "front" (or) "back"
    "defaultAnswer"         : 1,
    "numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "questions"             :
     [
// "i", "e", "i", "e", "timeline"
// "o", "i", "i", "a", "i", "n", "notifications"
// "f", "i", "n", "r", "q", "e", "t", "frend request"
// "s", "a", "e", "share"
// "u", "l", "a", "upload"
// "l", "k", "like"
// "o", "m", "n", "comment"
// "s", "a", "c", "b", "x", "search box"
// "c", "a", "chat"
// "s", "a", "u", "status"
// "p", "s", "post"
// "h", "t", "photo"
        {
          "singleword": false,
          "text": "t[_]m[_]l[_]n[_]=[_]",
          "textaudios": ["../audios/p64/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["i", "e", "i", "e", "timeline"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "n[_]t[_]f[_]c[_]t[_]o[_]s &nbsp; =[_]",
          "textaudios": ["../audios/p64/under.mp3","../audios/p64/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["o", "i", "i", "a", "i", "n", "notifications"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]r[_]e[_]d &nbsp; [_]e[_]u[_]s[_]=[_]",
          "textaudios": ["../audios/p64/under.mp3","../audios/p64/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["f", "i", "n", "r", "q", "e", "t", "frend request"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]h[_]r[_]=[_]",
          "textaudios": ["../audios/p64/under.mp3","../audios/p64/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["s", "a", "e", "share"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]p[_]o[_]d &nbsp; = [_]",
          "textaudios": ["../audios/p64/under.mp3","../audios/p64/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["u", "l", "a", "upload"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },     
        {
          "singleword": false,
          "text": "[_]i[_]e &nbsp; =[_]",
          "textaudios": ["../audios/p64/under.mp3","../audios/p64/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["l", "k", "like"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        }, 
        {
          "singleword": false,
          "text": "c[_]m[_]e[_]t &nbsp; = [_]",
          "textaudios": ["../audios/p64/under.mp3","../audios/p64/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["o", "m", "n", "comment"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },  
        {
          "singleword": false,
          "text": "[_]e[_]r[_]h &nbsp; [_]o[_]=[_]",
          "textaudios": ["../audios/p64/under.mp3","../audios/p64/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["s", "a", "c", "b", "x", "search box"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        }, 
        {
          "singleword": false,
          "text": "[_]h[_]t &nbsp; =[_]",
          "textaudios": ["../audios/p64/under.mp3","../audios/p64/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["c", "a", "chat"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },   
        {
          "singleword": false,
          "text": "[_]t[_]t[_]s &nbsp; =[_]",
          "textaudios": ["../audios/p64/under.mp3","../audios/p64/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["s", "a", "u", "status"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },   
        {
          "singleword": false,
          "text": "[_]o[_]t &nbsp; = [_]",
          "textaudios": ["../audios/p64/under.mp3","../audios/p64/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["p", "s", "post"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },   
        {
          "singleword": false,
          "text": "p[_]o[_]o &nbsp; = [_]",
          "textaudios": ["../audios/p64/under.mp3","../audios/p64/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["h", "t", "photo"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },             
      ]
    }