// 2636

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [row, col] = input.shift().split(' ').map(Number);
const board = input.map(line => line.split(' ').map(Number));
const dir = [[-1, 0], [0, -1], [0, 1], [1, 0]];
let answer = 0, cheeze = 1, res = 0;

board.forEach(b => b.forEach(a => { if (a) res++ }));

while (cheeze) {
  let queue = [[0, 0]];

  cheeze = 0;
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];

    let cnt = 0;
    for (let [i, j] of tmp) {
      for (let [dx, dy] of dir) {
        if (i + dx >= 0 && i + dx < row && j + dy >= 0 && j + dy < col && !board[i + dx][j + dy]) {
          queue.push([i + dx, j + dy]);
        } else if (i + dx >= 0 && i + dx < row && j + dy >= 0 && j + dy < col && board[i + dx][j + dy]) {
          board[i][j] = 0;
          cnt++;
          cheeze = 1;
        }
      }
    }
  }

  if (!cnt) break;

  res = cnt ? cnt : res;
  answer++;
}

console.log(answer);
console.log(res);