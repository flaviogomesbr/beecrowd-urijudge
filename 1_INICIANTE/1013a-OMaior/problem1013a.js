var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [num1, num2, num3] = (lines.shift().split(" ")).map(item => parseInt(item)) //Sem este map, a fórmula soma strings e dá erro

var maior = num1

if (num2 > maior)
    maior = num2;
if (num3 > maior)
    maior = num3;

console.log(maior.toFixed(0) + " eh o maior")



