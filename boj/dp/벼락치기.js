// const [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [info, ...input] = [
  '3 310',
  '50 40',
  '100 70',
  '200 150'
];
const [N, T] = info.split(' ').map(Number);
const subject = input.map(line => line.split(' ').map(Number).sort((a, b) => a[0] - b[0]));
const dp = new Array(T + 1).fill(0);
for (const [K, S] of subject) {
  for (let i = T; i >= K; i--) {
    dp[i] = Math.max(dp[i - K] + S, dp[i]);
  }
}
console.log(dp[T]);