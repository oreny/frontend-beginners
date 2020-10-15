"use strict";

const div = document.querySelector("div");
const frag = document.createDocumentFragment();
const tbl = document.createElement("table");

for (let i = 1; i < 10; i++) {
    let tr = document.createElement("tr");
    for (let j = 1; j < 10; j++) {
        let td = document.createElement("td");
        let text = document.createTextNode(i * j);
        td.appendChild(text);
        if (i % 3 === 0 || j % 3 === 0) {
            td.style.backgroundColor = "yellow";
        }
        tr.appendChild(td);
    }
    tbl.appendChild(tr);
}

frag.appendChild(tbl);
div.appendChild(frag);