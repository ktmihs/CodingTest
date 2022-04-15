// 1701

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const str = fs.readFileSync(filePath).toString().trim().split("\n")[0];

const KMP = (str) => {
  const len = str.length;
  const pi = new Array(len + 1);
  let answer = 0, i = -1, j = 0;
  pi[j] = i;

  while (j < len) {
    if (i === -1 || str[i] == str[j]) {
      pi[++j] = ++i;
      if (answer < pi[j]) answer = pi[j];
    } else i = pi[i];
  }
  return answer;
}

let result = 0;
for (let k = 0; k < str.length; k++) {
  result = Math.max(result, KMP(str.slice(k)));
}

console.log(result);