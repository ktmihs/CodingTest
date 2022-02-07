// 1956

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.shift().split(' ').map(Number);

const dp = [...Array(n)].map((e) => Array(n).fill(10e9));

for (let i = 0; i < k; i++) {
  const [prev, next, v] = input[i].split(' ').map(Number);
  dp[prev - 1][next - 1] = v;
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j] > dp[i][k] + dp[k][j]) dp[i][j] = dp[i][k] + dp[k][j];
    }
  }
}

let answer = 10e9;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dp[i][i] > dp[i][j] + dp[j][i]) dp[i][i] = dp[i][j] + dp[j][i];
    if (answer > dp[i][i]) answer = dp[i][i];
  }
}

if (answer === 10e9) console.log(-1);
else console.log(answer);