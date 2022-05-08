// 11055

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(' ').map(Number);

const dp = new Array(n).fill(0);
dp[0] = arr[0];

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) dp[i] = Math.max(dp[i], dp[j]);
  }
  dp[i] += arr[i];
}

console.log(Math.max(...dp));