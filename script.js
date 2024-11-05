const container = document.querySelector("#container");
const button = document.querySelector(".button");
let grid_size = 16;

function createGrid(grid_size){
    container.innerHTML = "";

    for(let i = 0; i < grid_size; i++){

        let row = document.createElement("div");
        container.appendChild(row);
        row.classList.add("row-grid");

        for(let j = 0; j < grid_size; j++){
        
            let column = document.createElement("div");
            row.appendChild(column); 
            column.classList.add("column-grid")
        
        }
    }
    const columnGrid = document.querySelectorAll(".column-grid");

    columnGrid.forEach(columns => {
        columns.addEventListener("mouseenter", () => {
            columns.style.backgroundColor = "blue";
        });
    });
}

createGrid(grid_size);

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {

    while (true) {
        let input = prompt("Please enter grid size:");
        grid_size = parseInt(input);

        if (isNaN(grid_size) || grid_size < 0 || grid_size > 100){
            alert("PLEASE ENTER VALID NUMBER 0-100!")
        }
        else{
            break;
        }
    }

    createGrid(grid_size);
});