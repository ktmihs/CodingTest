// 1026

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const A = input[1].split(' ').map(Number).sort((a, b) => a - b);
const B = input[2].split(' ').map(Number).sort((a, b) => b - a);

console.log(A.reduce((sum, a, i) => sum + a * B[i], 0));