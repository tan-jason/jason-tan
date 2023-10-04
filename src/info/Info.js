import self from "../img/self.png";
import choreManager from "../img/choreManager.png";
import testAssistant from "../img/testAssistant.png";
import folderSystem from "../img/folderSystem.png";

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
  firstName: "Jason",
  lastName: "Tan",
  initials: "JT", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🌎",
      text: "based in Canada",
    },
    {
      emoji: "🏫",
      text: "Software Engineering Student at McMaster",
    },
    {
      emoji: "📧",
      text: "jasontan62@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.instagram.com/jasonntaan/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/tan-jason",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/jason-tan62/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! My name is Jason Tan and I'm a current software engineering student at McMaster University. I'm passionate about learning and building software. Find out more about me!",
  skills: {
    proficientWith: [
      "Javascript",
      "React.js",
      "Git",
      "Github",
      "Java",
      "Python",
      "PHP",
      "Typescript",
      "C",
      "Express.js",
      "SQL",
      "Jenkins CI",
      "Docker",
      "Node.js",
      "React Native",
      "Jest",
      "Cypress",
      "html5",
      "css3",
      "figma",
    ],
    exposedTo: ["Go", "ITextAPI", "Prisma", "AWS"],
  },
  hobbies: [
    {
      label: "rock climbing",
      emoji: "🧗",
    },
    {
      label: "travelling",
      emoji: "✈️",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Chore Manager App",
      source: "https://github.com/tan-jason/chore-manager", // this should be a link to the **repository** of the project, where the code is hosted.
      image: choreManager,
    },
    {
      title: "Test Assistant",
      source: "https://github.com/tan-jason/Test-Assistant",
      image: testAssistant,
    },
    {
      title: "Folder System Hierarchy",
      source: "https://github.com/tan-jason/FolderSystem",
      image: folderSystem,
    },
  ],
};
