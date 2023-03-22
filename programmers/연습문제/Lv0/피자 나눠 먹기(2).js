function solution(n) {
  const GCD = (num1, num2) => (num2 > 0 ? GCD(num2, num1 % num2) : num1);
  return n * 6 / GCD(n, 6);
}