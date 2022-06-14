// 2098

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = +input.shift();
const W = input.map(line => line.split(' ').map(Number));
const IMPOSSIBLE = 10e9;
// n이 4면 16까지 저장
const dp = [...Array(N)].map(e => Array(1 << N).fill(IMPOSSIBLE));

const TSP = (curr, visited) => {
  // 전부 순회했을 때(1111이 될 경우) 현재 값 리턴
  if (visited == (1 << N) - 1) return W[curr][0];
  // 저장된 값이 존재할 경우, 해당 값 사용
  if (dp[curr][visited] != IMPOSSIBLE) return dp[curr][visited];
  for (let i = 0; i < N; i++) {
    if (visited & (1 << i) || !W[curr][i]) continue;
    const res = TSP(i, visited | 1 << i);
    if (res) dp[curr][visited] = Math.min(dp[curr][visited], res + W[curr][i]); // 가장 적은 값을 리턴
  }
  return dp[curr][visited];
}

console.log(TSP(0, 1));
