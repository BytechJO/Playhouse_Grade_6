var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/p32/pizza.mp3","../audios/p32/dough.mp3","../audios/p32/sauce.mp3","../audios/p32/sprinkle.mp3","../audios/p32/cheese.mp3","../audios/p32/add.mp3","../audios/p32/pepperoni.mp3","../audios/p32/slice.mp3"],
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
      //   "audio": ["../audios/p32/pizza.mp3"]},
      // 'ccss': {
      //   "text": ["<span>1 Goodbye!</span>","<span>2 How are you?</span>","<span>3 Fine, thank you.</span>","<span>4 Hello!</span>","<span>5 Good morning!</span>"],
      //   "audio": ["../audios/p32/Pg4_Vocabulary_Adult Lady.mp3","../audios/p32/dough.mp3", "../audios/p32/pizza.mp3","../audios/p32/dough.mp3", "../audios/p32/pizza.mp3"]},
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>2</span> Listen again and read."],
        "titleIcons" : [""],
        "titlesAudio" : ["../audios/p32/Pg4_1.2_Adult_Lady.mp3","../audios/p32/Pg4_1.3_Adult Lady.mp3", "../audios/p32/Pg4_1.4_Adult Lady.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 depart","2 airline","3 flight","4 gate","5 check-in","6 security","7 hand luggage","8 agent","9 e-ticket","10 counter","11 passport","12 boarding card"],
        "audio": ["../audios/p32/1_depart.mp3","../audios/p32/2_airline.mp3", "../audios/p32/3_flight.mp3",
                  "../audios/p32/4_gate.mp3","../audios/p32/5_check_in.mp3", "../audios/p32/6_security.mp3",
                  "../audios/p32/7_hand_luggage.mp3","../audios/p32/8_agent.mp3", "../audios/p32/9_e_ticket.mp3",
                  "../audios/p32/10_counter.mp3","../audios/p32/11_passport.mp3", "../audios/p32/12_boarding_card.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>3</span> Ask and answer."],
        "titleIcons" : [""],
        "titleTextRight": "<span class='blue_text'></span>",
        "titlesAudio" : ["../audios/new/p32ask.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/p32/Pg5_2.2_Adult Lady.mp3","../audios/p32/Pg5_2.3_Adult Lady.mp3"]},
        'listen3': {
          // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
          "mainTitle": "../images/pages/page-1/1-title.png",
          "mainTitle_audio" : "../audios/p32/WORD_POWER.mp3",
          "titleTexts" : ["<span class='title-order'>1</span> Listen and say."],
          "titleIcons" : [""],
          "titleTextRight": "<span class='blue_text'>Have you ever travelled to another country? Do you enjoy being on an aeroplane?</span>",
          "titlesAudio" : ["../audios/p32/1_Listen_and_say.mp3"],
          "image": [],
          "audio": ["../audios/p32/Pg5_2.2_Adult Lady.mp3","../audios/p32/Pg5_2.3_Adult Lady.mp3"]},
    },
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["depart","airline","flight","gate","check-in","security","hand luggage","agent","e-ticket","counter","passport","boarding card"],
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
  "imagesAudio" :["../audios/p32/1_depart.mp3","../audios/p32/2_airline.mp3", "../audios/p32/3_flight.mp3",
                  "../audios/p32/4_gate.mp3","../audios/p32/5_check_in.mp3", "../audios/p32/6_security.mp3",
                  "../audios/p32/7_hand_luggage.mp3","../audios/p32/8_agent.mp3", "../audios/p32/9_e_ticket.mp3",
                  "../audios/p32/10_counter.mp3","../audios/p32/11_passport.mp3", "../audios/p32/12_boarding_card.mp3"
            ],
}