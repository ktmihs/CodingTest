// 2565

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const n = +input.shift();
const powerPole = input.map(line => line.split(' ').map(Number));

powerPole.sort((a, b) => {
  if (a[0] > b[0]) return 1;
  else if (a[0] === b[0] && a[1] > b[1]) return 1;
  else return -1;
})

const dp = new Array(n).fill(0);
dp[0] = 1;

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (powerPole[i][1] > powerPole[j][1]) dp[i] = Math.max(dp[i], dp[j]);
  }
  dp[i]++;
}
console.log(n - Math.max(...dp));