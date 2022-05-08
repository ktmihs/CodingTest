// 1213

const fs = require('fs');
const s = fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0];

let answer = '', flag = 0, center = '';
const hash = new Map();
for (let char of s) hash.set(char, (hash.get(char) || 0) + 1);

function solution() {
  for (let [key, value] of hash.entries()) {
    if (value % 2) {
      if (!flag) {
        flag = 1;
        center = key;
        answer += key.repeat(Math.floor(value / 2));
      } else return `I'm Sorry Hansoo`;
    } else answer += key.repeat(value / 2);
  }
  answer = answer.split('').sort().join('');
  return answer + center + answer.split('').reverse().join('');
}
console.log(solution());