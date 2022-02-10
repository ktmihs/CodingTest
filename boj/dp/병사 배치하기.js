// 18353

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const soldier = input[1].split(' ').map(Number);

const dp = new Array(n).fill(0);
dp[0] = 1;

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (soldier[i] < soldier[j]) dp[i] = Math.max(dp[i], dp[j]);
  }
  dp[i]++;
}

console.log(n - Math.max(...dp));