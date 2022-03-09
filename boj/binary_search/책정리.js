// 1818

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
const arr = input[0].split(' ').map(Number);
const save = [0];

const BS = n => {
  let left = 0, right = save.length;
  let answer = 0;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (save[middle] < n) {
      answer = middle;
      left = middle + 1;
    } else right = middle - 1;
  }
  return answer;
}

for (let i = 0; i < n; i++) {
  const index = BS(arr[i]);
  if (save.length <= index) save.push(arr[i]);
  else save[index + 1] = arr[i];
}
console.log(n - (save.length - 1));