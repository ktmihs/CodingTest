// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const input = ['abcdefghij'];
const strArray = input[0].split('');
const map = new Map();
const LEN = strArray.length;
strArray.forEach(str => map.set(str, (map.get(str) || 0) + 1));
const mapKeys = [...map.keys()];

let cnt = 0;
const DFS = (char, str, L) => {
  if (L === LEN) {
    return ++cnt;
  }
  mapKeys.forEach(key => {
    if (char !== key && map.get(key)) {
      map.set(key, map.get(key) - 1);
      DFS(key, str + key, L + 1);
      map.set(key, map.get(key) + 1);
    }
  });
};

mapKeys.forEach(key => {
  map.set(key, map.get(key) - 1);
  DFS(key, key, 1);
  map.set(key, map.get(key) + 1);
});

console.log(cnt);