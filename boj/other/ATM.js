// 11399

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")[1].split(' ').map(Number).sort((a, b) => a - b);

let answer = 0;
for (let i = 0; i < input.length; i++) answer += input[i] * (input.length - i);
console.log(answer);