// const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(' ').map(Number);
const [N, K] = [5, 2];
const dp = new Array(N + 1).fill().map(() => new Array(N + 1).fill(0));
for (let i = 0; i <= N; i++) {
  for (let j = 0; j <= i; j++) {
    if (i === j || j === 0) dp[i][j] = 1;
    else dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % 10007;
  }
}
console.log(dp[N][K]);