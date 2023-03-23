const isPrime = num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (!(num % i)) return false;
  }
  return true;
}

function solution(n) {
  return new Array(n - 1).fill().filter((_, i) => !isPrime(i + 2)).length;
}