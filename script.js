let rows = 100;
let colums = 26;
console.log("object");

let addressColumnContainer = document.querySelector(
    ".address-column-container"
);
let addressRowContainer = document.querySelector(".address-row-container");
let cellscontainer = document.querySelector(".cells-container");
let addressbar = document.querySelector(".address-bar");

for (let i = 0; i < rows; i++) {
    let addressCol = document.createElement("div");
    addressCol.setAttribute("class", "address-col");
    addressCol.innerHTML = i + 1;
    addressColumnContainer.appendChild(addressCol);
}

for (let i = 0; i < colums; i++) {
    let addressRow = document.createElement("div");
    addressRow.setAttribute("class", "address-row");
    addressRow.innerHTML = String.fromCharCode(65 + i);
    addressRowContainer.appendChild(addressRow);
}

for (let i = 0; i < rows; i++) {
    let rowContainer = document.createElement("div");
    rowContainer.setAttribute("class", "row-conatiner");
    for (let j = 0; j < colums; j++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("contenteditable", "true");
        addListenerForAddressBarDisplay(cell, i, j);
        rowContainer.appendChild(cell);
    }
    cellscontainer.appendChild(rowContainer);
}

function addListenerForAddressBarDisplay(cell, i, j) {
    cell.addEventListener("click", (e) => {
        let rowID = i + 1;
        let colID = String.fromCharCode(65 + j);
        addressbar.value = `${colID}${rowID}`;
    });
}
