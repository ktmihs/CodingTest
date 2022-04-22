// 10026

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
const dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];

const Func = color => {
  const checked = [...Array(n)].map(e => Array(n).fill(0));
  let answer = 0;

  const DFS = (x, y, color) => {
    for (let [dx, dy] of dir) {
      if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < n && !checked[x + dx][y + dy] && color.indexOf(input[x + dx][y + dy]) !== -1) {
        checked[x + dx][y + dy] = 1;
        DFS(x + dx, y + dy, color);
      }
    }
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!checked[i][j] && color.indexOf(input[i][j]) !== -1) {
        DFS(i, j, color);
        answer++;
      }
    }
  }

  return answer;
}

const blue = Func('B')
const notBlindness = Func('R') + Func('G') + blue;
const blindness = Func('RG') + blue;

console.log(notBlindness + ' ' + blindness);