const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const totalTime = input.reduce((sum, line) => {
  const [start, end] = line.split(' ').map(time => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  });
  return sum + (end - start);
}, 0);

console.log(totalTime);