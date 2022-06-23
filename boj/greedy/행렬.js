// 1080

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
const A = input.slice(0, n).map(line => line.split('').map(Number));
const B = input.slice(n).map(line => line.split('').map(Number));

let answer = 0;
const Change = (x, y) => {
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) A[i][j] = A[i][j] ^ 1;
  }
}

outer: for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (i >= n - 2 || j >= m - 2) {
      if (A[i][j] !== B[i][j]) {
        answer = -1;
        break outer;
      } else continue;
    }
    if (A[i][j] !== B[i][j]) {
      Change(i, j);
      answer++;
    }
  }
}

console.log(answer);