// 2637

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const m = +input.shift();
const arr = input.map(line => line.split(' ').map(Number));

const graph = Array(n + 1);
for (let i = 1; i < n + 1; i++) graph[i] = Array();

const indegrees = Array(n + 1).fill(0);

const dy = Array(n + 1);
for (let i = 1; i < n + 1; i++) dy[i] = Array(n + 1).fill(0);

for (const [to, from, cost] of arr) {
  indegrees[to]++;
  graph[from].push([to, cost]);
}

const q = [];
for (let i = 1; i < n + 1; i++) {
  if (indegrees[i] === 0) {
    q.push(i);
    dy[i][i] = 1;
  }
}

while (q.length) {
  let curr = q.shift();

  for (const [next, cost] of graph[curr]) {
    for (let i = 1; i < n + 1; i++) dy[i][next] += dy[i][curr] * cost;

    if (--indegrees[next] === 0) q.push(next);
  }
}

for (let i = 1; i < n + 1; i++) {
  if (dy[i][n] > 0) console.log(`${i} ${dy[i][n]}`);
}