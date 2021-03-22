//1002 area do circulo
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift());

const n = 3.14159;
var area = n * raio ** 2;

console.log(`A=${area.toFixed(4)}`);

