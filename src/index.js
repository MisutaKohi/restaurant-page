import './styles.css';
const logoRawSVG = require('svg-inline-loader?classPrefix!./images/winery-logo.svg');

function renderBanner() {
    const navbar = document.getElementById('nav-bar');

    const leftBanner = document.createElement('div');
    const rightBanner = document.createElement('div');
    navbar.appendChild(leftBanner);
    navbar.appendChild(rightBanner)

    const logoContainer = document.createElement('div');
    logoContainer.innerHTML = logoRawSVG;
    leftBanner.appendChild(logoContainer);

    const homeBtn = document.createElement('button');
    homeBtn.id = 'home-button';
    rightBanner.appendChild(homeBtn);

    const winesBtn = document.createElement('button');
    winesBtn.id = 'wines-button';
    rightBanner.appendChild(winesBtn);


    const aboutBtn = document.createElement('button');
    aboutBtn.id = 'about-button';
    rightBanner.appendChild(aboutBtn);
}

renderBanner();

