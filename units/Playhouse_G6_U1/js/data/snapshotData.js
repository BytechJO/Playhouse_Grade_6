var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/p4/pizza.mp3","../audios/p4/dough.mp3","../audios/p4/sauce.mp3","../audios/p4/sprinkle.mp3","../audios/p4/cheese.mp3","../audios/p4/add.mp3","../audios/p4/pepperoni.mp3","../audios/p4/slice.mp3"],
      "image": ["../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word2.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word3.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word4.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word5.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word6.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word7.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word8.png"],
      "word": ["<span>pizza</span>","<span>dough</span>","<span>sauce</span>","<span>sprinkle</span>","<span>cheese</span>","<span>add</span>","<span>pepperoni</span>","<span>slice</span>"],
      "imagePlacePos":[[1,1,1],[1,1,1],[1,0,1]]
        }
  ],"popuptitle": "What I Want To Know:"
}

var snapshotPopup_data="<ul><li>What are the people doing?</li><li>Who are the pizzas for?</li><li>What toppings go on a pizza?</li></ul>";

var Popups_data = {
  "slides": [
    {
      // 'apk': {
      //   "text": ["<div><p>I need your help.<br />Can you help me find the restaurant in the picture?</p></div>"],
      //   "audio": ["../audios/p4/pizza.mp3"]},
      // 'ccss': {
      //   "text": ["<span>1 Goodbye!</span>","<span>2 How are you?</span>","<span>3 Fine, thank you.</span>","<span>4 Hello!</span>","<span>5 Good morning!</span>"],
      //   "audio": ["../audios/p4/Pg4_Vocabulary_Adult Lady.mp3","../audios/p4/dough.mp3", "../audios/p4/pizza.mp3","../audios/p4/dough.mp3", "../audios/p4/pizza.mp3"]},
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>2</span> Listen again and read."],
        "titleIcons" : [""],
        "titlesAudio" : ["../audios/p4/Pg4_1.2_Adult_Lady.mp3","../audios/p4/Pg4_1.3_Adult Lady.mp3", "../audios/p4/Pg4_1.4_Adult Lady.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 studio","2 on air", "3 channel","4 sound engineer","5 camera operator", "6 programme","7 reporter","8 breaking news", "9 microphone","10 anchor", "11 live broadcast", "12 teleprompter"],
        "audio": ["../audios/p4/1_studio.mp3","../audios/p4/2_on_air.mp3", "../audios/p4/3_channel.mp3",
                  "../audios/p4/4_sound_engineer.mp3","../audios/p4/5_camera_operator.mp3", "../audios/p4/6_programme.mp3",
                  "../audios/p4/7_reporter.mp3","../audios/p4/8_breaking_news.mp3", "../audios/p4/9_microphone.mp3",
                  "../audios/p4/10_anchor.mp3","../audios/p4/11_live_broadcast.mp3", "../audios/p4/12_teleprompter.mp3"
        ]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>3</span> Ask and answer."],
        "titleIcons" : [""],
        "titleTextRight": "<span class='blue_text'></span>",
        "titlesAudio" : ["../audios/new/ask.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/p4/Pg5_2.2_Adult Lady.mp3","../audios/p4/Pg5_2.3_Adult Lady.mp3"]},
        'listen3': {
          // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
          "mainTitle": "../images/pages/page-1/1-title.png",
          "mainTitle_audio" : "../audios/p4/WORD_POWER.mp3",
          "titleTexts" : ["<span class='title-order'>1</span> Listen and say."],
          "titleIcons" : [""],
          "titleTextRight": "<span class='blue_text'>Do your parents watch the news on TV, listen to the news on the radio or read the news on the internet? Do you think news is important?</span>",
          "titlesAudio" : ["../audios/p4/1_Listen_and_say.mp3"],
          "image": [],
          "audio": ["../audios/p32/Pg5_2.2_Adult Lady.mp3","../audios/p32/Pg5_2.3_Adult Lady.mp3"]},
},
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["studio","on air", "channel","sound engineer","camera operator", "programme","reporter","breaking news", "microphone","anchor", "live broadcast", "teleprompter"],
  "points"  : ["../images/pages/page-1/intro-1.png",
              "../images/pages/page-1/intro-2.png",
              "../images/pages/page-1/intro-3.png",
              "../images/pages/page-1/intro-4.png",
              "../images/pages/page-1/intro-5.png",
              "../images/pages/page-1/intro-6.png",
              "../images/pages/page-1/intro-7.png",
              "../images/pages/page-1/intro-8.png",
              "../images/pages/page-1/intro-9.png",
              "../images/pages/page-1/intro-10.png",
              "../images/pages/page-1/intro-11.png",
              "../images/pages/page-1/intro-12.png",
            ],
 "postions"  : ["left: 10px;top: 150px;",
                "left: 440px;top: 0px;",
                "left: 550px;top: 150px;",
                "left: 1180px;top: 170px;",
                "left: 60px;top: 570px;",
                "left: 250px;top: 380px;",
                "left: 530px;top: 470px;",
                "left: 700px;top: 610px;",
                "left: 730px;top: 530px;",
                "left: 920px;top: 500px;",
                "left: 1140px;top: 460px;",
                "left: 950px;top: 700px;",
              ],
  "imagesAudio" :["../audios/p4/1_studio.mp3","../audios/p4/2_on_air.mp3", "../audios/p4/3_channel.mp3",
                  "../audios/p4/4_sound_engineer.mp3","../audios/p4/5_camera_operator.mp3", "../audios/p4/6_programme.mp3",
                  "../audios/p4/7_reporter.mp3","../audios/p4/8_breaking_news.mp3", "../audios/p4/9_microphone.mp3",
                  "../audios/p4/10_anchor.mp3","../audios/p4/11_live_broadcast.mp3", "../audios/p4/12_teleprompter.mp3"]
}