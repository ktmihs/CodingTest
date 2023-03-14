const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const solution = () => {
  const [H, K, R] = input.shift().split(' ').map(Number);
  const task = input.map(line => line.split(' ').map(Number));

  const queue = [];

  for (let k = 0; k < K; k++) {
    if (queue.length >= R) break;
    const sprint = task.map(t => t[k]);

    const sortedTask = [];
    const daily = (list, h) => {
      if (list.length === 1) return sortedTask.push(...list);

      if (h % 2) {
        daily(list.slice(list.length / 2), h + 1);
        daily(list.slice(0, list.length / 2), h + 1);
      } else {
        daily(list.slice(0, list.length / 2), h + 1);
        daily(list.slice(list.length / 2), h + 1);
      }
    }
    daily(sprint, H);
    queue.push(...sortedTask);
  }

  console.log(queue.slice(0, R - H).reduce((total, task) => total + task, 0));
};

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  solution();
});
