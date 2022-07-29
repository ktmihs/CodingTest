// 10825

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

input.shift();
const list = input.map(line => line.split(' '));

list.sort((a, b) => {
  if (+a[1] < +b[1]) return 1;
  else if (+a[1] > +b[1]) return -1;
  else {
    if (+a[2] > +b[2]) return 1;
    else if (+a[2] < +b[2]) return -1;
    else {
      if (+a[3] < +b[3]) return 1;
      else if (+a[3] > +b[3]) return -1;
      else {
        return a[0] > b[0] ? 1 : -1;
      }
    }
  }
})

console.log(list.map(item => item[0]).join('\n'));