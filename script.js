let rows = 100;
let colums = 26;
console.log("object");

let addressColumnContainer = document.querySelector(
    ".address-column-container"
);
let addressRowContainer = document.querySelector(".address-row-container");

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
