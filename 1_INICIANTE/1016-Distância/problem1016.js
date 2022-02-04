let input = require('fs').readFileSync('stdin', 'utf8');

let velo_X = 60
let velo_Y = 90
let dif_velo = velo_Y - velo_X
let dif_tempoPadrao = 60 / dif_velo
let distancia = parseFloat(input);

let tempoDistancia = dif_tempoPadrao * distancia ;

console.log(tempoDistancia.toFixed(0) + " minutos");



