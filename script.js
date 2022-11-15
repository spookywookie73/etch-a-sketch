const blackBtn = document.getElementById("defaultColor");
const rainbowBtn = document.getElementById("rainbowBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clear = document.getElementById("clearBtn");
const startBtn = document.getElementById("startBtn");
const grid = document.getElementById("container");
const defaultColor = "black";
const defaultMode = "color";


blackBtn.onclick = () => currentMode = "color";
rainbowBtn.onclick = () => currentMode = "rainbow";
eraserBtn.onclick = () => currentMode = "eraser";
startBtn.addEventListener("click", createGrid);
clear.onclick = () => clearGrid();

let currentMode = defaultMode;
let currentColor = defaultColor;
let gridSize = 0;


function createGrid() {
  gridSize = prompt("How many squares per side do you want?");

  if (isNaN(gridSize)) {
    alert("That's not a number. Please try again");
    
  } else if (gridSize > 100) {
    alert("The maximum size is 100. Please try again");
  } else {
    grid.innerText = '';

    document.documentElement.style.setProperty("--columns-row", gridSize);
    for (i = 0; i < gridSize ** 2; i++) {
      var div = document.createElement("div");
      grid.appendChild(div);
      div.addEventListener("mouseover", color);
    }
  }
};

function clearGrid() {
  grid.innerText = '';

  document.documentElement.style.setProperty("--columns-row", gridSize);
  for (i = 0; i < gridSize ** 2; i++) {
    var div = document.createElement("div");
    grid.appendChild(div);
    div.addEventListener("mouseover", color);
  };
};

function color(e) {
  if (currentMode === "rainbow") {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === "color") {
    e.target.style.backgroundColor = "black";
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "white";
  };
};
