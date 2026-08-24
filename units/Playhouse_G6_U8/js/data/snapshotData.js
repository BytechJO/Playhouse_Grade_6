var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/p68/pizza.mp3","../audios/p68/dough.mp3","../audios/p68/sauce.mp3","../audios/p68/sprinkle.mp3","../audios/p68/cheese.mp3","../audios/p68/add.mp3","../audios/p68/pepperoni.mp3","../audios/p68/slice.mp3"],
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
      //   "audio": ["../audios/p68/pizza.mp3"]},
      // 'ccss': {
      //   "text": ["<span>1 Goodbye!</span>","<span>2 How are you?</span>","<span>3 Fine, thank you.</span>","<span>4 Hello!</span>","<span>5 Good morning!</span>"],
      //   "audio": ["../audios/p68/Pg4_Vocabulary_Adult Lady.mp3","../audios/p68/dough.mp3", "../audios/p68/pizza.mp3","../audios/p68/dough.mp3", "../audios/p68/pizza.mp3"]},
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>2</span> Listen again and read."],
        "titleIcons" : [""],
        "titlesAudio" : ["../audios/p68/Pg4_1.2_Adult_Lady.mp3","../audios/p68/Pg4_1.3_Adult Lady.mp3", "../audios/p68/Pg4_1.4_Adult Lady.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 solo","2 daredevil", "3 circumnavigate","4 explore","5 railway", "6 adventure","7 travel","8 trek", "9 journey","10 globe", "11 discover", "12 cycle (verb)"],
        "audio": ["../audios/p68/1_solo.mp3","../audios/p68/2_daredevil.mp3", "../audios/p68/3_circumnavigate.mp3",
                  "../audios/p68/4_explore.mp3","../audios/p68/5_railway.mp3", "../audios/p68/6_adventure.mp3",
                  "../audios/p68/7_travel.mp3","../audios/p68/8_trek.mp3", "../audios/p68/9_journey.mp3",
                  "../audios/p68/10_globe.mp3","../audios/p68/11_discover.mp3", "../audios/p68/12_cycle_(verb).mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>3</span> Ask and answer."],
        "titleIcons" : [""],
        "titleTextRight": "<span class='blue_text'></span>",
        "titlesAudio" : ["../audios/new/p68ask.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/p68/Pg5_2.2_Adult Lady.mp3","../audios/p68/Pg5_2.3_Adult Lady.mp3"]},
        'listen3': {
          // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
          "mainTitle": "../images/pages/page-1/1-title.png",
          "mainTitle_audio" : "../audios/p68/WORD_POWER.mp3",
          "titleTexts" : ["<span class='title-order'>1</span> Listen and say."],
          "titleIcons" : [""],
          "titleTextRight": "<span class='blue_text'>Have you ever been far from home? Where did you go? What did you do there? Do you want to do it again?</span>",
          "titlesAudio" : ["../audios/p68/1_Listen_and_say.mp3"],
          "image": [],
          "audio": ["../audios/p68/Pg5_2.2_Adult Lady.mp3","../audios/p68/Pg5_2.3_Adult Lady.mp3"]},
    },
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["solo","daredevil", "circumnavigate","explore","railway", "adventure","travel","trek", "journey","globe", "discover", "cycle (verb)"],
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
 "postions"  : ["left:380px; top:172px;",
                "left:299px; top:251px;",
                "left:488px; top:279px;",
                "left:420px; top:342px;",
                "left:746px; top:376px;",
                "left:422px; top:450px;",
                "left:597px; top:477px;",
                "left:759px; top:453px;",
                "left:213px; top:560px;",
                "left:171px; top:638px;",
                // "left:508px; top:475px;",
                // "left:369px; top:569px;",
              ],
  "imagesAudio" :["../audios/p68/1_solo.mp3","../audios/p68/2_daredevil.mp3", "../audios/p68/3_circumnavigate.mp3",
                  "../audios/p68/4_explore.mp3","../audios/p68/5_railway.mp3", "../audios/p68/6_adventure.mp3",
                  "../audios/p68/7_travel.mp3","../audios/p68/8_trek.mp3", "../audios/p68/9_journey.mp3",
                  "../audios/p68/10_globe.mp3","../audios/p68/11_discover.mp3", "../audios/p68/12_cycle_(verb).mp3"
            ],
}