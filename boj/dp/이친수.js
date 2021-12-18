const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt'
let input = fs.readFileSync(filePath).toString().trim().split("\n")[0]

const findPinaryNumber = len => {
  const pinaryArr = new Array(len).fill(1n)
  for (let i = 2; i < len; i++) pinaryArr[i] = pinaryArr[i - 1] + pinaryArr[i - 2]
  return (pinaryArr[len - 1] + '')
}
console.log(findPinaryNumber(+input))

// const findPinaryNumber = len => {
//   let answer = 0
//   const DFS = (L, arr) => {
//     if (L + 1 === len) {
//       answer++
//       // console.log(arr)
//       return
//     }
//     if (arr[L] === 1) DFS(L + 1, [...arr, 0])
//     else {
//       DFS(L + 1, [...arr, 0])
//       DFS(L + 1, [...arr, 1])
//     }
//   }
//   DFS(0, [1])
//   return answer
// }
// console.log(findPinaryNumber(+input))
// console.log(findPinaryNumber(90))

// const transform = n => {
//   const arr = new Array(n).fill(0).map((_, i) => (i + 1).toString(2))
//   const len = arr.filter(item => item.match(/^0|1{2,}/)).length
//   console.log(n - len)
// }
// transform(+input)