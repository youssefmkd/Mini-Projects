// Global variables to store operator and input values
let operator = '';
let previousScreen = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    // Selecting button and screen elements
    let clear = document.querySelector("#clear-btn");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    // Event listener for number buttons
    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent) // Append clicked number
        currentScreen.textContent = currentValue; // Update current display
    }))

    // Event listener for operator buttons
    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent) // Store selected operator
        previousScreen.textContent = previousValue + " " + operator; // Show previous value and operator
        currentScreen.textContent = currentValue; // Clear current value for new input
    }))

    // Clear button resets everything
    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    // Equal button calculates the result
    equal.addEventListener("click", function(){
        if(currentValue != '' && previousValue != ''){
            calculate(); // Perform calculation
            currentScreen.textContent = '';
            // Show result (truncate if too long)
            if(previousValue.length <= 5){
            currentScreen.textContent = previousValue;
            } else{
            currentScreen.textContent = previousValue.slice(0,5) + "...";
            }
        }
    })

    // Add a decimal point if not already included
    decimal.addEventListener("click", function(){
        addDecimal();
    })

})

// Append clicked number to current value, with a max length
function handleNumber(num){
    if(currentValue.length <= 5){
        currentValue += num;
    }
}

// Store operator and move current value to previous
function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

// Perform the actual calculation
function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    }else if(operator === "-"){
        previousValue -= currentValue;
    }else if(operator === "x"){
        previousValue *= currentValue;
    }else{
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue); // Round to avoid floating-point issues
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

// Round number to 3 decimal places
function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

// Add a decimal point to current value if not present
function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}