// 2357

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);

const minTree = new Array(n * 4).fill(0);
const maxTree = new Array(n * 4).fill(0);

const init = (start, end, i, isMin) => {
  if (start === end) {
    if (isMin) return minTree[i] = +input[start];
    else return maxTree[i] = +input[start];
  }
  const mid = Math.floor((start + end) / 2);
  if (isMin) return minTree[i] = Math.min(init(start, mid, i * 2, isMin), init(mid + 1, end, i * 2 + 1, isMin));
  return maxTree[i] = Math.max(init(start, mid, i * 2, isMin), init(mid + 1, end, i * 2 + 1, isMin));
}
init(0, n - 1, 1, true);
init(0, n - 1, 1, false);

const segment = (start, end, idx, left, right, isMin) => {
  if (left > end || right < start) {
    if (isMin) return 10e9;
    return -10e9;
  }
  if (left <= start && end <= right) {
    if (isMin) return minTree[idx];
    else return maxTree[idx];
  }
  const mid = Math.floor((start + end) / 2);
  if (isMin) return Math.min(segment(start, mid, idx * 2, left, right, isMin), segment(mid + 1, end, idx * 2 + 1, left, right, isMin));
  return Math.max(segment(start, mid, idx * 2, left, right, isMin), segment(mid + 1, end, idx * 2 + 1, left, right, isMin));
}

const answer = [];
for (let i = n; i < input.length; i++) {
  const [left, right] = input[i].split(' ').map(Number);
  answer.push(`${segment(0, n - 1, 1, left - 1, right - 1, true)} ${segment(0, n - 1, 1, left - 1, right - 1, false)}`);
}

console.log(answer.join('\n'));