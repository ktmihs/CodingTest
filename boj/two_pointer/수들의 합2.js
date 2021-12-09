const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt'
let input = fs.readFileSync(filePath).toString().trim().split("\n")

let [n, m] = input[0].split(' ').map(a => +a)
let arr = input[1].split(' ').map(a => +a)

let left = 0,
  right = 0,
  answer = 0,
  sum = 0
while (right < n) {
  sum += arr[right++]
  while (sum > m) {
    sum -= arr[left++]
  }
  if (sum === m) answer++
}
console.log(answer)