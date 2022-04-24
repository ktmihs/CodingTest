// 10868

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
const tree = new Array(n * 4).fill(0);

const init = (start, end, i) => {
  if (start === end) return tree[i] = +input[start];
  const mid = Math.floor((start + end) / 2);
  return tree[i] = Math.min(init(start, mid, i * 2), init(mid + 1, end, i * 2 + 1));
}
init(0, n - 1, 1);

const segment = (start, end, idx, left, right) => {
  if (left > end || right < start) return 10e9;
  if (left <= start && end <= right) return tree[idx];

  const mid = Math.floor((start + end) / 2);
  return Math.min(segment(start, mid, idx * 2, left, right), segment(mid + 1, end, idx * 2 + 1, left, right));
}

const answer = [];
for (let i = n; i < input.length; i++) {
  const [left, right] = input[i].split(' ').map(Number);
  answer.push(segment(0, n - 1, 1, left - 1, right - 1));
}

console.log(answer.join('\n'));