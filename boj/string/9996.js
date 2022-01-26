const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const len = +input.shift();
const [front, back] = input.shift().split('*');

let regFront = new RegExp(`^${front}`, "g");
let regBack = new RegExp(`${back}$`, "g");

input.forEach(str => {
  if (front.length + back.length <= str.length && str.match(regFront) && str.match(regBack)) console.log('DA');
  else console.log('NE');
})