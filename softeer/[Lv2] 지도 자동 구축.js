const N = +require('fs').readFileSync('/dev/stdin').toString().trim();
const dp = new Array(N).fill(0);
dp[0] = 2;
for (let i = 1; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 1] - 1;
}
console.log(dp[N] * dp[N]);