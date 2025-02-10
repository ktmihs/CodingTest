const [cnt, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const checkList = input.map(candidate => {
  const div = Math.min(candidate / 5);
  const mod = candidate % 5;
  return `${'++++ '.repeat(div)}${'|'.repeat(mod)}`;
});
console.log(checkList.join('\n'));