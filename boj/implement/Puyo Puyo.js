// 11559

const board = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(line => line.split(''));
const DIR = [[0, -1], [0, 1], [-1, 0], [1, 0]];

const remove = list => list.forEach(item => board[item.split(',')[0]][item.split(',')[1]] = '.');

const slide = () => {
  for (let j = 0; j < 6; j++) {
    for (let i = 11; i >= 0; i--) {
      if (board[i][j] === '.') {
        for (let k = i - 1; k >= 0; k--) {
          if (board[k][j] !== '.') {
            board[i][j] = board[k][j];
            board[k][j] = '.';
            break;
          }
        }
      }
    }
  }
}

const BFS = (i, j) => {
  const list = new Set();
  list.add(`${i},${j}`);
  let queue = [[i, j]];
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (let [x, y] of tmp) {
      for (let [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < 12 && y + dy >= 0 && y + dy < 6 && board[i][j] === board[x + dx][y + dy] && !list.has(`${x + dx},${y + dy}`)) {
          list.add(`${x + dx},${y + dy}`);
          queue.push([x + dx, y + dy]);
        }
      }
    }
  }
  return [...list];
}

let flag = true, answer = 0;
while (flag) {
  flag = false;
  for (let i = 11; i >= 0; i--) {
    for (let j = 0; j < 6; j++) {
      if (board[i][j] !== '.') {
        const list = BFS(i, j);
        if (list.length >= 4) {
          remove(list);
          flag = true;
        }
      }
    }
  }
  slide();
  flag && answer++;
}
console.log(answer);