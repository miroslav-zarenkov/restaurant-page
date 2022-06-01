import { clearMain } from "./index.js";
export { renderMenu }

const renderMenu = () => {
    const menu = [{
        name: "Burger",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        price: "3$"
    },
    {
        name: "Salad",
        info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        price: "1$"
    },
    {
        name: "Sushi",
        info: "Diam quis enim lobortis scelerisque fermentum dui. Mauris ultrices eros in cursus turpis massa tincidunt.",
        price: "0.5$"
    },
    {
        name: "Steak",
        info: "Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Duis aute irure dolor.",
        price: "10$"
    }
]

    clearMain();
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-wrapper");
    for (let i = 0; i < menu.length; i++) {
        let menuName = menu[i].name;
        let menuInfo = menu[i].info;
        let menuPrice = menu[i].price;
        let menuElement = document.createElement("div");
        menuElement.className = "menu-element-" + i;
        let menuElementNameP = document.createElement("h2");
        menuElementNameP.textContent = menuName;
        let menuElementInfoP = document.createElement("p");
        menuElementInfoP.textContent = menuInfo;
        let menuElementPriceP = document.createElement("p");
        menuElementPriceP.textContent = menuPrice;
        menuDiv.appendChild(menuElement);
        menuElement.appendChild(menuElementNameP);
        menuElement.appendChild(menuElementInfoP);
        menuElement.appendChild(menuElementPriceP);
    }

    document.querySelector("main").appendChild(menuDiv);
    const menuBtn = document.querySelector(".menu-button");
    menuBtn.classList.add("active-button");
    console.log(menu);
}