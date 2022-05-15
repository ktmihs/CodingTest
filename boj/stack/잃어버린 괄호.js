// 1541

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0];

const stack = input.split('-');
let answer = stack.shift().split('+').reduce((sum, i) => sum + +i, 0);

stack.forEach(item => answer -= item.split('+').reduce((sum, i) => sum + +i, 0));
console.log(answer);