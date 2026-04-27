"use strict";

const person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 25
};

person.vorname = "Peter";
person.haarfarbe = "braun";
delete person.haarfarbe;

// person = "Eine Person!";
// person = {};

console.log(person);