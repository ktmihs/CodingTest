// 1600

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const k = +input.shift();
const [m, n] = input.shift().split(' ').map(Number);
const map = input.map(line => line.split(' ').map(Number));
const visit = [...new Array(n)].map(e => [...new Array(m)].map(e => Array(k + 1).fill(0)));
const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];
const horse = [[-2, 1], [1, -2], [2, 1], [1, 2], [2, -1], [-1, 2], [-2, -1], [-1, -2]];

const BFS = () => {
  visit[0][0][0] = 1;
  let queue = [[0, 0, 0]], answer = 0;
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];

    for (const [x, y, h] of tmp) {
      if (x === n - 1 && y === m - 1) return answer;
      if (h < k) {
        for (const [dx, dy] of horse) {
          if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && !visit[x + dx][y + dy][h + 1] && !map[x + dx][y + dy]) {
            visit[x + dx][y + dy][h + 1] = 1;
            queue.push([x + dx, y + dy, h + 1]);
          }
        }
      }
      for (const [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && !visit[x + dx][y + dy][h] && !map[x + dx][y + dy]) {
          visit[x + dx][y + dy][h] = 1;
          queue.push([x + dx, y + dy, h]);
        }
      }
    }
    answer++;
  }
  return -1;
}

console.log(BFS());