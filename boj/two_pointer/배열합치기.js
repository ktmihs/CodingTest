const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt'
let input = fs.readFileSync(filePath).toString().trim().split("\n")

let [n, m] = input[0].split(' ').map(a => +a)
let A = input[1].split(' ').map(a => +a)
let B = input[2].split(' ').map(a => +a)

let arr = [...A, ...B]

arr.sort((a, b) => a - b)

console.log(arr.join(' '))