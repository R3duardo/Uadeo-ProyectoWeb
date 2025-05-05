document.addEventListener('DOMContentLoaded', () => {
    const previousOperandElement = document.getElementById('previous-operand');
    const currentOperandElement = document.getElementById('current-operand');
    const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    
    let currentOperand = '0';
    let previousOperand = '';
    let operation = undefined;
    let resetScreen = false;

    function updateDisplay() {
        currentOperandElement.textContent = formatDisplayNumber(currentOperand);
        
        if (operation) {
            previousOperandElement.textContent = `${formatDisplayNumber(previousOperand)} ${operation}`;
        } else {
            previousOperandElement.textContent = '';
        }
    }
    function formatDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = stringNumber.split('.')[0];
        const decimalDigits = stringNumber.split('.')[1];
        
        if (decimalDigits != null) {
            return `${integerDigits}.${decimalDigits}`;
        } else {
            return integerDigits;
        }
    }
    function appendNumber(number) {
        if (number === '.' && currentOperand.includes('.')) return;
        
        if (resetScreen) {
            currentOperand = '';
            resetScreen = false;
        }
        
        if (currentOperand === '0' && number !== '.') {
            currentOperand = number;
        } else {
            currentOperand += number;
        }
    }
    function chooseOperation(op) {
        if (currentOperand === '') return;
        
        if (previousOperand !== '') {
            compute();
        }
        
        operation = op === '÷' ? '/' : op === '×' ? '*' : op;
        previousOperand = currentOperand;
        currentOperand = '';
    }
    function compute() {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert('¡No se puede dividir por cero!');
                    clear();
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }
        
        currentOperand = computation.toString();
        operation = undefined;
        previousOperand = '';
        resetScreen = true;
    }
    
    function clear() {
        currentOperand = '0';
        previousOperand = '';
        operation = undefined;
    }

    function deleteDigit() {
        if (currentOperand === '0') return;
        
        if (currentOperand.length === 1) {
            currentOperand = '0';
        } else {
            currentOperand = currentOperand.slice(0, -1);
        }
    }

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            appendNumber(buttonText);
            updateDisplay();
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonId = button.id;
            
            switch (buttonId) {
                case 'clear':
                    clear();
                    break;
                case 'delete':
                    deleteDigit();
                    break;
                case 'equals':
                    compute();
                    break;
                case 'add':
                    chooseOperation('+');
                    break;
                case 'subtract':
                    chooseOperation('-');
                    break;
                case 'multiply':
                    chooseOperation('×');
                    break;
                case 'divide':
                    chooseOperation('÷');
                    break;
                default:
                    return;
            }
            
            updateDisplay();
        });
    });
    
    document.addEventListener('keydown', function(event) {
        if ((event.key >= 0 && event.key <= 9) || event.key === '.') {
            appendNumber(event.key);
            updateDisplay();
        } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
            chooseOperation(event.key);
            updateDisplay();
        } else if (event.key === 'Enter' || event.key === '=') {
            event.preventDefault();
            compute();
            updateDisplay();
        } else if (event.key === 'Backspace') {
            deleteDigit();
            updateDisplay();
        } else if (event.key === 'Escape') {
            clear();
            updateDisplay();
        }
    });
    updateDisplay();
}); 