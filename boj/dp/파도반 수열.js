const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
const arr = input.map(Number);

for (let i = 0; i < n; i++) {
  const dp = new Array(arr[i] + 1).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;
  dp[4] = 2;
  dp[5] = 2;

  for (let j = 6; j <= arr[i]; j++) dp[j] = dp[j - 1] + dp[j - 5];
  console.log(dp[arr[i]]);
}