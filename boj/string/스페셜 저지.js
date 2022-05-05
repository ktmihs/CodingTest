// 9253

const fs = require('fs');
const arr = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const len = arr[2].length;
const pi = new Array(len + 1);
let i = -1, j = 0;
pi[j] = i;

while (j < len) {
  if (i === -1 || arr[2][i] == arr[2][j]) pi[++j] = ++i;
  else i = pi[i];
}

const KMP = str => {
  i = j = 0;
  while (i < str.length) {
    if (j === -1 || str[i] === arr[2][j]) {
      i++;
      j++;
    } else j = pi[j];

    if (j === len) return 1;
  }
}

KMP(arr[0]) && KMP(arr[1]) ? console.log('YES') : console.log('NO');