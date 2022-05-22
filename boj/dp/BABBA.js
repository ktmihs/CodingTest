// 9625

const input = +require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0];
const dp = new Array(input);
dp[0] = 1;
dp[1] = 2;
if (input === 1) return console.log('0 1');
if (input === 2) return console.log('1 1');
for (let i = 2; i < input; i++) dp[i] = dp[i - 1] + dp[i - 2];
console.log(dp[input - 3], dp[input - 2]);