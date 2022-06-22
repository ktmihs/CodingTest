// 2839

const num = +require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0];

const dp = new Array(num + 1).fill(-1);
const N = Math.floor(num / 5), M = Math.floor(num / 3);

for (let i = 0; i <= M; i++) dp[i * 3] = i;
for (let i = 0; i <= N; i++) dp[i * 5] = i;

for (let money of [5, 3]) {
  for (let i = money; i <= num; i++) {
    if (dp[i] === -1 && dp[i - money] !== -1) dp[i] = dp[i - money] + 1;
    if (dp[i - money] !== -1 && dp[i] > dp[i - money] + 1) dp[i] = dp[i - money] + 1;
  }
}

console.log(dp[num]);