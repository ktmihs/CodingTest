// 1240

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(Number);
const node = [...new Array(10001)].map(e => []);

input.slice(0, N).forEach(line => {
  const [a, b, w] = line.split(' ').map(Number);
  node[a].push([b, w]);
  node[b].push([a, w]);
})

const BFS = (S, E) => {
  const dist = new Array(10001).fill(-1);
  let queue = [S];
  dist[S] = 0;

  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (const n of tmp) {
      for (const [i, w] of node[n]) {
        if (dist[i] >= 0) continue;
        dist[i] = dist[n] + w;
        queue.push(i);
      }
    }
  }

  return dist[E];
}

console.log(input.slice(N).map(line => {
  const [s, e] = line.split(' ').map(Number);
  return BFS(s, e);
}).join('\n'));