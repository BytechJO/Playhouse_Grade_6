var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/p116/pizza.mp3","../audios/p116/dough.mp3","../audios/p116/sauce.mp3","../audios/p116/sprinkle.mp3","../audios/p116/cheese.mp3","../audios/p116/add.mp3","../audios/p116/pepperoni.mp3","../audios/p116/slice.mp3"],
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
      //   "audio": ["../audios/p116/pizza.mp3"]},
      // 'ccss': {
      //   "text": ["<span>1 Goodbye!</span>","<span>2 How are you?</span>","<span>3 Fine, thank you.</span>","<span>4 Hello!</span>","<span>5 Good morning!</span>"],
      //   "audio": ["../audios/p116/Pg4_Vocabulary_Adult Lady.mp3","../audios/p116/dough.mp3", "../audios/p116/pizza.mp3","../audios/p116/dough.mp3", "../audios/p116/pizza.mp3"]},
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>2</span> Listen again and read."],
        "titleIcons" : [""],
        "titlesAudio" : ["../audios/p116/Pg4_1.2_Adult_Lady.mp3","../audios/p116/Pg4_1.3_Adult Lady.mp3", "../audios/p116/Pg4_1.4_Adult Lady.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 search box","2 friend request", "3 notifications","4 upload","5 timeline", "6 photo","7 post","8 status", "9 like","10 comment", "11 share", "12 chat"],
        "audio": ["../audios/p116/1_search_box.mp3","../audios/p116/2_friend_request.mp3", "../audios/p116/3_notifications.mp3",
                  "../audios/p116/4_upload.mp3","../audios/p116/5_timeline.mp3", "../audios/p116/6_photo.mp3",
                  "../audios/p116/7_post.mp3","../audios/p116/8_status.mp3", "../audios/p116/9_like.mp3",
                  "../audios/p116/10_comment.mp3","../audios/p116/11_share.mp3", "../audios/p116/12_chat.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='blue_text'>3</span> Ask and answer."],
        "titleIcons" : [""],
        "titleTextRight": "<span class='blue_text'></span>",
        "titlesAudio" : ["../audios/new/p116ask.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/p116/Pg5_2.2_Adult Lady.mp3","../audios/p116/Pg5_2.3_Adult Lady.mp3"]},
        'listen3': {
          // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
          "mainTitle": "../images/pages/page-1/1-title.png",
          "mainTitle_audio" : "../audios/p116/WORD_POWER.mp3",
          "titleTexts" : ["<span class='title-order'>1</span> Listen and say."],
          "titleIcons" : [""],
          "titleTextRight": "<span class='blue_text'>Do you have a computer at home? Can you name some famous social media sites? Is social media good or bad? Why?</span>",
          "titlesAudio" : ["../audios/p116/1_Listen_and_say.mp3"],
          "image": [],
          "audio": ["../audios/p116/Pg5_2.2_Adult Lady.mp3","../audios/p116/Pg5_2.3_Adult Lady.mp3"]},
    },
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["search box","friend request", "notifications","upload","timeline", "photo","post","status", "like","comment", "share", "chat"],
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
 "postions"  : ["left: 210px;top: 80px;",
                "left: 645px;top: 75px;",
                "left: 540px;top: 110px;",
                "left: 90px;top: 160px;",
                "left: 760px;top: 290px;",
                "left: 430px;top: 350px;",
                "left: 370px;top: 410px;",
                "left: 1165px;top: 500px;",
                "left: 885px;top: 545px;",
                "left: 1030px;top: 545px;",
                "left: 1180px;top: 545px;",
                "left: 660px;top: 560px;",
              ],
  "imagesAudio" :["../audios/p116/1_search_box.mp3","../audios/p116/2_friend_request.mp3", "../audios/p116/3_notifications.mp3",
                  "../audios/p116/4_upload.mp3","../audios/p116/5_timeline.mp3", "../audios/p116/6_photo.mp3",
                  "../audios/p116/7_post.mp3","../audios/p116/8_status.mp3", "../audios/p116/9_like.mp3",
                  "../audios/p116/10_comment.mp3","../audios/p116/11_share.mp3", "../audios/p116/12_chat.mp3"
            ],
}