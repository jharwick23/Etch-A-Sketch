const container = document.querySelector("#container");

for(let i = 0; i < 64; i++){

    let row = document.createElement("div");
    container.appendChild(row);
    row.classList.add("row-grid");

    for(let i = 0; i < 64; i++){

        let column = document.createElement("div");
        row.appendChild(column); 
        column.classList.add("column-grid")

    }
}