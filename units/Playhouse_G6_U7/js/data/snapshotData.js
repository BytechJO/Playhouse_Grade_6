var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/p60/pizza.mp3","../audios/p60/dough.mp3","../audios/p60/sauce.mp3","../audios/p60/sprinkle.mp3","../audios/p60/cheese.mp3","../audios/p60/add.mp3","../audios/p60/pepperoni.mp3","../audios/p60/slice.mp3"],
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
      //   "audio": ["../audios/p60/pizza.mp3"]},
      // 'ccss': {
      //   "text": ["<span>1 Goodbye!</span>","<span>2 How are you?</span>","<span>3 Fine, thank you.</span>","<span>4 Hello!</span>","<span>5 Good morning!</span>"],
      //   "audio": ["../audios/p60/Pg4_Vocabulary_Adult Lady.mp3","../audios/p60/dough.mp3", "../audios/p60/pizza.mp3","../audios/p60/dough.mp3", "../audios/p60/pizza.mp3"]},
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>2</span> Listen again and read."],
        "titleIcons" : [""],
        "titlesAudio" : ["../audios/p60/Pg4_1.2_Adult_Lady.mp3","../audios/p60/Pg4_1.3_Adult Lady.mp3", "../audios/p60/Pg4_1.4_Adult Lady.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 outer space","2 planet", "3 satellite","4 space station","5 star", "6 astronaut","7 spacewalk","8 spacesuit", "9 radar","10 rocket", "11 blast-off", "12 countdown"],
        "audio": ["../audios/p60/1_outer_space.mp3","../audios/p60/2_planet.mp3", "../audios/p60/3_satellite.mp3",
                  "../audios/p60/4_space_station.mp3","../audios/p60/5_star.mp3", "../audios/p60/6_astronaut.mp3",
                  "../audios/p60/7_spacewalk.mp3","../audios/p60/8_spacesuit.mp3", "../audios/p60/9_radar.mp3",
                  "../audios/p60/10_rocket.mp3","../audios/p60/11_blast_off.mp3", "../audios/p60/12_countdown.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>3</span> Ask and answer."],
        "titleIcons" : [""],
        "titleTextRight": "<span class='blue_text'></span>",
        "titlesAudio" : ["../audios/new/p60ask.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/p60/Pg5_2.2_Adult Lady.mp3","../audios/p60/Pg5_2.3_Adult Lady.mp3"]},
        'listen3': {
          // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
          "mainTitle": "../images/pages/page-1/1-title.png",
          "mainTitle_audio" : "../audios/p60/WORD_POWER.mp3",
          "titleTexts" : ["<span class='title-order'>1</span> Listen and say."],
          "titleIcons" : [""],
          "titleTextRight": "<span class='blue_text'>What do you know about space? How do you feel when you look at the night sky?</span>",
          "titlesAudio" : ["../audios/p60/1_Listen_and_say.mp3"],
          "image": [],
          "audio": ["../audios/p60/Pg5_2.2_Adult Lady.mp3","../audios/p60/Pg5_2.3_Adult Lady.mp3"]},
    },
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["outer space","planet", "satellite","space station","star", "astronaut","spacewalk","spacesuit", "radar","rocket", "blast-off", "countdown"],
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
              // "../images/pages/page-1/intro-11.png",
              // "../images/pages/page-1/intro-12.png",
            ],
 "postions"  : ["left:131px; top:227px;",
                "left:63px; top:406px;",
                "left:-4px; top:498px;",
                "left:303px; top:418px;",
                "left:426px; top:496px;",
                "left:198px; top:623px;",
                "left:208px; top:697px;",
                "left:303px; top:664px;",
                "left:649px; top:175px;",
                "left:962px; top:443px;",
                // "left:508px; top:475px;",
                // "left:369px; top:569px;",
              ],
  "imagesAudio" :["../audios/p60/1_outer_space.mp3","../audios/p60/2_planet.mp3", "../audios/p60/3_satellite.mp3",
                  "../audios/p60/4_space_station.mp3","../audios/p60/5_star.mp3", "../audios/p60/6_astronaut.mp3",
                  "../audios/p60/7_spacewalk.mp3","../audios/p60/8_spacesuit.mp3", "../audios/p60/9_radar.mp3",
                  "../audios/p60/10_rocket.mp3","../audios/p60/11_blast_off.mp3", "../audios/p60/12_countdown.mp3"
            ],
}