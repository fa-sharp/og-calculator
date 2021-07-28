import { operate } from './operations.js';

const display = document.querySelector(".display")
const numButtons = document.querySelectorAll(".buttons>.num");
const opButtons = document.querySelectorAll(".buttons>.op");
const clearButton = document.querySelector("#clear");


/** NUMBER BUTTONS */
numButtons.forEach(numButton => {
    const num = numButton.textContent;

    numButton.addEventListener("click", () => display.textContent = display.textContent += num);
})

/** CLEAR BUTTON */
clearButton.addEventListener("click", () => display.textContent = '');