const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const solution = () => {
  let answer = '';

  console.log(answer);
};

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  solution();
});
