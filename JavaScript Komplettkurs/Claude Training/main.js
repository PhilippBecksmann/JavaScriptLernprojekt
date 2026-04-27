"use strict";

// let name = "Phil";
// let alter = 38;

// console.log(`Mein Name ist ${name} und ich bin ${alter} Jahre alt!`);


// let vorname = "Olli";
// let zahl = 35;
// let wahrheit = true;
// let leer = null;

// console.log(typeof vorname,typeof zahl,typeof wahrheit,typeof leer);


// const geburtsjahr = 1988;
// let punkte = 0;
// punkte = 10;
// // geburtsjahr = 1991;

// console.log(punkte);
// console.log(geburtsjahr);


// let a = 25;
// let b = 6;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);


// let vorname = "Max";
// let nachname = "Mustermann";

// console.log(`${vorname} ${nachname}`);
// const vollerName = `${vorname} ${nachname}`;
// console.log(vollerName.length);        // Anzahl Zeichen
// console.log(vollerName.toUpperCase()); // Großbuchstaben


// let alter = 25;

// if (alter < 18) {
//     console.log("Minderjährig!");
// } else if (alter < 67) {
//     console.log("Volljährig!")
// } else {
//     console.log("Rentner!")
// }

// function begruessung1(){
//     console.log("Hallo Welt!");
// }

// begruessung1();
// begruessung1();

// const begruessung2 = function() {
//     console.log("Hallo Welt!");
// };

// begruessung2();
// begruessung2();


// function addiere(a, b) {
//     console.log(a + b);
// }

// addiere(10, 5);
// addiere(6, 2);
// addiere(15, 25);

// function addiere(a, b) {
//     return a + b;
// }

// const ergebnis = addiere(10, 5);
// console.log(ergebnis);


function istVolljaehrig(alter) {
    if (alter >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(istVolljaehrig(20));
console.log(istVolljaehrig(15));