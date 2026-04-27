"use strict";

let vorname = "Philipp";
let nachname = "Becksmann";
let alter = 37;

let name = vorname + " " + nachname;
console.log(name);

let begruessung = `Hallo ${name}!`; // Hier ist ein Backtick
console.log(begruessung);

let zusammenfassung = `${vorname} ${nachname} (${alter} Jahre)`; // Hier ist ein Backtick
console.log(zusammenfassung);

let konkatinierte_template_string = `Hallo ${name}! ` +
`Du bist ${alter} Jahre alt. ` +
`Wie geht es dir?`;
console.log(konkatinierte_template_string);

let mehrzeiliger_template_string = `Hallo ${name}!
Du bist ${alter} Jahre alt.
Wie geht es dir?`;
console.log(mehrzeiliger_template_string);