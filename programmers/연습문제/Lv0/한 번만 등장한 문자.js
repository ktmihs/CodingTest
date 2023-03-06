function solution(s) {
  const words = [...new Set(s)];

  return words.filter(word => s.indexOf(word) === s.lastIndexOf(word)).sort().join('');
}