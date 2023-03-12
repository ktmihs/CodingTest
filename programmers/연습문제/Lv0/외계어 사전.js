function solution(spell, dic) {
  return +dic.some(word => spell.every(char => word.includes(char))) || 2;
}

function solution(spell, dic) {
  return +dic.some(word => spell.every(char => word.includes(char) && word.indexOf(char) === word.lastIndexOf(char))) || 2;
}