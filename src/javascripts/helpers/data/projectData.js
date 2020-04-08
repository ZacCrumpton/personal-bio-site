import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/project.json`)
    .then((response) => {
      const demProjects = response.data;
      const projects = [];
      Object.keys(demProjects).forEach((projectId) => {
        demProjects[projectId].id = projectId;
        projects.push(demProjects[projectId]);
      });
      resolve(projects);
    })
    .catch((err) => reject(err));
});

export default { getProjects };
