const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt'
let input = fs.readFileSync(filePath).toString().trim().split("\n")

let arr = input[1].split(' ').map(a => +a).sort((a, b) => a - b)

let left = 0,
  right = arr.length - 1
let min = Math.abs(arr[left] + arr[right]),
  al = left,
  ac = right

while (left < right) {
  if (Math.abs(arr[left] + arr[right]) < min) {
    min = Math.abs(arr[left] + arr[right])
    al = left
    ac = right
  }
  if (arr[left] + arr[right] > 0) right--
  else left++
}
console.log(arr[al], arr[ac])