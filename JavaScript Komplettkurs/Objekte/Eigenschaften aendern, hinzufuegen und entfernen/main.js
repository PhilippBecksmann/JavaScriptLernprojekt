"use strict";

let auto = {
    marke: "BMW"
};

// Eigenschaften änern
auto.marke = "Tesla";

// Eigenschaften hinzufügen
auto.modell = "Model 3";
auto.ps = 450;
auto["farbe"] = "rot";

// Eigenschaften entfernen
delete auto.farbe;

console.log(auto);