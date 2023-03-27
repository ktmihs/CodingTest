function solution(n) {
  const answer = new Set();
  let i = 2;
  while (n !== 1) {
    if (!(n % i)) i++;
    else {
      answer.add(i);
      n /= i;
    }
  }
  return [...answer];
}