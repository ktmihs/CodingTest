// 6588

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const isPrime = number => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (!(number % i)) return false;
  }
  return true;
}

input.forEach(n => {
  if (n === 0) return;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i) && isPrime(n - i)) return console.log(`${n} = ${i} + ${n-i}`);
  }
  return console.log("Goldbach's conjecture is wrong.");
})