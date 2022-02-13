// 잠수함식별

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

/^(100+1+|01)+$/.test(input) ? console.log('SUBMARINE') : console.log('NOISE');