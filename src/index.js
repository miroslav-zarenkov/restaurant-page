import './style.css';

console.log("Hello message");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Test Text";
document.body.appendChild(content);