const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, M] = input.shift().split(' ').map(Number);
const board = input.slice(0, N).map(line => line.split(' ').reduce((sum, num) => (sum + +num), 0));
const attack = input.slice(N).map(line => line.split(' ').map(Number));
attack.forEach(([L, R]) => {
  for (let i = L - 1; i < R; i++) {
    board[i] = Math.max(board[i] - 1, 0);
  }
});
const answer = board.reduce((sum, num) => sum + num, 0);
console.log(answer);