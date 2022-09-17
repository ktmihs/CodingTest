// 24447

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, M, start] = input.shift().split(' ').map(Number);
const node = [...new Array(N + 1)].map(e => []);
input.forEach(line => {
  const [a, b] = line.split(' ');
  node[+a].push(+b);
  node[+b].push(+a);
})

const BFS = k => {
  const answer = new Array(N + 1).fill(0);
  answer[k] = 0;
  let queue = [k], dep = 1, cnt = 1;
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (const n of tmp) {
      const list = node[n].sort((a, b) => a - b);
      for (const i of list) {
        if (i !== k && !answer[i]) {
          queue.push(i);
          answer[i] = dep * ++cnt;
        }
      }
    }
    dep++;
  }
  return answer;
}

console.log(BFS(start).slice(1).reduce((sum, i) => sum + i, 0));