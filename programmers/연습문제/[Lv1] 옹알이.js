function solution(babbling) {
  const reg = /^(aya|ye|woo|ma)+$/;
  const dup = /(ayaaya|yeye|woowoo|mama)+/;
  return babbling.filter(word => reg.test(word) && !dup.test(word)).length;
}