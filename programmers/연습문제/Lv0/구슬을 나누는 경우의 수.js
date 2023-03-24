function solution(balls, share) {
  const dy = [...new Array(31)].map(() => Array(31).fill(0));

  const Combi = (balls, share) => {
    if (dy[balls][share]) return dy[balls][share];
    if (balls === share || !share) return 1;
    return (dy[balls][share] = Combi(balls - 1, share - 1) + Combi(balls - 1, share))
  }

  return Combi(balls, share);
}


function solution(balls, share) {
  const fact = num => !num ? 1 : num * fact(num - 1);

  return Math.round(fact(balls) / fact(balls - share) / fact(share));
}