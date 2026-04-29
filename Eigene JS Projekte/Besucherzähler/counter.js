// Initialisierung (init)
let count = 0;

// Counter Element
const counter = document.getElementById("counterValue");

// Wert hochzählen (increment function)
function incrementCounter() {
    count = Number(localStorage.getItem("count"));
    counter.innerText = count;
    localStorage.setItem("count", count + 1);
}

// Event Listener
window.onload = incrementCounter;

// Reset
const reset = document.getElementsByTagName("button")[0];
reset.addEventListener("click", () => {
    localStorage.setItem("count", 0);
    incrementCounter();
});