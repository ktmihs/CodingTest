function solution(array, height) {
  return [...array, height].sort((prev, next) => next - prev).indexOf(height);
}