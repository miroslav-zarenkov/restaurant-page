import { clearMain } from "./index.js";
export { renderContact }

const renderContact = () => {
    clearMain();
    const contactDiv = document.createElement("div");
    contactDiv.textContent = "contact 123-4456";
    document.querySelector("main").appendChild(contactDiv);
}