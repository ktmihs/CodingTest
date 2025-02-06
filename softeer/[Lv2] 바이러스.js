const [K, P, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(' ').map(Number);
const MOD = BigInt(1000000007);
let answer = BigInt(K);
for (let i = 0; i < N; i++) {
  answer = (answer * BigInt(P)) % MOD;
}
console.log(answer.toString());