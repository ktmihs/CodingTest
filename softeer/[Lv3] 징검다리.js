const [N, list] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const stoneList = list.split(' ').map(Number);
const dp = new Array(+N).fill(0);
dp[0] = 1;

for (let i = 1; i < +N; i++) {
  for (let j = 0; j < i; j++) {
    if (stoneList[i] > stoneList[j]) dp[i] = Math.max(dp[i], dp[j]);
  }
  dp[i]++;
}
console.log(Math.max(...dp));