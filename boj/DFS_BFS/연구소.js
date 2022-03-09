// 14502

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [row, col] = input.shift().split(' ').map(Number);
const lab = input.map(i => i.split(' ').map(Number));
const check = new Array(row * col).fill(0);

const dir = [[-1, 0], [0, -1], [0, 1], [1, 0]];

const safetyZone = (wall, lab) => {
  let count = 0;
  wall.forEach(i => lab[Math.floor(i / col)][i % col] = 1);

  const BFS = (i, j) => {
    let queue = [];
    lab[i][j] = 1;
    queue.push([i, j]);
    let flag = 0, cnt = 1;

    while (queue.length) {
      const tmp = queue.slice();
      queue = [];
      for (let [x, y] of tmp) {
        for (let [dx, dy] of dir) {
          if (x + dx >= 0 && x + dx < row && y + dy >= 0 && y + dy < col) {
            if (lab[x + dx][y + dy] === 2) flag = 1;
            if (!lab[x + dx][y + dy]) {
              queue.push([x + dx, y + dy]);
              lab[x + dx][y + dy] = 1;
              cnt++;
            }
          }
        }
      }
    }
    if (flag) return 0;
    return cnt;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!lab[i][j]) count += BFS(i, j);
    }
  }
  return count;
}

let answer = 0;

const DFS = (L, wall) => {
  if (L === 3) answer = Math.max(answer, safetyZone(wall, lab.map(l => l.slice())));
  else {
    for (let i = 0; i < row * col; i++) {
      if (!check[i] && !lab[Math.floor(i / col)][i % col]) {
        wall.push(i);
        check[i] = 1;
        DFS(L + 1, wall);
        wall.pop();
        check[i] = 0;
      }
    }
  }
}

DFS(0, []);
console.log(answer);