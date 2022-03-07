// 1463

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0];

const dp = new Array(input + 1).fill(0);

for (let i = 2; i <= input; i++) {
  dp[i] = dp[i - 1] + 1;
  if (!(i % 3)) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  if (!(i % 2)) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
}
console.log(dp[input]);