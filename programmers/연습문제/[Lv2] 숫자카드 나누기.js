function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);

  const calc = (standard, target) => {
    for (let std = standard[0]; std > 0; std--) {
      if (!standard.some(arr => arr % std) && target.every(arr => arr % std)) return std;
    }
    return 0;
  }
  return Math.max(calc(arrayA, arrayB), calc(arrayB, arrayA));
}