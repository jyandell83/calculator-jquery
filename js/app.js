console.log('calculator homework')

const $numbers = $('.number');
const $op = $('.op');
const $screen = $('#screen');
let array = [];
const array2 = [];
let total = 0;
$numbers.on('click', (e) => {
    console.log(parseInt($(e.target).text()));
    array.push(parseInt($(e.target).text()));
    $screen.text(array.join(''));
})
$op.on('click', (e) => {
    console.log($(e.target).text());
    array2.push(array.join(''));
    array=[];
    if ($(e.target).attr('id') === 'add') {
        console.log('------add------');
    }
    if ($(e.target).attr('id') === 'subtract') {
        console.log('------subtract------');
    }
    if ($(e.target).attr('id') === 'multiply') {
        console.log('------multiply------');
    }
    if ($(e.target).attr('id') === 'divide') {
        console.log('------divide------');
    }
})




