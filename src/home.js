const renderHome = () => {
    const homeDiv = document.createElement("div");
    homeDiv.textContent = "Info about our amazing restaurant";
    document.querySelector("main").appendChild(homeDiv);
}

export { renderHome };