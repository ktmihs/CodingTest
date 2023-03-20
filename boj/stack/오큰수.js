const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const numbers = input[1].split(' ').map(Number);

const answer = new Array(numbers.length).fill(-1);
const stack = [];
numbers.forEach((num, i) => {
  while (stack.length && numbers[stack[stack.length - 1]] < num) {
    answer[stack.pop()] = num;
  }
  stack.push(i);
})

console.log(answer.join(' '));