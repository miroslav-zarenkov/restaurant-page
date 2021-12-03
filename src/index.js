import './style.css';
import { renderHome } from './home.js';
import { renderMenu } from './menu.js';
import { renderContact } from './contact.js';
export { clearMain }

const content = document.createElement("div");
content.classList.add("content");

const header = document.createElement("header");

const main = document.createElement("main");

const footer = document.createElement("footer");

const footerDiv = document.createElement("div");
footerDiv.textContent = "Developed by miroslav-zarenkov github";
footer.appendChild(footerDiv);

const nav = document.createElement("nav");

const navBtn1 = document.createElement("button");
navBtn1.classList.add("home-button");
navBtn1.textContent = "Home";

const navBtn2 = document.createElement("button");
navBtn2.classList.add("menu-button");
navBtn2.textContent = "Menu";

const navBtn3 = document.createElement("button");
navBtn3.classList.add("contact-button");
navBtn3.textContent = "Contact";

const clearMain = () => {
    let myNode = document.querySelector("main");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}

const renderMainPage = (() => {
    document.body.appendChild(content);
    content.appendChild(header);
    header.appendChild(nav);
    nav.appendChild(navBtn1);
    nav.appendChild(navBtn2);
    nav.appendChild(navBtn3);
    content.appendChild(main);
    content.appendChild(footer);
    renderHome();
})();

navBtn1.addEventListener('click', renderHome);
navBtn2.addEventListener('click', renderMenu);
navBtn3.addEventListener('click', renderContact);