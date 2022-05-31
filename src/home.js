import { clearMain } from "./index.js";
export { renderHome }

const renderHome = () => {
    clearMain();
   
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-wrapper");
    const homeDivHead = document.createElement("h2");
    homeDivHead.textContent = "Visit the best restaurant in Ohio!";
    homeDiv.appendChild(homeDivHead);
    const homeDivFirstP = document.createElement("p");
    homeDivFirstP.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    homeDiv.appendChild(homeDivFirstP);

    document.querySelector("main").appendChild(homeDiv);
    const homeBtn = document.querySelector(".home-button");
    homeBtn.classList.add("active-button");
}