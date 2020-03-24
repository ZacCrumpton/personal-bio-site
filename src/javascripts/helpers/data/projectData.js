const projects = [
  {
    title: 'Chatty App',
    screenshot: 'https://raw.githubusercontent.com/ZacCrumpton/chatty-cobralily/master/screenshots/light-mode.png',
    description: 'Chatty App was a group project where myself and 3 others were tasked with creating a messaging app. Please see the github readme for more information.',
    techUsed: '<strong>This project invovled</strong>: HTML5 CSS3 SCSS javascript Jquery',
    url: 'https://github.com/ZacCrumpton/chatty-cobralily',
    githubUrl: 'https://github.com/ZacCrumpton',
    available: true,
  },
  {
    title: 'Pet Adoption',
    screenshot: 'https://github.com/ZacCrumpton/pet-adoption/raw/master/screenshot/pet-adoption.jpg',
    description: "Pet-Adoption was mainly a porject based around using flexbox and its many different advantages. Please see the github readme if you'd like to know more",
    techUsed: 'HTML5 CSS3 and JAVASCRIPT',
    url: 'https://github.com/ZacCrumpton/pet-adoption',
    githubUrl: 'https://github.com/ZacCrumpton',
    available: true,
  },
];

const getProjects = () => projects;

export default { getProjects };
