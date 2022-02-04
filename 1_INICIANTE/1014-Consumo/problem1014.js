var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = input.split("\n");

var xDistancia = parseInt(valores.shift());
var yGasto = parseFloat(valores.shift());

var consumo = (xDistancia / yGasto);

console.log(consumo.toFixed(3) + " km/l");
