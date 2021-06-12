const body = document.querySelector('body');
body.style.background = "black";

const header = document.querySelector('div.header');
header.style.display = "flex";
header.style.flexDirection = "column";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.marginBottom = "2em";

const title = document.querySelector('h1.title');
title.style.fontFamily = "monospace";
title.style.color = "white";

const initialRows = 16;
const canvas = "75vh"

function buildGrid(width) {
    container = document.createElement('div');
    container.className = 'container';
    container.style.width = canvas;
    container.style.height = canvas;
    container.style.margin = "0 auto";
    for (i = 0; i < width; i++) {
        let row = document.createElement('div');
        row.style.display = "flex";
        for (j = 0; j < width; j++) {
            let cell = document.createElement('div');
            cell.style.height = "calc((1/" + width + ") *" + canvas + ")" ;
            cell.style.width = "calc((1/" + width + ") *" + canvas + ")";
            cell.style.background = "white";
            cell.className = "cell";
            row.append(cell);
        }

        container.append(row);
    }
    body.append(container);
}

function addHover(color) {
    const cells = document.querySelectorAll('div.cell');
    for (i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", function(event) {
            event.target.style.background = color;
        });
    }
}

buildGrid(initialRows);
addHover("black");

function randColor() {
    function randValue() {
        return Math.floor(Math.random() * (255 -  + 1)) + 0;
    }
    let r = randValue();
    let b = randValue();
    let g = randValue();
    let rgb = "rgb(" + r + "," + b + "," + g + ")";
    console.log(rgb);
    return rgb;
}

function changeColor() {
    let value = event.target.value;
    console.log(value);
    if (value == "black") {
        addHover("black");
    } else if (value == "blue") {
        addHover("blue");
    } else if (value == "green") {
        addHover("green");
    } else {
        addHover(randColor());
    }
}

function reset() {
    let newRows = prompt("how wide? (max 100): ");
    container = document.querySelector('div.container');
    container.parentNode.removeChild(container);
    buildGrid(newRows);
    addHover("black");
}

