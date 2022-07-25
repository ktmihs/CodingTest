// 1269

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [a, b] = input[0].split(' ').map(Number);
const AM = new Map();
input[1].split(' ').forEach(i => AM.set(i, 1));
const inter = input[2].split(' ').filter(i => AM.has(i)).length;
console.log(a + b - inter * 2);