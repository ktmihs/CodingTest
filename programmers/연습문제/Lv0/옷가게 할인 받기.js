function solution(price) {
  if (price < 10e4) return price;
  if (price < 10e4 * 3) return ~~(price * 0.95);
  if (price < 10e4 * 5) return ~~(price * 0.9);
  return ~~(price * 0.8);
}