// 18352

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let [n, m, k, x] = input.shift().split(' ').map(Number);

const cities = [...Array(n + 1)].map(e => []);
input.forEach(line => cities[+line.split(' ')[0]].push(+line.split(' ')[1]));

const check = new Array(n + 1).fill(0);
check[x] = 1;

let queue = [x];
while (k) {
  const tmp = [...queue];
  queue = [];
  for (const now of tmp) {
    for (const next of cities[now]) {
      if (!check[next]) {
        check[next] = 1;
        queue.push(next);
      }
    }
  }
  k--;
}
console.log(queue.length ? queue.sort((a, b) => a - b).join('\n') : -1);