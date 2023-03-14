function solution(numbers, k) {
  const len = numbers.length;
  let order, idx;
  if (len % 2) {
    order = k % len || len;
    idx = order - 1 < len / 2 ? (order - 1) * 2 : (order - Math.ceil(len / 2)) * 2 - 1;

  } else {
    order = k % (len / 2) || (len / 2);
    idx = (order - 1) * 2;
  }
  return numbers[idx];
}

function solution(numbers, k) {
  return numbers[((k - 1) * 2) % numbers.length];
}