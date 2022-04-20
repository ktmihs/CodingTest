// 1967

class MinHeap {
  constructor() {
    this.heap = [];
    this.heap.push(-1e9);
  }

  insert(value) {
    this.heap.push(value);
    this.upheap(this.heap.length - 1);
  }

  upheap(pos) {
    let temp = this.heap[pos];

    while (temp < this.heap[parseInt(pos / 2)]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = temp;
  }

  get() {
    if (this.size() === 0) return false;
    if (this.size() === 1) return this.heap.pop();
    const result = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return result;
  }

  downheap(pos, len) {
    let temp = this.heap[pos], child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child] > this.heap[child + 1]) child++;
      if (temp <= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = temp;
  }

  size() {
    return this.heap.length - 1
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const n = +input.shift();
const edges = input.map(edge => edge.split(' ').map(Number));

function dijkstra(n, edges, start) {
  let graph = new Array(n + 1);
  for (let i = 0; i <= n; i++) graph[i] = new Array();
  for (let [a, b, c] of edges) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  let minH = new MinHeap();
  let maxCost = 0, firstNode = start;
  minH.insert([firstNode, 0]);
  let dist = new Array(n + 1).fill(Infinity);
  dist[firstNode] = 0;

  while (minH.size() > 0) {
    let [now, nowCost] = minH.get();
    if (nowCost > dist[now]) continue;
    for (let [next, cost] of graph[now]) {
      if (nowCost + cost < dist[next]) {
        dist[next] = nowCost + cost;
        if (maxCost <= dist[next]) {
          maxCost = dist[next];
          firstNode = next;
        }
        minH.insert([next, dist[next]]);
      }
    }
  }
  return [maxCost, firstNode];
}

const startNode = dijkstra(n, edges, 1)[1];
const newCost = dijkstra(n, edges, startNode)[0];

console.log(newCost);