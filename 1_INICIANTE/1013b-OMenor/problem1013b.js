var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [num1, num2, num3] = (lines.shift().split(" ")).map(item => parseInt(item)) //Sem este map, a fórmula soma strings e dá erro

var menor = num1

if (num2 < menor)
    menor = num2;
if (num3 < menor)
    menor = num3;

console.log(menor.toFixed(0) + " eh o menor")



