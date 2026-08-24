var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/p104/pizza.mp3","../audios/p104/dough.mp3","../audios/p104/sauce.mp3","../audios/p104/sprinkle.mp3","../audios/p104/cheese.mp3","../audios/p104/add.mp3","../audios/p104/pepperoni.mp3","../audios/p104/slice.mp3"],
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
      //   "audio": ["../audios/p104/pizza.mp3"]},
      // 'ccss': {
      //   "text": ["<span>1 Goodbye!</span>","<span>2 How are you?</span>","<span>3 Fine, thank you.</span>","<span>4 Hello!</span>","<span>5 Good morning!</span>"],
      //   "audio": ["../audios/p104/Pg4_Vocabulary_Adult Lady.mp3","../audios/p104/dough.mp3", "../audios/p104/pizza.mp3","../audios/p104/dough.mp3", "../audios/p104/pizza.mp3"]},
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>2</span> Listen again and read."],
        "titleIcons" : [""],
        "titlesAudio" : ["../audios/p104/Pg4_1.2_Adult_Lady.mp3","../audios/p104/Pg4_1.3_Adult Lady.mp3", "../audios/p104/Pg4_1.4_Adult Lady.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 ice pack","2 antiseptic", "3 bandage","4 inhaler","5 sling", "6 crutches","7 splint","8 stethoscope", "9 tweezers","10 plaster", "11 first aid kit", "12 support"],
        "audio": ["../audios/p104/1_ice_pack.mp3","../audios/p104/2_antiseptic.mp3", "../audios/p104/3_bandage.mp3",
                  "../audios/p104/4_inhaler.mp3","../audios/p104/5_sling.mp3", "../audios/p104/6_crutches.mp3",
                  "../audios/p104/7_splint.mp3","../audios/p104/8_stethoscope.mp3", "../audios/p104/9_tweezers.mp3",
                  "../audios/p104/10_plaster.mp3","../audios/p104/11_first_aid_kit.mp3", "../audios/p104/12_support.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>3</span> Ask and answer."],
        "titleIcons" : [""],
        "titleTextRight": "<span class='blue_text'></span>",
        "titlesAudio" : ["../audios/new/p104ask.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/p104/Pg5_2.2_Adult Lady.mp3","../audios/p104/Pg5_2.3_Adult Lady.mp3"]},
        'listen3': {
          // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
          "mainTitle": "../images/pages/page-1/1-title.png",
          "mainTitle_audio" : "../audios/p104/WORD_POWER.mp3",
          "titleTexts" : ["<span class='title-order'>1</span> Listen and say."],
          "titleIcons" : [""],
          "titleTextRight": "<span class='blue_text'>Have you ever been at or seen an emergency? What should you do if you or a friend gets hurt?</span>",
          "titlesAudio" : ["../audios/p104/1_Listen_and_say.mp3"],
          "image": [],
          "audio": ["../audios/p104/Pg5_2.2_Adult Lady.mp3","../audios/p104/Pg5_2.3_Adult Lady.mp3"]},
    },
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["ice pack","antiseptic", "bandage","inhaler","sling", "crutches","splint","stethoscope", "tweezers","plaster", "first aid kit", "support"],
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
 "postions"  : ["left:298px; top:205px;",
                "left:734px; top:12px;",
                "left:644px; top:404px;",
                "left:247px; top:512px;",
                "left:40px; top:506px;",
                "left:94px; top:670px;",
                "left:406px; top:521px;",
                "left:751px; top:614px;",
                "left:364px; top:679px;",
                "left:621px; top:646px;",
                "left:252px; top:621px;",
                "left:676px; top:668px;",
              ],
  "imagesAudio" :["../audios/p104/1_ice_pack.mp3","../audios/p104/2_antiseptic.mp3", "../audios/p104/3_bandage.mp3",
                  "../audios/p104/4_inhaler.mp3","../audios/p104/5_sling.mp3", "../audios/p104/6_crutches.mp3",
                  "../audios/p104/7_splint.mp3","../audios/p104/8_stethoscope.mp3", "../audios/p104/9_tweezers.mp3",
                  "../audios/p104/10_plaster.mp3","../audios/p104/11_first_aid_kit.mp3", "../audios/p104/12_support.mp3"
            ],
}