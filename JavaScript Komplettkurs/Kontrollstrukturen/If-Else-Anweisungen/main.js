"use strict";

/*
if (Bedingung) {
    Code der ausgeführt wird, wenn die Bedingung erfüllt (true) ist
} else {
    Code der ausgeführt wird, wenn die Bedingung nicht erfüllt (false) ist
}

if (true) {
    console.log("If wurde ausgeführt!");
} else {
    console.log("Else wurde ausgeführt!");
}

const mindestalter = 18;
let benutzer_eingabe = 24;

if (benutzer_eingabe >= mindestalter) {
    console.log("Du bist alt genug!");
} else {
    console.log("Du bist noch nicht alt genug!");
}
*/

const mindestalter = 18;
let benutzer_eingabe = 24;

if (benutzer_eingabe >= mindestalter) {
    if (benutzer_eingabe == mindestalter) {
        console.log("Du bist gerade alt genug!");
    } else {
        console.log("Du bist alt genug!");
    }

} else {
    console.log("Du bist noch nicht alt genug!")
}