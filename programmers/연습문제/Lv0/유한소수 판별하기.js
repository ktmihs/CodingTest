function solution(a, b) {
  const GCD = (num1, num2) => (num2 > 0 ? GCD(num2, num1 % num2) : num1);
  b /= GCD(a, b);

  while (b !== 1) {
    if (Number.isInteger(b / 2)) b /= 2;
    else if (Number.isInteger(b / 5)) b /= 5;
    else return 2;
  }
  return 1;
}