// 1343

const s = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0];

const arr = s.split('.');
const answer = [];
for (let item of arr) {
  if (item === '') answer.push('');
  else if (!(item.length % 2)) answer.push(!(item.length % 4) ? 'A'.repeat(item.length) : 'A'.repeat(Math.floor(item.length / 4) * 4) + 'BB');
  else break;
}

console.log(arr.length === answer.length ? answer.join('.') : -1);