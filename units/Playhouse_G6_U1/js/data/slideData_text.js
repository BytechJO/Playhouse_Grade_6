var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(0, 183, 206)",
  type: "slider",
  playListData: [
    {
      audiourl: "../audios/p8/1.mp3",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
  ],
};
var reading_data = {
  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/adv_icon_1.png",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/p8/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>1</span> Read about it!",
  subTitleTextRight: "Read the information text below.",
  subTitleIcons: [""],
  subTitleAudio: "../audios/p8/1_Read_about_it!.mp3",
  numberofcolumns: 1,
  slides: [
    {
      parent_class_name: "",
      mainImage: "../images/pages/news-letter/2-img-1.png",

      listen: {
        audio: [
          "../audios/p8/Pg4_1.2_Adult_Lady.mp3",
          "../audios/p8/Pg4_1.3_Adult Lady.mp3",
          "../audios/p8/Pg4_1.4_Adult Lady.mp3",
        ],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/1-conv-img.png"],
        second_image: [""],
        questions: [
          {
            question: "",
            image: "",
            answer: [1],
            audio: "no",
            audioenable: "default", // correct (or) default
            options: [
              {
                text: "<b>a</b> &nbsp; Eric’s job as an anchorman",
                image: "",
                audio: "no",
                audioenable: "default", // correct (or) default
              },
              {
                text: "<b>b</b> &nbsp; Eric only works on weekdays.",
                image: "",
                audio: "no",
                audioenable: "default", // correct (or) default
              },
              {
                text: "<b>c</b> &nbsp; All the people who work with Eric.",
                image: "",
                audio: "no",
                audioenable: "default", // correct (or) default
              },
            ],
          },
        ],
      },
      //////////////////////////////////////////////////////////////////////////////////////////////////////
      title:
        "<span class='blue_text'>A Day in the Life . . . of a News Announcer!</span>",
      array_text: [
        {
          text:
            "<br> Meet Eric. He is one of the people you see on TV each evening. He is an anchor. He tells you the news. " +
            "Each day Eric comes to the studio at eight o’clock in the morning. The TV programme won’t air until six " +
            "o’clock in the evening. Why does Eric come so early? It’s because there are many things to do to get ready! ",
          image: "../images/pages/activities/Group 1 (2).png",
        },

        {
          text:
            "<br> First, Eric must learn about the news for the day. <span class='underline-text'>Some of it will change quickly</span>, but he must learn as much " +
            "as he can about the news that has already happened. Sometimes there is breaking news that he must read " +
            "as soon as possible. You might think the news depends on Eric because he is the only one you see reporting " +
            "on TV. However, there are many people who help put the programme together. Eric must talk with these " +
            "people, so he knows what is planned for him.",
          image: "../images/pages/activities/Group 1 (2).png",
        },

        {
          text:
            "<br> He must sit down and wait for the hair and makeup artist to do " +
            "his hair and makeup, so he will look good on camera. The teleprompter operator will be giving Eric his lines, " +
            "so this person must know how slowly or quickly Eric wants his lines shown. The programme editor will make " +
            "changes often, so Eric talks with him early in the day and again " +
            "before the programme begins. The programme is broadcast live, so Eric must know all the news well before the camera starts. " +
            "He has an important job to give the news to the people of the town.",
          image: "",
        },

        {
          text:
            "<br> Eric does not work at the weekend, so there is another reporter who does the programmes on Saturdays and Sundays. Eric " +
            "is glad because he likes his job, but he needs a break sometimes! He is very grateful to the sound engineer, the microphone " +
            "holder, called the grip, the floor manager, the camera operator, the videotape operator and all the other people who work " +
            "together on the news programme.",
          image: "",
        },
      ],
    },
  ],
};

var mcq_data = {
  layout: 1,
  numinrow: [[1]],
  mainTitle: "../images/pages/sb-icons/conv_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/conv_main_title_icon.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/p8/under.mp3",
  subTitleTextLeft: "",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/p8/under.mp3",
  subTitleAudio: "../audios/p8/under.mp3",
  select: "single", // single (or) multiple
  shape: "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
  bgcolor: "none",
  image: "",
  numbering: "number",
  numberstartfrom: 1,
  numberofcolumns: 1,
  title: "What is the main idea of this text?",
  questions: [
    {
      question: "",
      image: "",
      answer: [1],
      audio: "no",
      audioenable: "default", // correct (or) default
      options: [
        {
          text: "<b>a</b> &nbsp; Eric’s job as an anchorman",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>b</b> &nbsp; Eric only works on weekdays.",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>c</b> &nbsp; All the people who work with Eric.",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
      ],
    },
  ],
};
