function solution(polynomial) {
  const list = polynomial.split(' + ').reduce((arr, expr) => {
    const coef = expr.split('x');
    if (coef.length === 1) arr[1] += +coef[0];
    else arr[0] += coef[0] ? +coef[0] : 1;
    return arr;
  }, [0, 0]);

  list[0] = list[0] ? list[0] === 1 ? 'x' : list[0] + 'x' : '';

  return list.filter(item => item).join(' + ');
}