function solution(r1, r2) {
  const getY = (x, r) => Math.sqrt(r ** 2 - x ** 2);
  let answer = 0;
  for (let i = 0; i <= r2; i++) {
    const y2 = getY(i, r2), y1 = r1 <= i ? 0 : getY(i, r1);
    answer += Math.floor(y2) - Math.ceil(y1) + 1;
  }
  return (answer - (r2 - r1 + 1)) * 4;
}