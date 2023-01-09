const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const solution = () => {
  const answer = input.reduce((total, day) => {
    const [start, end] = day.split(' ').map(time => {
      const [hour, min] = time.split(':').map(Number);

      return hour * 60 + min;
    });

    return total + (end - start);
  }, 0);

  console.log(answer);
};

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  solution();
});
