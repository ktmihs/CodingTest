// 1018

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
let answer = n * m;

const board1 = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
const board2 = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];

for (let i = 0; i <= n - 8; i++) {
  for (let j = 0; j <= m - 8; j++) {
    let a = 0, b = 0;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        input[i + x][j + y] !== board1[x][y] && a++;
        input[i + x][j + y] !== board2[x][y] && b++;
      }
    }
    answer = Math.min(a, b, answer);
  }
}
console.log(answer);