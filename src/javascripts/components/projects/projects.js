import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectData';

const buildProject = () => {
  let domString = '';
  domString += '<div id="projectSection">';
  projectData.getProjects()
    .then((projects) => {
      projects.forEach((projectInfo) => {
        // eslint-disable-next-line no-use-before-define
        domString += buildProjectCard(projectInfo);
      });
      utils.printToDom('projectsPage', domString);
    })
    .catch((err) => console.error('get projects failed', err));
};


const buildProjectCard = (project) => {
  let domString = '';
  if (project.available === true) {
    domString += '<div class="indivProjects">';
    domString += '<article class="projBox">';
    domString += `<h2 id="projTitle">${project.title}</h2>`;
    domString += `<img class="projectImages" src="${project.screenshot}">`;
    domString += '<section class="infoBox">';
    domString += `<p class="paraInfo">${project.description}</p>`;
    domString += `<p class="paraInfo">${project.techUsed}</p>`;
    domString += `<p class="paraInfo"><a class="githubLinks" href="${project.url}"><h3>${project.title} link</h3></a>`;
    domString += `<p class="paraInfo"><a class="githubLinks" href="${project.githubUrl}">GitHub Link</a>`;
    domString += '</section>';
    domString += '</article>';
    domString += '</div>';
  }
  return domString;
};


export default { buildProject };
