"use strict";

/*
const meine_funktion = function(parameter_1, parameter_2) {
    auszuführender Code
};

meine_funktion(p_1, p_2);
*/

const log_die_zahl = function(a) {
    console.log(a);
};

log_die_zahl(89);

const begruessung = function(x, y) {
    console.log(`Hallo ${x} ${y}!`);
};

let vorname = "Philipp";
let nachnahme = "Becksmann";

begruessung(vorname, nachnahme);

const mathe_magie = function(a, b) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
};

let z_1 = 23;
let z_2 = 54;
let z_3 = 99;
let z_4 = 77;
let z_5 = 5;

mathe_magie(z_1, z_5);
mathe_magie(z_4, z_2);
mathe_magie(z_3, z_2);
mathe_magie(z_5, z_2);
mathe_magie(z_5, z_5);