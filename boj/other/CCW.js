// 11758

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const [A, B, C] = input.map(i => i.split(' ').map(Number));

const result = (B[0] - A[0]) * (C[1] - A[1]) - (B[1] - A[1]) * (C[0] - A[0]);
result > 0 ? console.log(1) : !result ? console.log(0) : console.log(-1);
