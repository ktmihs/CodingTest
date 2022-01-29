// 13422

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();

for (let t = 0; t < T; t++) {
  const [n, m, k] = input[t * 2].split(' ').map(Number);
  const house = input[t * 2 + 1].split(' ').map(Number);
  house.push(...house.slice(0, m - 1));


  let sum = 0,
    cnt = 0;
  for (let i = 0; i < m - 1; i++) sum += house[i];

  for (let i = m - 1; i < house.length; i++) {
    sum += house[i];
    if (sum < k) {
      cnt++;
      if (n === m) break;
    }
    sum -= house[i - m + 1];
  }
  console.log(cnt);
}