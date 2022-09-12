// 24445

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, M, start] = input.shift().split(' ').map(Number);
const node = [...new Array(N + 1)].map(e => []);
input.forEach(line => {
  const [a, b] = line.split(' ');
  node[+a].push(+b);
  node[+b].push(+a);
})

const BFS = k => {
  const check = new Array(N + 1).fill(0);
  check[k] = 1;
  let queue = [k], cnt = 2;
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (const n of tmp) {
      const list = node[n].sort((a, b) => b - a);
      for (const i of list) {
        if (!check[i]) {
          queue.push(i);
          check[i] = cnt;
          cnt++;
        }
      }
    }
  }
  return check;
}

console.log(BFS(start).slice(1).join('\n'));