// 2225

const fs = require('fs');
const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0].split(' ').map(Number);

const dp = [...Array(k + 1)].map(e => Array(n + 1).fill(0));
for (let i = 0; i < n + 1; i++) dp[1][i] = 1;

for (let i = 1; i <= k; i++) {
  for (let j = 0; j <= n; j++) {
    for (let m = 0; m <= j; m++) {
      dp[i][j] += dp[i - 1][j - m];
      dp[i][j] %= 1000000000;
    }
  }
}
console.log(dp[k][n]);