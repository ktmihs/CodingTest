// 6118

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
const shed = [...new Array(n + 1)].map(e => []);
const checked = new Array(n + 1).fill(0);
checked[1] = 1;
input.forEach(line => {
  const [a, b] = line.split(' ').map(Number);
  shed[a].push(b);
  shed[b].push(a);
})

let queue = [1], cnt = -1, answer;
while (queue.length) {
  const tmp = queue.slice();
  answer = tmp;
  queue = [];

  for (const x of tmp) {
    for (const z of shed[x]) {
      if (!checked[z]) {
        checked[z] = 1;
        queue.push(z);
      }
    }
  }
  cnt++;
}

console.log(`${answer.sort((a, b) => a - b)[0]} ${cnt} ${answer.length}`);