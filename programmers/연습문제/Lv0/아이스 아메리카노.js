function solution(money) {
  const PRICE = 5500;
  const cnt = ~~(money / PRICE);
  const change = money % PRICE;
  return [cnt, change];
}

function solution(money) {
  const PRICE = 5500;
  return [~~(money / PRICE), money % PRICE];
}