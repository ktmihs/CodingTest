function solution(k, m, score) {
  return score.sort((a, b) => b - a).reduce((total, sc, i) => (i + 1) % m ? total : total += sc * m, 0);
}