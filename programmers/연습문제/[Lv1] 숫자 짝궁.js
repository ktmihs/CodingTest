function solution(X, Y) {
  const answer = [];
  const sameNumber = new Map();

  [...X].forEach(num => sameNumber.set(num, (sameNumber.get(num) || 0) + 1));

  [...Y].forEach(num => {
    if (!sameNumber.get(num)) sameNumber.delete(num);
    else {
      answer.push(+num);
      sameNumber.set(num, sameNumber.get(num) - 1);
    }
  });

  if (!answer.length) return '-1';
  if (answer.every(num => !num)) return '0';
  return answer.sort((a, b) => b - a).join('');
}