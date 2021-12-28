var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = input.split("\n");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

var media = ((A * (2/10)) +  (B * (3/10))) + (C * (5/10));

console.log("MEDIA = " + media.toFixed(1));
