// 14916

const input = +require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0];
const dp = new Array(input + 1).fill(10e9);

for (let i = 1; i < input; i++) {
  if (i * 2 <= input) dp[i * 2] = i;
  if (i * 5 <= input) dp[i * 5] = i;
}

for (let i = 1; i <= input; i++) {
  if (dp[i - 2] + 1 < dp[i]) dp[i] = dp[i - 2] + 1;
  if (dp[i - 5] + 1 < dp[i]) dp[i] = dp[i - 5] + 1;
}

dp[input] === 10e9 ? console.log(-1) : console.log(dp[input]);