// 1786

// 공백도 문자열로 취급하기 때문에 readline으로 해결
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];

rl.on('line', function (line) {
  arr.push(line)
}).on('close', function () {
  const len = arr[1].length;
  const pi = new Array(len + 1);
  const answerIdx = [];
  let answer = 0, i = -1, j = 0;
  pi[j] = i;
  while (j < len) {
    if (i === -1 || arr[1][i] == arr[1][j]) pi[++j] = ++i;
    else i = pi[i];
  }

  i = j = 0;
  while (i < arr[0].length) {
    if (j === -1 || arr[0][i] === arr[1][j]) {
      i++;
      j++;
    } else j = pi[j];

    if (j === len) {
      answer++;
      answerIdx.push(i - len + 1);
      j = pi[j];
    }
  }
  console.log(answer);
  console.log(answerIdx.join(' '));
});