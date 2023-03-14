const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const solution = () => {
  const [K, P, N] = input[0].split(' ').map(BigInt);

  const calc = (a) => {
    if (a === 1n) return P % BigInt(1000000007);
    if (a % 2n) return (calc(a / 2n) * calc(a / 2n) * P) % BigInt(1000000007);
    else return (calc(a / 2n) * calc(a / 2n)) % BigInt(1000000007);
  }

  let t = 10n;
  console.log(t[t.length - 1])
  console.log(parseInt(calc(N * 10n) * K));
};

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  solution();
});