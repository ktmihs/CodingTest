const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class maxHeap {
  // max heap
}

if (!+input.shift()) return console.log(0);

const heap = new maxHeap();

const lects = input.map(lect => lect.split(' ').map(Number)).sort((a, b) => a[1] - b[1]);

const maxDay = lects[lects.length - 1][1];
let money = 0;

for (let day = maxDay; day > 0; day--) {
  while (lects.length && lects[lects.length - 1][1] === day) heap.insert(lects.pop());

  if (heap.size()) money += heap.get()[0];
}

console.log(money);