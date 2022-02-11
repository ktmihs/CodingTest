// 2118

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const total = input.reduce((acc, i) => acc + +i, 0);

let left = 0,
  sum = 0
answer = 0;
for (let right = 0; right < n; right++) {
  sum += +input[right];
  while (sum > total - sum) sum -= +input[left++];
  if (answer < sum) answer = sum;
}

console.log(answer);