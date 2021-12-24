const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift()
let dice = new Array(n);
for (let i = 0; i < n; i++) dice[i] = input[i].split(' ').map(Number)

// function solution() {
//   const match = [5, 3, 4, 1, 2, 0];
//   let answer = 0;

//   function DFS(L, bottom) {
//     if (n > 5000){}
//       if (L === n) return 0;
//     let i = 0
//     for (i = 0; i < 6; i++) {
//       if (dice[L][i] === bottom) break;
//     }
//     let side = 0;
//     if (Math.max(bottom, dice[L][match[i]]) !== 6) side = 6;
//     else if (Math.min(bottom, dice[L][match[i]]) !== 5) side = 5;
//     else side = 4;
//     return DFS(L + 1, dice[L][match[i]]) + side;
//   }
//   for (let i = 0; i < 6; i++) answer = Math.max(answer, DFS(0, dice[0][i]))
//   return answer;
// }
function solution(dice) {
  const n = dice.length;
  const match = [5, 3, 4, 1, 2, 0];
  let answer = 0;
  for (let k = 0; k < 6; k++) {
    let tmp = 0,
      bottom = dice[0][k];
    for (let L = 0; L < n; L++) {
      let i = 0
      for (i = 0; i < 6; i++) {
        if (dice[L][i] === bottom) break;
      }
      let side = 0;
      if (Math.max(bottom, dice[L][match[i]]) !== 6) side = 6;
      else if (Math.min(bottom, dice[L][match[i]]) !== 5) side = 5;
      else side = 4;
      bottom = dice[L][match[i]]
      tmp += side;
    }
    answer = Math.max(answer, tmp)
  }
  return answer;
}
console.log(solution())