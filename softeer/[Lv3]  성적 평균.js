const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const solution = () => {
  input.shift();
  const score = input.shift().split(' ').map(Number);

  console.log(input.map(testcase => {
    const [A, B] = testcase.split(' ').map(Number);

    return (score.slice(A - 1, B).reduce((sum, std) => sum + std, 0) / (B - A + 1)).toFixed(2);
  }).join('\n'));
};

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  solution();
});