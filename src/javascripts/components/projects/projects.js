import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectData';

const buildProjectCard = () => {
  let domString = '';
  const projectDisplay = projectData.getProjects();
  if (projectDisplay.available === true) {
    domString += '<article class="projBox">';
    domString += `<h2 id="projTitle">${projectDisplay.title}</h2>`;
    domString += `<img class="projectImages" src="${projectDisplay.screenshot}">`;
    domString += '<section class="infoBox">';
    domString += `<p class="paraInfo">${projectDisplay.description}</p>`;
    domString += `<p class="paraInfo">${projectDisplay.techUsed}</p>`;
    domString += `<p class="paraInfo"><a class="githubLinks" href="${projectDisplay.url}"><h3>Project 1</h3></a>`;
    domString += `<p class="paraInfo"><a class="githubLinks" href="${projectDisplay.githubUrl}">Zac Crumpton - GitHub</a>`;
    domString += '</section>';
    domString += '</article>';
  }
  utils.printToDom('projectsPage', domString);
};


export default { buildProjectCard };
