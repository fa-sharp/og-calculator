const add = (n,m) => n + m;

const subtract = (n,m) => n - m;

const multiply = (n,m) => n * m;

const divide = (n,m) => n / m;

/**
 * Basic calculator functions
 * 
 * @param {"ADD" | "SUBTRACT" | "MULTIPLY" | "DIVIDE"} op the operation to be applied
 * @param {number} n the first number
 * @param {number} m the second number
 * @returns The operation applied to numbers n and m
 */
export const operate = (op,n,m) => {
    switch (op) {
        case "ADD":
            return add(n,m);
        case "SUBTRACT":
            return subtract(n,m);
        case "MULTIPLY":
            return multiply(n,m);
        case "DIVIDE":
            return divide(n,m);
        default:
            return undefined;
    }
}