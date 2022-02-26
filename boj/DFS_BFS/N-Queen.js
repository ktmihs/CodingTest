// 9663

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = +fs.readFileSync(filePath).toString().trim().split("\n")[0];

const isAvailable = (check, col) => {
  for (let row = 0; row < check.length; row++) {
    if (col === check[row] || Math.abs(col - check[row]) === check.length - row) return false;
  }
  return true;
}

const DFS = (check, row, result) => {
  if (row === input) {
    result.push(check.slice());
    return;
  }
  for (let col = 0; col < input; col++) {
    if (isAvailable(check, col)) {
      check.push(col);
      DFS(check, row + 1, result);
      check.pop();
    }
  }
  return result.length;
}

console.log(DFS([], 0, []));