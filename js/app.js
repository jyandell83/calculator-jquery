console.log('calculator homework')
//Variables
const $numbers = $('.number');
const $op = $('.op');
const $screen = $('#screen');
const $equal = $('#equal');
let digitArray = [];
const valueArray = [];
const opArray = [];
let total = 0;
let $operator = undefined;
//function for performing math
const equate = (a,b) => {
    if (valueArray.length > 1) {
    if (opArray[0] === '+'){
        valueArray.unshift(a + b);
        opArray.shift();
        $screen.text(`${valueArray[0]}`);
    }
    else if (opArray[0] === '-'){
        valueArray.unshift(a - b);
        opArray.shift();
        $screen.text(`${valueArray[0]}`);
    }
    else if (opArray[0] === '*'){
        valueArray.unshift(a * b);
        opArray.shift();
        $screen.text(`${valueArray[0]}`);
    }
    else if (opArray[0] === '/') {
        valueArray.unshift(a / b);
        opArray.shift();
        $screen.text(`${valueArray[0]}`);
    }
    else if (opArray[0] === '=') {
        opArray.shift();
        valueArray.unshift(valueArray[0]);
        console.log(valueArray, opArray, '<----from equal');
    }
    else {return 'error'}
    }else {console.log(valueArray, opArray, '<-----from valueArray.length 1 or 0')}
};
//clicking on numbers will store digits in array and set screen text to numbers pushed
$numbers.on('click', (e) => {
    digitArray.push(parseInt($(e.target).text()));
    $screen.text(digitArray.join(''));
})

//clicking an operator will push joined digits into value and clear digit array for next value
$op.on('click', (e) => {
    $operator = $(e.target).text();
    opArray.push($operator);
    valueArray.unshift(parseInt(digitArray.join('')));
    console.log(valueArray, opArray, '<----- from opClick');
    equate(valueArray[1], valueArray[0]);
    digitArray=[];
})
$equal.on('click', (e) => {
    $screen.text(`${valueArray[0]}`)
})





