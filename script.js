const DEFAULT_COLOR = "#333333";
const DEFAULT_MODE = "color";
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

const grid = document.getElementById("grid");
const input = document.getElementById("inputSlider");
const inputValue = document.getElementById("inputValue");
const btnClear = document.getElementById("clear");
const colorPicker = document.getElementById("colorPicker");
const btnEraser = document.getElementById("eraserMode");

colorPicker.oninput = (e) => {
  setCurrentColor(e.target.value);
};
input.onmousemove = (e) => {
  updateInputValue(e.target.value);
};
input.onchange = (e) => changeSize(e.target.value);
btnClear.onclick = () => reloadGrid();

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
  e.target.style.backgroundColor = currentColor;
}

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

function changeSize(input) {
  setCurrentSize(input);
  updateInputValue(input);
  reloadGrid();
}

function reloadGrid() {
  clear();
  createGrid(currentSize);
}

function updateInputValue(newValue) {
  inputValue.innerHTML = `${newValue} x ${newValue}`;
}

function clear() {
  grid.innerHTML = "";
}

window.onload = () => {
  createGrid(DEFAULT_SIZE);
};
