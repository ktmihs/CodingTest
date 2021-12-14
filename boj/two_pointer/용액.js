const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt'
let input = fs.readFileSync(filePath).toString().trim().split("\n")

const lq = input[1].split(' ').map(a => +a)

lq.sort((a, b) => Math.abs(a) - Math.abs(b))

let answer = Infinity
let x, y
for (let i = 0; i < lq.length - 1; i++) {
  if (Math.abs(lq[i] + lq[i + 1]) < answer) {
    answer = Math.abs(lq[i] + lq[i + 1]);
    x = Math.min(lq[i], lq[i + 1]);
    y = Math.max(lq[i], lq[i + 1]);
  }
}
console.log(x, y)