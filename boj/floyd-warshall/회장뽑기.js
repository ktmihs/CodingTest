// 2660

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const N = +input.shift();
input.pop();

const node = [...new Array(N + 1)].map(e => Array(N + 1).fill(10e9));
input.forEach(line => {
  const [a, b] = line.split(' ');
  node[+a][+b] = 1;
  node[+b][+a] = 1;
})

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (node[i][j] > node[i][k] + node[k][j]) node[i][j] = node[i][k] + node[k][j];
    }
  }
}

const friends = new Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    if (i !== j && friends[i] < node[i][j]) friends[i] = node[i][j];
  }
}

const answer = Math.min(...friends.slice(1)), list = [];

for (let i = 1; i <= N; i++) if (friends[i] === answer) list.push(i);

console.log(`${answer} ${list.length}`);
console.log(list.join(' '));