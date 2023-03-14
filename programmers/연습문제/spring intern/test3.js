function solution(queries) {
  return queries.map(query => {
    const len = query.length;
    const front = query.slice(0, Math.floor(len / 2));
    const back = query.slice(Math.ceil(len / 2)).reverse();

    return front.reduce((total, num, idx) => total + Math.abs(num - back[idx]), 0) % 2;
  })
}