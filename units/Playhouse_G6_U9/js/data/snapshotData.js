var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/p76/pizza.mp3","../audios/p76/dough.mp3","../audios/p76/sauce.mp3","../audios/p76/sprinkle.mp3","../audios/p76/cheese.mp3","../audios/p76/add.mp3","../audios/p76/pepperoni.mp3","../audios/p76/slice.mp3"],
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
      //   "audio": ["../audios/p76/pizza.mp3"]},
      // 'ccss': {
      //   "text": ["<span>1 Goodbye!</span>","<span>2 How are you?</span>","<span>3 Fine, thank you.</span>","<span>4 Hello!</span>","<span>5 Good morning!</span>"],
      //   "audio": ["../audios/p76/Pg4_Vocabulary_Adult Lady.mp3","../audios/p76/dough.mp3", "../audios/p76/pizza.mp3","../audios/p76/dough.mp3", "../audios/p76/pizza.mp3"]},
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>2</span> Listen again and read."],
        "titleIcons" : [""],
        "titlesAudio" : ["../audios/p76/Pg4_1.2_Adult_Lady.mp3","../audios/p76/Pg4_1.3_Adult Lady.mp3", "../audios/p76/Pg4_1.4_Adult Lady.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 hurricane","2 storm", "3 drizzle","4 thunder","5 lightning", "6 heatwave","7 clear","8 forecast", "9 meteorologist","10 temperature", "11 Celsius", "12 thermometer"],
        "audio": ["../audios/p76/1_hurricane.mp3","../audios/p76/storm.mp3", "../audios/p76/drizzle.mp3",
                  "../audios/p76/4_thunder.mp3", "../audios/p76/5_lightning.mp3","../audios/p76/6_heatwave.mp3",
                  "../audios/p76/7_clear.mp3", "../audios/p76/8_forecast.mp3","../audios/p76/9_meteorologist.mp3",
                  "../audios/p76/10_temperature.mp3", "../audios/p76/11_Celsius.mp3","../audios/p76/12_thermometer.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>3</span> Ask and answer."],
        "titleIcons" : [""],
        "titleTextRight": "<span class='blue_text'></span>",
        "titlesAudio" : ["../audios/new/p76ask.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/p76/Pg5_2.2_Adult Lady.mp3","../audios/p76/Pg5_2.3_Adult Lady.mp3"]},
        'listen3': {
          // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
          "mainTitle": "../images/pages/page-1/1-title.png",
          "mainTitle_audio" : "../audios/p76/WORD_POWER.mp3",
          "titleTexts" : ["<span class='title-order'>1</span> Listen and say."],
          "titleIcons" : [""],
          "titleTextRight": "<span class='blue_text'>What is your favourite kind of weather? Do you like it hot, cold, rainy or snowy?</span>",
          "titlesAudio" : ["../audios/p76/1_Listen_and_say.mp3"],
          "image": [],
          "audio": ["../audios/p76/Pg5_2.2_Adult Lady.mp3","../audios/p76/Pg5_2.3_Adult Lady.mp3"]},
    },
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["hurricane","storm", "drizzle","thunder","lightning", "heatwave","clear","forecast", "meteorologist","temperature", "Celsius", "thermometer"],
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
 "postions"  : ["left:82px; top:204px;",
                "left:766px; top:129px;",
                "left:515px; top:218px;",
                "left:614px; top:223px;",
                "left:737px; top:237px;",
                "left:493px; top:303px;",
                "left:739px; top:465px;",
                "left:309px; top:388px;",
                "left:174px; top:559px;",
                "left:91px; top:661px;",
                "left:828px; top:603px;",
                "left:801px; top:666px;",
              ],
  "imagesAudio" :["../audios/p76/1_hurricane.mp3","../audios/p76/storm.mp3", "../audios/p76/drizzle.mp3",
                  "../audios/p76/4_thunder.mp3", "../audios/p76/5_lightning.mp3","../audios/p76/6_heatwave.mp3",
                  "../audios/p76/7_clear.mp3", "../audios/p76/8_forecast.mp3","../audios/p76/9_meteorologist.mp3",
                  "../audios/p76/10_temperature.mp3", "../audios/p76/11_Celsius.mp3","../audios/p76/12_thermometer.mp3"
            ],
}