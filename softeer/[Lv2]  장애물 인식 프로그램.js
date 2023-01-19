const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const solution = () => {
  const answer = [];
  const N = input.shift();
  const map = input.map(line => line.split('').map(Number));
  const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  const BFS = (i, j) => {
    map[i][j] = 0;
    const queue = [[i, j]];
    let count = 1;

    while (queue.length) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of dir) {
        if (x + dx >= 0 && x + dx < N && y + dy >= 0 && y + dy < N && map[x + dx][y + dy]) {
          map[x + dx][y + dy] = 0;
          queue.push([x + dx, y + dy]);
          count++;
        }
      }
    }

    return count;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j]) answer.push(BFS(i, j));
    }
  }

  console.log(answer.length);
  const sortedAnswer = answer.sort((a, b) => a - b);
  console.log(sortedAnswer.join('\n'));
};

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  solution();
});