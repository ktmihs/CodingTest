// 14891

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const wheels = [...Array(4)].map(e => input.shift());
const n = +input.shift();

input.forEach(rotate => {
  const [idx, dir] = rotate.split(' ').map(Number);

  const L = wheels[idx - 1][6];
  const R = wheels[idx - 1][2];

  const LRotate = wheel => wheel.slice(1, 8) + wheel[0];
  const RRotate = wheel => wheel[7] + wheel.slice(0, 7);

  wheels[idx - 1] = dir === 1 ? RRotate(wheels[idx - 1]) : LRotate(wheels[idx - 1]);

  if (idx < 4 && R !== wheels[idx][6]) {
    const R = wheels[idx][2];
    wheels[idx] = dir === 1 ? LRotate(wheels[idx]) : RRotate(wheels[idx]);
    if (idx + 1 < 4 && R !== wheels[idx + 1][6]) {
      const R = wheels[idx + 1][2];
      wheels[idx + 1] = dir === 1 ? RRotate(wheels[idx + 1]) : LRotate(wheels[idx + 1]);
      if (idx + 2 < 4 && R !== wheels[idx + 2][6]) {
        wheels[idx + 2] = dir === 1 ? LRotate(wheels[idx + 2]) : RRotate(wheels[idx + 2]);
      }
    }
  }

  if (idx - 2 >= 0 && L !== wheels[idx - 2][2]) {
    const L = wheels[idx - 2][6];
    wheels[idx - 2] = dir === 1 ? LRotate(wheels[idx - 2]) : RRotate(wheels[idx - 2]);
    if (idx - 3 >= 0 && L !== wheels[idx - 3][2]) {
      const L = wheels[idx - 3][6];
      wheels[idx - 3] = dir === 1 ? RRotate(wheels[idx - 3]) : LRotate(wheels[idx - 3]);
      if (idx - 4 >= 0 && L !== wheels[idx - 4][2]) {
        wheels[idx - 4] = dir === 1 ? LRotate(wheels[idx - 4]) : RRotate(wheels[idx - 4]);
      }
    }
  }
})

console.log(wheels.reduce((sum, wheel, i) => ! +wheel[0] ? sum + 0 : sum + 2 ** i, 0));