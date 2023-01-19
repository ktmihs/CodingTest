const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const solution = () => {
  const [N, M] = input.shift().split(' ').map(Number);

  const LIMIT = input.splice(0, N).map(term => term.split(' ').map(Number));
  const TEST = input.map(term => term.split(' ').map(Number));

  let answer = 0;
  let lp = 0, tp = 0;
  while (lp < N && tp < M) {
    if (LIMIT[lp][0] > TEST[tp][0]) {

      const tmp1 = TEST[tp][1] - LIMIT[lp][1];
      const tmp2 = (tp + 1 < M) && (TEST[tp + 1][1] - LIMIT[lp][1]);

      answer = Math.max(answer, tmp1, tmp2);

      if (tp + 1 < M) TEST[tp + 1][0] += TEST[tp][0];
      tp++;
    } else if (LIMIT[lp][0] < TEST[tp][0]) {

      const tmp1 = TEST[tp][1] - LIMIT[lp][1];
      const tmp2 = (lp + 1 < N) && (TEST[tp][1] - LIMIT[lp + 1][1]);

      answer = Math.max(answer, tmp1, tmp2);

      if (lp + 1 < N) LIMIT[lp + 1][0] += LIMIT[lp][0];
      lp++;
    } else {
      answer = Math.max(answer, TEST[tp][1] - LIMIT[lp][1]);

      if (tp + 1 < M) TEST[tp + 1][0] += TEST[tp][0];
      if (lp + 1 < N) LIMIT[lp + 1][0] += LIMIT[lp][0];
      tp++;
      lp++;
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