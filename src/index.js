import './style.css';
import { renderHome } from './home.js';
import { renderMenu } from './menu.js';
import { renderContact } from './contact.js';
import GithubLogo from './github.png';
export { clearMain }



const clearMain = () => {
    let myNode = document.querySelector("main");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

    let buttons = document.querySelectorAll("button");
    buttons.forEach(button =>{
        button.classList.remove("active-button");
    })
}

const renderMainPage = (() => {
    const content = document.createElement("div");
    content.classList.add("content");

    const header = document.createElement("header");

    const name = document.createElement('h1');
    name.textContent ="Freddy’s Stove";

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

    const main = document.createElement("main");

    const footer = document.createElement("footer");
    const footerDiv = document.createElement("div");
    const footerLink = document.createElement("a");
    const footerLinkImg = document.createElement("img");
    footerLinkImg.setAttribute("src", GithubLogo);
    footerDiv.textContent = "Developed by miroslav-zarenkov";
    footerLink.setAttribute("href", "https://github.com/miroslav-zarenkov");
    footerLink.setAttribute("target", "_blank");
    footerLink.setAttribute("rel", "noopener noreferrer");
    footer.appendChild(footerDiv);
    footer.appendChild(footerLink);
    footerLink.appendChild(footerLinkImg);

    

    document.body.appendChild(content);
    content.appendChild(header);
    header.appendChild(name)
    header.appendChild(nav);
    nav.appendChild(navBtn1);
    nav.appendChild(navBtn2);
    nav.appendChild(navBtn3);
    content.appendChild(main);
    content.appendChild(footer);

    renderHome();
    navBtn1.addEventListener('click', renderHome);
    navBtn2.addEventListener('click', renderMenu);
    navBtn3.addEventListener('click', renderContact);
})();
