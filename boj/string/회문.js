// 17609

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
const answer = [];

input.forEach(palindrome => {
  const func = (palindrome, flag) => {
    let left = 0, right = palindrome.length - 1;
    while (left <= right) {
      if (palindrome[left] !== palindrome[right]) {
        if (flag) return 2;
        else {
          if (!func(palindrome.slice(left + 1, right + 1), 1) || !func(palindrome.slice(left, right), 1)) return 1;
          else return 2;
        }
      } else {
        left++;
        right--;
      }
    }
    return 0;
  }
  answer.push(func(palindrome, 0));
});

console.log(answer.join('\n'));