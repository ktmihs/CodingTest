function solution(numer1, denom1, numer2, denom2) {
  const denom = denom1 * denom2;
  const numer = (numer1 * denom2) + (numer2 * denom1);

  const GCD = (num1, num2) => num2 ? GCD(num2, num1 % num2) : num1;

  return [numer / GCD(numer, denom), denom / GCD(numer, denom)];
}