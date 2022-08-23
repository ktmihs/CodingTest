// 4179

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
const visit = [...new Array(n)].map(e => Array(m).fill(0));
const maze = input.map(line => line.split(''));
const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];

const findPos = word => {
  const res = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) if (maze[i][j] === word) res.push([i, j]);
  }
  return res;
}

const BFS = () => {
  let queue = findPos('J'), fire = findPos('F'), answer = 1;
  while (queue.length) {
    const tmp = queue.slice();
    const fireTmp = fire.slice();
    queue = [];
    fire = [];

    for (const [x, y] of fireTmp) {
      for (const [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && !visit[x + dx][y + dy] && maze[x + dx][y + dy] !== '#') {
          visit[x + dx][y + dy] = 1;
          fire.push([x + dx, y + dy]);
        }
      }
    }

    for (const [x, y] of tmp) {
      if (!x || !y || x === n - 1 || y === m - 1) return answer;
      for (const [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && !visit[x + dx][y + dy] && maze[x + dx][y + dy] === '.') {
          visit[x + dx][y + dy] = 1;
          queue.push([x + dx, y + dy]);
        }
      }
    }
    answer++;
  }
  return 'IMPOSSIBLE';
}

console.log(BFS());