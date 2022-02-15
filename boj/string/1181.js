// 단어 정렬

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

const arr = [...new Set(input)];
arr.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  } else return a.length - b.length;
})

console.log(arr.join('\n'));