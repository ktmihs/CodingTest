// 2792

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);

const jw = input.map(Number);
jw.sort((a, b) => a - b);

let left = 0,
  right = Math.max(...jw),
  answer = right;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let children = n;
  for (let j of jw) {
    children -= Math.ceil(j / mid); // mid개로 나눴을 때 줄 수 있는 학생 수
    if (children < 0) break;
  }
  if (children < 0) left = mid + 1;
  else {
    right = mid - 1;
    answer = Math.min(answer, mid);
  }
}
console.log(answer);