// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0];
const input = 'baekjoon';
const answer = 'abcdefghijklmnopqrstuvwxyz'.split('').map(char => input.indexOf(char)).join(' ');
console.log(answer);