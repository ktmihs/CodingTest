// 7568

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = +input.shift();
const people = input.map(person => person.split(' ').map(Number));

const answer = [];
for (let i = 0; i < n; i++) {
  let cnt = 0;
  for (let j = 0; j < n; j++) {
    if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) cnt++;
  }
  answer.push(cnt + 1);
}
console.log(answer.join(' '));