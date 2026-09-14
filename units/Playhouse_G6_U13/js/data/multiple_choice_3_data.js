var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(0, 183, 206)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/demo.mp3",
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
var mcq_data = {
  layout: 1,
  numinrow: [[1]],
  mainTitle: "../images/pages/sb-icons/conv_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/conv_main_title_icon.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/P117/CONVERSATION.mp3",
  subTitleTextLeft: "<span class='title-order'>2</span> Answer it!",
  subTitleTextRight: "Read each question and choose the best answer.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p120answer.mp3",
  select: "single", // single (or) multiple
  shape: "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
  bgcolor: "none",
  numbering: "number",
  numberstartfrom: 1,
  numberofcolumns: 1,
  helpPopup: {
    title: "",

    image: "",

    paragraphs: [
      `
      <b class="blue_text">Max:</b>
      Remember Evan Lewis? He used to live next door to me in third grade.
      <br><br>

      <b class="blue_text">Lilly:</b>
      Wasn‘t he the one who moved to Ireland?
      <br><br>

      <b class="blue_text">Max:</b>
      Yes, and guess what? I found him online!
      <br><br>

      <b class="blue_text">Lilly:</b>
      That‘s great! What‘s he up to?
    `,

      `
      <b class="blue_text">Max:</b>
      On his <span class="blue_text">timeline</span>, he put his
      <span class="blue_text">status</span> as
      ‘Having a ball at my new school!‘
      <br>
      I knew it was him so I left a
      <span class="blue_text">comment</span>.
      <br><br>

      <b class="blue_text">Jenny:</b>
      If you leave a <span class="blue_text">comment</span>,
      will he know it‘s you?
      <br><br>

      <b class="blue_text">Max:</b>
      If I leave a <span class="blue_text">comment</span> on his
      <span class="blue_text">timeline</span>, he‘ll know for sure that it‘s me.
      We were good friends. Plus, I left a
      <span class="blue_text">friend request</span> for him.
    `,

      `
      <b class="blue_text">Yoshi:</b>
      I‘m sure he‘ll know it‘s you.
      Did he <span class="blue_text">share</span> any of his albums or
      <span class="blue_text">upload</span> any
      <span class="blue_text">photos</span> of his new school to his
      <span class="blue_text">timeline</span>?
      <br><br>

      <b class="blue_text">Max:</b>
      Not yet. I tagged him in a picture.
      If he sees the tag, the
      <span class="blue_text">comment</span> and the
      <span class="blue_text">friend request</span>,
      he‘ll definitely accept my
      <span class="blue_text">friend request</span>.
      Then I will be able to see all of his
      <span class="blue_text">uploads</span>.
    `,
    ],
  },
  questions: [
    {
      question: "Who used to live next door to Max?",
      image: "",
      answer: [2],
      audio: "no",
      audioenable: "default", // correct (or) default
      numbering: "none", // alphabet (or) number (or) none
      numberstartfrom: "a",
      options: [
        {
          text: "<b>a</b> &nbsp;  Max Evans ",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>b</b> &nbsp;  Evan Lewis ",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>b</b> &nbsp;  Lewis Evans",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
      ],
    },
    {
      question:
        "The boy says, ‘Having a ball at my new school!’ What does this mean?",
      image: "",
      answer: [1],
      audio: "no",
      audioenable: "default", // correct (or) default
      numbering: "none", // alphabet (or) number (or) none
      numberstartfrom: "a",
      options: [
        {
          text: "<b>a</b> &nbsp;  He is having a good time. ",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>b</b> &nbsp;  He plays football at school.",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
      ],
    },
    {
      question: "In line 9, who does ‘him’ refer to?",
      image: "",
      answer: [4],
      audio: "no",
      audioenable: "default", // correct (or) default
      numbering: "none", // alphabet (or) number (or) none
      numberstartfrom: "a",
      options: [
        {
          text: "<b>a</b> &nbsp;  Max ",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>b</b> &nbsp;  Yoshi ",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>c</b> &nbsp;  Lilly ",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>d</b> &nbsp;  Evan",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
      ],
    },
  ],
};
