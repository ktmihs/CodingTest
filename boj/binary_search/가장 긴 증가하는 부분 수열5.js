// 14003

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const arr = input[1].split(' ').map(Number);
const save = [Number.MIN_SAFE_INTEGER];

const BS = n => {
  let left = 0, right = save.length, answer = 0;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (save[middle] < n) {
      answer = middle;
      left = middle + 1;
    } else right = middle - 1;
  }
  return answer;
}

const pair = [];

for (let i = 0; i < +input[0]; i++) {
  const index = BS(arr[i]);
  pair[i] = index;
  if (save.length <= index) save.push(arr[i]);
  else save[index + 1] = arr[i];
}

let len = save.length - 1;
const answer = [];

for (let i = pair.length - 1; i >= 0; i--) {
  if (!len) break;
  if (pair[i] === len - 1) {
    answer.push(arr[i]);
    len--;
  }
}

console.log(answer.length);
console.log(answer.reverse().join(' '));