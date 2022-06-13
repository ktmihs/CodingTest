// 16991

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = +input.shift();
const cities = input.map(city => city.split(' ').map(Number));
const W = [...Array(N)].map(e => Array(N).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) W[i][j] = W[j][i] = Math.sqrt((cities[i][0] - cities[j][0]) ** 2 + (cities[i][1] - cities[j][1]) ** 2);
}

const INF = 10e9;
const dp = [...Array(N)].map(e => Array(1 << N).fill(INF));

const TSP = (curr, visited) => {
  if (visited === (1 << N) - 1) return W[curr][0];
  if (dp[curr][visited] !== INF) return dp[curr][visited];

  for (let i = 0; i < N; i++) {
    if (visited & (1 << i) || !W[curr][i]) continue;
    dp[curr][visited] = Math.min(dp[curr][visited], TSP(i, visited | 1 << i) + W[curr][i]);
  }
  return dp[curr][visited];
}
console.log(TSP(0, 1));