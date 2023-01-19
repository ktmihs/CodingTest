const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const solution = () => {
  const order = input[0].split(' ').map(Number);
  let answer = '';

  for (let i = 1; i < order.length; i++) {
    if (answer === 'descending' && order[i - 1] > order[i]) continue;
    if (answer === 'ascending' && order[i - 1] < order[i]) continue;
    if (!answer) {
      if (order[i - 1] < order[i]) answer = 'ascending';
      else if (order[i - 1] > order[i]) answer = 'descending';
    } else {
      answer = 'mixed';
      break;
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
