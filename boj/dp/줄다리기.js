// 2631

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.map(Number);

const dp = new Array(n).fill(0);
dp[0] = 1;

for (let i = 1; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i] > arr[j]) dp[i] = Math.max(dp[i], dp[j]);
  }
  dp[i]++;
}

console.log(n - Math.max(...dp));