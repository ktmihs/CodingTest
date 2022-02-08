// 2458

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.shift().split(' ').map(Number);

const dp = [...Array(n)].map(e => Array(n).fill(0));
dp.map((arr, i) => arr[i] = 0);

// prev가 next보다 작으면 -1, 크면 1
input.forEach(i => {
  const [prev, next] = i.split(' ').map(Number);
  dp[prev - 1][next - 1] = -1;
  dp[next - 1][prev - 1] = 1;
});

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][k] && dp[i][k] === dp[k][j]) dp[i][j] = dp[i][k];
    }
  }
}

console.log(dp.filter(arr => arr.filter(i => i === 0).length === 1).length);