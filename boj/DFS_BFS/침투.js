// 13565

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, M] = input.shift().split(' ').map(Number);
const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];
const figure = input.map(line => line.split('').map(Number));

const func = () => {
  const BFS = (i, j) => {
    figure[i][j] = 1;
    let queue = [[i, j]];
    while (queue.length) {
      const tmp = queue.slice();
      queue = [];
      for (const [x, y] of tmp) {
        if (x === N - 1) return true;
        for (const [dx, dy] of DIR) {
          if (x + dx >= 0 && x + dx < N && y + dy >= 0 && y + dy < M && !figure[x + dx][y + dy]) {
            figure[x + dx][y + dy] = 1;
            queue.push([x + dx, y + dy]);
          }
        }
      }
    }
    return false;
  }

  for (let j = 0; j < M; j++) {
    if (!figure[0][j] && BFS(0, j)) return 'YES';
  }

  return 'NO';
}

console.log(func());