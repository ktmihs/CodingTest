// 14938

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, M, R] = input.shift().split(' ').map(Number);
const T = input.shift().split(' ').map(Number);

const node = [...new Array(N + 1)].map(e => Array(N + 1).fill(10e9));
for (let i = 0; i <= N; i++) node[i][i] = 0;

input.forEach(line => {
  const [a, b, w] = line.split(' ');
  node[+a][+b] = +w;
  node[+b][+a] = +w;
})

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (node[i][j] > node[i][k] + node[k][j]) node[i][j] = node[i][k] + node[k][j];
    }
  }
}

let answer = 0;
for (let i = 1; i <= N; i++) {
  let tmp = 0;
  for (let j = 1; j <= N; j++) {
    if (M >= node[i][j]) tmp += T[j - 1];
  }
  answer = Math.max(answer, tmp);
}

console.log(answer);