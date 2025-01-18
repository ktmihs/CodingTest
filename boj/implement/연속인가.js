// const [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, input] = [
  '2', '6 2 5 4'
];
const [a, b, c, d] = input.split(' ').map(Number);
console.log((+N * a + b) === (+N * c + d) ? `Yes ${+N * a + b}` : 'No');
