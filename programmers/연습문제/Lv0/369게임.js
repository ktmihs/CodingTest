function solution(order) {
  return [...(order + '')].filter(num => +num && !(num % 3)).length;
}

function solution(order) {
  return [...(order + '').matchAll(/[369]/g)].length;
}