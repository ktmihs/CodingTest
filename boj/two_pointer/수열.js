// 2559

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, len] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let sum = 0;
for (let i = 0; i < len; i++) sum += arr[i];
let answer = sum;
for (let i = len; i < n; i++) {
  sum -= arr[i - len];
  sum += arr[i];
  if (answer < sum) answer = sum;
}
console.log(answer);