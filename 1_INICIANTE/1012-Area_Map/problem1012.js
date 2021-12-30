var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = (lines.shift().split(" ")).map(item => parseFloat(item)) //Sem este map, a fórmula do trapézio soma strings e dá erro
var pi = 3.14159

var areaTrianguloRetangulo = (A * C) / 2;
var areaCirculo = (pi * Math.pow(C, 2));
var areaTrapezio = ((A + B) * C) / 2;
var areaQuadrado = (B * B);
var areaRetangulo = (A * B);


console.log("TRIANGULO: " + areaTrianguloRetangulo.toFixed(3))
console.log("CIRCULO: " + areaCirculo.toFixed(3))
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3))
console.log("QUADRADO: " + areaQuadrado.toFixed(3))
console.log("RETANGULO: " + areaRetangulo.toFixed(3))


