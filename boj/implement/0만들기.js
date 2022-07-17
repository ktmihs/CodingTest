// 7490

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
input.shift();

const solved = str => {
  const list = str.split('');
  let stack = [], i = 0;
  while (i < list.length) {
    if (list[i] === ' ') stack.push(stack.pop() + list[++i]);
    else stack.push(list[i]);
    i++;
  }

  let prev = +stack[0];
  for (let i = 1; i < stack.length; i += 2) {
    if (stack[i] === '+') prev += +stack[i + 1];
    else if (stack[i] === '-') prev -= +stack[i + 1];
  }
  return prev ? null : str;
}

const answer = [];
input.forEach(i => {
  const N = +i;
  const list = [];

  const DFS = (L, str) => {
    if (L === N) {
      const res = solved((str + L));
      res && list.push(res);
      return;
    }
    DFS(L + 1, str + L + ' ');
    DFS(L + 1, str + L + '+');
    DFS(L + 1, str + L + '-');
  }

  DFS(1, '');
  answer.push(list);
})

console.log(answer.map(list => list.join('\n')).join('\n\n'));