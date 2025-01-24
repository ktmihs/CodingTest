// const N = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = 5;
const dp = new Array(10).fill().map(() => new Array(N).fill(0));
const MOD = 1000000000;
let sum = 0;

for (let i = 1; i < 10; i++) {
  dp[i][0] = 1;
}
for (let n = 1; n < +N; n++) {
  for (let i = 0; i < 10; i++) {
    if (i === 0) dp[i][n] = dp[i + 1][n - 1] % MOD;
    else if (i === 9) dp[i][n] = dp[i - 1][n - 1] % MOD;
    else dp[i][n] = (dp[i - 1][n - 1] + dp[i + 1][n - 1]) % MOD;
    if (n === (N - 1)) sum += dp[i][n];
  }
}
console.log(sum % MOD);