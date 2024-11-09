const logoRawSVG = require('svg-inline-loader?classPrefix!./../images/winery-logo.svg');

function renderNavbar() {
    const navbar = document.getElementById('nav-bar');

    const leftBanner = document.createElement('div');
    leftBanner.id = 'left-banner';
    navbar.appendChild(leftBanner);

    const rightBanner = document.createElement('div');
    rightBanner.id = 'right-banner';
    navbar.appendChild(rightBanner)

    const logoContainer = document.createElement('div');
    logoContainer.innerHTML = logoRawSVG;
    logoContainer.id = 'logo-container';
    leftBanner.appendChild(logoContainer);

    const homeBtn = document.createElement('button');
    homeBtn.id = 'home-button';
    homeBtn.innerText = 'Home';
    rightBanner.appendChild(homeBtn);

    const winesBtn = document.createElement('button');
    winesBtn.id = 'wines-button';
    winesBtn.innerText = 'Our Wines'
    rightBanner.appendChild(winesBtn);


    const aboutBtn = document.createElement('button');
    aboutBtn.id = 'about-button';
    aboutBtn.innerText = 'About Us'
    rightBanner.appendChild(aboutBtn);
}

export default renderNavbar;