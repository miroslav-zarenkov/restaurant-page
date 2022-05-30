import { clearMain } from "./index.js";
export { renderHome }

const renderHome = () => {
    clearMain();
    const homeDiv = document.createElement("div");
    homeDiv.textContent = "Info about our amazing restaurant";
    document.querySelector("main").appendChild(homeDiv);
    const homeBtn = document.querySelector(".home-button");
    homeBtn.classList.add("active-button");
}