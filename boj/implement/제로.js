// 10773

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

input.shift();
const stack = [];
input.forEach(i => +i ? stack.push(+i) : stack.pop());

console.log(stack.reduce((sum, i) => sum + i, 0));