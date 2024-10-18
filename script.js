let currentInput = '';
let operator = '';
let previousInput = '';
let displayValue = '';  // This stores the value to be shown on the display

function appendNumber(number) {
    currentInput += number;
    displayValue += number;
    document.getElementById('display').value = displayValue;  // Show the full input on the display
}

function setOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    displayValue += ` ${op} `;  // Add the operator to the display
    document.getElementById('display').value = displayValue;
}

function calculate() {
    if (previousInput === '' || currentInput === '' || operator === '') return;

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    document.getElementById('display').value = result;  // Only show the result on the display
    currentInput = result.toString();
    previousInput = '';
    operator = '';
    displayValue = '';  // Clear the display value except for the result
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    displayValue = '';  // Clear everything from the display
    document.getElementById('display').value = '';
}
