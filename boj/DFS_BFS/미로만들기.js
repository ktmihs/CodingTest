// 2665

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
const visit = [...new Array(n)].map(e => Array(n).fill(-1));
visit[0][0] = 0;
const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];

const BFS = () => {
  let queue = [[0, 0]];
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];

    for (const [x, y] of tmp) {
      for (const [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < n) {
          if (+input[x + dx][y + dy] && (visit[x + dx][y + dy] === -1 || visit[x + dx][y + dy] > visit[x][y])) {
            visit[x + dx][y + dy] = visit[x][y];
            queue.push([x + dx, y + dy]);
          }
          else if (!+input[x + dx][y + dy] && (visit[x + dx][y + dy] === -1 || visit[x + dx][y + dy] > (visit[x][y] + 1))) {
            visit[x + dx][y + dy] = visit[x][y] + 1;
            queue.push([x + dx, y + dy]);
          }
        }
      }
    }
  }
}
BFS();
console.log(visit[n - 1][n - 1]);