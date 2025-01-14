// const [length, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [length, ...input] = [
  '3',
  'CCP',
  'CCP',
  'PPC'
];
const LEN = +length;
const board = input.map(line => line.split(''));
const checkMaxCandy = () => {
  let max = 1;
  for (let i = 0; i < LEN; i++) {
    let rowCnt = 1, colCnt = 1;
    for (let j = 1; j < LEN; j++) {
      if (board[i][j] === board[i][j - 1]) rowCnt++;
      else rowCnt = 1;
      if (board[j][i] === board[j - 1][i]) colCnt++;
      else colCnt = 1;

      max = Math.max(max, rowCnt, colCnt);
    }
  }
  return max;
};
let answer = 0;
for (let i = 0; i < LEN; i++) {
  for (let j = 0; j < LEN; j++) {
    if (j + 1 < LEN) {
      [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
      answer = Math.max(answer, checkMaxCandy());
      [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
    }
    if (i + 1 < LEN) {
      [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
      answer = Math.max(answer, checkMaxCandy());
      [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
    }
  }
}
console.log(answer);