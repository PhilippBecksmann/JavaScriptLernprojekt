"use strict";

/*
let inhaber_1 = {
    vornamen: "Max",
    nachnahme: "Mustermann",
    geschlecht: "männlich",
    alter: 25
};

console.log(inhaber_1);

let inhaber_2 = {
    vornamen: "Maria",
    nachnahme: "Musterfrau",
    geschlecht: "weiblich",
    alter: 18
};

console.log(inhaber_2);


let iban = "DE456456456456669";
let bic = "WEASKLSAJ";
let kontostand = 3500;
let aktiv = true;
*/

let konto_1 = {
    iban: "DE456456456456669",
    bic: "WEASKLSAJ",
    inhaber: {
        vornamen: "Max",
        nachnahme: "Mustermann",
        geschlecht: "männlich",
        alter: 25
    },
    kontostand: 3500,
    aktiv: true
};

console.log(konto_1);

let konto_2 = {
    iban: "DE456456456455689",
    bic: "WEASKLSAJ",
    inhaber: {
        vornamen: "Maria",
        nachnahme: "Musterfrau",
        geschlecht: "weiblich",
        alter: 18
    },
    kontostand: 5500,
    aktiv: true
};

console.log(konto_2);


let auto_1 = {
    marke: "Audi",
    modell: "A4",
    kraftstoffart: "Benzin",
    kilometerstand: 25000,
    austattung: {
        navigationssystem: true,
        klimaanlage: true,
        sitzheizung: true,
        tempomat: true,
        panoramadach: false
    },
    zustand: "gebraucht",
    preis: 50000
};

console.log(auto_1);