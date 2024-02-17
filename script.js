const DEFAULT_COLOR = "#333333";
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

const grid = document.getElementById("grid");
const input = document.getElementById("input");

function createGrid(num) {
  grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
  for (let i = 0; i < num * num; i++) {
    const gridCont = document.createElement("div");
    gridCont.classList.add("grid-element");
    gridCont.addEventListener("mousedown", draw);
    gridCont.addEventListener("mouseover", draw);
    grid.appendChild(gridCont);
  }
}

function draw(e) {
  e.target.style.backgroundColor = "black";
}

function changeSize(input) {
  createGrid();
}

function clear() {
  grid.innerHTML = "";
}
