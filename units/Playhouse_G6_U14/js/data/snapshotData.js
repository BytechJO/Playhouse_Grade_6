var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/p124/pizza.mp3","../audios/p124/dough.mp3","../audios/p124/sauce.mp3","../audios/p124/sprinkle.mp3","../audios/p124/cheese.mp3","../audios/p124/add.mp3","../audios/p124/pepperoni.mp3","../audios/p124/slice.mp3"],
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
      //   "audio": ["../audios/p124/pizza.mp3"]},
      // 'ccss': {
      //   "text": ["<span>1 Goodbye!</span>","<span>2 How are you?</span>","<span>3 Fine, thank you.</span>","<span>4 Hello!</span>","<span>5 Good morning!</span>"],
      //   "audio": ["../audios/p124/Pg4_Vocabulary_Adult Lady.mp3","../audios/p124/dough.mp3", "../audios/p124/pizza.mp3","../audios/p124/dough.mp3", "../audios/p124/pizza.mp3"]},
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>2</span> Listen again and read."],
        "titleIcons" : [""],
        "titlesAudio" : ["../audios/p124/Pg4_1.2_Adult_Lady.mp3","../audios/p124/Pg4_1.3_Adult Lady.mp3", "../audios/p124/Pg4_1.4_Adult Lady.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 siblings","2 close-knit", "3 twins","4 extended family","5 fiancée/fiancé", "6 engaged","7 mother-in-law/father-in-law","8 married", "9 divorced","10 stepson/stepdaughter", "11 groom", "12 bride"],
        "audio": ["../audios/p124/1_siblings.mp3","../audios/p124/2_close_knit.mp3", "../audios/p124/3_twins.mp3",
                  "../audios/p124/4_extended_family.mp3","../audios/p124/5_fiancée_fiancé.mp3", "../audios/p124/6_engaged.mp3",
                  "../audios/p124/7_mother_in_law_father_in_law.mp3","../audios/p124/8_married.mp3", "../audios/p124/9_divorced.mp3",
                  "../audios/p124/10_stepson_stepdaughter.mp3","../audios/p124/11_groom.mp3", "../audios/p124/12_bride.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>3</span> Ask and answer."],
        "titleIcons" : [""],
        "titleTextRight": "<span class='blue_text'></span>",
        "titlesAudio" : ["../audios/new/p124ask.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/p124/Pg5_2.2_Adult Lady.mp3","../audios/p124/Pg5_2.3_Adult Lady.mp3"]},
        'listen3': {
          // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
          "mainTitle": "../images/pages/page-1/1-title.png",
          "mainTitle_audio" : "../audios/p124/WORD_POWER.mp3",
          "titleTexts" : ["<span class='title-order'>1</span> Listen and say."],
          "titleIcons" : [""],
          "titleTextRight": "<span class='blue_text'>What do you like to do with your family? What celebrations does your family have? Do you have a big family or a small family?</span>",
          "titlesAudio" : ["../audios/p124/1_Listen_and_say.mp3"],
          "image": [],
          "audio": ["../audios/p124/Pg5_2.2_Adult Lady.mp3","../audios/p124/Pg5_2.3_Adult Lady.mp3"]},
    },
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["siblings","close-knit", "twins","extended family","fiancée/fiancé", "engaged","mother-in-law/father-in-law","married", "divorced","stepson/stepdaughter", "groom", "bride"],
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
                "left: 780px;top: 80px;",
                "left: 550px;top: 300px;",
                "left: 700px;top: 300px;",
                "left: 810px;top: 380px;",
                "left: 320px;top: 520px;",
                "left: 620px;top: 540px;",
                "left: 890px;top: 620px;",
                "left: 400px;top: 680px;",
                "left: 520px;top: 680px;",
                "left: 700px;top: 670px;",
              ],
  "imagesAudio" :["../audios/p124/1_siblings.mp3","../audios/p124/2_close_knit.mp3", "../audios/p124/3_twins.mp3",
                  "../audios/p124/4_extended_family.mp3","../audios/p124/5_fiancée_fiancé.mp3", "../audios/p124/6_engaged.mp3",
                  "../audios/p124/7_mother_in_law_father_in_law.mp3","../audios/p124/8_married.mp3", "../audios/p124/9_divorced.mp3",
                  "../audios/p124/10_stepson_stepdaughter.mp3","../audios/p124/11_groom.mp3", "../audios/p124/12_bride.mp3"
            ],
}