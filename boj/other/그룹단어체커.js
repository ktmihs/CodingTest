const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

input.shift();
let answer = 0;
input.forEach(word => {
  const check = new Array(26).fill(0);
  let groupWord = 1;
  word += ' ';
  outer: for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i + 1]) {
      if (check[word[i].charCodeAt(0) - 97]) {
        groupWord = 0;
        break outer;
      } else check[word[i].charCodeAt(0) - 97] = 1;
    }
  }
  answer += groupWord;
})

console.log(answer);