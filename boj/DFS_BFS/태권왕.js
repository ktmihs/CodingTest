// 14562

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

input.shift();
const answer = input.map(line => {
  const [S, T] = line.split(' ').map(Number);
  let queue = [[S, T, 0]];

  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (const [s, t, c] of tmp) {
      if (s < t) {
        queue.push([s * 2, t + 3, c + 1]);
        queue.push([s + 1, t, c + 1]);
      } else if (s === t) return c;
    }
  }
});

console.log(answer.join('\n'));