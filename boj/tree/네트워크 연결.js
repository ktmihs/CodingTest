// 1922

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
const m = +input.shift();
const computers = input.map(computer => computer.split(' ').map(Number));
computers.sort((a, b) => a[2] - b[2]);

const network = new Array(n + 1);
for (let i = 1; i <= n; i++) network[i] = i;

const find = (network, x) => network[x] === x ? x : (network[x] = find(network, network[x]));
const union = (network, a, b) => {
  a = find(network, a);
  b = find(network, b);

  a < b ? network[b] = a : network[a] = b;
}
const findParent = (network, a, b) => {
  a = find(network, a);
  b = find(network, b);

  return a === b ? true : false;
}

let cost = 0;
for (let i = 0; i < computers.length; i++) {
  if (!findParent(network, computers[i][0], computers[i][1])) {
    cost += computers[i][2];
    union(network, computers[i][0], computers[i][1]);
  }
}

console.log(cost);