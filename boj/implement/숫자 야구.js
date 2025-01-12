// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, ...input] = [
  '4',
  '123 1 1',
  '356 1 0',
  '327 2 0',
  '489 0 1'
];
let numList = [];
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    for (let k = 1; k <= 9; k++) {
      if (i !== j && j !== k && k !== i) numList.push(`${i}${j}${k}`);
    }
  }
}

const compare = (num1, num2) => {
  let [strike, ball] = [0, 0];
  if (num1[0] === num2[0]) strike++;
  if (num1[1] === num2[1]) strike++;
  if (num1[2] === num2[2]) strike++;
  if (num1[0] === num2[1] || num1[0] === num2[2]) ball++;
  if (num1[1] === num2[0] || num1[1] === num2[2]) ball++;
  if (num1[2] === num2[0] || num1[2] === num2[1]) ball++;
  return [strike, ball];
};

input.forEach(line => {
  const [preNum, preStrike, preBall] = line.split(' ');
  numList = numList.filter(comNum => {
    const [strike, ball] = compare(preNum, comNum);
    return +preStrike === strike && +preBall === ball;
  });
});

console.log(numList.length);