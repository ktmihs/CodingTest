// 16948

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input[0];
const [r1, c1, r2, c2] = input[1].split(' ').map(Number);
const DIR = [[-2, -1], [-2, 1], [0, -2], [0, 2], [2, -1], [2, 1]];

const checked = [...new Array(n)].map(e => Array(n).fill(0));

let queue = [[r1, c1]], answer = 0;
checked[r1][c1] = 1;

const BFS = () => {
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];

    for (const [x, y] of tmp) {
      if (x === r2 && y === c2) return answer;
      for (const [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < n && !checked[x + dx][y + dy]) {
          checked[x + dx][y + dy] = 1;
          queue.push([x + dx, y + dy]);
        }
      }
    }
    answer++;
  }
  return -1;
}

console.log(BFS());