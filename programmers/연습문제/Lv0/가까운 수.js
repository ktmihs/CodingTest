function solution(array, n) {
  let answer = 10e9;
  array.forEach(num => {
    if (Math.abs(num - n) === Math.abs(answer - n)) answer = Math.min(answer, num);
    if (Math.abs(num - n) < Math.abs(answer - n)) answer = num;
  });
  return answer;
}