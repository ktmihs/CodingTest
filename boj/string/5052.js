// 전화번호 목록

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
let idx = 0;
const answer = [];

while (idx < input.length - 1) {
  const len = +input[idx++];
  const arr = input.slice(idx, idx + len).sort();
  let state = 'YES';
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] === arr[i + 1].slice(0, arr[i].length)) {
      state = 'NO';
      break;
    }
  }
  answer.push(state);
  idx += len;
}
console.log(answer.join('\n'));