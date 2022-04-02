const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\r\n");
const n = input.shift();

const sum = (a) => {
  let total = 0;
  a.split('').forEach(i => { if (!isNaN(i)) total += +i });
  return total;
}
input.sort((a, b) => {
  if (a.length > b.length) return 1;
  else if (a.length === b.length) {
    if (sum(a) > sum(b)) return 1;
    else if (sum(a) === sum(b)) {
      return a > b ? 1 : -1;
    }
    else return -1;
  }
  else return -1;
})

console.log(input.join('\n'));