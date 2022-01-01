const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [m, n] = input[0].split(' ').map(Number);
const snack = input[1].split(' ').map(Number);
let answer = 0

function sol(left, right) {
  if (left >= right) return;
  const mid = Math.floor((left + right) / 2)
  let cnt = 0
  for (let sk of snack) cnt += Math.floor(sk / mid)
  if (m <= cnt) {
    answer = mid
    sol(mid + 1, right)
  } else sol(left, mid)
}
sol(0, 10e9 + 1)
console.log(answer)