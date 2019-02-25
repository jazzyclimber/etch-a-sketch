//Set global Variables
const container = document.querySelector('div#container');
let defaultSize = 20;

//Adds a 10% shade of black on each mousover
function addBlack(e) {
  let cell = e.target;
  let data = parseFloat(cell.getAttribute('data-pass'));
  if (data > 10) {
    return
  } else {
    cell.setAttribute('data-pass', data + 1);
  }
cell.setAttribute('style', `background-color: rgba(0,0,0,${data / 10});`);
};

//creates boxes; adds class, adds listener, appends to container
function buildGrid(squareSize) {
  var totalSquares = squareSize * squareSize;
  for (let i = 1; i <= totalSquares; i++){
    let gridItem = document.createElement("div");
    gridItem.classList.add('grid-item');
    gridItem.addEventListener('mouseover', addBlack )
    gridItem.setAttribute('style', 'background-color: rgba(0,0,0,0);')
    gridItem.setAttribute('data-pass', 1);

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

//Call BuildGrid Function with default size
buildGrid(defaultSize);
