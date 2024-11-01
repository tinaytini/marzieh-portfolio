import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { projects } from "./projects";




const projectList = document.getElementById("#project__list")

projects.forEach(item => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const textDiv = document.createElement('div');
    textDiv.className = 'project-wrapper__text load-hidden';

    const title = document.createElement('h3');
    title.className = 'project-wrapper__text-title';
    title.textContent = item.title;

    const imageDiv = document.createElement('div');
    imageDiv.className = 'project-wrapper__image load-hidden';

    const link = document.createElement('a');
    link.rel = 'noreferrer';
    link.href = item.source; // Set the actual URL from the project array
    link.target = '_blank';

    const thumbnailDiv = document.createElement('div');
    thumbnailDiv.className = 'thumbnail rounded js-tilt';
    thumbnailDiv.setAttribute('data-tilt', '');
    thumbnailDiv.setAttribute('data-tilt-max', '4');
    thumbnailDiv.setAttribute('data-tilt-glare', 'true');
    thumbnailDiv.setAttribute('data-tilt-max-glare', '0.5');

    const img = document.createElement('img');
    img.className = 'img-fluid';
    img.src = item.image;
    img.alt = 'Project Image';

    thumbnailDiv.appendChild(img);
    link.appendChild(thumbnailDiv);
    imageDiv.appendChild(link);
    textDiv.appendChild(title);
    textDiv.appendChild(imageDiv);
    cardDiv.appendChild(textDiv);
    rowDiv.appendChild(cardDiv);
    projectList.appendChild(rowDiv);
});
initScrollReveal(targetElements, defaultProps);
initTiltEffect();