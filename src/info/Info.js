import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"

//["rgb(0,255,164)", "rgb(166,104,255)"];

export let colors = ["rgb(255, 136, 0)", "rgb(57, 24, 220)"];


/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;


export const info = {
    firstName: "Mishka",
    lastName: "Ismail",
    initials: "mi", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Web Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌍',
            text: 'based in Cape Town, SA'
        },
        {
            emoji: "💻",
            text: "sr. customer experience associate at SnapScan"
        },
        {
            emoji: "✉️",
            text: "let's get in touch!"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/ig_mxshka/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Mishismail",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/mishkaismail/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Heyo! I'm Mishka. I'm a senior customer experience associate at SnapScan. I studied Business Administration at UWC. I enjoy the small, mundane things in life, and I believe artificial intelligence will inevitably rule us all one day.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'mongoDB', 'node.js', 'express.js', 'mongoose', 'heroku', 'netlify', 'vs code', 'postman', 'slack', 'shopify'],
            exposedTo: ['python', 'google cloud', 'c#', 'wordpress']
        }
    ,
    hobbies: [
        {
            label: 'road trips',
            emoji: '🏔️'
        },
        {
            label: 'walks on the beach',
            emoji: '🏖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }

    ],
    portfolio: [ 
        {
            title: "Weather",
            live: "https://mishweatherapp.netlify.app/", 
            source: "https://github.com/Mishismail/react-weather-app",
            image: mock1
        },
        {
            title: "Quiz App",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
    ]
}