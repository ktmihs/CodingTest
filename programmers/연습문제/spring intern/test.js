function solution(lotteries) {
  const calcLotteries = lotteries.map((lottery, idx) => {
    const [winner, getter, price] = lottery;

    let per = winner / (getter + 1);
    if (winner > getter) per = 1;
    return [per, price, idx + 1];
  });

  calcLotteries.sort((prev, next) => {
    if (prev[0] < next[0]) return 1;
    if (prev[0] === next[0]) {
      if (prev[1] < next[1]) return 1;
      return -1;
    }
    return -1;
  });

  return calcLotteries[0][2];
}