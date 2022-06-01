import { clearMain } from "./index.js";
import Map from "./map.png"
export { renderContact }

const renderContact = () => {
    clearMain();
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-wrapper");
    document.querySelector("main").appendChild(contactDiv);
    const contactDivAdressH = document.createElement("h2");
    contactDivAdressH.textContent = "Find Us"
    const contactDivAdressP = document.createElement("p");
    contactDivAdressP.classList.add("contact-menu-adress");
    contactDivAdressP.textContent = "100 South Fountain Avenue, Springfield, OH, USA"
    contactDiv.appendChild(contactDivAdressH);
    contactDiv.appendChild(contactDivAdressP);
    const contactDivCallH = document.createElement("h2");
    contactDivCallH.textContent = "Call Us"
    const contactDivCallP = document.createElement("p");
    contactDivCallP.classList.add("contact-menu-call");
    contactDivCallP.textContent = "555-2368"
    contactDiv.appendChild(contactDivCallH);
    contactDiv.appendChild(contactDivCallP);
    const contactDivMap = document.createElement("img");
    contactDivMap.setAttribute("src", Map);
    contactDivMap.classList.add("map-img");
    contactDiv.appendChild(contactDivMap);
   

    const contactBtn = document.querySelector(".contact-button");
    contactBtn.classList.add("active-button");
}