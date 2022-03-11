// 2852

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
input.push('0 48:00');

let winner = 0;
const lastScore = [0, 0];
const answer = [0, 0];
let lastTime = 0;

input.forEach(goal => {
  const [team, time] = goal.split(' ');
  const [minute, second] = time.split(':').map(Number);

  if (+team) lastScore[+team - 1]++;

  if (winner === 2 && lastScore[1] >= lastScore[0]) answer[1] += (minute * 60 + second) - (lastTime);
  else if (winner === 1 && lastScore[0] >= lastScore[1]) answer[0] += (minute * 60 + second) - (lastTime);

  lastTime = minute * 60 + second;
  winner = lastScore[1] > lastScore[0] ? 2 : lastScore[1] < lastScore[0] ? 1 : 0;
})

answer.forEach(team => console.log(`${Math.floor(team / 60) < 10 ? '0' + Math.floor(team / 60) : Math.floor(team / 60)}:${team % 60 < 10 ? '0' + team % 60 : team % 60}`));