// 2161

const input = +require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0];
const arr = new Array(input + 1).fill(0).map((_, i) => i);
const answer = [];
let len = input;

while (len >= 1) {
  answer.push(arr[1]);
  const tmp = arr[2];
  for (let i = 1; i <= len - 2; i++) arr[i] = arr[i + 2];
  arr[len - 1] = tmp;
  len--;
}
console.log(answer.join(' '));