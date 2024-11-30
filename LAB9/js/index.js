let currentNumber = '';
let previousNumber = '';
let operatipon = null;

const previousNumberElement = document.getElementById('previous-number');
const currentNumberElement = document.getElementById('current-number');
const operationElement = document.getElementById('operation');

function calculateResult() {
    if (previousNumber === '' || currentNumber === '' || operatipon === null) {
        return;
    }

    let result;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);

    switch (operation) {
        
    }
}
