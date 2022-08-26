// 11725

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const N = +input.shift();

const node = [...new Array(N + 1)].map(e => []);
input.forEach(line => {
  const [a, b] = line.split(' ');
  node[+a].push(+b);
  node[+b].push(+a);
})

let queue = [1];
const parent = new Array(N + 1).fill(0);

while (queue.length) {
  const tmp = queue.slice();
  queue = [];
  for (const n of tmp) {
    for (i of node[n]) {
      if (!parent[i] && i !== 1) {
        parent[i] = n;
        queue.push(i);
      }
    }
  }
}

console.log(parent.slice(2).join('\n'));