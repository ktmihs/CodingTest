// 1072

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [x, y] = fs.readFileSync(filePath).toString().trim().split("\n")[0].split(' ').map(Number);

const z = Math.floor((y * 100 / x));

if (z === (99 || 100)) return console.log(-1);

let left = 1,
  right = 1000000000,
  answer = -1;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (Math.floor(((y + mid) * 100 / (x + mid))) > z) {
    answer = mid;
    right = mid - 1;
  } else left = mid + 1;
}
console.log(answer);