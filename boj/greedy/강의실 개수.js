// 11000

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
    let temp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2; 
      if (child < len && this.heap[child] > this.heap[child + 1]) child++;  
      if (temp <= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = temp;
  }
  top() {
    return this.heap[1];
  }
  size() {
    return this.heap.length - 1
  }
}

const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

let n = parseInt(input.shift())
let arr = input.map(i => i.split(' ').map(a => +a))
arr.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1]
  else return a[0] - b[0]
})


let heap = new MinHeap()
heap.insert(arr[0][1])

for (let k = 1; k < n; k++) {
  if (heap.top() > arr[k][0]) heap.insert(arr[k][1])
  else {
    heap.get()
    heap.insert(arr[k][1])
  }
}
console.log(heap.size())