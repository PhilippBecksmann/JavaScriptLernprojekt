"use strict";

/*
let auto_1 = {
    marke: "BMW",
    modell: "3er",
    farbe: "rot"
};

let auto_2 = {
    marke: "Audi",
    modell: "A4",
    farbe: "schwarz"
};

let auto_3 = {
    marke: "Mercedes",
    modell: "E-Klasse",
    farbe: "blau"
};

let autos = [
    auto_1,
    auto_2,
    auto_3
];
*/

let autos = [
    {
        marke: "BMW",
        modell: "3er",
        farbe: "rot"
    },
    {
        marke: "Audi",
        modell: "A4",
        farbe: "schwarz"
    },
    {
        marke: "Mercedes",
        modell: "E-Klasse",
        farbe: "blau"
    }
];

console.log(autos);

console.log(autos[1].marke);
console.log(autos[1]["marke"]); //Bracket-Notation Schreibweise

/*
let waren = [
    [
        "Äpfel", 
        "Birnen", 
        "Bananen"
    ],
    [
        "Möhren", 
        "Sellerie", 
        "Kohl"
    ],
    [
        "Graubrot", 
        "Schwarzbrot", 
        "Vollkornbrot"
    ]
];
*/

let waren = {
    obst: [
        "Äpfel", 
        "Birnen", 
        "Bananen"
    ],
    gemuese: [
        "Möhren", 
        "Sellerie", 
        "Kohl"
    ],
    brot: [
        "Graubrot", 
        "Schwarzbrot", 
        "Vollkornbrot"
    ]
};

console.log(waren);

console.log(waren.obst[1]);