const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const solution = () => {
  const list = [2];
  const N = +input[0];

  for (let i = 0; i < N; i++) list.push(list[i] * 2 - 1);

  console.log(list[N] ** 2);
};

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  solution();
});
