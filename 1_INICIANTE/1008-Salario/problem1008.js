var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = input.split('\n');

var number = parseInt(valores.shift());
var hours = parseFloat(valores.shift());
var value = parseFloat(valores.shift());

var salary = hours * value;

console.log("NUMBER = " + number.toFixed(0));
console.log("SALARY = U$ " + salary.toFixed(2));

