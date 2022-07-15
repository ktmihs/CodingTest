// 17390

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(line => line.split(' ').map(Number));
const [N, Q] = input.shift();
const list = input.shift().sort((a, b) => a - b);
const ACC = new Array(N + 1).fill(0);
list.forEach((item, idx) => ACC[idx + 1] = ACC[idx] + item);

console.log(input.map(([start, end]) => ACC[end] - ACC[start - 1]).join('\n'));