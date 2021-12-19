const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt'
let input = fs.readFileSync(filePath).toString().trim().split("\n")

const n = +input.shift()

for (let k = 0; k < n; k++) {
  const [aa, bb] = input[k * 3].split(' ').map(a => +a)
  const prev = input[k * 3 + 1].split(' ').map(a => +a)
  prev.sort((a, b) => b - a)
  const next = input[k * 3 + 2].split(' ').map(a => +a)
  next.sort((a, b) => b - a)

  let aIdx = 0
  let bIdx = 0
  let cnt = 0
  while (aIdx < aa && bIdx < bb) {
    if (prev[aIdx] > next[bIdx]) {
      cnt += bb - bIdx
      aIdx += 1
    } else bIdx += 1
  }
  console.log(cnt)
}