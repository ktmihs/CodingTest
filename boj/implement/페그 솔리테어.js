// 9207

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const N = +input.shift();
const DIR = [[0, 1], [0, -1], [1, 0], [-1, 0]];

let n = 0, answer = [];
for (let k = 0; k < N; k++) {
  const board = [];
  for (let i = 0; i < 5; i++) board.push(input[n++].split(''));
  n++;

  let cnt = 0;
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 9; y++) {
      if (board[x][y] === 'o') cnt++;
    }
  }

  let count = 0;
  const DFS = (cnt) => {
    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 9; y++) {
        if (board[x][y] === 'o') {
          for (let [dx, dy] of DIR) {
            if (x + dx >= 0 && x + dx < 5 && y + dy >= 0 && y + dy < 9 && board[x + dx][y + dy] === 'o') {
              if (x + dx + dx >= 0 && x + dx + dx < 5 && y + dy + dy >= 0 && y + dy + dy < 9 && board[x + dx + dx][y + dy + dy] === '.') {
                board[x][y] = board[x + dx][y + dy] = '.';
                board[x + dx + dx][y + dy + dy] = 'o';
                DFS(cnt + 1);
                board[x][y] = board[x + dx][y + dy] = 'o';
                board[x + dx + dx][y + dy + dy] = '.';
              }
            }
          }
          count = Math.max(count, cnt);
        }
      }
    }
  }
  DFS(0);
  answer.push(`${cnt - count} ${count}`);
}

console.log(answer.join('\n'));