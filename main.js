//Set global Variables
const container = document.querySelector('div#container');
let defaultSize = 16;

//creates boxes; adds class, adds listener, appends to container
function buildGrid(squareSize) {
  var totalSquares = squareSize * squareSize;
  for (let i = 1; i <= totalSquares; i++){
    let gridItem = document.createElement("div");
    gridItem.classList.add('grid-item');
    gridItem.addEventListener('mouseover', e => e.target.classList.add('hover') )

    container.appendChild(gridItem);

  }
  container.setAttribute("style", `grid-template-columns:repeat(${squareSize}, 1fr); grid-template-rows:repeat(${squareSize}, 1fr)`);
};


//Removes old grid appends with custom grid
function userGrid() {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
  var newSize = prompt("Please enter a number 1\-150.");
  buildGrid(newSize);
}

//Run userGrid on click of button
const newGrid = document.querySelector('button#new-grid');
newGrid.addEventListener('click', userGrid);

buildGrid(defaultSize);
