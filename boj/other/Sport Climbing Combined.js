// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const input = [
  '4',
  '301 4 3 2',
  '815 2 2 1',
  '717 1 1 4',
  '505 3 4 2'
].slice(1).map(line => line.split(' '));
const ranking = input.sort((a, b) => {
  if (+a[1] * +a[2] * +a[3] > +b[1] * +b[2] * +b[3]) return 1;
  if (+a[1] * +a[2] * +a[3] < +b[1] * +b[2] * +b[3]) return -1;
  if (+a[1] + +a[2] + +a[3] > +b[1] + +b[2] + +b[3]) return 1;
  if (+a[1] + +a[2] + +a[3] < +b[1] + +b[2] + +b[3]) return -1;
  return +a[0] - +b[0];
}).slice(0, 3);
console.log(ranking.map(line => line[0]).join(' '));
