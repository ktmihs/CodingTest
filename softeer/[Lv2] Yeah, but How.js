const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('/n')[0];

const test = input.replace(/\(\)/g, '(1)').replace(/\)\(/g, ')+(');

console.log(test);