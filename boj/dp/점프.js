// 1890

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const board = input.map(b => b.split(' ').map(Number));
const dp = [...Array(n)].map(e => Array(n).fill(0n));
dp[0][0] = 1n;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!board[i][j]) continue;
    if (dp[i][j]) {
      if (j + board[i][j] < n) dp[i][j + board[i][j]] += dp[i][j];
      if (i + board[i][j] < n) dp[i + board[i][j]][j] += dp[i][j];
    }
  }
}

console.log((dp[n - 1][n - 1] + '').split('n')[0]);