var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/p96/pizza.mp3","../audios/p96/dough.mp3","../audios/p96/sauce.mp3","../audios/p96/sprinkle.mp3","../audios/p96/cheese.mp3","../audios/p96/add.mp3","../audios/p96/pepperoni.mp3","../audios/p96/slice.mp3"],
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
      //   "audio": ["../audios/p96/pizza.mp3"]},
      // 'ccss': {
      //   "text": ["<span>1 Goodbye!</span>","<span>2 How are you?</span>","<span>3 Fine, thank you.</span>","<span>4 Hello!</span>","<span>5 Good morning!</span>"],
      //   "audio": ["../audios/p96/Pg4_Vocabulary_Adult Lady.mp3","../audios/p96/dough.mp3", "../audios/p96/pizza.mp3","../audios/p96/dough.mp3", "../audios/p96/pizza.mp3"]},
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>2</span> Listen again and read."],
        "titleIcons" : [""],
        "titlesAudio" : ["../audios/p96/Pg4_1.2_Adult_Lady.mp3","../audios/p96/Pg4_1.3_Adult Lady.mp3", "../audios/p96/Pg4_1.4_Adult Lady.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 stretch/stretching","2 sweat/sweating", "3 jog/jogging","4 get in shape/get fit","5 sit-ups", "6 push-ups","7 work out/working out","8 cool down", "9 warm up/warming up","10 balanced diet", "11 healthy meal", "12 exercise/exercising"],
        "audio": ["../audios/p96/1_stretch_stretching.mp3","../audios/p96/2_sweat_sweating.mp3", "../audios/p96/3_jog_jogging.mp3",
                  "../audios/p96/4_get_in_shape_get_fit.mp3","../audios/p96/5_sit_ups.mp3", "../audios/p96/6_push_ups.mp3",
                  "../audios/p96/7_work_out_working_out.mp3","../audios/p96/8_cool_down.mp3", "../audios/p96/9_warm_up_warming_up.mp3",
                  "../audios/p96/10_balanced_diet.mp3","../audios/p96/11_healthy_meal.mp3", "../audios/p96/12_exercise_exercising.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>3</span> Ask and answer."],
        "titleIcons" : [""],
        "titleTextRight": "<span class='blue_text'></span>",
        "titlesAudio" : ["../audios/new/p96ask.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/p96/Pg5_2.2_Adult Lady.mp3","../audios/p96/Pg5_2.3_Adult Lady.mp3"]},
        'listen3': {
          // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
          "mainTitle": "../images/pages/page-1/1-title.png",
          "mainTitle_audio" : "../audios/p96/WORD_POWER.mp3",
          "titleTexts" : ["<span class='title-order'>1</span> Listen and say."],
          "titleIcons" : [""],
          "titleTextRight": "<span class='blue_text'>What’s your favourite kind of exercise? Do you get regular exercise? Do you eat foods that are good for you?</span>",
          "titlesAudio" : ["../audios/p96/1_Listen_and_say.mp3"],
          "image": [],
          "audio": ["../audios/p96/Pg5_2.2_Adult Lady.mp3","../audios/p96/Pg5_2.3_Adult Lady.mp3"]},
    },
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["stretch/stretching","sweat/sweating", "jog/jogging","get in shape/get fit","sit-ups", "push-ups","work out/working out","cool down", "warm up/warming up","balanced diet", "healthy meal", "exercise/exercising"],
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
 "postions"  : ["left:370px; top:126px;",
                "left:484px; top:159px;",
                "left:644px; top:204px;",
                "left:947px; top:232px;",
                "left:260px; top:325px;",
                "left:494px; top:324px;",
                "left:767px; top:421px;",
                "left:368px; top:502px;",
                "left:572px; top:496px;",
                "left:341px; top:641px;",
                "left:452px; top:643px;",
                "left:676px; top:642px;",
              ],
  "imagesAudio" :["../audios/p96/1_stretch_stretching.mp3","../audios/p96/2_sweat_sweating.mp3", "../audios/p96/3_jog_jogging.mp3",
                  "../audios/p96/4_get_in_shape_get_fit.mp3","../audios/p96/5_sit_ups.mp3", "../audios/p96/6_push_ups.mp3",
                  "../audios/p96/7_work_out_working_out.mp3","../audios/p96/8_cool_down.mp3", "../audios/p96/9_warm_up_warming_up.mp3",
                  "../audios/p96/10_balanced_diet.mp3","../audios/p96/11_healthy_meal.mp3", "../audios/p96/12_exercise_exercising.mp3"
            ],
}