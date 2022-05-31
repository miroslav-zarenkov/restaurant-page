import { clearMain } from "./index.js";
export { renderMenu }

const renderMenu = () => {
    clearMain();
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-wrapper");
    menuDiv.textContent = "Menu";
    document.querySelector("main").appendChild(menuDiv);
    const menuBtn = document.querySelector(".menu-button");
    menuBtn.classList.add("active-button");
}