// 14940

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(line => line.split(' '));
const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];

const [N, M] = input.shift();

const BFS = (i, j) => {
  input[i][j] = 0;
  let queue = [[i, j]], cnt = 1;

  while (queue.length) {
    const tmp = queue.slice();
    queue = [];

    for (const [x, y] of tmp) {
      for (const [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < +N && y + dy >= 0 && y + dy < +M && input[x + dx][y + dy] === '1') {
          input[x + dx][y + dy] = cnt;
          queue.push([x + dx, y + dy]);
        }
      }
    }
    cnt++;
  }
}

for (let i = 0; i < +N; i++) {
  for (let j = 0; j < +M; j++) {
    if (input[i][j] === '2') BFS(i, j);
  }
}

for (let i = 0; i < +N; i++) {
  for (let j = 0; j < +M; j++) {
    if (input[i][j] === '1') input[i][j] = -1;
  }
}

console.log(input.map(line => line.join(' ')).join('\n'));