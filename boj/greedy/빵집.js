// 3109

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [r, c] = input.shift().split(' ').map(Number);
const checked = [...Array(r)].map(e => Array(c).fill(false));
const dir = [[-1, 1], [0, 1], [1, 1]];

const DFS = (x, y) => {
  checked[x][y] = true;
  if (y === c - 1) return true;
  for (let [dx, dy] of dir) {
    if (x + dx >= 0 && x + dx < r && y + dy >= 0 && y + dy < c && input[x + dx][y + dy] === '.' && !checked[x + dx][y + dy]) {
      let cnt = DFS(x + dx, y + dy);
      if (cnt) return cnt;
    }
  }
  return false;
}

let answer = 0;
for (let i = 0; i < r; i++) answer += DFS(i, 0);

console.log(answer);