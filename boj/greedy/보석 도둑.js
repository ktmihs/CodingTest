// 1202

class maxHeap {
  constructor() {
    this.heap = []
    this.heap.push(1e9)
  }
  insert(val) {
    this.heap.push(val)
    this.upheap(this.heap.length - 1)
  }
  upheap(pos) {
    let tmp = this.heap[pos]
    while (tmp[1] > this.heap[Math.floor(pos / 2)][1]) {
      this.heap[pos] = this.heap[Math.floor(pos / 2)]
      pos = Math.floor(pos / 2)
    }
    this.heap[pos] = tmp
  }
  get() {
    if (this.heap.length === 2) return this.heap.pop()
    if (this.heap.length === 1) return false

    let res = this.heap[1]

    this.heap[1] = this.heap.pop()
    this.downheap(1, this.heap.length - 1)
    return res
  }
  size() {
    return this.heap.length - 1
  }
  top() {
    return this.heap[1];
  }

  downheap(pos, len) {
    let tmp = this.heap[pos],
      child
    while (pos <= Math.floor(len / 2)) {
      child = pos * 2
      if (child < len && this.heap[child][1] < this.heap[child + 1][1]) child++ // 자식 중 큰 값으로 변경
      if (tmp[1] >= this.heap[child][1]) break
      this.heap[pos] = this.heap[child]
      pos = child
    }
    this.heap[pos] = tmp
  }
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\r\n");
const [n, k] = input.shift().split(' ').map(Number);

const heap = new maxHeap();
const jewelry = [];
const bag = [];
let answer = 0;

input.forEach((line, i) => {
  if (i < n) jewelry.push(line.split(' ').map(Number));
  else bag.push(+line);
})

bag.sort((a, b) => b - a);
jewelry.sort((a, b) => b[0] - a[0]);

while (bag.length) {
  const _bag = bag.pop();
  while (jewelry.length && jewelry[jewelry.length - 1][0] <= _bag) heap.insert(jewelry.pop());
  if (heap.size()) answer += heap.get()[1];
}
console.log(answer);