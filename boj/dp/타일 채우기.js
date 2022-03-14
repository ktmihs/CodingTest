// 2133

const fs = require('fs');
const n = +fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0];

if (n === 1) console.log(0);
else {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 2; i <= n; i += 2) {
    dp[i] = 3 * dp[i - 2];
    for (let j = 4; j <= i; j += 2) dp[i] += 2 * dp[i - j];
  }
  console.log(dp[n]);
}
