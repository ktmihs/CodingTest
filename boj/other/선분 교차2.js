// 17387

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const A = input[0].split(' ').map(Number);
const B = input[1].split(' ').map(Number);

const CCW = (x, y, w) => {
  const result = (y[0] - x[0]) * (w[1] - x[1]) - (y[1] - x[1]) * (w[0] - x[0]);
  if (!result) return 0;
  return result > 0 ? 1 : -1;
}

const first = CCW([A[0], A[1]], [A[2], A[3]], [B[0], B[1]]) * CCW([A[0], A[1]], [A[2], A[3]], [B[2], B[3]]);
const second = CCW([B[0], B[1]], [B[2], B[3]], [A[0], A[1]]) * CCW([B[0], B[1]], [B[2], B[3]], [A[2], A[3]]);
if (first <= 0 && second <= 0) {
  if (!first && !second) {
    if (Math.min(A[0], A[2]) <= Math.max(B[0], B[2]) && Math.max(A[0], A[2]) >= Math.min(B[0], B[2]) && Math.min(A[1], A[3]) <= Math.max(B[1], B[3]) && Math.max(A[1], A[3]) >= Math.min(B[1], B[3])) console.log(1);
    else console.log(0);
  } else console.log(1);
}
else console.log(0);