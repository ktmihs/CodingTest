// 1969

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);

const DNAList = new Array(m);
let HD = 0;

for (let i = 0; i < m; i++) {
  const maxChar = new Map();
  for (let j = 0; j < n; j++) maxChar.set(input[j][i], (maxChar.get(input[j][i]) || 0) + 1);
  const [maxDNA, maxCnt] = [...maxChar].sort((a, b) => {
    if (b[1] === a[1]) return a[0] > b[0] ? 1 : -1;
    return b[1] > a[1] ? 1 : -1;
  })[0];
  DNAList[i] = maxDNA;
  HD += (n - maxCnt);
}

console.log(DNAList.join(''));
console.log(HD);