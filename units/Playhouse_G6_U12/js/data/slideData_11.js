var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(0, 183, 206)",
    "type":"flip_card",
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
var reading_data = {
    "mainTitle": "../images/pages/sb-icons/conv_main_title.png",
    "mainTitleIcon": "../images/pages/sb-icons/conv_main_title_icon.png",
    "mainTitleIconPos": {"right": "90px"},
    "mainTitleAudio": "../audios/p105/CONVERSATION.mp3",
    "subTitleTextLeft": "<span class='title-order'>1</span> Change it!",
    "subTitleTextRight": "Have a similar conversation like the one above, but change it in the following ways:",
    "subTitleIcons": [],
    "subTitleAudio": "../audios/under.mp3",
    "slides": [
        {
            "mainTitle": "../images/pages/page-2/1-title_1.png",
            "mainTitleAudio": "../audios/under.mp3",
            
            "layout": "multible_flex_containers_with_list",

            "boxes": [
                {
                    "image": "../images/pages/page-5/1-img-1.png",
                    "list": ["<span class='red_text'>A: </span> What’s wrong?", "<span class='blue_text'>B: </span>I bumped my head.", "<span class='red_text'>A: </span> If you use an ice pack, your head feels better."],
                    "audio": ["../audios/under.mp3", "../audios/under.mp3", "../audios/under.mp3"]
                },
                {
                    "image": "../images/pages/page-5/1-img-2.png",
                    "list": ["<span class='red_text'>A: </span> What’s wrong?", "<span class='blue_text'>B: </span> I hurt my arm.", "<span class='red_text'>A: </span> If you put it in a sling, it heals faster."],
                    "audio": ["../audios/under.mp3", "../audios/under.mp3", "../audios/under.mp3"]
                },
                {
                    "image": "../images/pages/page-5/1-img-3.png",
                    "list": ["<span class='red_text'>A: </span> What’s wrong?", "<span class='blue_text'>B: </span> I broke my leg.", "<span class='red_text'>A: </span> If you put a cast on your leg, it heals so quickly."],
                    "audio": ["../audios/under.mp3", "../audios/under.mp3", "../audios/under.mp3"]
                }
            ]
        },
    ]
}
