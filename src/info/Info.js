import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"

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
    firstName: "Valeria",
    lastName: "Rodriguez",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: " Front End Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Alimentada por café'
        },
        {
            emoji: "💼",
            text: "Programador Front-End"
        },
        {
            emoji: "📧",
            text: "valeriar942@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Plaplipla",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/valeria-rodr%C3%ADguez-aburi-4a3724162/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Dentro de estos últimos meses he mantenido distintos proyectos de forma autodidacta gracias a clases particulares y plataformas online como Udemy. Estos me han ayudado a tener experiencia en generar trabajos en equipo, que en su efecto me produjeron responsabilidad y compromiso para la resolución de nuevas ideas y problemas durante el desarrollo de proyectos",
    skills:
        {
            proficientWith: ['Javascript', 'React', 'Git', 'Github', 'Tailwind', 'Html5', 'Css3'],
            exposedTo: ['Adobe Photoshop']
        }
    ,
    hobbies: [
        {
            label: 'Fotografia',
            emoji: '📸'
        },
        {
            label: 'Dibujo',
            emoji: '🖌'
        },
        {
            label: 'Puzzles Estrategicos',
            emoji: '🎲'
        },
        {
            label: 'Deportes',
            emoji: '🐱‍🏍'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://wondrous-moonbeam-ec8744.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Plaplipla/Citas-react", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://prismatic-sable-2fdb6c.netlify.app/",
            source: "https://github.com/Plaplipla/Control-de-Gastos",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://elaborate-nasturtium-d393fd.netlify.app/",
            source: "https://github.com/Plaplipla/criptos-react",
            image: mock3
        }
    ]
}