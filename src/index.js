import './style.css';
import { renderHome } from './home.js';

const content = document.createElement("div");
content.classList.add("content");

const header = document.createElement("header");

const main = document.createElement("main");

const footer = document.createElement("footer");
footer.textContent = "Developed by miroslav-zarenkov github";

const nav = document.createElement("nav");

const navBtn1 = document.createElement("button");
navBtn1.textContent = "Home";

const navBtn2 = document.createElement("button");
navBtn2.textContent = "Menu";

const navBtn3 = document.createElement("button");
navBtn3.textContent = "Contact";


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