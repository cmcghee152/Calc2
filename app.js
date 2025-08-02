function appendToDisplay (value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
    
function evaluateExp() {
    const display = document.getElementById('display');
    try {
        const expression = display.value
        .replace(/x/g, '*')
        .replace(/÷/g, '/');  
        const result = math.evaluate(expression);
        display.value = result;
    } 
    catch (err) {
    display.value = 'Error';
    }
}
