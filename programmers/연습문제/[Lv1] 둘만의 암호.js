function solution(s, skip, index) {
  const list = [];

  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(97 + i);
    if (skip.indexOf(char) === -1) list.push(char);
  }

  return [...s].map(char => {
    const idx = list.indexOf(char);
    return list[(idx + index) % list.length];
  }).join('');
}