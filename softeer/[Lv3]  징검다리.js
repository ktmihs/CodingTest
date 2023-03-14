const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const solution = () => {
  const N = +input[0];
  const list = input[1].split(' ').map(Number);
  list.push(0);

  const D = [];

  for (let i = 0; i < N; i++) {
    if (!D.length || D[D.length - 1] < list[i]) D.push(list[i]);
    for (let j = 0; j < D.length; j++) {
      if (list[i] < D[j]) {
        D[j] = list[i];
        break;
      }
    }
  }

  console.log(D.length);
};

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  solution();
});
