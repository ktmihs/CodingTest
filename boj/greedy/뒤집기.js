// 1439

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

console.log(Math.min(input.split('0').filter(i => i !== '').length, input.split('1').filter(i => i !== '').length));