// 2638

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [row, col] = input.shift().split(' ').map(Number);

const board = input.map(line => line.split(' ').map(Number));

const tmpBoard = [...Array(row)].map(e => Array(col).fill(0));

const dir = [[-1, 0], [0, -1], [0, 1], [1, 0]];

const BFS = (cheeze) => {
  let queue = [[0, 0]];
  tmpBoard[0][0] = -1;

  while (queue.length) {
    const tmp = queue.slice();
    queue = [];

    for (let [i, j] of tmp) {
      for (let [dx, dy] of dir) {
        if (i + dx >= 0 && i + dx < row && j + dy >= 0 && j + dy < col && !board[i + dx][j + dy] && !tmpBoard[i + dx][j + dy]) {
          queue.push([i + dx, j + dy]);
          tmpBoard[i + dx][j + dy] = -1;
        } else if (i + dx >= 0 && i + dx < row && j + dy >= 0 && j + dy < col && board[i + dx][j + dy] === 1) {
          tmpBoard[i + dx][j + dy] += 1;
          cheeze = 0;
        }
      }
    }
  }

  if (cheeze) return 2;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (tmpBoard[i][j] >= 2) board[i][j] = 0;
      else if (board[i][j] === 1) cheeze = 1;
      tmpBoard[i][j] = 0;
    }
  }
  return cheeze;
}

let answer = 0;
let cheeze = 1;

while (cheeze) {
  cheeze = BFS(cheeze);
  if (cheeze === 2) break;
  answer++;
}

console.log(answer);