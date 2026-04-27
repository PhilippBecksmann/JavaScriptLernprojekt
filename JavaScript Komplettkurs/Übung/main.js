"use strict";

let person = {
    vorname: "Phil",
    alter: 37,
    vorstellen: function() {
        console.log(`Hallo, ich bin ${this.vorname} und bin ${this.alter} Jahre alt.`)
   }
};

person.vorstellen();

let person1 = {
    vorname: "Phil",
    alter: 37,
    vorstellen: function() {
        console.log(`Hallo, ich bin ${this.vorname} und bin ${this.alter} Jahre alt.`);
    }
};

let person2 = {
    vorname: "Anna",
    alter: 28,
    vorstellen: function() {
        console.log(`Hallo, ich bin ${this.vorname} und bin ${this.alter} Jahre alt.`);
    }
};

person1.vorstellen();
person2.vorstellen();