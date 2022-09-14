// 24446

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, M, start] = input.shift().split(' ').map(Number);
const node = [...new Array(N + 1)].map(e => []);
input.forEach(line => {
  const [a, b] = line.split(' ');
  node[+a].push(+b);
  node[+b].push(+a);
})

const BFS = k => {
  const answer = new Array(N + 1).fill(-1);
  const check = new Array(N + 1).fill(0);
  answer[k] = 0;
  check[k] = 1;
  answer[k] = 0;
  let queue = [k], cnt = 1;
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (const n of tmp) {
      for (const i of node[n]) {
        if (!check[i]) {
          queue.push(i);
          check[i] = 1;
          answer[i] = cnt;
        }
      }
    }
    cnt++;
  }
  return answer;
}

console.log(BFS(start).slice(1).join('\n'));