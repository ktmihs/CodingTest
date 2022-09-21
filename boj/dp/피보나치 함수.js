// 1003

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number).slice(1);

console.log(input.map(n => {
  let oneCount = 0, zeroCount = 1;

  for (let j = 1; j <= n; j++) {
    const tmpCount = zeroCount;

    zeroCount = oneCount;
    oneCount = tmpCount + oneCount;
  }
  return `${zeroCount} ${oneCount}`;
}).join('\n'));