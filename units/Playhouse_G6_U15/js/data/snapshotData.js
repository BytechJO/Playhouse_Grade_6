var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/p132/pizza.mp3","../audios/p132/dough.mp3","../audios/p132/sauce.mp3","../audios/p132/sprinkle.mp3","../audios/p132/cheese.mp3","../audios/p132/add.mp3","../audios/p132/pepperoni.mp3","../audios/p132/slice.mp3"],
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
      //   "audio": ["../audios/p132/pizza.mp3"]},
      // 'ccss': {
      //   "text": ["<span>1 Goodbye!</span>","<span>2 How are you?</span>","<span>3 Fine, thank you.</span>","<span>4 Hello!</span>","<span>5 Good morning!</span>"],
      //   "audio": ["../audios/p132/Pg4_Vocabulary_Adult Lady.mp3","../audios/p132/dough.mp3", "../audios/p132/pizza.mp3","../audios/p132/dough.mp3", "../audios/p132/pizza.mp3"]},
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>2</span> Listen again and read."],
        "titleIcons" : [""],
        "titlesAudio" : ["../audios/p132/Pg4_1.2_Adult_Lady.mp3","../audios/p132/Pg4_1.3_Adult Lady.mp3", "../audios/p132/Pg4_1.4_Adult Lady.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 selfish","2 impatient", "3 unfriendly","4 polite","5 rude", "6 telltale","7 friendly","8 bad-tempered", "9 lazy","10 honest", "11 talkative", "12 popular"],
        "audio": ["../audios/p132/1_selfish.mp3","../audios/p132/2_impatient.mp3", "../audios/p132/3_unfriendly.mp3",
                  "../audios/p132/4_polite.mp3","../audios/p132/5_rude.mp3", "../audios/p132/6_telltale.mp3",
                  "../audios/p132/7_friendly.mp3","../audios/p132/8_bad_tempered.mp3", "../audios/p132/9_lazy.mp3",
                  "../audios/p132/10_honest.mp3","../audios/p132/11_talkative.mp3", "../audios/p132/12_popular.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>3</span> Ask and answer."],
        "titleIcons" : [""],
        "titleTextRight": "<span class='blue_text'></span>",
        "titlesAudio" : ["../audios/new/p132ask.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/p132/Pg5_2.2_Adult Lady.mp3","../audios/p132/Pg5_2.3_Adult Lady.mp3"]},
        'listen3': {
          // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
          "mainTitle": "../images/pages/page-1/1-title.png",
          "mainTitle_audio" : "../audios/p132/WORD_POWER.mp3",
          "titleTexts" : ["<span class='title-order'>1</span> Listen and say."],
          "titleIcons" : [""],
          "titleTextRight": "<span class='blue_text'>Do you have a very good friend? What made you want to be friends with this person? What is it about him or her that you especially like?</span>",
          "titlesAudio" : ["../audios/p132/1_Listen_and_say.mp3"],
          "image": [],
          "audio": ["../audios/p132/Pg5_2.2_Adult Lady.mp3","../audios/p132/Pg5_2.3_Adult Lady.mp3"]},
    },
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["selfish","impatient", "unfriendly","polite","rude", "telltale","friendly","bad-tempered", "lazy","honest", "talkative", "popular"],
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
 "postions"  : ["left: 300px;top: 110px;",
                "left: 530px;top: 180px;",
                "left: 700px;top: 120px;",
                "left: 810px;top: 100px;",
                "left: 300px;top: 300px;",
                "left: 550px;top: 300px;",
                "left: 650px;top: 300px;",
                "left: 400px;top: 500px;",
                "left: 590px;top: 520px;",
                "left: 700px;top: 500px;",
                "left: 520px;top: 680px;",
                "left: 690px;top: 670px;",
              ],
  "imagesAudio" :["../audios/p132/1_selfish.mp3","../audios/p132/2_impatient.mp3", "../audios/p132/3_unfriendly.mp3",
                  "../audios/p132/4_polite.mp3","../audios/p132/5_rude.mp3", "../audios/p132/6_telltale.mp3",
                  "../audios/p132/7_friendly.mp3","../audios/p132/8_bad_tempered.mp3", "../audios/p132/9_lazy.mp3",
                  "../audios/p132/10_honest.mp3","../audios/p132/11_talkative.mp3", "../audios/p132/12_popular.mp3"
            ],
}