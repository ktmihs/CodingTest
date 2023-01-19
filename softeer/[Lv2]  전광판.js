const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const solution = () => {
  const NUMBERS = [
    [false, false, false, false, false, false, false],
    [true, true, true, false, true, true, true],
    [false, false, true, false, false, true, false],
    [true, false, true, true, true, false, true],
    [true, false, true, true, false, true, true],
    [false, true, true, true, false, true, false],
    [true, true, false, true, false, true, true],
    [true, true, false, true, true, true, true],
    [true, true, true, false, false, true, false],
    [true, true, true, true, true, true, true],
    [true, true, true, true, false, true, true],
  ]

  input.shift();
  const answer = input.map(testcase => {
    const [prev, next] = testcase.split(' ');

    const prevString = prev.padStart(5, '*');
    const nextString = next.padStart(5, '*');

    let turn = 0;

    for (let i = 0; i < 5; i++) {
      const prevIdx = prevString[i] === '*' ? 0 : +prevString[i] + 1;
      const nextIdx = nextString[i] === '*' ? 0 : +nextString[i] + 1;
      if (prevIdx === nextIdx) continue;

      turn += NUMBERS[prevIdx].filter((light, idx) => NUMBERS[nextIdx][idx] !== light).length;
    }

    return turn;
  })

  console.log(answer.join('\n'));
};

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  solution();
});