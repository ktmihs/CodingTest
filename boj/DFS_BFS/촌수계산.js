// 2644
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const N = +input.shift();
const [start, end] = input.shift().split(' ').map(Number);
const M = +input.shift();

const node = [...new Array(N + 1)].map(e => []);
input.forEach(line => {
  const [a, b] = line.split(' ');
  node[+a].push(+b);
  node[+b].push(+a);
})

let queue = [start];
const check = new Array(N + 1).fill(0);

while (queue.length) {
  const tmp = queue.slice();
  queue = [];
  for (const n of tmp) {
    for (i of node[n]) {
      if (!check[i]) {
        check[i] = check[n] + 1;
        queue.push(i);
      }
    }
  }
}

console.log(check[end] ? check[end] : -1);