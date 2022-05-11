// 16234

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, L, R] = input.shift().split(' ').map(Number);

const land = input.map(line => line.split(' ').map(Number));
const dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];
const check = [...Array(N)].map(e => Array(N).fill(0));

let answer = 0;

let queue = [];
const DFS = (x, y) => {
  for (let [dx, dy] of dir) {
    if (x + dx >= 0 && x + dx < N && y + dy >= 0 && y + dy < N && Math.abs(land[x][y] - land[x + dx][y + dy]) >= L && Math.abs(land[x][y] - land[x + dx][y + dy]) <= R && !check[x + dx][y + dy]) {
      check[x + dx][y + dy] = 1;
      queue.push([x + dx, y + dy]);
      DFS(x + dx, y + dy);
    }
  }
}

const movement = (queue) => {
  const sum = queue.reduce((sum, [x, y]) => sum + land[x][y], 0);
  const avg = Math.floor(sum / queue.length);

  for (let [x, y] of queue) {
    land[x][y] = avg;
    check[x][y] = 0;
  }
}

while (true) {
  const list = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!check[i][j]) {
        check[i][j] = 1;
        queue.push([i, j]);
        DFS(i, j);
        const li = queue.slice();
        queue = [];
        if (li.length > 1) list.push(li);
        else if (li.length) check[li[0][0]][li[0][1]] = 0;
      }
    }
  }
  if (!list.length) break;
  list.forEach(li => movement(li));

  answer++;
}
console.log(answer);