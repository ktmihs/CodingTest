// 2217

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const ropes = input.slice(1).map(Number).sort((a, b) => b - a);

let answer = 0;
ropes.forEach((rope, idx) => answer = Math.max(answer, rope * (idx + 1)));
console.log(answer);