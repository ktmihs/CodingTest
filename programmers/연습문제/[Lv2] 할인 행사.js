function solution(want, number, discount) {
  const product = new Map();
  number.forEach((n, i) => {
    for (let k = 0; k < n; k++) product.set(want[i], (product.get(want[i]) || 0) + 1);
  })

  let answer = 0;
  discount.forEach((prod, i) => {
    if (i - 10 >= 0 && product.has(discount[i - 10])) product.set(discount[i - 10], product.get(discount[i - 10]) + 1);
    product.set(prod, (product.get(discount[i]) || 0) - 1);
    if ([...product].every(([i, j]) => j <= 0)) answer++;
  });
  return answer;
}