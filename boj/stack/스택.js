const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const commands = input.slice(1);
const stack = [];
const log = [];

commands.forEach(command => {
  const [comm, ...num] = command.split(' ');
  if (comm === 'push') {
    stack.push(+num[0]);
  } else if (comm === 'pop') {
    const pop = stack.pop();
    log.push(pop || -1);
  } else if (comm === 'size') {
    log.push(stack.length);
  } else if (comm === 'empty') {
    log.push(stack.length ? 0 : 1);
  } else if (comm === 'top') {
    log.push(stack.at(-1) || -1);
  }
});

console.log(log.join('\n'));