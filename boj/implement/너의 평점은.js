const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(line => line.split(' '));
const GRADE = {
  'A+': 4.5,
  'A0': 4.0,
  'B+': 3.5,
  'B0': 3.0,
  'C+': 2.5,
  'C0': 2.0,
  'D+': 1.5,
  'D0': 1.0,
  'F': 0.0
};

const [sum, cnt] = input.reduce(([sum, cnt], [_, credit, grade]) => {
  if (grade === 'P') return [sum, cnt];
  return [sum + (+credit * GRADE[grade]), cnt + +credit];
}, [0, 0]);

console.log((sum / cnt).toFixed(6));