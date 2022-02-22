// 2156

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();

const wine = input.map(Number);
const dp = new Array(n).fill(0);

dp[0] = wine[0];
if (n > 1) dp[1] = wine[0] + wine[1];
if (n > 2) dp[2] = Math.max(wine[1] + wine[2], wine[0] + wine[2], dp[1]);

for (let i = 3; i < n; i++) dp[i] = Math.max(wine[i] + dp[i - 3] + wine[i - 1], wine[i] + dp[i - 2], dp[i - 1]);

console.log(dp[n-1]);