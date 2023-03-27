const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
const print = n => {
  for (let i = 1; i <= n; i++) input.push('*'.repeat(i));
}

rl.on('line', function (line) {
  input.push(+line.trim());
}).on('close', function () {
  print(input.pop());
  console.log(input.join('\n'));
});