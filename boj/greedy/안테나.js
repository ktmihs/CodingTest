// 18310

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const N = +input[0];
const home = input[1].split(' ').map(Number).sort((a, b) => a - b);
console.log(home[Math.floor((N - 1) / 2)]);