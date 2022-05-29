// 1485

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();

const distance = (A, B) => {
  const [x1, y1] = A.split(' ').map(Number);
  const [x2, y2] = B.split(' ').map(Number);

  return Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2);
}

const isSquare = (points) => {
  const hash = new Map();
  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      const d = distance(points[i], points[j]);
      hash.set(d, (hash.get(d) || 0) + 1);
    }
  }
  const list = [...hash].sort((a, b) => b[1] - a[1]);
  return list.length === 2 && list[0][1] === 4 && list[1][1] === 2 ? 1 : 0;
}

for (let i = 0; i < n; i++) console.log(isSquare([input[i * 4], input[i * 4 + 1], input[i * 4 + 2], input[i * 4 + 3]]));