// 15815

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0];
const stack = [];
const operator = (a, b, o) => o === '-' ? a - b : o === '+' ? a + b : o === '*' ? a * b : a / b;

[...input].forEach(oper => {
  if (!isNaN(+oper)) stack.push(+oper);
  else {
    const b = stack.pop();
    const a = stack.pop();
    +stack.push(operator(a, b, oper));
  }
});

console.log(stack[0]);