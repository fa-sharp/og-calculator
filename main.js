import { operate } from './operations.js';

const resultDisplay = document.querySelector("#resultDisplay");
const opDisplay = document.querySelector("#opDisplay");

const numButtons = document.querySelectorAll(".buttons>.num");
const opButtons = document.querySelectorAll(".buttons>.op");
const clearButton = document.querySelector("#clear");


/** NUMBER BUTTONS */
numButtons.forEach(numButton => {
    const num = numButton.textContent;

    numButton.addEventListener('click', () => resultDisplay.textContent = resultDisplay.textContent += num);
});

/** OPERATION BUTTONS */
opButtons.forEach(opButton => {
    const op = opButton.textContent;

    opButton.addEventListener('click', () => opDisplay.textContent = op);
})

/** CLEAR BUTTON */
clearButton.addEventListener('click', () => {
    resultDisplay.textContent = '';
    opDisplay.textContent = '';
});