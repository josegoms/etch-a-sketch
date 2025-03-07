maxDivs = 256;
const container = document.querySelector(".container");

for (let i = 0; i < maxDivs; i++) {
    let div = document.createElement("div");
    div.className = "grid-item hover-effect";
    container.appendChild(div);
}

const hoverEffects = document.querySelectorAll(".hover-effect");

hoverEffects.forEach((effect) => {
    effect.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "blue";
    });

    effect.addEventListener("mouseleave", (event) => {
        event.target.style.backgroundColor = "white";
    });
});