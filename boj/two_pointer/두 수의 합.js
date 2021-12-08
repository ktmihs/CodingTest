const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt'
let input = fs.readFileSync(filePath).toString().trim().split("\n")

let nums = input[1].split(' ').map(a => +a).sort((a, b) => a - b)
let x = parseInt(input[2])

let left = 0,
  right = nums.length - 1;
answer = 0
while (left < right) {
  if (nums[left] + nums[right] === x) {
    left++
    right--
    answer++
  } else if (nums[left] + nums[right] > x) right--
  else left++
}
console.log(answer)