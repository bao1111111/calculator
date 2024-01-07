//Basic Math Operators function//
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

//Variables to store calculator state//
let firstNumber = '';
let secondNumber = '';
let operator = '';

//Function to perform the calculation based on the operator//
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

// Event listeners for number buttons//
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (!operator) {
            firstNumber += button.textContent;
        } else {
            secondNumber += button.textContent;
        }
    });
});

// Event listeners for the operator buttons//
const allOperatorButtons = document.querySelectorAll(".operator")
allOperatorButtons.forEach(button => {
    button.addEventListener("click", () =>{
    operator += button.textContent
    })
})