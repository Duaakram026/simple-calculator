let displayValue = '';

function appendNumber(number) {
  if (displayValue === '0' && number !== '.') {
    displayValue = '';
  }
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (!displayValue || /[\+\-\*\/%]$/.test(displayValue)) return;
  displayValue += operator;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  try {
    // Evaluate the expression
    displayValue = eval(displayValue.replace(/÷/g, '/').replace(/×/g, '*')).toString();
  } catch {
    displayValue = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue || '0';
}
