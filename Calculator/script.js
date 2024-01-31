let currentInput = '';
let operator = '';
let previousInput = '';

function clearDisplay() {
  currentInput = '';
  operator = '';
  previousInput = '';
  updateDisplay();
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperator(newOperator) {
  if (currentInput !== '') {
    operator = newOperator;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
  }
}

function calculateResult() {
  if (operator !== '' && currentInput !== '') {
    switch (operator) {
      case '+':
        currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
        break;
      case '-':
        currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
        break;
      case '*':
        currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
        break;
      case '/':
        if (parseFloat(currentInput) !== 0) {
          currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
        } else {
          currentInput = 'Error';
        }
        break;
    }
    operator = '';
    previousInput = '';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').innerText = currentInput || '0';
}
