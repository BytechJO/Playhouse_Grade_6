var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/p40/pizza.mp3","../audios/p40/dough.mp3","../audios/p40/sauce.mp3","../audios/p40/sprinkle.mp3","../audios/p40/cheese.mp3","../audios/p40/add.mp3","../audios/p40/pepperoni.mp3","../audios/p40/slice.mp3"],
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
      //   "audio": ["../audios/p40/pizza.mp3"]},
      // 'ccss': {
      //   "text": ["<span>1 Goodbye!</span>","<span>2 How are you?</span>","<span>3 Fine, thank you.</span>","<span>4 Hello!</span>","<span>5 Good morning!</span>"],
      //   "audio": ["../audios/p40/Pg4_Vocabulary_Adult Lady.mp3","../audios/p40/dough.mp3", "../audios/p40/pizza.mp3","../audios/p40/dough.mp3", "../audios/p40/pizza.mp3"]},
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>2</span> Listen again and read."],
        "titleIcons" : [""],
        "titlesAudio" : ["../audios/p40/Pg4_1.2_Adult_Lady.mp3","../audios/p40/Pg4_1.3_Adult Lady.mp3", "../audios/p40/Pg4_1.4_Adult Lady.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 blind","2 white cane","3 guide dog","4 Braille","5 hearing aid","6 deaf","7 sign language","8 mute","9 disabled","10 paralysed","11 wheelchair","12 wheelchair ramp"],
        "audio": ["../audios/p40/1_blind.mp3","../audios/p40/2_white_cane.mp3", "../audios/p40/3_guide_dog.mp3",
                  "../audios/p40/4_Braille.mp3","../audios/p40/5_hearing_aid.mp3", "../audios/p40/6_deaf.mp3",
                  "../audios/p40/7_sign_language.mp3","../audios/p40/8_mute.mp3", "../audios/p40/9_disabled.mp3",
                  "../audios/p40/10_paralysed.mp3","../audios/p40/wheelchair.mp3", "../audios/p40/12_wheelchair_ramp.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>3</span> Ask and answer."],
        "titleIcons" : [""],
        "titleTextRight": "<span class='blue_text'></span>",
        "titlesAudio" : ["../audios/new/p40ask.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/p40/Pg5_2.2_Adult Lady.mp3","../audios/p40/Pg5_2.3_Adult Lady.mp3"]},
        'listen3': {
          // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
          "mainTitle": "../images/pages/page-1/1-title.png",
          "mainTitle_audio" : "../audios/p40/WORD_POWER.mp3",
          "titleTexts" : ["<span class='title-order'>1</span> Listen and say."],
          "titleIcons" : [""],
          "titleTextRight": "<span class='blue_text'>Do you or someone you know have trouble walking? Do you know someone who can’t see or hear? What do they do to communicate and get around?</span>",
          "titlesAudio" : ["../audios/p40/1_Listen_and_say.mp3"],
          "image": [],
          "audio": ["../audios/p40/Pg5_2.2_Adult Lady.mp3","../audios/p40/Pg5_2.3_Adult Lady.mp3"]},
    },
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["blind","white cane","guide dog","Braille","hearing aid","deaf","sign language","mute","disabled","paralysed","wheelchair","wheelchair ramp"],
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
 "postions"  : ["left:55px; top:296px;",
                "left:44px; top:492px;",
                "left:239px; top:518px;",
                "left:237px; top:242px;",
                "left:331px; top:232px;",
                "left:678px; top:219px;",
                "left:588px; top:334px;",
                "left:937px; top:276px;",
                "left:864px; top:359px;",
                "left:705px; top:506px;",
                "left:888px; top:475px;",
                "left:706px; top:633px;",
              ],
  "imagesAudio" :["../audios/p40/1_blind.mp3","../audios/p40/2_white_cane.mp3", "../audios/p40/3_guide_dog.mp3",
                  "../audios/p40/4_Braille.mp3","../audios/p40/5_hearing_aid.mp3", "../audios/p40/6_deaf.mp3",
                  "../audios/p40/7_sign_language.mp3","../audios/p40/8_mute.mp3", "../audios/p40/9_disabled.mp3",
                  "../audios/p40/10_paralysed.mp3","../audios/p40/wheelchair.mp3", "../audios/p40/12_wheelchair_ramp.mp3"
            ],
}