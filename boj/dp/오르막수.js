// 11057

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0];
const dp = [...Array(input)].map(e => Array(10).fill(1));
let answer = 1;

for (let i = 0; i < input; i++) {
  for (let j = 1; j < 10; j++) {
    if (i > 0) dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 10007;
    if (i === input - 1) answer += dp[i][j];
  }
}
console.log(answer % 10007);