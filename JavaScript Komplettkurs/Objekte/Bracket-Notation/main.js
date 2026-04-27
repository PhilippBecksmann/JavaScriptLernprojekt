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

// Werte auslesen (Bracket-Notation)

let wert_1 = konto_1["iban"];
console.log(wert_1);

let wert_2 = konto_1["inhaber"]["geschlecht"];
console.log(wert_2);

// Eigenschaften setzen (Bracket-Notation)

konto_2["abhebelimit"] = 1000;
console.log(konto_2["abhebelimit"]);

// Werte setzen bzw. verändern (Bracket-Notation)

konto_1["kontostand"] = 3000;
console.log(konto_1["kontostand"]);

// Warum sollten wir die Bracket-Notation jemals verwenden?

let eigenschaft = "iban";
let wert_3 = konto_1[eigenschaft];
console.log(wert_3);

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

auto_1["ps"] = 400;
auto_1["modell"] = "A6";

let eig = "ps";

console.log(`Ein ${auto_1["marke"]} ${auto_1["modell"]} hat ${auto_1[eig]}PS.`);