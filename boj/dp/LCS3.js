// 1958

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const s1 = " " + input[0];
const s2 = " " + input[1];
const s3 = " " + input[2];

const dp = [...Array(s1.length)].map(e => [...Array(s2.length)].map(e => Array(s3.length).fill(0)));

for (let i = 1; i < s1.length; i++) {
  for (let j = 1; j < s2.length; j++) {
    for (let k = 1; k < s3.length; k++) {
      if (s1[i] === s2[j] && s2[j] === s3[k]) dp[i][j][k] = dp[i - 1][j - 1][k - 1] + 1;
      else dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i][j - 1][k], dp[i][j][k - 1]);
    }
  }
}

console.log(dp[s1.length - 1][s2.length - 1][s3.length - 1]);