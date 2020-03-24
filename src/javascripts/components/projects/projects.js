import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectData';


const buildProjectCard = () => {
  const projectDisplay = projectData.getProjects();
  let domString = '';
  projectDisplay.forEach((project) => {
    if (project.available === true) {
      domString += '<article class="projBox">';
      domString += `<h2 id="projTitle">${project.title}</h2>`;
      domString += `<img class="projectImages" src="${project.screenshot}">`;
      domString += '<section class="infoBox">';
      domString += `<p class="paraInfo">${project.description}</p>`;
      domString += `<p class="paraInfo">${project.techUsed}</p>`;
      domString += `<p class="paraInfo"><a class="githubLinks" href="${project.url}"><h3>Project 1</h3></a>`;
      domString += `<p class="paraInfo"><a class="githubLinks" href="${project.githubUrl}">Zac Crumpton - GitHub</a>`;
      domString += '</section>';
      domString += '</article>';
    }
    utils.printToDom('projectsPage', domString);
  });
};


export default { buildProjectCard };
