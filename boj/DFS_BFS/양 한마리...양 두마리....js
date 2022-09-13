// 11123

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
input.shift();
const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];

const answer = [];

while (input.length) {
  const [N, M] = input.shift().split(' ').map(Number);
  const map = input.splice(0, N).map(line => line.split(''));
  const BFS = (i, j) => {
    let queue = [[i, j]];

    while (queue.length) {
      const tmp = queue.slice();
      queue = [];

      for (const [x, y] of tmp) {
        for (const [dx, dy] of DIR) {
          if (x + dx >= 0 && x + dx < N && y + dy >= 0 && y + dy < M && map[x + dx][y + dy] === '#') {
            map[x + dx][y + dy] = '.';
            queue.push([x + dx, y + dy]);
          }
        }
      }
    }
  }

  let cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === '#') {
        map[i][j] = '.';
        BFS(i, j);
        cnt++;
      }
    }
  }

  answer.push(cnt);
}

console.log(answer.join('\n'));