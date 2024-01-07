function addition(a,b){
    return a + b
}

function subtraction(a,b) {
    return a - b
}

function multiplication(a,b){
    return a * b
}

function division(a,b){
    return a / b
}

let firstNumber = '';
let secondNumber = '';
let operator = '';

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return addition(a, b);
        case "-":
            return subtraction(a, b);
        case "*":
            return multiplication(a, b);
        case "/":
            return division(a, b);
        default:
            return NaN;
    }
}