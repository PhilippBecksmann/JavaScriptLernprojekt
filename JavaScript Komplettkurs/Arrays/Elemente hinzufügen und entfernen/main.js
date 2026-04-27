"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Mia"
];

personen[1] = "Pia";
console.log(personen[1]);
console.log(personen);

personen.push("Max");
console.log(personen);

personen.pop();
console.log(personen);

personen.unshift("Max");
console.log(personen);

personen.shift();
console.log(personen);