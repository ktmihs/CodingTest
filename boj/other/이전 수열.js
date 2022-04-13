// 10973

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const n = +input[0];
const arr = input[1].split(' ').map(Number);

const Func = () => {
  for (let i = n - 1; i > 0; i--) {
    if (arr[i - 1] > arr[i]) {
      let nextArr = arr.slice(i - 1);
      nextArr.sort((a, b) => b - a);
      const next = nextArr.splice(nextArr.indexOf(arr[i - 1]) + 1, 1);
      return [...arr.slice(0, i - 1), next, ...nextArr];
    }
  }
  return [-1];
}

console.log(Func().join(' '));