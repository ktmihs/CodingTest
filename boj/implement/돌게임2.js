// 9656

console.log(+require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0] % 2 === 0 ? 'SK' : 'CY');