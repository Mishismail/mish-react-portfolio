import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";

export let colors = ["rgb(255, 136, 0)", "rgb(57, 24, 220)"];

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

export const info = {
  firstName: "Mishka",
  lastName: "Ismail",
  initials: "mi", // the example uses first and last, but feel free to use three or more if you like.
  position: "Full Stack Web Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌍",
      text: "based in Cape Town, SA",
    },
    {
      emoji: "💻",
      text: "sr. customer experience associate at SnapScan",
    },
    {
      emoji: "✉️",
      text: "let's get in touch!",
    },
  ],
  socials: [
    {
      link: "https://www.instagram.com/ig_mxshka/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/Mishismail",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/mishkaismail/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],
  bio: "Heyo! I'm Mishka🌟 Passionate about problem-solving and technology, I'm transitioning from a Senior Customer Experience role to the dynamic field of Full Stack Development 💻✨ With a solid background in delivering exceptional customer experiences, I'm now combining my expertise in customer support with my technical skills in the MERN stack. 🚀🔧",
  skills: {
    theObvious: [
      "html",
      "CSS",
      "javascript",
      "git",
      "npm / yarn",
      "rest APIs / json",
      "react hooks",
      "fetch / axios",
    ],
    libraryFrameworks: [
      "react 18",
      "nextJS 14",
      "tailwind",
      "materialui",
      "ant design",
      "jest",
      "redux",
    ],
    techStack: [
      "MERN stack",
      "MongoDB",
      "express",
      "react",
      "nodejs",
      "heroku",
      "netlify",
      "vercel",
    ],
  },
  hobbies: [
    {
      label: "road trips",
      emoji: "🏔️",
    },
    {
      label: "walks on the beach",
      emoji: "🏖",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
  ],
  portfolio: [
    {
      title: "Weather App",
      live: "https://mishweatherapp.netlify.app/",
      source: "https://github.com/Mishismail/react-weather-app",
      image: mock1,
    },
    {
      title: "Quiz Wizz",
      live: "https://quiz-wizz.netlify.app/",
      source: "https://github.com/Mishismail/quiz-app",
      image: mock2,
    },
    {
      title: "Alarm Clock",
      live: "https://digital-clock-mu-swart.vercel.app/",
      source: "https://github.com/Mishismail/digital-clock",
      image: mock3,
    },
    {
        title: "Vital Visit App",
        live: "https://vitalvisit-doctors-app.vercel.app/",
        source: "https://github.com/Mishismail/vitalvisit-doctors-app",
        image: mock4,
      },
  ],
};
