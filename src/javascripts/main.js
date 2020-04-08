import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import projects from './components/projects/projects';
import '../styles/main.scss';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  projects.buildProject();
};

init();
