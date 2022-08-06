// 2740

const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split("\n");

const [Ai, Aj] = input.shift().split(' ').map(Number);
const A = [];
for (let i = 0; i < Ai; i++) A.push(input.shift().split(' ').map(Number));

const [Bi, Bj] = input.shift().split(' ').map(Number);
const B = [];
for (let i = 0; i < Bi; i++) B.push(input.shift().split(' ').map(Number));

const arr = [];

for (let k = 0; k < Ai; k++) {
  const line = [];
  for (let i = 0; i < Bj; i++) {
    let sum = 0;
    for (let j = 0; j < Aj; j++) {
      sum += A[k][j] * B[j][i];
    }
    line.push(sum);
  }
  arr.push(line);
}

console.log(arr.map(line => line.join(' ')).join('\n'));