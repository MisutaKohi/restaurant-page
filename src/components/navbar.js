import renderHomepage from "../webpages/home";
import renderAboutUs from "../webpages/about-us";
import renderWineList from "../webpages/winelist";
import createDropdownMenu from "./dropdown-menu";

const logoRawSVG = require("./../images/winery-logo.svg");

function renderNavbar() {
  const navbar = document.getElementById("nav-bar");

  /* left banner */

  const leftBanner = document.createElement("div");
  leftBanner.id = "left-banner";
  navbar.appendChild(leftBanner);

  const logoContainer = document.createElement("div");
  logoContainer.innerHTML = logoRawSVG;
  logoContainer.id = "logo-container";
  logoContainer.onclick = renderHomepage;
  leftBanner.appendChild(logoContainer);

  /* right banner */

  const rightBanner = document.createElement("div");
  rightBanner.id = "right-banner";
  navbar.appendChild(rightBanner);

  const dropdownMenu = createDropdownMenu(
    "Menu",
    ["Home", "Our Wines", "About Us"],
    [renderHomepage, renderWineList, renderAboutUs]
  );

  rightBanner.append(dropdownMenu);

  // const homeBtn = document.createElement("button");
  // homeBtn.id = "home-button";
  // homeBtn.innerText = "Home";
  // homeBtn.onclick = renderHomepage;

  // const winesBtn = document.createElement("button");
  // winesBtn.id = "wines-button";
  // winesBtn.innerText = "Our Wines";
  // winesBtn.onclick = renderWineList;

  // const aboutBtn = document.createElement("button");
  // aboutBtn.id = "about-button";
  // aboutBtn.innerText = "About Us";
  // aboutBtn.onclick = renderAboutUs;

  // const buttons = [homeBtn, winesBtn, aboutBtn];

  // buttons.forEach((button) => {
  //   button.classList.add("nav-level");
  //   rightBanner.appendChild(button);
  // });
}

export default renderNavbar;
