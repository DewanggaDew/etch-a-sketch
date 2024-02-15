const grid = document.getElementById("grid");

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

function changeSize() {}
function clear() {}

createGrid(16);
