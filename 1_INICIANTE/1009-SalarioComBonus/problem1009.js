var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = input.split('\n');
var commissionperc = (15/100);

var name = (valores.shift());
var salary = parseFloat(valores.shift());
var sales = parseFloat(valores.shift());

var commissionvalue = salary + (commissionperc * sales);

console.log("TOTAL = R$ " + commissionvalue.toFixed(2));

