function solution(keymap, targets) {
  const hash = new Map();
  keymap.forEach(key => {
    [...key].forEach((char, i) => {
      if (!hash.has(char) || hash.get(char) > i) hash.set(char, i)
    })
  })

  return targets.map(target => {
    let cnt = 0;
    for (const char of target) {
      if (!hash.has(char)) return -1;
      cnt += hash.get(char) + 1;
    }
    return cnt;
  });
}