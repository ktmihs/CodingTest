// 1755
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [start, end] = require('fs').readFileSync(filePath).toString().trim().split("\n")[0].split(' ').map(Number);

const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const answer = [];
for (let i = start; i <= end; i++) answer.push([(i + '').split('').map(a => words[+a]).join(''), i])

answer.sort();
let res = '';
for (let i = 0; i < answer.length; i++) {
  if (!(i % 10)) res += '\n';
  res += answer[i][1];
  res += ' ';
}
console.log(res.trim());