// let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let [A, B] = ['472', '385'];
const [b3, b2, b1] = B.split('').map(Number);
console.log(+A * b1);
console.log(+A * b2);
console.log(+A * b3);
console.log(+A * +B);