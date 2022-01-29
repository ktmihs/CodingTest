// 2493

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const len = +input[0];
const tops = input[1].split(' ').map(Number);

const arr = new Array(len).fill(0);
const stack = [];

for (let i = len - 1; i >= 0; i--) {
  while (stack && tops[stack[stack.length - 1]] <= tops[i]) arr[stack.pop()] = i + 1;
  stack.push(i);
}

console.log(arr.join(' '));