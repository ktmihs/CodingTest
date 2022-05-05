// 17413

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const s = fs.readFileSync(filePath).toString().trim().split("\n")[0];

const str = s + ' ';
let answer = '', stack = [];

for (let i of str) {
  if (i === ' ' && stack[0] !== '<') {
    answer += stack.reverse().slice().join('') + i;
    stack = [];
  } else if (i === '<') {
    answer += stack.reverse().slice().join('');
    stack = [i];
  }
  else if (stack[0] === '<' && i === '>') {
    stack.push(i);
    answer += stack.slice().join('');
    stack = [];
  } else stack.push(i);
}
console.log(answer);