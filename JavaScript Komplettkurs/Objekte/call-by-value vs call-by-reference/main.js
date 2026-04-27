"use strict";

let meine_variable = "Ruben";
let mein_objekt = {
    zahl: 5000
};

const meine_funktion = function(v, o) {
    v = "Dennis";
    o.zahl = 2500;
};

meine_funktion(meine_variable, mein_objekt);

console.log(meine_variable);
console.log(mein_objekt.zahl);

let konto = {
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

const einzahlen = function(k, e) {
     k.kontostand += e;
};

const geld_auszahlen = function(k, a) {
    k.kontostand -= a;
};

einzahlen(konto, 500);
console.log(konto.kontostand);

geld_auszahlen(konto, 1000);
console.log(konto.kontostand);