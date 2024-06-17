//step by step process for functional calculator
// 1. record user input 
// 2. classify each input into different categories
// 3. number larger than 0 to replace 0 in output screen and numbers 1-9 append when clicked
// 4. clicking the decimal key
// 5. hitting equals key
const calculator = document.querySelector('.main-body');
const keys = document.querySelector('.input-keys');
const display = document.querySelector('.steps');
const totalDisplay = document.querySelector('.total');

keys.addEventListener('click', (e) => {
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType
        console.log(keyContent);
        
        const calculate = (n1, operator, n2) => {
            let result = '';
            if(operator == '+') {
                result = parseFloat(n1) + parseFloat(n2);
            } else if (operator == '-') {
                result = parseFloat(n1) - parseFloat(n2);
            } else if (operator == '*') {
                result = parseFloat(n1) * parseFloat(n2);
            } else if (operator == '/') {
                result = parseFloat(n1) / parseFloat(n2)
            } else if (operator == '%') {
                result = parseFloat(n1) % parseFloat(n2);
            }
            
            return result;
        };
        if(!action) {
            if(displayedNum === '0' || previousKeyType === 'operator'
            ) {
                display.textContent = keyContent;
                console.log("hi");
            } else {
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKeyType = 'number';
        }
        else if(
            action === '%' ||
            action === '/' ||
            action === '*' ||
            action === '-' ||
            action === '+'
            
        ){
            display.textContent = displayedNum + action;
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        } 
        else if( action === 'decimal'){
            if(!displayedNum.includes('.')){
                display.textContent = displayedNum + '.';
            }
            else if(previousKeyType === 'operator'){
                display.textContent = '0.';
            }
            calculator.dataset.previousKeyType = 'decimal';
        } 
        else if(action === 'all-clear') {
            display.textContent = 0;
            totalDisplay.textContent = '';
            calculator.dataset.previousKeyType = 'all-clear';
        } 
        else if(action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            
            display.textContent = firstValue + operator + secondValue;
            totalDisplay.textContent = calculate(firstValue, operator, secondValue);
            calculator.dataset.previousKeyType = 'calculate';
        }
    }
});