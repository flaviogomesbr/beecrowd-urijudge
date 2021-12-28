var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = input.split("\n");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());

var media = ((A * (3.5/11)) +  (B * (7.5/11)));

console.log("MEDIA = " + media.toFixed(5));
