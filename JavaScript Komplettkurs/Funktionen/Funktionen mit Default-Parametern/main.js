"use strict";

const multiplizieren = function(a = 20, b = 10) {
    console.log(a);
    console.log(b);
    console.log(a * b);
};

let z_1 = 42;
let z_2 = 20;

multiplizieren(z_1, z_2);

const begruessung = function(vorname = "Max", nachnahme = "Mustermann", alter = 18) {
    console.log(`Hallo ${vorname} ${nachnahme}! Du bist ${alter} Jahre alt.`);
};

let vor = "Philipp";
let nach = "Becksmann";
let alt = 37;

begruessung(vor, nach, alt);
begruessung();
begruessung(undefined, nach, alt);