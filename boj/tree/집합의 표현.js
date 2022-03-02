// 1717

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  const [n, m] = input.shift().split(' ').map(Number);

  let unf = Array.from({ length: n + 1 }, (_, i) => i);
  const answer = [];

  const Find = v => {
    return v === unf[v] ? v : unf[v] = Find(unf[v]);
  }
  const Union = (a, b) => {
    let fa = Find(a);
    let fb = Find(b);
    if (fa !== fb) unf[fa] = fb;
  }

  input.forEach(s => {
    const [x, a, b] = s.split(' ').map(Number);
    if (!x) Union(+a, +b);
    else Find(a) !== Find(b) ? answer.push("NO") : answer.push("YES");
  })

  console.log(answer.join('\n'));
});
