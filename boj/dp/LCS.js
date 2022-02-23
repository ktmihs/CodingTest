// 9251

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const A = ' ' + input[0];
const B = ' ' + input[1];

const dp = [...Array(A.length)].map(e => Array(B.length).fill(0));

for (let i = 1; i < A.length; i++) {
  for (let j = 1; j < B.length; j++) {
    if (A[i] === B[j]) dp[i][j] = dp[i - 1][j - 1] + 1;
    else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
  }
}

console.log(dp[A.length - 1][B.length - 1]);