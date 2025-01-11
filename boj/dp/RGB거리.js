// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, ...dp] = [
  '6',
  '30 19 5',
  '64 77 64',
  '15 19 97',
  '4 71 57',
  '90 86 84',
  '93 32 91'].map(line => line.split(' '));
for (let i = 1; i < N; i++) {
  dp[i][0] = +dp[i][0] + Math.min(+dp[i - 1][1], +dp[i - 1][2]);
  dp[i][1] = +dp[i][1] + Math.min(+dp[i - 1][0], +dp[i - 1][2]);
  dp[i][2] = +dp[i][2] + Math.min(+dp[i - 1][0], +dp[i - 1][1]);
}
console.log(Math.min(...dp[N - 1]));