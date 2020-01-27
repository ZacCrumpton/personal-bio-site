console.log("HelloWorld")

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
};

const projects = [
    {
        title: "cool projects",
        screenshot: "https://i.pinimg.com/originals/dc/e2/cd/dce2cd398e7668eaa23262ddf6d3e069.jpg",
        description: "super cool stuff",
        techUsed: "html css javascript",
        url: "github",
        githubUrl: "https://github.com/ZacCrumpton",
        available: true,
    },
    {
        title: "Project 2",
        screenshot: "",
        description: "N/A",
        techUsed: "N/A",
        url: "github",
        githubUrl: "https://github.com/ZacCrumpton",
        available: false
    }
];

const buildProjectCard = () => {
    let domString = '';
    for(let i = 0; i < projects.length; i++){
        if(projects[i].available === true){
        domString += `<article class="projBox">`;
        domString +=    `<h2 id="projTitle">${projects[i].title}</h2>`;
        domString +=    `<img class="projectImages" src="${projects[i].screenshot}">`
        domString +=        `<section class="infoBox">`
        domString +=            `<p class="paraInfo">${projects[i].description}</p>`;
        domString +=            `<p class="paraInfo">${projects[i].techUsed}</p>`;
        domString +=            `<p class="paraInfo"><a class="githubLinks" href="${projects[i].url}"><h3>Project 1</h3></a>`;
        domString +=            `<p class="paraInfo"><a class="githubLinks" href="${projects[i].githubUrl}">Zac Crumpton - GitHub</a>`;
        domString +=        `</section>`
        domString += `</article>`
        }
    }
    printToDom('projectsPage', domString);
}

buildProjectCard();