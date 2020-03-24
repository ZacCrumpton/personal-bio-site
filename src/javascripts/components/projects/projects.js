import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectData';


const buildProjectCard = () => {
  const projectDisplay = projectData.getProjects();
  let domString = '';
  projectDisplay.forEach((project) => {
    if (project.available === true) {
      domString += '<div class="indivProjects">';
      domString += '<article class="projBox">';
      domString += `<h2 id="projTitle">${project.title}</h2>`;
      domString += `<img class="projectImages" src="${project.screenshot}">`;
      domString += '<section class="infoBox">';
      domString += `<p class="paraInfo">${project.description}</p>`;
      domString += `<p class="paraInfo">${project.techUsed}</p>`;
      domString += `<p class="paraInfo"><a class="githubLinks" href="${project.url}"><h3>${project.title} github link</h3></a>`;
      domString += `<p class="paraInfo"><a class="githubLinks" href="${project.githubUrl}">Zac Crumpton - GitHub</a>`;
      domString += '</section>';
      domString += '</article>';
      domString += '</div>';
    }
    utils.printToDom('projectsPage', domString);
  });
};


export default { buildProjectCard };
