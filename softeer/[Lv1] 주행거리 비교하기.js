const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const solution = () => {
  const [a, b] = input[0].split(' ').map(Number);

  if (a > b) console.log('A');
  else if (a < b) console.log('B');
  else console.log('same');
};

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  solution();
});
