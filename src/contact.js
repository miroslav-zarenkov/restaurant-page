import { clearMain } from "./index.js";
import Map from "./map.png"
export { renderContact }

const renderContact = () => {
    clearMain();
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-wrapper");
    document.querySelector("main").appendChild(contactDiv); 
    const contactDivAdressP = document.createElement("p");
    contactDivAdressP.classList.add("contact-menu-adress");
    contactDivAdressP.textContent = "Find us at 100 South Fountain Avenue, Springfield, OH, USA"
    contactDiv.appendChild(contactDivAdressP);
    const contactDivCallP = document.createElement("p");
    contactDivCallP.classList.add("contact-menu-call");
    contactDivCallP.textContent = "Call us 555-2368"
    contactDiv.appendChild(contactDivCallP);
    const contactDivMap = document.createElement("img");
    contactDivMap.setAttribute("src", Map);
    contactDivMap.classList.add("map-img");
    contactDiv.appendChild(contactDivMap);
   

    const contactBtn = document.querySelector(".contact-button");
    contactBtn.classList.add("active-button");
}