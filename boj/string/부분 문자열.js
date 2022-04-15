// 16916

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const len = arr[1].length;
const pi = new Array(len + 1);
let answer = 0, i = -1, j = 0;
pi[j] = i;

while (j < len) {
  if (i === -1 || arr[1][i] == arr[1][j]) pi[++j] = ++i;
  else i = pi[i];
}

i = j = 0;
while (i < arr[0].length) {
  if (j === -1 || arr[0][i] === arr[1][j]) {
    i++;
    j++;
  } else j = pi[j];

  if (j === len) {
    answer = 1;
    break;
  }
}
console.log(answer);