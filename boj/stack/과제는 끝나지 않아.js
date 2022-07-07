// 17952

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

input.shift();
const stack = [];
let answer = 0;

for (let line of input) {
  if (line != 0) {
    const [_, score, T] = line.split(' ').map(Number);
    stack.push([T, score]);
  }
  if (stack.length) {
    let [T, score] = stack.pop();
    --T ? stack.push([T, score]) : answer += score;
  }
}

console.log(answer);