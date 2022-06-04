// 2564

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [w, h] = input.shift().split(' ').map(Number);

input.shift();
const [d, dPos] = input.pop().split(' ').map(Number);

let answer = 0;
input.forEach(line => {
  const [dir, pos] = line.split(' ').map(Number);

  if (d === 1) {
    if (dir === 1) answer += Math.abs(dPos - pos);
    else if (dir === 2) answer += w - Math.abs(w - (pos + dPos)) + h;
    else if (dir === 3) answer += dPos + pos;
    else answer += (w - dPos) + pos;
  } else if (d === 2) {
    if (dir === 1) answer += w - Math.abs(w - (pos + dPos)) + h;
    else if (dir === 2) answer += Math.abs(dPos - pos);
    else if (dir === 3) answer += dPos + (h - pos);
    else answer += (w - dPos) + (h - pos);
  } else if (d === 3) {
    if (dir === 1) answer += dPos + pos;
    else if (dir === 2) answer += (h - dPos) + pos;
    else if (dir === 3) answer += Math.abs(dPos - pos);
    else answer += w - Math.abs(h - (pos + dPos)) + h;
  } else {
    if (dir === 1) answer += dPos + (w - pos);
    else if (dir === 2) answer += (h - dPos) + (w - pos);
    else if (dir === 3) answer += w - Math.abs(h - (pos + dPos)) + h;
    else answer += Math.abs(dPos - pos);
  }
})

console.log(answer);