let currentInput = "0";  
let previousInput = "";  
let operator = null;     

function updateDisplay() {
    document.getElementById("display").textContent = currentInput;
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (button.classList.contains("number")) {
            handleNumber(value);
        } else if (button.classList.contains("operator")) {
            handleOperator(value);
        } else if (button.classList.contains("clear")) {
            clear();
        } else if (button.classList.contains("equals")) {
            calculate();
        }
    });
});

function handleNumber(value) {
    if (currentInput === "0" && value !== ".") {
        currentInput = value;
    } else if (value === ".") {
        if (!currentInput.includes(".")) {
            currentInput += "."; 
        }
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function handleOperator(op) {
    if (previousInput !== "") {
        calculate();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = "0"; 
    updateDisplay();
}

function clear() {
    currentInput = "0";
    previousInput = "";
    operator = null;
    updateDisplay();
}

function calculate() {
    if (operator && previousInput !== "") {
        let result;
        
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    result = "Error";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = null;
        previousInput = "";
        updateDisplay();
    }
}

