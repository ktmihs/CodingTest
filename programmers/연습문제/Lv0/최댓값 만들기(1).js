function solution(numbers) {
  numbers.sort((prev, next) => next - prev);
  return numbers[0] * numbers[1];
}