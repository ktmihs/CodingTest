// 12852

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0];

const dp = new Array(input + 1).fill(0);
const arr = new Array(input + 1).fill(0);

for (let i = 2; i <= input; i++) {
  dp[i] = dp[i - 1] + 1;
  arr[i] = i - 1;
  if (!(i % 3) && dp[i] > dp[i / 3] + 1) {
    dp[i] = dp[i / 3] + 1;
    arr[i] = i / 3;
  } if (!(i % 2) && dp[i] > dp[i / 2] + 1) {
    dp[i] = dp[i / 2] + 1;
    arr[i] = i / 2;
  }
}
console.log(dp[input]);

let cnt = input;
const answer = [];
while (cnt > 0) {
  answer.push(cnt);
  cnt = arr[cnt];
}
console.log(answer.join(' '));