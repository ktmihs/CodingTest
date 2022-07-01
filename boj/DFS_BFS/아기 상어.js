// 16236

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
const arr = input.map(line => line.split(' ').map(Number));

const DIR = [[-1, 0], [0, -1], [0, 1], [1, 0]];

let shark = 2, time = 0, levelup = 0, lastTime = 0, pos;

const BFS = (pos) => {
  const checked = [...Array(n)].map(e => Array(n).fill(0));
  checked[pos[0]][pos[1]] = 1;
  arr[pos[0]][pos[1]] = 0;
  let queue = new Set([pos]);
  let canEat = [];

  while (queue.size) {
    const tmp = [...queue];
    queue = new Set();
    time++;
    for (let [x, y] of tmp) {
      for (let [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < n && arr[x + dx][y + dy] <= shark && !checked[x + dx][y + dy]) {
          checked[x + dx][y + dy] = 1;
          if (arr[x + dx][y + dy] && arr[x + dx][y + dy] < shark) {
            canEat.push([x + dx, y + dy]);
          } else queue.add([x + dx, y + dy]);
        }
      }
    }
    if (canEat.length) {
      canEat = canEat.sort((a, b) => {
        if (a[0] > b[0]) return 1;
        else if (a[0] === b[0]) {
          return a[1] > b[1] ? 1 : -1;
        } else return -1;
      })
      const [a, b] = canEat[0];
      arr[a][b] = 9;
      levelup++;
      if (levelup === shark) {
        shark++;
        levelup = 0;
      }
      return [a, b];
    }
  }
  return false;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 9) pos = [i, j];
  }
}

while (true) {
  const newPos = BFS(pos);
  if (!newPos) break;
  pos = newPos;
  lastTime = time;
}

console.log(lastTime);