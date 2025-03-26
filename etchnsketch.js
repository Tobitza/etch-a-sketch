const container = document.querySelector('#flex-container');

const gridSize = 16;
const totalSquares = gridSize * gridSize;

//Generating the squares
// const divArray = [];
for (let i=0; i < totalSquares; i++){
    const square = document.createElement("div");
    square.classList.add("grid-square");
    container.appendChild(square)
    // divArray.push(square);
}