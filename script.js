maxDivs = 256;
const container = document.querySelector(".container");

for (let i = 0; i < maxDivs; i++) {
    let div = document.createElement("div");
    div.className = "grid-item";
    container.appendChild(div);
} 