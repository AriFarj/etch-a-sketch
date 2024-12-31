let gridSize = 12;
const container = document.querySelector(".container");
makeCells();
function makeCells() {

    for (i = 0; i < gridSize; i++) {
        const row = document.createElement(`div`);
        row.classList.add(`row`);
        container.appendChild(row)
        for (j = 0; j < gridSize; j++) {
            let column = document.createElement(`div`);
            column.classList.add(`column`);
            row.appendChild(column);
        }
    }

}





