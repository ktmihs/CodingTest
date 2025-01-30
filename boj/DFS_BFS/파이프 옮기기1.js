// let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let [N, ...input] = [
//   '3', '0 0 0', '0 0 0', '0 0 0'
// ];
let [N, ...input] = [
  '4', '0 0 0 0', '0 0 0 0', '0 0 0 0', '0 0 0 0'
];
N = +N;
const home = input.map(line => line.split(' ').map(Number));
const dp = new Array(N).fill().map(() => new Array(N).fill().map(() => Array(3).fill(0)));
dp[0][0][0] = 1;
dp[0][1][0] = 1;
for (let x = 0; x < N; x++) {
  for (let y = 2; y < N; y++) {
    if (home[x][y] === 1) continue;
    dp[x][y][0] = dp[x][y - 1][0] + dp[x][y - 1][2];
    if (x > 0) dp[x][y][1] = dp[x - 1][y][1] + dp[x - 1][y][2];
    if (x > 0 && home[x - 1][y] === 0 && home[x][y - 1] === 0) dp[x][y][2] = dp[x - 1][y - 1][0] + dp[x - 1][y - 1][1] + dp[x - 1][y - 1][2];
  }
}
console.log(dp);
console.log(dp[N - 1][N - 1][0] + dp[N - 1][N - 1][1] + dp[N - 1][N - 1][2]);