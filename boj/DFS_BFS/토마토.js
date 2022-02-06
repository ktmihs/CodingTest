// 7576

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const board = input.map(i => i.split(' ').map(Number));

let answer = 0
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
]
let tmp = [],
  tomato = []

// 🍅 맨 처음 토마토 개수 세기 🍅
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[0].length; j++) {
    if (board[i][j] === 1) tomato.push([i, j])
  }
}
while (tomato.length) {
  for (let [x, y] of tomato) {
    for (let [dx, dy] of dir) {
      if ((0 <= x + dx && x + dx < board.length) && (0 <= y + dy && y + dy < board[0].length) && board[x + dx][y + dy] === 0) {
        board[x + dx][y + dy] = 1
        tmp.push([x + dx, y + dy])
      }
    }
  }
  tomato = tmp.slice()
  tmp = []
  if (!tomato.length) break
  answer++
}
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[0].length; j++) {
    if (board[i][j] === 0) return console.log(-1)
  }
}

console.log(answer)