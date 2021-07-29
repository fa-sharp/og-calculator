import { operate } from './operations.js';

const resultDisplay = document.querySelector("#resultDisplay");
const opDisplay = document.querySelector("#opDisplay");

const allButtons = document.querySelectorAll(".buttons");
const numButtons = document.querySelectorAll(".buttons>.num");
const opButtons = document.querySelectorAll(".buttons>.op");
const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");


let savedOperand = null;
let savedOperation = null;
/** if true, need to clear display after user enters another number */
let newOperandNeeded = false; 


/** NUMBER BUTTONS */
numButtons.forEach(numButton => {
    const num = numButton.textContent;

    numButton.addEventListener('click', () => {
        if (newOperandNeeded) {
            resultDisplay.textContent = num;
            newOperandNeeded = false;
        }
        else
            resultDisplay.textContent = resultDisplay.textContent += num
    });
});

/** OPERATION BUTTONS */
opButtons.forEach(opButton => {
    const opText = opButton.textContent;
    const operation = opButton.id;

    opButton.addEventListener('click', () => {

        // check if stringing together multiple operations
        if (savedOperand && savedOperation && !newOperandNeeded)
            calcAndDisplayResult(resultDisplay.textContent);

        // save operation and operand
        savedOperand = resultDisplay.textContent;
        savedOperation = operation;
        
        // update display
        opDisplay.textContent = opText;
        newOperandNeeded = true;
    });
})

/** CLEAR BUTTON */
clearButton.addEventListener('click', () => {
    // clear global variables
    savedOperand = null;
    savedOperation = null;
    newOperandNeeded = false;

    // clear display
    resultDisplay.textContent = '';
    opDisplay.textContent = '';
});

/** EQUALS BUTTON */
const calcAndDisplayResult = (secondOperand) => {
    // check for first operand
    if (!savedOperand || !savedOperation)
        return;
    
    // calculate result
    const result = operate(savedOperation,savedOperand,secondOperand);

    // update global variables
    savedOperand = null;
    savedOperation = null;
    newOperandNeeded = true;

    // update display
    resultDisplay.textContent = result;
    opDisplay.textContent = '';
}

equalsButton.addEventListener('click', () => calcAndDisplayResult(resultDisplay.textContent));


/** KEYBOARD USE */
document.addEventListener('keypress', (event) => {
    const buttonToPress = getButtonFromKey(event.key);     
    if (buttonToPress)
        buttonToPress.click();
});

const getButtonFromKey = (keyPressed) => {

    let buttonToPress;

    if (!isNaN(keyPressed))
        buttonToPress = document.querySelector(`#NUM${keyPressed}`);
    else {
        switch (keyPressed) {
            case '+':
                buttonToPress = document.querySelector("#ADD");
                break;
            case '-':
                buttonToPress = document.querySelector("#SUBTRACT");
                break;
            case '*':
                buttonToPress = document.querySelector("#MULTIPLY");
                break;
            case '/':
                buttonToPress = document.querySelector("#DIVIDE");
                break;
            case '=':
            case 'Enter':
                buttonToPress = equalsButton;
                break;
            case 'C':
            case 'c':
            case 'Escape':
                buttonToPress = clearButton;
                break;
            default:
                buttonToPress = null;
        }
    }

    return buttonToPress;
}