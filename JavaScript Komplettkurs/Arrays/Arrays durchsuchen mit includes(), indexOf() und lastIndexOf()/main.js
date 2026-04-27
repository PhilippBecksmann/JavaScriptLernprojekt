"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Mia"
];

console.log(personen.includes("Marcel"));
console.log(personen.includes("Marcel", 2));

console.log(personen.indexOf("Marcel"));
console.log(personen.indexOf("Marcel", 4));

console.log(personen.lastIndexOf("Marcel"));
console.log(personen.lastIndexOf("Marcel", 0));
