"use strict";

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

// Werte auslesen (Dot-Notation)

let wert_1 = konto_1.iban;
console.log(wert_1);

let wert_2 = konto_2.bic;
console.log(wert_2);

let wert_3 = konto_1.inhaber.vornamen;
console.log(wert_3);

console.log(`${konto_1.inhaber.vornamen} ${konto_1.inhaber.nachnahme} hat ${konto_1.kontostand}€ auf seinem Konto.`);

// Eigenschaften setzen (Dot-Notation)

konto_1.abhebelimit = 1000;
console.log(konto_1);
console.log(konto_1.abhebelimit);

// Werte setzen bzw. verändern (Dot-Notation)

konto_1.kontostand = 3000;
console.log(konto_1);

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

auto_1.ps = 400;
auto_1.modell = "A6";
console.log(`Ein ${auto_1.marke} ${auto_1.modell} hat ${auto_1.ps}PS.`);