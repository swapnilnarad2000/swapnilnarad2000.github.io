import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"
import mock7 from "../img/mock7.png"
import mock8 from "../img/mock8.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Swapnil",
    lastName: "Narad",
    initials: "SN", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled by a desire to fulfill my dreams...',
            link: ''
        },
        {
            emoji: '🌎',
            text: 'Based out of India',
            link: ''
            
        },
        {
            emoji: "💼",
            text: "Developer At LTIMindtree",
            link: ''
        },
        {
            emoji: "📧",
            text: "Lets connect !",
            link: 'mailto:swapnilnarad2000@gmail.com'
        }
    ],
    socials: [
        {
            link: "https://instagram.com/swapnilnarad2000",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/swapnilnarad2000",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/swapnilnarad/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Swapnil. I'm currently a ServiceNow Developer for LTIMindtree. As part of LTIMindtree I am currently working for Disney for their MyDisneyToday Employee Portal. I studied CompSci at IIT Bhilai, I enjoy spending time with friends, I can surely center a div, Soo you should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'C++', 'react', 'github', 'firebase', 'bootstrap5', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'flask', 'angular-js']
        }
    ,
    hobbies: [
        {
            label: 'cricket',
            emoji: '🏏'
        },
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking/food',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Hotel Grand Vardhaman Website",
            live: "https://hotel-grand-vardhaman.web.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/swapnilnarad2000/tgv-website", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "I Placed Portal",
            live: "https://swapnilnarad2000.github.io/I-Placed-Portal-MVP/",
            source: "https://github.com/himanshuhsn/I-Placed-Portal",
            image: mock2
        },
        {
            title: "The Chat App",
            live: "https://chatapp-12e38.firebaseapp.com/home.html",
            source: "https://bitbucket.org/gagan2005/chat-app/src/master/",
            image: mock8
        },
        {
            title: "The RGB Color Game",
            live: "https://swapnilnarad2000.github.io/The_RGB_Game/colorGame.html",
            source: "https://github.com/swapnilnarad2000/The_RGB_Game",
            image: mock5
        },
        {
            title: "Deep Fake Detection",
            live: "https://github.com/devansh1412/Eye-blink-detection?tab=readme-ov-file",
            source: "https://github.com/devansh1412/Eye-blink-detection",
            image: mock3
        },
        {
            title: "Soccer Score Prediction",
            live: "https://github.com/gagan2005/Soccer_Prediction_And_DataAnalysis",
            source: "https://github.com/gagan2005/Soccer_Prediction_And_DataAnalysis",
            image: mock4
        },
        {
            title: "To Do List",
            live: "https://swapnilnarad2000.github.io/todoList/",
            source: "https://github.com/swapnilnarad2000/todoList",
            image: mock6
        },
        {
            title: "Animation of Graph Algorithms",
            live: "https://swapnilnarad2000.github.io/Animation-of-algorithms/",
            source: "https://github.com/swapnilnarad2000/Animation-of-algorithms",
            image: mock7
        },  
    ]
}