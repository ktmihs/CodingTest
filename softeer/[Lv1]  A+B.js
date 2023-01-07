const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const solution = () => {
  input.slice(1).forEach((testcase, idx) => {
    const [a, b] = testcase.split(' ').map(Number);

    console.log(`Case #${idx + 1}: ${a + b}`);
  })
};

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  solution();
});
