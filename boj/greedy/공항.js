// 10775

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const G = input.shift();
const P = input.shift();
const parent = new Array(G + 1).fill(0).map((_, i) => i);

const find = x => {
  if (x === parent[x]) return x;
  else return parent[x] = find(parent[x]);
}

const unite = (x, y) => {
  x = find(x);
  y = find(y);
  parent[x] = y;
}

let answer = 0;
for (let i of input) {
  const gate = find(i);
  if (gate) {
    answer++;
    unite(gate, gate - 1);
  } else break;
}

console.log(answer);