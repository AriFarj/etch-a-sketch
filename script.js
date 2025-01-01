const container = document.querySelector(".container");
const input = document.getElementById("inputSubmit");

function makeCells() {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
    const gridSize = document.getElementById('inputBox').value;
    if (gridSize < 2 || gridSize > 100)
        alert(`${gridSize} is not a valid value, please enter a number between 2 and 100.`)
    else {
        for (i = 0; i < gridSize; i++) {
            const row = document.createElement(`div`);
            row.classList.add(`row`);
            container.appendChild(row);
            for (j = 0; j < gridSize; j++) {
                let column = document.createElement(`div`);
                column.classList.add(`column`);
                row.appendChild(column);
            }
        }

        const gridCell = document.getElementsByClassName('column');
        gridArray = Array.from(gridCell);

        gridArray.forEach(function (gridSquare) {
            const color = window.getComputedStyle(gridSquare).getPropertyValue('background-color')
            gridSquare.addEventListener('mouseover', function (e) {

                const red = randomInt(255);
                const blue = randomInt(255);
                const green = randomInt(255);
                e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
            })
        })
    }
}

function randomInt(num) {
    return Math.floor(Math.random() * num)
}
