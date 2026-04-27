"use strict";

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
    aktiv: true,
    einzahlen(e) {
        this.kontostand += e;
    },
    abheben(a) {
        this.kontostand -= a;
    }
};

konto.einzahlen(1000);
console.log(konto.kontostand);

// Challange: Methode in Objekt einbauen

let person = {
    vorname: "Max",
    nachnahme: "Mustermann",
    alter: 18,
    person_verarbeiten() {

    return {
        n: `${this.vorname} ${this.nachnahme}`,
        z: `${this.vorname} ${this.nachnahme} (${this.alter} Jahre)`,
        b: `Hallo ${this.vorname} ${this.nachnahme}!`
        };
    }
};

console.log(person.person_verarbeiten());