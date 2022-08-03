// 11931

console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").slice(1).sort((a, b) => +b - +a).join('\n'));