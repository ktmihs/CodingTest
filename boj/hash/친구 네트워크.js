// 4195

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

input.shift();
const answer = [];

let i = 0;
while (i < input.length) {
  const k = +input[i];
  const hash = new Map();
  const friends = [];

  const unf = Array.from({ length: k * 2 + 1 }, (_, i) => i);
  const Find = v => (v === unf[v]) ? v : unf[v] = Find(unf[v]);

  const Union = (a, b) => {
    let fa = Find(a);
    let fb = Find(b);
    if (fa !== fb) {
      unf[fb] = fa;
      friends[fa] += friends[fb];
    }
      answer.push(friends[fa]);
  }

  for (let j = 1; j <= k; j++) {
    const [A, B] = input[i + j].split(' ');

    if (!hash.has(A)) {
      hash.set(A, hash.size);
      friends[hash.get(A)] = 1;
    } if (!hash.has(B)) {
      hash.set(B, hash.size);
      friends[hash.get(B)] = 1;
    }
    Union(hash.get(A), hash.get(B));
  }
  i += k + 1;
}
console.log(answer.join('\n'));