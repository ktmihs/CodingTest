// 2011

const fs = require('fs');
const s = fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0];
const dp = new Array(s.length + 1).fill(0n);

const DFS = (start) => {
  if (start >= s.length) return 1n;
  if (dp[start]) return dp[start];
  if (s[start] === '0') return 0n;

  let answer = DFS(start + 1);
  if (start + 1 < s.length && +(s[start] + s[start + 1]) <= 26) answer += DFS(start + 2);
  return dp[start] = answer;
}
console.log((DFS(0) % 1000000n) + '');