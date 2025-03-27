const container = document.querySelector('#flex-container');
const resetButton = document.querySelector('#grid-reset');

let gridSize = 16;
// let totalSquares = gridSize * gridSize;

generateGrid(gridSize);

resetButton.addEventListener("click", () => {
    newGridSize = parseInt(prompt("Enter the number of squares:"));
    newTotalSquares = newGridSize * newGridSize;

    resetGrid();
    generateGrid(newTotalSquares);
});

function resetGrid() {
    container.innerHTML = "";
}

function generateGrid(argSquares) {
    document.documentElement.style.setProperty("--grid-size", argSquares);

    let argTotalSquares = argSquares * argSquares;
    for (let i=0; i < argTotalSquares; i++){
        const square = document.createElement("div");
        square.classList.add("grid-square");

        // Hover effect <- Maybe move this to a function TBH
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "blue";
        });

        // Hover effect TEST with fading
        // square.addEventListener("mouseenter", () => {
        //     square.style.backgroundColor = "blue";
        //     setTimeout(() => {
        //         square.style.backgroundColor = "";
        //     }, 500);
        // });

        container.appendChild(square);
    }
}