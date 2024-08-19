import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

export let colors = ["rgb(255, 136, 0)", "rgb(57, 24, 220)"];

export let singlePage = false;

export const info = {
  firstName: "Mishka",
  lastName: "Ismail",
  initials: "mi", 
  position: "Full Stack Web Developer",
  selfPortrait: self, 
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "👟",
      text: "sneakerhead",
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
  bio: "Names Mishka🌟 I'm passionate about problem-solving and technology, and currently transitioning from a Senior Customer Experience role to the dynamic field of Full Stack/Front End Development. With a solid background in delivering exceptional customer experience, I'm now combining my expertise in customer support with my technical skills in the MERN stack. 🚀🔧",
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
      title: "Vital Visit App",
      live: "https://vitalvisit-doctors-app.vercel.app/",
      source: "https://github.com/Mishismail/vitalvisit-doctors-app",
      image: mock4,
    },
    {
      title: "Lexi Creative Assistant",
      live: "https://lexi-assist.netlify.app/",
      source: "https://github.com/Mishismail/lexi-creative-assist",
      image: mock5,
    },
    {
      title: "Quiz Wizz",
      live: "https://quiz-wizz.netlify.app/",
      source: "https://github.com/Mishismail/quiz-app",
      image: mock2,
    },
    {
      title: "Weather App",
      live: "https://mishweatherapp.netlify.app/",
      source: "https://github.com/Mishismail/react-weather-app",
      image: mock1,
    },
    {
      title: "Alarm Clock",
      live: "https://digital-clock-mu-swart.vercel.app/",
      source: "https://github.com/Mishismail/digital-clock",
      image: mock3,
    },
  ],
};
