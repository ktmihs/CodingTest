// 1744

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

input.shift();
const positive = [], negative = [];
let zero = 0, answer = 0;

input.forEach(num => num > 0 ? positive.push(num) : num < 0 ? negative.push(num) : zero++);

for (const list of [positive, negative]) {
  list.sort((a, b) => Math.abs(a) - Math.abs(b));

  while (list.length > 1) {
    const num1 = list.pop();
    const num2 = list.pop();
    answer += num1 * num2 > num1 + num2 ? num1 * num2 : num1 + num2;
  }
}

if (positive.length) answer += positive.pop();
if (negative.length) answer += zero ? 0 : negative.pop();

console.log(answer);