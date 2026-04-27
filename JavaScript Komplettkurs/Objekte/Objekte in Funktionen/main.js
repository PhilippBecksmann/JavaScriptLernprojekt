"use strict";

let konto_1 = {
    iban: "DE456456456456669",
    bic: "WEASKLSAJ",
    inhaber: {
        vorname: "Max",
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
        vorname: "Maria",
        nachnahme: "Musterfrau",
        geschlecht: "weiblich",
        alter: 18
    },
    kontostand: 5500,
    aktiv: true
};

const kontostand_ausgeben = function(konto) {
    console.log(`${konto.inhaber.vorname} ${konto.inhaber.nachnahme} hat ${konto.kontostand}€ auf seinem Konto.`);
}
kontostand_ausgeben(konto_1);
kontostand_ausgeben(konto_2);