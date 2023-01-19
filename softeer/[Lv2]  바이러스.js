const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const solution = () => {
  const [k, p, n] = input[0].split(' ').map(BigInt);
  let answer = k;

  for (let i = 0; i < n; i++) answer = (answer * p) % BigInt(1000000007);

  console.log(parseInt(answer));
};

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  solution();
});