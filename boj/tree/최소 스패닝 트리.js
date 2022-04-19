// 1197

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const [v, e] = input.shift().split(' ').map(Number);
const tree = input.map(edge => edge.split(' ').map(Number));

const find = (set, x) => {
  if (set[x] === x) return x;
  return (set[x] = find(set, set[x]));
}
const union = (set, a, b) => {
  a = find(set, a);
  b = find(set, b);

  a < b ? set[b] = a : set[a] = b;
}
const findParent = (set, a, b) => {
  a = find(set, a);
  b = find(set, b);

  return a === b ? true : false;
}
tree.sort((a, b) => a[2] - b[2]);

const set = new Array(v + 1);
for (let i = 1; i <= v; i++) set[i] = i;

let answer = 0;
for (let i = 0; i < tree.length; i++) {
  if (!findParent(set, tree[i][0], tree[i][1])) {
    answer += tree[i][2];
    union(set, tree[i][0], tree[i][1]);
  }
}
console.log(answer);