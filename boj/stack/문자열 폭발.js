// 9935

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const origin = input[0];
const bomb = input[1];
const last = bomb[bomb.length - 1];
const len = bomb.length;

let stack = [];

for (let i = 0; i < origin.length; i++) {
  stack.push(origin[i]);
  if (origin[i] === last && stack.length >= len && stack.slice(stack.length - len).join('') === bomb) {
    for (let j = 0; j < len; j++) stack.pop();
  }
}

const answer = stack.join('').trim();

if (answer.length) console.log(answer);
else console.log('FRULA');