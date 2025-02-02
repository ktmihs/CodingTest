const [info, grades, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = info.split(' ').map(Number);
const gradeSumList = grades.split(' ').reduce((list, grade) => {
  list.push(list[list.length - 1] + +grade);
  return list;
}, [0]);
const answerList = input.map(line => {
  const [A, B] = line.split(' ').map(Number);
  return ((gradeSumList[B] - gradeSumList[A - 1]) / (B - A + 1)).toFixed(2);
});

console.log(answerList.join('\n'));