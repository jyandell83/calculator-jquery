//sanity check...
console.log('calculator homework')
//Variables - getting html elements with jQuery
const $numbers = $('.number');
const $op = $('.op');
const $screen = $('#screen');
const $equal = $('#equal');
const $del = $('#del');
const $clear = $('#clear');
const $rad = $('#rad');
//Arrays and values to work with...
let digitArray = [];
const valueArray = [];
const opArray = [];
let total = 0;
let $operator = undefined;
//equate function for performing math, the calculators brain, works ok now try and make DRY. I think the equal else if might not be needed
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
    }
    else {return 'error'}
    }
};
//clicking on numbers will store digits in array and set screen text to numbers pushed
$numbers.on('click', (e) => {
    digitArray.push(parseInt($(e.target).text()));
    $screen.text(digitArray.join(''));
})

//clicking an operator manipulates our arrays and sends us to equate function, not DRY just getting to work. If else is because it would bug out if you wanted to add or subtract etc directly after hitting equal
$op.on('click', (e) => {
    if (digitArray.length > 0) {
        $operator = $(e.target).text();
        opArray.push($operator);
        valueArray.unshift(parseInt(digitArray.join('')));
        equate(valueArray[1], valueArray[0]);
        digitArray=[];
    } else {
        $operator = $(e.target).text();
        opArray.push($operator);
        equate(valueArray[1], valueArray[0]);
    }
})
//clicking equal button sets screen text to 'answer' and clears our valueArray except one
$equal.on('click', (e) => {
    $screen.text(`${valueArray[0]}`)
    for (let i = 1; i < valueArray.length; i++) {
        valueArray.pop();
    }
})
//clicking delete removes last digit in case someone clicks the wrong number by accident
$del.on('click', e => {
    digitArray.pop();
    $screen.text(digitArray.join(''));
})
//Clear button reloads the page
$clear.on('click', e => {
    location.reload();
})
//Placeholder for future calculation, breaks the calculator! Hit clear if you push
$rad.on('click', (e) =>{
    $screen.text('Radical!');
} )





