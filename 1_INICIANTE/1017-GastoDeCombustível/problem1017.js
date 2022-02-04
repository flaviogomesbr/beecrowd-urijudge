let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let valores = input.split("\n");

let consumo = 12
let tempo = parseInt(valores.shift());
let velocidade = parseInt(valores.shift());

let qtdeCombustivel = (tempo * velocidade) / consumo;

console.log(qtdeCombustivel.toFixed(3));


