import renderAboutUs from './about-us';
import renderWineList from './winelist';

function renderHomepage() {
    const welcomeHeader = document.createElement('h2');
    welcomeHeader.innerText = 'Welcome to'

    const mainHeader = document.createElement('h1');
    mainHeader.innerText = 'Origami Winery'

    const description = document.createElement('h3');
    description.innerText = 'Guided by family, tradition, and terroir.';

    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'buttons-container';

    const winesBtn = document.createElement('button');
    winesBtn.innerText = 'Our Wines';
    winesBtn.classList.add('page-level');
    winesBtn.onclick = renderWineList;

    const aboutBtn = document.createElement('button');
    aboutBtn.innerText = 'About Us';
    aboutBtn.classList.add('page-level');
    aboutBtn.onclick = renderAboutUs;

    const buttons = [winesBtn, aboutBtn];
    buttons.forEach((button) => buttonsContainer.appendChild(button));

    const body = document.getElementById('content');
    body.innerHTML = ``;
    body.appendChild(welcomeHeader);
    body.appendChild(mainHeader);
    body.appendChild(description);
    body.appendChild(buttonsContainer);
}

export default renderHomepage;