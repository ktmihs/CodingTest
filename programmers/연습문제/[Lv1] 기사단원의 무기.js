const divisors = num => new Array(Math.floor(Math.sqrt(num))).fill().reduce((answer, _, i) => {
  if ((i + 1) === Math.sqrt(num)) answer.push(i + 1);
  else if (!(num % (i + 1))) answer.push(num / (i + 1), i + 1);
  return answer;
}, []);

function solution(number, limit, power) {
  return new Array(number).fill().reduce((total, _, i) => {
    const cnt = divisors(i + 1).length;
    total += limit < cnt ? power : cnt;
    return total;
  }, 0);
}