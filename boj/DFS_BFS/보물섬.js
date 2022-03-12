// 2589

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [row, col] = input.shift().split(' ').map(Number);
const dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];

const BFS = (i, j) => {
  const check = new Array(row);
  for (let i = 0; i < row; i++) check[i] = new Array(col).fill(0);

  let queue = [[i, j]], level = 0;
  check[i][j] = 1;

  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (let [x, y] of tmp) {
      for (let [dx, dy] of dir) {
        if (x + dx >= 0 && x + dx < row && y + dy >= 0 && y + dy < col && !check[x + dx][y + dy] && input[x + dx][y + dy] === 'L') {
          check[x + dx][y + dy] = 1;
          queue.push([x + dx, y + dy]);
        }
      }
    }
    level++;
  }
  return level - 1;
}

let answer = 0;

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (input[i][j] === 'L') answer = Math.max(answer, BFS(i, j));
  }
}

console.log(answer);