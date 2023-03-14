class MinHeap {
  constructor() {
    this.heap = [];
    this.heap.push([-1e9, -1e9]);
  }

  insert(value) {
    this.heap.push(value);
    this.upheap(this.size());
  }

  upheap(pos) {
    let temp = this.heap[pos];

    while (temp[0] < this.heap[Math.floor(pos / 2)][0]) {
      this.heap[pos] = this.heap[Math.floor(pos / 2)];
      pos = Math.floor(pos / 2);
    }
    this.heap[pos] = temp;
  }

  get() {
    if (!this.size()) return false;
    if (this.size() === 1) return this.heap.pop();
    const result = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.size());
    return result;
  }

  downheap(pos, len) {
    let temp = this.heap[pos], child;
    while (pos <= Math.floor(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child][0] > this.heap[child + 1][0]) child++;
      if (temp[0] <= this.heap[child][0]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = temp;
  }

  top() {
    return this.heap[1];
  }

  size() {
    return this.heap.length - 1;
  }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const minH = new MinHeap();

const solution = () => {
  let time = 0, answer = 0;
  while (minH.size()) {
    const meeting = minH.get();
    if (meeting[0] >= time) {
      answer++;
      time = meeting[1];
    }
  }
  console.log(answer);
};

rl.on('line', line => {
  if (!input.length) input.push(line);
  else minH.insert(line.split(' ').map(Number));
});

rl.on('close', () => {
  solution();
});