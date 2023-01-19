const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const solution = () => {
  let [weight, N] = input.shift().split(' ').map(Number);
  let answer = 0;

  const sortedGem = input.map(gemstone => gemstone.split(' ').map(Number)).sort((prev, next) => next[1] - prev[1]);

  for (const [gem, price] of sortedGem) {
    if (weight < gem) {
      answer += weight * price;
      break;
    } else {
      answer += gem * price;
      weight -= gem;
    }
  }

  console.log(answer);
};

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  solution();
});
