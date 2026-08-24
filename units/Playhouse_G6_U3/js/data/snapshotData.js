var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/p20/pizza.mp3","../audios/p20/dough.mp3","../audios/p20/sauce.mp3","../audios/p20/sprinkle.mp3","../audios/p20/cheese.mp3","../audios/p20/add.mp3","../audios/p20/pepperoni.mp3","../audios/p20/slice.mp3"],
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
      //   "audio": ["../audios/p20/pizza.mp3"]},
      // 'ccss': {
      //   "text": ["<span>1 Goodbye!</span>","<span>2 How are you?</span>","<span>3 Fine, thank you.</span>","<span>4 Hello!</span>","<span>5 Good morning!</span>"],
      //   "audio": ["../audios/p20/Pg4_Vocabulary_Adult Lady.mp3","../audios/p20/dough.mp3", "../audios/p20/pizza.mp3","../audios/p20/dough.mp3", "../audios/p20/pizza.mp3"]},
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>2</span> Listen again and read."],
        "titleIcons" : [""],
        "titlesAudio" : ["../audios/p20/Pg4_1.2_Adult_Lady.mp3","../audios/p20/Pg4_1.3_Adult Lady.mp3", "../audios/p20/Pg4_1.4_Adult Lady.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 golf","2 golf course", "3 golf club","4 ‘Hole in one!’","5 ice hockey", "6 ice rink","7 puck","8 ‘Shoot!’", "9 cricket","10 cricket pitch", "11 wicket", "12 ‘It’s a run!’"],
        "audio": ["../audios/p20/1_golf.mp3","../audios/p20/2_golf_course.mp3", "../audios/p20/3_golf_club.mp3",
                  "../audios/p20/4_‘Hole_in_one!’.mp3","../audios/p20/5_ice_hockey.mp3", "../audios/p20/6_ice_rink.mp3",
                  "../audios/p20/7_puck.mp3","../audios/p20/8_‘Shoot!’.mp3", "../audios/p20/9_cricket.mp3",
                  "../audios/p20/10_cricket_pitch.mp3","../audios/p20/11_wicket.mp3", "../audios/p20/12_‘It’s_a_run!’.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>3</span> Ask and answer."],
        "titleIcons" : [""],
        "titleTextRight": "<span class='blue_text'></span>",
        "titlesAudio" : ["../audios/new/p20ask.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/p20/Pg5_2.2_Adult Lady.mp3","../audios/p20/Pg5_2.3_Adult Lady.mp3"]},
        'listen3': {
          // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
          "mainTitle": "../images/pages/page-1/1-title.png",
          "mainTitle_audio" : "../audios/p20/WORD_POWER.mp3",
          "titleTexts" : ["<span class='title-order'>1</span> Listen and say."],
          "titleIcons" : [""],
          "titleTextRight": "<span class='blue_text'>What is the sport that you and all your friends like to play? Does your country have a national sport? How do you play it?</span>",
          "titlesAudio" : ["../audios/p20/1_Listen_and_say.mp3"],
          "image": [],
          "audio": ["../audios/p32/Pg5_2.2_Adult Lady.mp3","../audios/p32/Pg5_2.3_Adult Lady.mp3"]},
},
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["golf","golf course", "golf club","‘Hole in one!’","ice hockey", "ice rink","puck","‘Shoot!’", "cricket","cricket pitch", "wicket", "‘It’s a run!’"],
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
 "postions"  : ["left: 40px;top: 150px;",
                "left: 120px;top: 330px;",
                "left: 240px;top: 330px;",
                "left: 200px;top: 100px;",
                "left: 700px;top: 100px;",
                "left: 740px;top: 260px;",
                "left: 960px;top: 320px;",
                "left: 900px;top: 0;",
                "left: 130px;top: 500px;",
                "left: 110px;top: 700px;",
                "left: 270px;top: 700px;",
                "left: 820px;top: 480px;",
              ],
  "imagesAudio" :["../audios/p20/1_golf.mp3","../audios/p20/2_golf_course.mp3", "../audios/p20/3_golf_club.mp3",
                  "../audios/p20/4_‘Hole_in_one!’.mp3","../audios/p20/5_ice_hockey.mp3", "../audios/p20/6_ice_rink.mp3",
                  "../audios/p20/7_puck.mp3","../audios/p20/8_‘Shoot!’.mp3", "../audios/p20/9_cricket.mp3",
                  "../audios/p20/10_cricket_pitch.mp3","../audios/p20/11_wicket.mp3", "../audios/p20/12_‘It’s_a_run!’.mp3"]
}