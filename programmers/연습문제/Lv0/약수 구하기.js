function solution(n) {
  const answer = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (i === Math.sqrt(n)) answer.push(i);
    else if (!(n % i)) answer.push(n / i, i);
  }
  return answer.sort((a, b) => a - b);
}