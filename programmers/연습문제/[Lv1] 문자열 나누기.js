function solution(s) {
  let answer = 0;
  let x = '', xCnt = 0, otherCnt = 0;

  [...s].forEach(char => {
    if (!x) x = char;

    if (x === char) xCnt++;
    else otherCnt++;

    if (xCnt === otherCnt) {
      xCnt = 0;
      otherCnt = 0;
      answer++;
      x = '';
    }
  })
  if (xCnt !== otherCnt) answer++;

  return answer;
}