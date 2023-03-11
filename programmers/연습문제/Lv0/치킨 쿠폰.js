const calc = (n, total) => {
  const service = Math.floor(n / 10);
  return service ? calc(n - 9 * service, service + total) : total;
}

function solution(chicken) {
  return calc(chicken, 0);
}