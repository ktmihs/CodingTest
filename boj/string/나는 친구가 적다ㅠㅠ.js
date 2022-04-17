// 16172

const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const len = str[1].length;
const pi = new Array(len + 1);
let answer = 0, i = -1, j = 0;
pi[j] = i;

while (j < len) {
  if (i === -1 || str[1][i] == str[1][j]) pi[++j] = ++i;
  else i = pi[i];
}

i = j = 0;
while (i < str[0].length) {
  if (!isNaN(str[0][i])) i++;
  else if (j === -1 || str[0][i] === str[1][j]) {
    i++;
    j++;
  } else j = pi[j];

  if (j === len) {
    answer = 1;
    break;
  }
}
console.log(answer);