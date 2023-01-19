const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const solution = () => {
  const secretList = input[1].split(' ').join('');
  const myList = input[2].split(' ').join('');

  const answer = myList.includes(secretList);
  console.log(answer ? 'secret' : 'normal');
};

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  solution();
});