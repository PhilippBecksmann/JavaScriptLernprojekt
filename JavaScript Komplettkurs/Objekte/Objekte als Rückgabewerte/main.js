"use strict";

let person = {
    vorname: "Max",
    nachnahme: "Mustermann",
    alter: 18
};

const person_verarbeiten = function(p) {

    return {
        n: `${p.vorname} ${p.nachnahme}`,
        z: `${p.vorname} ${p.nachnahme} (${p.alter} Jahre)`,
        b: `Hallo ${p.vorname} ${p.nachnahme}!`
    };

};

console.log(person_verarbeiten(person));