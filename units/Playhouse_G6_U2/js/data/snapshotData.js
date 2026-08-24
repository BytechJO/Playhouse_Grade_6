var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/p12/pizza.mp3","../audios/p12/dough.mp3","../audios/p12/sauce.mp3","../audios/p12/sprinkle.mp3","../audios/p12/cheese.mp3","../audios/p12/add.mp3","../audios/p12/pepperoni.mp3","../audios/p12/slice.mp3"],
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
      //   "audio": ["../audios/p12/pizza.mp3"]},
      // 'ccss': {
      //   "text": ["<span>1 Goodbye!</span>","<span>2 How are you?</span>","<span>3 Fine, thank you.</span>","<span>4 Hello!</span>","<span>5 Good morning!</span>"],
      //   "audio": ["../audios/p12/Pg4_Vocabulary_Adult Lady.mp3","../audios/p12/dough.mp3", "../audios/p12/pizza.mp3","../audios/p12/dough.mp3", "../audios/p12/pizza.mp3"]},
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>2</span> Listen again and read."],
        "titleIcons" : [""],
        "titlesAudio" : ["../audios/p12/Pg4_1.2_Adult_Lady.mp3","../audios/p12/Pg4_1.3_Adult Lady.mp3", "../audios/p12/Pg4_1.4_Adult Lady.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 producer","2 screen", "3 script","4 scene","5 film (verb)", "6 director","7 screenwriter","8 horror film", "9 science fiction film","10 action film", "11 documentary", "12 comedy film"],
        "audio": ["../audios/p12/1_producer.mp3","../audios/p12/2_screen.mp3", "../audios/p12/3_script.mp3",
                  "../audios/p12/4_scene.mp3","../audios/p12/5_film_(verb).mp3", "../audios/p12/6_director.mp3",
                  "../audios/p12/7_screenwriter.mp3","../audios/p12/8_horror_film.mp3", "../audios/p12/9_science_fiction_film.mp3",
                  "../audios/p12/10_action_film.mp3","../audios/p12/11_documentary.mp3", "../audios/p12/12_comedy_film.mp3"
        ]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>3</span> Ask and answer."],
        "titleIcons" : [""],
        "titleTextRight": "<span class='blue_text'></span>",
        "titlesAudio" : ["../audios/new/askp12.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/p12/Pg5_2.2_Adult Lady.mp3","../audios/p12/Pg5_2.3_Adult Lady.mp3"]},
        'listen3': {
          // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
          "mainTitle": "../images/pages/page-1/1-title.png",
          "mainTitle_audio" : "../audios/p12/WORD_POWER.mp3",
          "titleTexts" : ["<span class='title-order'>1</span> Listen and say."],
          "titleIcons" : [""],
          "titleTextRight": "<span class='blue_text'>Have you ever taken a video of your family? How do you think films are made? Do you know anyone who has helped to make a film? </span>",
          "titlesAudio" : ["../audios/p12/1_Listen_and_say.mp3"],
          "image": [],
          "audio": ["../audios/p32/Pg5_2.2_Adult Lady.mp3","../audios/p32/Pg5_2.3_Adult Lady.mp3"]},
},
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["producer","screen", "script","scene","film (verb)", "director","screenwriter","horror film", "science fiction film","action film", "documentary", "comedy film"],
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
 "postions"  : ["left: 150px;top: 210px;",
                "left: 375px;top: 120px;",
                "left: 630px;top: 175px;",
                "left: 680px;top: 240px;",
                "left: 420px;top: 320px;",
                "left: 550px;top: 320px;",
                "left: 830px;top: 260px;",
                "left: 420px;top: 420px;",
                "left: 550px;top: 420px;",
                "left: 660px;top: 420px;",
                "left: 830px;top: 420px;",
                "left: 1100px;top: 420px;",
              ],
  "imagesAudio" :["../audios/p12/1_producer.mp3","../audios/p12/2_screen.mp3", "../audios/p12/3_script.mp3",
                  "../audios/p12/4_scene.mp3","../audios/p12/5_film_(verb).mp3", "../audios/p12/6_director.mp3",
                  "../audios/p12/7_screenwriter.mp3","../audios/p12/8_horror_film.mp3", "../audios/p12/9_science_fiction_film.mp3",
                  "../audios/p12/10_action_film.mp3","../audios/p12/11_documentary.mp3", "../audios/p12/12_comedy_film.mp3"]
}