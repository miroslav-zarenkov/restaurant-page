import { clearMain } from "./index.js";
export { renderMenu }

const renderMenu = () => {
    clearMain();
    const menuDiv = document.createElement("div");
    menuDiv.textContent = "Menu";
    document.querySelector("main").appendChild(menuDiv);
}