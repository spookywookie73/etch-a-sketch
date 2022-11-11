const btn = document.getElementById("startbtn");
btn.addEventListener("click", createGrid);

function createGrid() {
  let gridSize = prompt("How many squares per side do you want?");

  if (isNaN(gridSize)) {
    alert("That's not a number. Please try again");
  } else if (gridSize > 100) {
    alert("The maximum size is 100. Please try again");
  } else {
    const grid = document.getElementById("container");
    grid.innerText = '';

    document.documentElement.style.setProperty("--columns-row", gridSize);
    for (i = 0; i < gridSize ** 2; i++) {
      var div = document.createElement("div");
      grid.appendChild(div);
      div.addEventListener("mouseover", function() {
        this.style.backgroundColor = "red";
      });
    }
  }
};