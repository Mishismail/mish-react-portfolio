import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import mock6 from "../img/mock6.png";
import resume from '../assets/MishkaIsmailResume_2024.pdf';

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
      text: "Sneaker Enthusiast",
    },
    {
      emoji: "⛰️",
      text: "Based in Cape Town 🇿🇦",
    },
    {
      emoji: "🔗",
      text: "Let's connect 🚀",
    },
    {
      emoji: "📝",
      linkText: "My resume",  
      link: resume, 
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
  
  bio: `<p style="text-align: justify;">
  Hi there! I'm Mishka, a full-stack web developer from Cape Town, with a deep passion for problem-solving and technology. 
  After a few years as a Senior Customer Experience associate, I've embarked on an exciting journey into the world of Full Stack and Front-End Development. 
  My current focus is on mastering the MERN stack, where I've been combining my expertise in delivering top-notch customer experiences with my growing technical skills.
  </p>
  <p style="text-align: justify;">
  I'm dedicated to continuously learning and evolving in this dynamic field, and I'm always exploring new technologies to expand my skill set. 
  As I progress, I plan to dive deeper into mobile development with React Native and explore other frameworks like Angular and eventually dig into Python.
  Outside of coding, I enjoy a quiet life where I can focus on honing my craft and relaxing with a bit of Sims 4. 
  </p>`,

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
      "tailwindcss",
      "materialui",
      "framer motion",
      "antdesign",
      "chakraui",
      "jest",
      "mocha",
      "chai",
      "supertest",
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
      label: "lifelong learner",
      emoji: "🌱",
    },
    {
      label: "road trips",
      emoji: "🏔️",
    },
    {
      label: "walks on the beach",
      emoji: "🏖",
    },
    {
      label: "true crime",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
  ],
  portfolio: [
    {
      title: "🥼 Vital Visit Dr App",
      live: "https://vitalvisit-doctors-app.vercel.app/",
      source: "https://github.com/Mishismail/vitalvisit-doctors-app",
      image: mock4,
      techStack: ["React", "Ant Design", "Node", "Express", "MongoDB", "Vercel"],
    },
    {
      title: "🤖 Lexi Creative AI Assist",
      live: "https://lexi-assist.netlify.app/",
      source: "https://github.com/Mishismail/lexi-creative-assist",
      image: mock5,
      techStack: ["React", "Framer Motion", "Chakra UI", "Gemini AI API", "Netlify"],
    },
    {
      title: "🎧 iTunes Search",
      live: "https://itunes-search-rho.vercel.app/",
      source: "https://github.com/Mishismail/itunes-search",
      image: mock6,
      techStack: ["React", "Express", "iTunes API", "Vercel"],
    },
    {
      title: "💭 Quiz Wizz",
      live: "https://quiz-wizz.netlify.app/",
      source: "https://github.com/Mishismail/quiz-app",
      image: mock2,
      techStack: ["React", "Redux", "CSS", "Netlify"],
    },
    {
      title: "⏰ Alarm Clock",
      live: "https://digital-clock-mu-swart.vercel.app/",
      source: "https://github.com/Mishismail/digital-clock",
      image: mock3,
      techStack: ["JavaScript", "CSS", "HTML", "Vercel"],
    },
    {
      title: "🌡️ Weather App",
      live: "https://mishweatherapp.netlify.app/",
      source: "https://github.com/Mishismail/react-weather-app",
      image: mock1,
      techStack: ["React", "Axios", "Weather API", "Netlify"],
    },
  ],
};

