// 14719

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const blocks = input[1].split(' ').map(Number);
const sortedBlocks = blocks.map((block, idx) => [+block, idx]).sort((a, b) => a[0] - b[0]);

const [start, startIdx] = sortedBlocks.pop();
let answer = 0, left = startIdx, right = startIdx;

while (sortedBlocks.length) {
  const [block, idx] = sortedBlocks.pop();
  if (idx > left && idx < right) continue;
  else if (idx < left) {
    for (let i = idx + 1; i < left; i++) answer += block - blocks[i];
    left = idx;
  } else {
    for (let i = right + 1; i < idx; i++) answer += block - blocks[i];
    right = idx;
  }
}
console.log(answer);