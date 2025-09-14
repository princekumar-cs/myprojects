let currentInput = "";

function press(value) {
  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay(currentInput);
}

function clearDisplay() {
  currentInput = "";
  updateDisplay("0");
}

function calculate() {
  try {
    const result = eval(currentInput);
    updateDisplay(result);
    currentInput = result.toString();
  } catch (error) {
    updateDisplay("Error");
    currentInput = "";
  }
}

function updateDisplay(value) {
  document.getElementById("display").innerText = value;
}
