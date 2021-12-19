const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt'
let input = fs.readFileSync(filePath).toString().trim().split("\n")

const maxCnt = +input[0]
const str = input[1]

const hash = new Map()
let maxLen = 0

let left = 0,
  right = 0
while (right < str.length) {
  hash.set(str[right], (hash.get(str[right]) || 0) + 1)
  right++
  while (maxCnt < hash.size) {
    hash.set(str[left], (hash.get(str[left]) || 0) - 1)

    if (hash.get(str[left]) === 0) hash.delete(str[left])
    left++
  }
  maxLen = maxLen < right - left ? right - left : maxLen
}
console.log(maxLen)