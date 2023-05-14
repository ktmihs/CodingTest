function solution(str1, str2) {
  return [...str1].reduce((res, char, i) => res + char + str2[i], '');
}