// Function to append a number to the display
function appendNumber(number) {
  // Get the display element
  const display = document.getElementById("display");
  // Append the clicked number to the current display value
  display.value += number;
}

// Function to append an operator to the display
function appendOperator(operator) {
  // Get the display element
  const display = document.getElementById("display");
  // Append the clicked operator to the current display value
  display.value += operator;
}

// Function to calculate the result
function calculate() {
  // Get the display element
  const display = document.getElementById("display");
  try {
    // Evaluate the expression in the display and update the result
    display.value = eval(display.value);
  } catch (error) {
    // Handle any errors that may occur during evaluation
    display.value = "An error occurred";
  }
}

// Function to clear the display
function clearDisplay() {
  // Get the display element
  const display = document.getElementById("display");
  // Clear the current value from the display
  display.value = "";
}
function clearLastDigit() {
  const display = document.getElementById("display");
  let currentValue = display.value;

  if (currentValue.length > 0) {
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
  }
}







