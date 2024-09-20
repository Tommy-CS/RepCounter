let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let resetEl = document.getElementById("reset-el");
let count = 0;
let previousSets = [];

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    previousSets.push(count); 
    saveEl.textContent = "Previous Sets: " + previousSets.join(" - "); // Join array elements with hyphen.. it puts the hyphen in between the array elements
    count = 0;
    countEl.textContent = count; 
}

function reset() {
    count = 0;
    countEl.textContent = 0;
    previousSets = [];
    saveEl.textContent = "Previous Sets: ";
}
