// 14490

const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0].split(':').map(Number);

const GCD = (A, B) => {
  if (A < B) {
    let tmp = A;
    A = B;
    B = tmp;
  } if (!B) return A;
  if (!(A % B)) return B;
  else return GCD(B, A % B);
}

const gcd = GCD(A, B);
console.log(`${A / gcd}:${B / gcd}`)