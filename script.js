maxDivs = 256;
const container = document.querySelector(".container");

for (let i = 0; i < maxDivs; i++) {
    let div = document.createElement("div");
    div.className = "grid-item hover-effect";
    div.style.width = `calc(100% / ${Math.sqrt(maxDivs)})`;
    div.style.aspectRatio = "1 / 1";
    container.appendChild(div);
}
hoverEvent();

const btn = document.querySelector("button");

btn.addEventListener("click",() => {
    let grids;
    do {
        grids = prompt("Please enter the number of grid columns desired (Up to 100): ");
    } while(grids > 100 || grids < 1);

    const changes = document.querySelectorAll(".grid-item");
    changes.forEach((change) => {
        change.remove();
    });

    for(let i = 0; i < grids * grids; i++) {
        let div = document.createElement("div");
        div.className = "grid-item hover-effect";
        div.style.width = `calc(100% / ${grids})`;
        div.style.aspectRatio = "1 / 1";
        container.appendChild(div);
    }
    hoverEvent();

});


function hoverEvent() {
    const hoverEffects = document.querySelectorAll(".hover-effect");

hoverEffects.forEach((effect) => {
    effect.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "blue";
    });

    effect.addEventListener("mouseleave", (event) => {
        event.target.style.backgroundColor = "white";
    });
});
}