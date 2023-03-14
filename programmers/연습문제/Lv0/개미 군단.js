function solution(hp) {
  return [5, 3, 1].reduce((total, ant) => {
    total += Math.floor(hp / ant);
    hp %= ant;
    return total;
  }, 0);
}