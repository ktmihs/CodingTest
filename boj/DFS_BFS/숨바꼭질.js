// 13549

const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0].split(' ').map(Number);

const dp = new Array(100001).fill(0);
dp[n] = 1;

let queue = [[n, 0]];

const BFS = () => {
  while (queue.length) {
    const [x, t] = queue.shift();
    if (x === k) return t;
    for (let pos of [x * 2, x - 1, x + 1]) {
      if (pos >= 0 && pos < 100001 && !dp[pos]) {
        dp[pos] = 1;
        if (pos === x * 2) queue.push([pos, t]);
        else queue.push([pos, t + 1]);
      }
    }
  }
}
console.log(BFS());