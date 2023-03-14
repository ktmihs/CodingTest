function solution(a, b, n) {
  let answer = 0;

  const bottle = cnt => {
    if (cnt < a) return;
    const S = Math.floor(cnt / a);
    const left = cnt - (S * a);
    const get = S * b;

    answer += get;
    bottle(left + get);
  }

  bottle(n);
  return answer;
}