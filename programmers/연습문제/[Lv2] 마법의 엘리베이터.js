function solution(storey) {
  let answer = 0;
  while (storey) {
    const len = String(storey).length - 1;
    if (!len) break;
    const [fir, sec] = [...storey + ''].slice(0, 2).map(Number);
    if (sec > 5 || sec === 5 && fir >= 5) {
      answer += fir < 5 ? fir + 1 : 10 - fir;
      storey = (fir + 1) * 10 ** len - storey;
    }
    else {
      answer += fir <= 5 ? fir : 10 - fir + 1;
      storey -= fir * 10 ** len;
    }
  }
  return answer + storey;
}