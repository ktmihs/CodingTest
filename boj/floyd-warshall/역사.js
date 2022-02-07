// 1613

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.shift().split(' ').map(Number);

const dp = [...Array(n)].map((e) => Array(n).fill(10e9));
for (let i = 0; i < n; i++) dp[i][i] = 0;

for (let i = 0; i < k; i++) {
  const [prev, next] = input[i].split(' ').map(Number);
  dp[prev - 1][next - 1] = -1;
  dp[next - 1][prev - 1] = 1;
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j] === 10e9 && dp[i][k] === dp[k][j]) dp[i][j] = dp[i][k];
    }
  }
}

const s = +input[k];
const answer = [];

for (let i = k + 1; i <= k + s; i++) {
  const [prev, next] = input[i].split(' ').map(Number);
  if (dp[prev - 1][next - 1] === 10e9) answer.push(0);
  else answer.push(dp[prev - 1][next - 1]);
}

console.log(answer.join('\n'));