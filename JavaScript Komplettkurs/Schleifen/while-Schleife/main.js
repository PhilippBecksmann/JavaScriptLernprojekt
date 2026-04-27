"use strict";

let x = 0; // <-- Zählvariable

while (x < 5) {
    //x++; // x = x + 1 oder x += 1
    console.log(`While: ${x}`);
    x++;
}

// x = 1
// x = 2
// x = 3
// x = 4
// x = 5

let z = 0;

while (z < 10) {
    z++;
    if (z == 5) {
        continue;
    } else if (z == 7) {
        break;
    }
    console.log(z);
}

console.log("Schleife beendet");