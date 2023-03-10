let calculatorInput = "";

function updateInput(value) {
  calculatorInput += value;
  document.getElementById("calculator-input").value = calculatorInput;
}

function clearInput() {
  calculatorInput = "";
  document.getElementById("calculator-input").value = calculatorInput;
}

function calculate() {
  let result = eval(calculatorInput);
  document.getElementById("calculator-input").value = result;
  calculatorInput = result;
}
