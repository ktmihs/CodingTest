// 9655

console.log(+require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0] % 2 ? 'SK' : 'CY');